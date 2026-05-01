import * as CANNON from 'cannon-es';

const TICK_RATE = 1 / 50;

// ── friction / damping ──────────────────────────────────────────────────────
// ตรงนี้ต้องตรงกับ ICE_DAMPING ใน Player.js (0.88 ต่อ frame @ 60fps)
// linearDamping ของ cannon-es ทำงานเป็น exponential decay ต่อวินาที
// 0.88^60 ≈ 0.00055  →  damping ต่อวินาที ≈ 1 - 0.88^60 ≈ 0.9994
// ใช้ 0.85 เป็นค่า server damping (conservative — client apply เพิ่มอีกชั้น)
const SERVER_LINEAR_DAMPING = 0.4;

export class PhysicsWorld {
  constructor(mapLoader) {
    const gravity = mapLoader.gravity; // [x, y, z]

    this._mapLoader = mapLoader;
    this._world = new CANNON.World({
      gravity: new CANNON.Vec3(gravity[0], gravity[1], gravity[2]),
      broadphase: new CANNON.SAPBroadphase(),
      allowSleep: false,
    });

    this._playerMaterial = new CANNON.Material('player');
    this._groundMaterial = new CANNON.Material('ground');
    const contactMat = new CANNON.ContactMaterial(
      this._playerMaterial,
      this._groundMaterial,
      { friction: 0.3, restitution: 0.0 }
    );
    this._world.addContactMaterial(contactMat);
    this._world.defaultContactMaterial.friction    = 0.3;
    this._world.defaultContactMaterial.restitution = 0.0;

    // Ground plane (normal +Y)
    const ground = new CANNON.Body({ mass: 0 });
    ground.addShape(new CANNON.Plane());
    ground.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    ground.position.set(0, mapLoader.groundY, 0);
    ground.material            = this._groundMaterial;
    ground.collisionFilterGroup = 1;
    ground.collisionFilterMask  = -1;
    this._world.addBody(ground);

    // Obstacle physics bodies from map config
    this._obstacleBodies = mapLoader.buildObstacleBodies(this._world, this._groundMaterial);

    this._playerBodies = new Map(); // id → CANNON.Body
  }

  addPlayer(id, spawnPosition) {
    const body = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Sphere(0.9),
      linearDamping: SERVER_LINEAR_DAMPING,
      angularDamping: 1.0,
      collisionFilterGroup: 2,
      collisionFilterMask: -1,
      material: this._playerMaterial,
    });
    body.position.set(spawnPosition.x, spawnPosition.y, spawnPosition.z);
    this._playerBodies.set(id, body);
    this._world.addBody(body);
  }

  removePlayer(id) {
    const body = this._playerBodies.get(id);
    if (!body) return;
    this._world.removeBody(body);
    this._playerBodies.delete(id);
  }

  updatePlayerPosition(id, position, velocity) {
    const body = this._playerBodies.get(id);
    if (!body) return;
    const half     = this._mapLoader.mapHalf;
    const supportY = this._getSupportY(position.x, position.y, position.z);
    const minY     = supportY + 0.9;
    body.position.set(
      Math.max(-half, Math.min(half, position.x)),
      Math.max(minY, position.y),
      Math.max(-half, Math.min(half, position.z)),
    );
    body.velocity.set(velocity.x, velocity.y, velocity.z);
  }

  validateMelee(attackerId, targetId) {
    const attacker = this._playerBodies.get(attackerId);
    const target   = this._playerBodies.get(targetId);
    if (!attacker || !target) return { valid: false };

    const dx   = target.position.x - attacker.position.x;
    const dz   = target.position.z - attacker.position.z;
    const dist = Math.sqrt(dx * dx + dz * dz);

    if (dist > 3.5) return { valid: false };

    const knockbackDir = { x: dx, y: 0.3, z: dz };
    const len = Math.sqrt(knockbackDir.x ** 2 + knockbackDir.y ** 2 + knockbackDir.z ** 2);
    if (len > 0) {
      knockbackDir.x /= len;
      knockbackDir.y /= len;
      knockbackDir.z /= len;
    }

    return { valid: true, knockbackDir };
  }

  applyKnockback(targetId, knockbackDir, force = 8) {
    const body = this._playerBodies.get(targetId);
    if (!body) return;
    body.velocity.set(
      knockbackDir.x * force,
      knockbackDir.y * force,
      knockbackDir.z * force,
    );
  }

  step(delta) {
    this._world.step(TICK_RATE, delta, 8);

    for (const [, body] of this._playerBodies) {
      // Velocity cap prevents tunneling through thin walls at high speed
      const speed = Math.sqrt(body.velocity.x ** 2 + body.velocity.y ** 2 + body.velocity.z ** 2);
      if (speed > 25) {
        const s = 25 / speed;
        body.velocity.x *= s;
        body.velocity.y *= s;
        body.velocity.z *= s;
      }

      const supportY = this._getSupportY(body.position.x, body.position.y, body.position.z);
      const minY     = supportY + 0.9;
      if (body.position.y < minY) {
        body.position.y = minY;
        if (body.velocity.y < 0) body.velocity.y = 0;
      }
    }
  }

  /**
   * หา Y ของพื้นผิวใต้ผู้เล่น ณ ตำแหน่ง (px, pz)
   * ยิง ray จากเหนือหัวลงมา — ตรวจเจอ ramp/platform ที่ความสูงจริง ไม่ใช่แค่พื้นเหว
   */
  _getSupportY(px, py, pz) {
    const start  = new CANNON.Vec3(px, py + 50.0, pz);
    const end    = new CANNON.Vec3(px, this._mapLoader.groundY - 1, pz);
    const result = new CANNON.RaycastResult();
    // mask: 1 → only hit group-1 bodies (ground plane + obstacle bodies); player bodies are group 2
    this._world.raycastClosest(start, end, { collisionFilterMask: 1 }, result);
    return result.hasHit ? result.hitPointWorld.y : this._mapLoader.groundY;
  }

  getPlayerPositions() {
    const result = new Map();
    for (const [id, body] of this._playerBodies) {
      result.set(id, {
        position:   { x: body.position.x,  y: body.position.y,  z: body.position.z },
        quaternion: { x: body.quaternion.x, y: body.quaternion.y, z: body.quaternion.z, w: body.quaternion.w },
        velocity:   { x: body.velocity.x,  y: body.velocity.y,  z: body.velocity.z },
      });
    }
    return result;
  }
}