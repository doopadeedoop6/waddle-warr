import * as THREE from 'three';

const PICKUP_RADIUS = 2.5;
const DROP_LIFETIME = 20;   // seconds before disappearing
const AMMO_AMOUNT   = 20;
const HP_AMOUNT     = 10;

class DeathDrop {
  constructor(scene, x, y, z, id) {
    this._scene = scene;
    this.id     = id;
    this.pos    = new THREE.Vector3(x, Math.max(y, 1.2), z);
    this.active = true;
    this._t     = Math.random() * Math.PI * 2;
    this._life  = DROP_LIFETIME;
    this._build();
  }

  _build() {
    this.group = new THREE.Group();
    this.group.position.copy(this.pos);

    // Main orb — warm gold
    const ballGeo = new THREE.SphereGeometry(0.30, 14, 10);
    const ballMat = new THREE.MeshPhysicalMaterial({
      color:             0xFFAA22,
      emissive:          new THREE.Color(0xCC5500),
      emissiveIntensity: 0.85,
      roughness:         0.35,
      metalness:         0.15,
      transparent:       true,
      opacity:           0.95,
    });
    this._ball = new THREE.Mesh(ballGeo, ballMat);
    this._ball.position.y = 0.5;
    this.group.add(this._ball);

    // Inner bright core
    const coreGeo = new THREE.SphereGeometry(0.13, 10, 7);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xFFEE88, transparent: true, opacity: 0.75 });
    this._core = new THREE.Mesh(coreGeo, coreMat);
    this._core.position.y = 0.5;
    this.group.add(this._core);

    // Ground ring
    const ringGeo = new THREE.RingGeometry(0.38, 0.54, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xFFAA22, transparent: true, opacity: 0.50,
      side: THREE.DoubleSide, depthWrite: false,
    });
    this._ring = new THREE.Mesh(ringGeo, ringMat);
    this._ring.rotation.x = -Math.PI / 2;
    this._ring.position.y = 0.04;
    this.group.add(this._ring);

    // Warm point light
    this._light = new THREE.PointLight(0xFF8800, 1.5, 7);
    this._light.position.y = 0.7;
    this.group.add(this._light);

    this._scene.add(this.group);
  }

  update(delta) {
    if (!this.active) return false;

    this._t    += delta;
    this._life -= delta;

    if (this._life <= 0) {
      this.dispose();
      return false;
    }

    // Fade out in last 5 s
    const fade = this._life < 5 ? this._life / 5 : 1;
    this._ball.material.opacity = 0.95 * fade;
    this._core.material.opacity = 0.75 * fade;
    this._light.intensity       = 0;   // reset, set below

    // Float bob
    const bobY = 0.5 + Math.sin(this._t * 2.1) * 0.13;
    this._ball.position.y = bobY;
    this._core.position.y = bobY;

    // Spin
    this._ball.rotation.y += delta * 2.4;
    this._core.rotation.y -= delta * 1.8;

    // Pulse emissive + light
    const glow = (0.65 + Math.sin(this._t * 2.8) * 0.25) * fade;
    this._ball.material.emissiveIntensity = glow;
    this._light.intensity = glow * 1.8;

    // Ring pulse
    this._ring.material.opacity = (0.35 + Math.sin(this._t * 2.1) * 0.15) * fade;

    return true;
  }

  checkCollision(px, py, pz) {
    if (!this.active) return false;
    const dx = px - this.pos.x;
    const dy = py - this.pos.y;
    const dz = pz - this.pos.z;
    return dx*dx + dy*dy + dz*dz < PICKUP_RADIUS * PICKUP_RADIUS;
  }

  collect() {
    this.active = false;
    this.dispose();
  }

  dispose() {
    this.active = false;
    this._scene.remove(this.group);
    this.group.traverse(c => {
      if (c.isMesh) { c.geometry.dispose(); c.material.dispose(); }
    });
  }
}

// ─────────────────────────────────────────────────────────────────────────────
export class DeathDropSystem {
  constructor(scene) {
    this._scene  = scene;
    this._drops  = [];
    this._nextId = 0;
  }

  spawnDrop(x, y, z) {
    this._drops.push(new DeathDrop(this._scene, x, y, z, this._nextId++));
  }

  /**
   * Call every frame.
   * @param {number} delta
   * @param {THREE.Vector3|CANNON.Vec3} playerPos
   * @param {Function} onCollect  — callback(ammo: number, hp: number)
   */
  update(delta, playerPos, onCollect) {
    for (let i = this._drops.length - 1; i >= 0; i--) {
      const drop = this._drops[i];
      if (!drop.update(delta)) {
        this._drops.splice(i, 1);
        continue;
      }
      if (drop.active && drop.checkCollision(playerPos.x, playerPos.y, playerPos.z)) {
        drop.collect();
        this._drops.splice(i, 1);
        if (onCollect) onCollect(AMMO_AMOUNT, HP_AMOUNT);
      }
    }
  }

  dispose() {
    this._drops.forEach(d => d.dispose());
    this._drops = [];
  }
}
