import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { audio } from './AudioManager.js';

const SNOWBALL_POOL_SIZE = 50;
const SNOWBALL_SPEED     = 50;
const SNOWBALL_GRAVITY   = 0.8;
const SNOWBALL_LIFETIME  = 3;
const FIRE_COOLDOWN      = 0.5;
const RELOAD_TIME        = 2;
const MAG_SIZE           = 20;
const RESERVE_START      = 80;
const MELEE_COOLDOWN     = 1.5;

const MELEE_WINDUP  = 0.15;
const MELEE_HOLD    = 0.05;
const MELEE_RETURN  = 0.15;

// ── Charge system constants ──
const CHARGE_MAX        = 4.0;  // วินาทีที่บอลโตเต็มที่
const CHARGE_CRUSH_TIME = 6.0;  // วินาทีที่หิมะทับตัวเอง
const CHARGE_SCALE_RATE = 0.75; // scale ต่อวินาที (1 + timer * rate)

const SNOWBALL_DAMAGE     = 20;  // HP ต่อลูก (normal shot)
const SNOWBALL_DAMAGE_MAX = 80;  // cap สำหรับ charged shot ใหญ่สุด

export default class Weapon {
  constructor(scene, physicsWorld, player, thirdPersonCamera, particles, network = null, map = null) {
    this._scene     = scene;
    this._physics   = physicsWorld;
    this._player    = player;
    this._camera    = thirdPersonCamera;
    this._particles = particles;
    this._network      = network;
    this._map          = map;
    this._remotePlayers = []; // set จากภายนอกตอนมี multiplayer

    this._magazine    = MAG_SIZE;
    this._reserve     = RESERVE_START;
    this._reloading   = false;
    this._reloadTimer = 0;
    this._fireCooldown = 0;

    // ── Charge state ──
    this._isCharging  = false;
    this._chargeTimer = 0;
    this._crushed     = false;

    // ── Melee state ──
    this._meleeTimer    = 0;
    this._meleeState    = 'idle';
    this._meleeCooldown = 0;
    this._meleePending  = null;

    this._activeSnowballs = [];
    this._pool = [];

    // Single tracking light that follows the newest active snowball
    this._snowLight = new THREE.PointLight(0xffffff, 0, 18);
    this._scene.add(this._snowLight);

    this._buildPool();
    this._setupInput();
  }

  // ─── Pool ──────────────────────────────────────────────────────────────────

  _buildPool() {
    const geo = new THREE.SphereGeometry(0.25, 8, 8);
    for (let i = 0; i < SNOWBALL_POOL_SIZE; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color:            this._player.playerColor,
        emissive:         this._player.playerColor,
        emissiveIntensity: 0.55,
        roughness: 0.65,
        metalness: 0.05,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.visible = false;
      this._scene.add(mesh);

      const body = new CANNON.Body({
        mass: 0.01,
        shape: new CANNON.Sphere(0.25),
        linearDamping: 0,
        angularDamping: 1,
        collisionFilterGroup: 2,
        collisionFilterMask: 1,
      });
      body.sleep();
      this._physics.addBody(body);

      this._pool.push({ mesh, body, active: false, life: 0, scale: 1.0 });
    }
  }

  _getInactive() {
    return this._pool.find(s => !s.active) ?? null;
  }

  // ─── Input ─────────────────────────────────────────────────────────────────

  // ─── Input ─────────────────────────────────────────────────────────────────
  _setupInput() {
    document.addEventListener('mousedown', (e) => {
      if (e.button !== 0 || !document.pointerLockElement) return;
      if (this._player.isFallen || this._player._stunTimer > 0) return;
      if (this._meleeState !== 'idle') return;

      // บั๊กฟิกซ์: ถ้ากระสุนหมด ให้บังคับรีโหลดและห้ามชาร์จ
      if (this._magazine <= 0) {
        this._startReload();
        return;
      }

      this._isCharging  = true;
      this._chargeTimer = 0;
      this._crushed     = false;

      this._player.heldSnowball.visible = true;
      this._player.heldSnowball.scale.set(1, 1, 1);
    });

    document.addEventListener('mouseup', (e) => {
      if (e.button !== 0) return;
      if (this._isCharging) this._releaseCharge();
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === 'KeyR') this._startReload();
      if (e.code === 'KeyF') this.tryMelee(this._remotePlayers);
    });
  }

  // ─── Charge system ─────────────────────────────────────────────────────────

  _releaseCharge() {
    this._isCharging = false;
    this._player.heldSnowball.visible = false;
    this._player._flipR.rotation.x = 0;

    if (this._crushed) return;

    const scale = 1 + Math.min(this._chargeTimer, CHARGE_MAX) * CHARGE_SCALE_RATE;

    if (this._chargeTimer < 0.2) {
      // คลิกสั้น: bypass fireCooldown — รีเซ็ต cooldown เองเลย
      this._fireCooldown = 0;
      this.tryShoot(1.0);
    } else {
      this.tryShoot(scale);
    }
  }

  _selfCrush() {
    this._crushed     = true;
    this._isCharging  = false;
    this._player.heldSnowball.visible = false;
    this._player._flipR.rotation.x = 0;

    // เพนกวินล้มหน้าทิ่ม 3 วินาที
    this._player.isFallen   = true;
    this._player._fallTimer = 3.0;

    // หิมะก้อนยักษ์หล่นทับหัวตัวเอง
    const maxScale = 1 + CHARGE_MAX * CHARGE_SCALE_RATE;
    this.tryShoot(maxScale, true);
  }

 // ─── Shoot ─────────────────────────────────────────────────────────────────

  tryShoot(scale = 1.0, dropOnSelf = false) {
    if (this._reloading || this._fireCooldown > 0 || this._magazine <= 0) {
      if (this._magazine <= 0 && !this._reloading) this._startReload();
      return;
    }

    this._fireCooldown = FIRE_COOLDOWN;
    this._magazine--;

    const snowball = this._getInactive();
    if (!snowball) return;

    const forward  = this._camera.forward;
    const spawnPos = new THREE.Vector3();

    // ── ปรับขนาด mesh + physics shape ──
    const baseRadius = 0.25;
    const newRadius  = baseRadius * scale;

    snowball.mesh.scale.set(scale, scale, scale);
    snowball.scale = scale; // เก็บไว้คำนวณ damage ตอน hit

    // ── Collision listener: despawn ทันที + deal damage ──
    const onCollide = (e) => {
      if (!snowball.active) return;

      const hitBody = e.body;

      // ── ชน player ตัวเอง: ข้ามไป ──
      if (hitBody === this._player.body) return;

      // ── ชน remote player: deal damage ──
      const hitRemote = this._remotePlayers.find(rp => rp.body === hitBody);
      if (hitRemote) {
        const dmg = Math.min(SNOWBALL_DAMAGE_MAX, Math.round(SNOWBALL_DAMAGE * snowball.scale));
        hitRemote.hp = Math.max(0, (hitRemote.hp ?? 100) - dmg);
        if (this._network) this._network.sendHit(hitRemote.id, dmg);

        // splat effect สีผู้ยิง
        const hitPos = new THREE.Vector3(hitBody.position.x, hitBody.position.y, hitBody.position.z);
        this._particles.emit(hitPos, new THREE.Vector3(0, 1, 0), this._player.playerColor, 18, 8, 60, 4.5);
        this._particles.emit(hitPos, new THREE.Vector3(0, 1, 0), 0xffffff, 8, 5, 45, 2.5);

        const playerPos = new THREE.Vector3(this._player.body.position.x, this._player.body.position.y, this._player.body.position.z);
        const distRatio = 1 - Math.min(hitPos.distanceTo(playerPos) / 50, 1);
        audio.hitPlayer(distRatio);
      } else {
        audio.hitTerrain();
      }

      // ── ชน terrain/rock: snow splat ──
      const sbPos = new THREE.Vector3(snowball.body.position.x, snowball.body.position.y, snowball.body.position.z);
      const surfNormal = this._map ? this._map.surfaceNormal : new THREE.Vector3(0, 1, 0);
      this._particles.emit(sbPos, surfNormal, this._player.playerColor, 12, 6, 45, 3.5);
      this._particles.emit(sbPos, surfNormal, 0xffffff, 6, 4, 60, 2.0);

      // despawn ทันที
      snowball.body.removeEventListener('collide', onCollide);
      const idx = this._activeSnowballs.indexOf(snowball);
      if (idx !== -1) this._despawnSnowball(snowball, idx);
    };

    snowball.body.addEventListener('collide', onCollide);
    snowball._onCollide = onCollide; // เก็บ ref ไว้ remove ตอน despawn
    snowball.body.shapes.length = 0;
    snowball.body.shapeOffsets.length = 0;
    snowball.body.shapeOrientations.length = 0;
    snowball.body.addShape(new CANNON.Sphere(newRadius));
    snowball.body.mass = 0.01 * scale;
    snowball.body.updateMassProperties();

    snowball.body.wakeUp();

    let throwDir   = forward.clone();
    let throwSpeed = SNOWBALL_SPEED * (1.0 + (scale - 1) * 0.15);

    if (dropOnSelf) {
      const crushPos = new THREE.Vector3(
        this._player.body.position.x,
        this._player.body.position.y,
        this._player.body.position.z
      );
      const up = this._map ? this._map.surfaceNormal : new THREE.Vector3(0, 1, 0);
      crushPos.addScaledVector(up, 3.0);
      snowball.body.position.set(crushPos.x, crushPos.y, crushPos.z);
      snowball.body.velocity.set(0, 0, 0);
    } else {
      const bodyPos = new THREE.Vector3(
        this._player.body.position.x,
        this._player.body.position.y,
        this._player.body.position.z
      );
      const up = this._map ? this._map.surfaceNormal : new THREE.Vector3(0, 1, 0);
      spawnPos.copy(bodyPos)
        .addScaledVector(up, 0.5)
        .addScaledVector(forward, 1.2 + newRadius);

      snowball.body.position.set(spawnPos.x, spawnPos.y, spawnPos.z);
      throwDir = forward.clone();

      snowball.body.velocity.set(
        throwDir.x * throwSpeed,
        throwDir.y * throwSpeed,
        throwDir.z * throwSpeed
      );
    }

    snowball.mesh.visible = true;
    snowball.active = true;
    snowball.life   = SNOWBALL_LIFETIME;
    snowball.mesh.material.color.copy(this._player.playerColor);
    snowball.mesh.material.emissive.copy(this._player.playerColor);
    snowball.mesh.material.emissiveIntensity = 0.55;
    audio.shoot();

    this._activeSnowballs.push(snowball);

    // Broadcast projectile ให้ client อื่นเห็น
    if (this._network && !dropOnSelf) {
      const color = '#' + this._player.playerColor.getHexString();
      this._network.sendProjectile({
        position: { x: spawnPos.x, y: spawnPos.y, z: spawnPos.z },
        velocity: { x: throwDir.x * throwSpeed, y: throwDir.y * throwSpeed, z: throwDir.z * throwSpeed },
        scale,
        color,
        lifetime: SNOWBALL_LIFETIME,
      });
    }

    const particleCount = Math.floor(30 * scale);
    const emitPos = spawnPos.clone().addScaledVector(throwDir, 1.0);
    this._particles.emit(emitPos, throwDir, 0xffffff, particleCount, 8, 20);

    if (this._magazine === 0) this._startReload();
  }
  // ─── Reload ────────────────────────────────────────────────────────────────

  _startReload() {
    if (this._reloading || this._reserve <= 0 || this._magazine === MAG_SIZE) return;
    this._reloading   = true;
    this._reloadTimer = RELOAD_TIME;
  }

  _finishReload() {
    const needed = MAG_SIZE - this._magazine;
    const take   = Math.min(needed, this._reserve);
    this._magazine += take;
    this._reserve  -= take;
    this._reloading  = false;
  }

  // ─── Melee ─────────────────────────────────────────────────────────────────

  tryMelee(remotePlayers) {
    if (this._meleeState !== 'idle' || this._meleeCooldown > 0) return;
    this._meleeState    = 'windup';
    this._meleeTimer    = 0;
    this._meleeCooldown = MELEE_COOLDOWN;
    this._meleePending  = { remotePlayers, hitChecked: false };
    audio.meleeSwoosh();
  }

  _updateMelee(delta) {
    if (this._meleeState === 'idle') return;

    this._meleeTimer += delta;
    const flipR = this._player.rightFlipper;
    
    let leanPitch = 0; // ก้ม/เงย (Pitch)
    let leanRoll = 0;  // เอียงซ้าย/ขวา (Roll)

    if (this._meleeState === 'windup') {
      const t = Math.min(this._meleeTimer / MELEE_WINDUP, 1);
      
      // 1. จังหวะง้าง: ยกแขนขวาขึ้นสูงและกางออกไปข้างหลังกว้างๆ
      flipR.rotation.x = -t * 2.5;
      flipR.rotation.z = t * 1.0;
      
      // โน้มตัวไปข้างหลังและเอียงขวา เพื่อรวบรวมแรง (Wind up)
      leanPitch = -t * 0.3;
      leanRoll = -t * 0.4;

      if (t >= 1) { this._meleeState = 'hold'; this._meleeTimer = 0; }

    } else if (this._meleeState === 'hold') {
      const t = Math.min(this._meleeTimer / MELEE_HOLD, 1);
      
      // 2. จังหวะตบ!: สะบัดแขนพุ่งมาข้างหน้าและตบตวัดขวางลำตัวอย่างแรง
      flipR.rotation.x = -2.5 + (t * 3.5);
      flipR.rotation.z = 1.0 - (t * 1.5);
      
      // ทิ้งน้ำหนักตัว โน้มพุ่งมาข้างหน้าและเอียงกดลงซ้ายสุดแรงเกิด
      leanPitch = -0.3 + (t * 0.7);
      leanRoll = -0.4 + (t * 0.8);

      if (!this._meleePending.hitChecked && t >= 0.5) {
        this._meleePending.hitChecked = true;
        this._checkMeleeHit(this._meleePending.remotePlayers);
      }

      if (t >= 1) { this._meleeState = 'return'; this._meleeTimer = 0; }

    } else if (this._meleeState === 'return') {
      const t = Math.min(this._meleeTimer / MELEE_RETURN, 1);
      
      // 3. จังหวะดึงกลับ: คืนแขนและลำตัวกลับมาท่าสมดุล
      flipR.rotation.x = 1.0 * (1 - t);
      flipR.rotation.z = -0.5 * (1 - t);
      
      leanPitch = 0.4 * (1 - t);
      leanRoll = 0.4 * (1 - t);

      if (t >= 1) { this._meleeState = 'idle'; }
    }

    // นำค่าการโน้มตัว (Lean) ไปขยับโมเดลเพนกวิน
    if (leanPitch !== 0 || leanRoll !== 0) {
      // ยกเลิกการหมุนรอบตัวเอง (แกน Y) เปลี่ยนมาใช้แกน X (ก้มเงย) และ Z (เอียงข้าง) แทน
      // จะทำให้ดูเหมือนน้องทิ้งน้ำหนักตัวฟาดจริงๆ
      const leanQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(leanPitch, 0, leanRoll));
      this._player.group.quaternion.multiply(leanQuat);
    }
  }

  _checkMeleeHit(remotePlayers) {
    if (!remotePlayers || remotePlayers.length === 0) return;

    const playerPos = new THREE.Vector3(
      this._player.body.position.x,
      this._player.body.position.y,
      this._player.body.position.z
    );
    const up = this._map ? this._map.surfaceNormal : new THREE.Vector3(0, 1, 0);
    const worldUp = new THREE.Vector3(0, 1, 0);
    let ref = worldUp.clone().sub(up.clone().multiplyScalar(worldUp.dot(up)));
    if (ref.lengthSq() < 0.001) ref.set(1, 0, 0);
    ref.normalize();
    const yawQuat = new THREE.Quaternion().setFromAxisAngle(up, this._player._yaw);
    const forward = ref.clone().applyQuaternion(yawQuat);
    const hitCenter = playerPos.clone().addScaledVector(forward, 2);

    for (const rp of remotePlayers) {
      if (!rp.position) continue;
      if (hitCenter.distanceTo(rp.position) < 3.5) {
        const knockDir = rp.position.clone().sub(playerPos).normalize();
        this._particles.emit(rp.position, knockDir, 0xffff00, 10, 6, 30);
        if (this._network) this._network.sendMeleeHit(rp.id);
      }
    }
  }

  // ─── Update ────────────────────────────────────────────────────────────────

  update(delta) {
    this._fireCooldown  = Math.max(0, this._fireCooldown - delta);
    this._meleeCooldown = Math.max(0, this._meleeCooldown - delta);

    // ── ระบบชาร์จปั้นหิมะ ──
    if (this._isCharging) {
      this._chargeTimer += delta;

      // ยกแขนขวาขึ้นง้าง
      this._player._flipR.rotation.x = -Math.PI / 1.5;

      // ขยายขนาดลูกหิมะในมือ (โตสุดที่ 4 วิ)
      const scale = 1 + Math.min(this._chargeTimer, CHARGE_MAX) * CHARGE_SCALE_RATE;
      this._player.heldSnowball.scale.set(scale, scale, scale);

      // เกิน 8 วิ = หิมะทับตัวเอง
      if (this._chargeTimer >= CHARGE_CRUSH_TIME && !this._crushed) {
        this._selfCrush();
      }
    }

    // Reload timer
    if (this._reloading) {
      this._reloadTimer -= delta;
      if (this._reloadTimer <= 0) this._finishReload();
    }

    // Tracking glow light — follows newest active snowball
    if (this._activeSnowballs.length > 0) {
      const newest = this._activeSnowballs[this._activeSnowballs.length - 1];
      this._snowLight.position.copy(newest.mesh.position);
      this._snowLight.color.copy(this._player.playerColor);
      this._snowLight.intensity = 2.8 * newest.scale;
    } else {
      this._snowLight.intensity = 0;
    }

    // Melee animation
    this._updateMelee(delta);

    // Update active snowballs
    for (let i = this._activeSnowballs.length - 1; i >= 0; i--) {
      const sb = this._activeSnowballs[i];
      sb.life -= delta;

      sb.mesh.position.copy(sb.body.position);
      sb.mesh.quaternion.copy(sb.body.quaternion);
      if (sb.active) {
        // Comet trail — emit behind velocity direction
        const vel = new THREE.Vector3(sb.body.velocity.x, sb.body.velocity.y, sb.body.velocity.z);
        const speed = vel.length();
        if (speed > 1 && Math.random() > (0.35 / sb.mesh.scale.x)) {
          const trailDir = vel.clone().negate().normalize();
          this._particles.emit(
            sb.mesh.position.clone().addScaledVector(trailDir, 0.25 * sb.scale),
            trailDir,
            0xddeeff,
            Math.ceil(sb.scale),
            2.0,
            18,
            1.2 * sb.scale,
          );
        }
      }

      const pos  = new THREE.Vector3(sb.body.position.x, sb.body.position.y, sb.body.position.z);
      const gravStrength = 28 * SNOWBALL_GRAVITY * Math.max(0.3, 1.0 - (sb.scale - 1) * 0.15);
      const mass = sb.body.mass;
      sb.body.applyForce(
        new CANNON.Vec3(0, -gravStrength * mass, 0),
        new CANNON.Vec3(0, 0, 0)
      );
      

      // flat map: ground = Y=0, ใช้ distance จาก origin แทน pos.y เดี่ยวๆ
      // เผื่อเพนกวินยืนบน slope หรือ rock ที่สูงกว่า GROUND_Y
      // ── Remote player hit: distance check (remote มี body=null ไม่มี physics) ──
      if (!sb._hitRemote) {
        for (const rp of this._remotePlayers) {
          if (!rp.position) continue;
          const hitRadius = 1.2 * (sb.scale ?? 1);
          if (pos.distanceTo(rp.position) < hitRadius) {
            sb._hitRemote = true;
            const dmg = Math.min(SNOWBALL_DAMAGE_MAX, Math.round(SNOWBALL_DAMAGE * (sb.scale ?? 1)));
            if (this._network) this._network.sendHit(rp.id, dmg);
            this._particles.emit(pos, new THREE.Vector3(0,1,0), this._player.playerColor, 18, 8, 60, 4.5);
            this._particles.emit(pos, new THREE.Vector3(0,1,0), 0xffffff, 8, 5, 45, 2.5);
            const playerPos = new THREE.Vector3(this._player.body.position.x, this._player.body.position.y, this._player.body.position.z);
            const distRatio = 1 - Math.min(pos.distanceTo(playerPos) / 50, 1);
            audio.hitPlayer(distRatio);
            this._despawnSnowball(sb, i);
            break;
          }
        }
        if (!sb.active) continue; // despawn แล้ว ข้าม
      }

      const groundY   = this._map ? this._map.groundY : 0;
      const hitGround = pos.y < groundY + 0.3 && sb.life < SNOWBALL_LIFETIME - 0.1;
      if (hitGround || sb.life <= 0) {
        if (hitGround) {
          const surfNormal = this._map ? this._map.surfaceNormal : new THREE.Vector3(0, 1, 0);
          this._particles.emit(pos, surfNormal, this._player.playerColor, 12, 6, 45, 3.5);
          this._particles.emit(pos, surfNormal, 0xffffff, 6, 4, 60, 2.0);
          audio.hitTerrain();
        }
        this._despawnSnowball(sb, i);
      }
    }
  }

  _despawnSnowball(sb, idx) {
    // ถอด collision listener ก่อนเสมอ
    if (sb._onCollide) {
      sb.body.removeEventListener('collide', sb._onCollide);
      sb._onCollide = null;
    }

    sb.body.shapes.length = 0;
    sb.body.shapeOffsets.length = 0;
    sb.body.shapeOrientations.length = 0;
    sb.body.addShape(new CANNON.Sphere(0.25));
    sb.body.mass = 0.01;
    sb.body.updateMassProperties();

    sb.mesh.scale.set(1, 1, 1);
    sb.active       = false;
    sb._hitRemote   = false;
    sb.mesh.visible = false;
    sb.body.sleep();
    sb.body.position.set(0, -9999, 0);
    sb.body.velocity.set(0, 0, 0);
    this._activeSnowballs.splice(idx, 1);
  }

  // ─── Respawn / pickup helpers ──────────────────────────────────────────────

  /** Full ammo reset on respawn. */
  reset() {
    this._magazine    = MAG_SIZE;
    this._reserve     = RESERVE_START;
    this._reloading   = false;
    this._reloadTimer = 0;
    this._isCharging  = false;
    this._chargeTimer = 0;
    this._crushed     = false;
  }

  /** Add ammo from a pickup. Magazine fills first, then reserve. */
  addAmmo(amount) {
    const magNeed = MAG_SIZE - this._magazine;
    const toMag   = Math.min(magNeed, amount);
    this._magazine += toMag;
    this._reserve   = Math.min(RESERVE_START, this._reserve + (amount - toMag));
    if (this._reloading) { this._reloading = false; this._reloadTimer = 0; }
  }

  // ─── Getters ───────────────────────────────────────────────────────────────

  get ammo()        { return this._magazine; }
  get reserveAmmo() { return this._reserve; }
  get isReloading() { return this._reloading; }

  // ── NEW: Charge state for network broadcast (RemotePlayer renders this) ──
  get isCharging()   { return this._isCharging; }
  get chargeAmount() {
    // normalize 0..1 (full at CHARGE_MAX seconds = 4s)
    return Math.min(this._chargeTimer / 4.0, 1);
  }

  /** ส่ง array ของ remote player objects เข้ามา (แต่ละตัวต้องมี .body, .hp, .id) */
  set remotePlayers(arr) { this._remotePlayers = arr ?? []; }
}