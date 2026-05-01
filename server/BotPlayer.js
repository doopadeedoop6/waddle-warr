import { ServerPlayer } from './ServerPlayer.js';

// ── Tuning ────────────────────────────────────────────────────────────────────
const BOT_ROAM_SPEED   = 3.2;
const BOT_CHASE_SPEED  = 5.5;
const BOT_ATTACK_RANGE = 3.2;   // must be ≤ MELEE_RANGE (3.5) in GameRoom
const BOT_SIGHT_RANGE  = 60;
const BOT_THROW_RANGE  = 30;
const MELEE_COOLDOWN   = 3.2;
const THROW_COOLDOWN   = 3.0;
const CHARGE_DURATION  = 0.55;  // seconds spent visually charging before throw fires
const DIR_CHANGE_MIN   = 2.0;
const DIR_CHANGE_MAX   = 4.5;
const STRAFE_FREQ      = 0.9;   // strafe cycles per second while chasing
const STRAFE_AMP       = 0.38;  // how wide the strafe arc is (0=beeline, 1=very wide)

// Minimal angle lerp that handles wrap-around
function lerpAngle(a, b, t) {
  let d = ((b - a) % (Math.PI * 2) + Math.PI * 3) % (Math.PI * 2) - Math.PI;
  return a + d * Math.min(1, t);
}

export class BotPlayer extends ServerPlayer {
  constructor(id, username, color, spawnPosition, spawnIndex) {
    super(id, username, color, spawnPosition, spawnIndex);
    this.isBot = true;

    // State machine
    this._state       = 'roam';
    this._target      = null;

    // Roam
    this._roamDirX    = 0;
    this._roamDirZ    = 0;
    this._dirTimer    = 0;

    // Charge-throw phase
    this._chargeTimer = 0;
    this._chargeTarget = null;

    // Smooth rotation
    this._yaw         = Math.random() * Math.PI * 2;

    // Strafing
    this._strafePhase = Math.random() * Math.PI * 2;

    // Per-bot personality: speed & aggression vary slightly so bots don't feel identical
    this._personality  = 0.85 + Math.random() * 0.3;

    // Stagger initial cooldowns so 15 bots don't all attack at second 0
    this._meleeCooldown = 2 + Math.random() * 4;
    this._throwCooldown = 1 + Math.random() * 3;

    this._randomizeDir();
  }

  _randomizeDir() {
    const angle      = Math.random() * Math.PI * 2;
    this._roamDirX   = Math.cos(angle);
    this._roamDirZ   = Math.sin(angle);
    this._dirTimer   = DIR_CHANGE_MIN + Math.random() * (DIR_CHANGE_MAX - DIR_CHANGE_MIN);
  }

  /**
   * Called every server tick by GameRoom.
   * @returns {{ position, velocity, meleeTarget: string|null, throwTarget: string|null }}
   */
  think(players, delta, mapHalf = 200) {
    if (!this.alive) {
      this.charging     = false;
      this.chargeAmount = 0;
      this.isSliding    = false;
      return { position: this.position, velocity: this.velocity, meleeTarget: null, throwTarget: null };
    }

    this._meleeCooldown = Math.max(0, this._meleeCooldown - delta);
    this._throwCooldown = Math.max(0, this._throwCooldown - delta);

    // ── Find nearest alive target ─────────────────────────────────────────────
    let nearestDist = Infinity;
    let nearestId   = null;
    let targetVx    = 0;
    let targetVz    = 0;

    for (const [id, p] of players) {
      if (id === this.id || !p.alive) continue;
      const dx = p.position.x - this.position.x;
      const dz = p.position.z - this.position.z;
      const d  = Math.sqrt(dx * dx + dz * dz);
      if (d < nearestDist) {
        nearestDist = d;
        nearestId   = id;
        targetVx    = p.velocity?.x ?? 0;
        targetVz    = p.velocity?.z ?? 0;
      }
    }

    // ── CHARGE phase: bot stands still, builds up chargeAmount, then fires ────
    if (this._state === 'charge') {
      this._chargeTimer -= delta;
      this.charging     = true;
      this.chargeAmount = Math.min(1, 1 - this._chargeTimer / CHARGE_DURATION);

      // Face the charge target while winding up
      const ct = this._chargeTarget ? players.get(this._chargeTarget) : null;
      if (ct) {
        const dx = ct.position.x - this.position.x;
        const dz = ct.position.z - this.position.z;
        const θ  = Math.atan2(-dz, dx);
        this._yaw = lerpAngle(this._yaw, θ, 12 * delta);
        this.quaternion = { x: 0, y: Math.sin(this._yaw / 2), z: 0, w: Math.cos(this._yaw / 2) };
      }

      // Stand still during charge
      this.velocity.x = 0;
      this.velocity.y = 0;
      this.velocity.z = 0;
      this.isSliding  = false;

      if (this._chargeTimer <= 0) {
        // ── Fire! ──────────────────────────────────────────────────────────────
        const thrownTarget    = this._chargeTarget;
        this.charging         = false;
        this.chargeAmount     = 0;
        this._throwCooldown   = THROW_COOLDOWN;
        this._chargeTarget    = null;

        // Transition back
        if (nearestId !== null && nearestDist < BOT_SIGHT_RANGE) {
          this._target = nearestId;
          this._state  = nearestDist <= BOT_ATTACK_RANGE ? 'attack' : 'chase';
        } else {
          this._target = null;
          this._state  = 'roam';
        }

        return {
          position: this.position,
          velocity: this.velocity,
          meleeTarget: null,
          throwTarget: thrownTarget,
        };
      }

      return { position: this.position, velocity: this.velocity, meleeTarget: null, throwTarget: null };
    }

    // ── Normal state transitions ──────────────────────────────────────────────
    this.charging     = false;
    this.chargeAmount = 0;

    if (nearestId !== null && nearestDist < BOT_SIGHT_RANGE) {
      this._target = nearestId;
      this._state  = nearestDist <= BOT_ATTACK_RANGE ? 'attack' : 'chase';
    } else {
      this._target = null;
      this._state  = 'roam';
    }

    this._dirTimer -= delta;
    if (this._dirTimer <= 0) this._randomizeDir();

    // ── Melee decision ────────────────────────────────────────────────────────
    let meleeTarget = null;
    if (this._state === 'attack' && this._meleeCooldown <= 0) {
      meleeTarget         = this._target;
      this._meleeCooldown = MELEE_COOLDOWN;
    }

    // ── Initiate charge if throw is ready ─────────────────────────────────────
    if ((this._state === 'chase' || this._state === 'attack') &&
        nearestDist <= BOT_THROW_RANGE && this._throwCooldown <= 0) {
      this._state        = 'charge';
      this._chargeTimer  = CHARGE_DURATION;
      this._chargeTarget = this._target;
      this.charging      = true;
      this.chargeAmount  = 0;
      this.velocity.x    = 0;
      this.velocity.y    = 0;
      this.velocity.z    = 0;
      this.isSliding     = false;
      return { position: this.position, velocity: this.velocity, meleeTarget, throwTarget: null };
    }

    // ── Movement ──────────────────────────────────────────────────────────────
    let vx = 0, vz = 0;
    let speed      = BOT_ROAM_SPEED * this._personality;
    let targetYaw  = this._yaw;

    if (this._state === 'chase' || this._state === 'attack') {
      const target = players.get(this._target);
      if (target) {
        // Lead the target slightly: project where they'll be in ~half-second
        const leadTime = Math.min(0.5, nearestDist / 18);
        const aimX     = target.position.x + targetVx * leadTime;
        const aimZ     = target.position.z + targetVz * leadTime;

        const dx  = aimX - this.position.x;
        const dz  = aimZ - this.position.z;
        const len = Math.sqrt(dx * dx + dz * dz) || 1;

        // Strafe: oscillate perpendicular to approach so bots aren't robotic beelines
        this._strafePhase += delta * STRAFE_FREQ * Math.PI * 2;
        const strafeAmt = Math.sin(this._strafePhase) * STRAFE_AMP;
        const perpX     = -dz / len;  // perpendicular unit vector
        const perpZ     =  dx / len;

        vx = dx / len + perpX * strafeAmt;
        vz = dz / len + perpZ * strafeAmt;
        const vLen = Math.sqrt(vx * vx + vz * vz) || 1;
        vx /= vLen;
        vz /= vLen;

        // Slow down when about to enter melee range so bot doesn't overshoot
        const approachFactor = nearestDist < 6 ? 0.6 : 1.0;
        speed = BOT_CHASE_SPEED * this._personality * approachFactor;
        targetYaw = Math.atan2(-vz, vx);
      }
    } else {
      // Roam — nudge gently back toward arena center when near edges
      const edgeThreshold = mapHalf * 0.7;
      if (Math.abs(this.position.x) > edgeThreshold || Math.abs(this.position.z) > edgeThreshold) {
        const pull  = 0.2;
        const cx    = -this.position.x;
        const cz    = -this.position.z;
        const cLen  = Math.sqrt(cx * cx + cz * cz) || 1;
        this._roamDirX = this._roamDirX * (1 - pull) + (cx / cLen) * pull;
        this._roamDirZ = this._roamDirZ * (1 - pull) + (cz / cLen) * pull;
        const rLen = Math.sqrt(this._roamDirX ** 2 + this._roamDirZ ** 2) || 1;
        this._roamDirX /= rLen;
        this._roamDirZ /= rLen;
      }
      vx        = this._roamDirX;
      vz        = this._roamDirZ;
      targetYaw = Math.atan2(-vz, vx);
    }

    this.velocity.x = vx * speed;
    this.velocity.y = 0;
    this.velocity.z = vz * speed;

    const nx = Math.max(-mapHalf, Math.min(mapHalf, this.position.x + this.velocity.x * delta));
    const nz = Math.max(-mapHalf, Math.min(mapHalf, this.position.z + this.velocity.z * delta));

    // Bounce roaming bots off walls
    if (this._state === 'roam') {
      if (nx <= -mapHalf || nx >= mapHalf) { this._roamDirX *= -1; this._dirTimer = DIR_CHANGE_MIN; }
      if (nz <= -mapHalf || nz >= mapHalf) { this._roamDirZ *= -1; this._dirTimer = DIR_CHANGE_MIN; }
    }

    this.position.x = nx;
    this.position.z = nz;

    // Smooth yaw rotation — bots turn gradually instead of snapping
    this._yaw = lerpAngle(this._yaw, targetYaw, 8 * delta);
    this.quaternion = { x: 0, y: Math.sin(this._yaw / 2), z: 0, w: Math.cos(this._yaw / 2) };

    // Slide pose only during close melee attack
    this.isSliding = (this._state === 'attack');

    return { position: this.position, velocity: this.velocity, meleeTarget, throwTarget: null };
  }
}
