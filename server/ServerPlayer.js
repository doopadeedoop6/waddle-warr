const MAP_HALF = 200;
const GROUND_Y = 0;

export class ServerPlayer {
  constructor(id, username, color, spawnPosition, spawnIndex = 0) {
    this.id         = id;
    this.socketId   = id;
    this.username   = username;
    this.color      = color;
    this.hp         = 100;
    this.kills      = 0;
    this.alive      = true;
    this.spawnIndex = spawnIndex;
    this.position   = { x: spawnPosition.x, y: spawnPosition.y, z: spawnPosition.z };
    this.quaternion = { x: 0, y: 0, z: 0, w: 1 };
    this.velocity   = { x: 0, y: 0, z: 0 };

    // ── NEW: charging state ──
    this.charging     = false;
    this.chargeAmount = 0; // 0..1 (normalized)
  }

  /** Accept position/quaternion/velocity relayed from the client each frame. */
  applyClientState(input) {
    if (input.position) {
      const p = input.position;
      // Clamp to valid arena bounds
      this.position = {
        x: Math.max(-MAP_HALF, Math.min(MAP_HALF, p.x ?? this.position.x)),
        y: Math.max(GROUND_Y - 1,  p.y ?? this.position.y),
        z: Math.max(-MAP_HALF, Math.min(MAP_HALF, p.z ?? this.position.z)),
      };
    }
    if (input.quaternion) this.quaternion = input.quaternion;
    if (input.velocity)   this.velocity   = input.velocity;

    // ── NEW: charge state relay ──
    if (typeof input.charging === 'boolean') this.charging = input.charging;
    if (typeof input.chargeAmount === 'number') {
      this.chargeAmount = Math.max(0, Math.min(1, input.chargeAmount));
    }
  }

  /**
   * @param {number} amount
   * @param {string} attackerId
   * @param {string} method
   * @returns {{ died: boolean, attackerId, method }}
   */
  takeDamage(amount, attackerId, method) {
    if (!this.alive) return { died: false };
    this.hp = Math.max(0, this.hp - amount);
    if (this.hp <= 0) return { died: true, attackerId, method };
    return { died: false };
  }

  die()  { this.alive = false; }

  respawn(position) {
    this.hp           = 100;
    this.alive        = true;
    this.position     = { ...position };
    this.charging     = false;
    this.chargeAmount = 0;
  }

  getState() {
    return {
      id:           this.id,
      username:     this.username,
      color:        this.color,
      position:     this.position,
      quaternion:   this.quaternion,
      velocity:     this.velocity,
      hp:           this.hp,
      kills:        this.kills,
      alive:        this.alive,
      charging:     this.charging,      // NEW
      chargeAmount: this.chargeAmount,  // NEW
    };
  }
}