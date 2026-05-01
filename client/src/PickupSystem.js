import * as THREE from 'three';

const PICKUP_RADIUS   = 2.2;    // collect distance (units)
const RESPAWN_SECS    = 15;     // seconds before pickup reappears
const AMMO_PER_PICKUP = 20;     // ammo given per collect

// Pickup positions per map — placed near bridges, corners, and high platform
const POSITIONS = {
  ice_planet: [
    { x:   0, y: 1.5, z: -70 },  // approach to north bridge
    { x:   0, y: 1.5, z:  70 },  // approach to south bridge
    { x: -70, y: 1.5, z:   0 },  // approach to west bridge
    { x:  70, y: 1.5, z:   0 },  // approach to east bridge
    { x:  38, y: 4.5, z: -38 },  // NE raised corner (top at y=3)
    { x: -38, y: 4.5, z:  38 },  // SW raised corner
    { x:  38, y: 4.5, z:  38 },  // SE raised corner
    { x:   0, y: 5.5, z:   0 },  // center high platform (top at y=4)
  ],
  arena: [
    { x:  45, y: 1.5, z:   0 },
    { x: -45, y: 1.5, z:   0 },
    { x:   0, y: 1.5, z:  45 },
    { x:   0, y: 1.5, z: -45 },
    { x:   0, y: 1.5, z:   0 },
  ],
  glacier_canyon: [
    { x:  30, y: 1.5, z:   0 },
    { x: -30, y: 1.5, z:   0 },
    { x:   0, y: 1.5, z:  30 },
    { x:   0, y: 1.5, z: -30 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
class SnowCache {
  constructor(scene, x, y, z, id) {
    this._scene = scene;
    this.id     = id;
    this.pos    = new THREE.Vector3(x, y, z);
    this.active = true;
    this._t     = Math.random() * Math.PI * 2; // phase offset so they don't all pulse in sync
    this._respawnTimer = 0;
    this._build();
  }

  _build() {
    this.group = new THREE.Group();
    this.group.position.copy(this.pos);

    // ── Main snowball (the pickup orb) ──
    const ballGeo = new THREE.SphereGeometry(0.32, 16, 12);
    const ballMat = new THREE.MeshPhysicalMaterial({
      color:             0xCCE8FF,
      emissive:          new THREE.Color(0x2277CC),
      emissiveIntensity: 0.7,
      roughness:         0.5,
      metalness:         0.0,
      transparent:       true,
      opacity:           0.92,
    });
    this._ball = new THREE.Mesh(ballGeo, ballMat);
    this._ball.position.y = 0.6;
    this.group.add(this._ball);

    // ── Inner glow core ──
    const coreGeo = new THREE.SphereGeometry(0.15, 12, 8);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x88CCFF, transparent: true, opacity: 0.6 });
    this._core = new THREE.Mesh(coreGeo, coreMat);
    this._core.position.y = 0.6;
    this.group.add(this._core);

    // ── Ground ring ──
    const ringGeo = new THREE.RingGeometry(0.42, 0.60, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color:       0x44AAFF,
      transparent: true,
      opacity:     0.55,
      side:        THREE.DoubleSide,
      depthWrite:  false,
    });
    this._ring = new THREE.Mesh(ringGeo, ringMat);
    this._ring.rotation.x = -Math.PI / 2;
    this._ring.position.y = 0.04;
    this.group.add(this._ring);

    // ── Outer pulse ring (expands outward) ──
    const pulse2Geo = new THREE.RingGeometry(0.55, 0.68, 32);
    const pulse2Mat = new THREE.MeshBasicMaterial({
      color:       0x88CCFF,
      transparent: true,
      opacity:     0.25,
      side:        THREE.DoubleSide,
      depthWrite:  false,
    });
    this._pulseRing = new THREE.Mesh(pulse2Geo, pulse2Mat);
    this._pulseRing.rotation.x = -Math.PI / 2;
    this._pulseRing.position.y = 0.04;
    this.group.add(this._pulseRing);

    // ── Soft point light ──
    this._light = new THREE.PointLight(0x44AAFF, 1.2, 6);
    this._light.position.y = 0.8;
    this.group.add(this._light);

    this._scene.add(this.group);
  }

  update(delta) {
    this._t += delta;

    if (!this.active) {
      this._respawnTimer -= delta;
      if (this._respawnTimer <= 0) this._activate();
      return;
    }

    // Float bob
    this._ball.position.y = 0.6 + Math.sin(this._t * 2.2) * 0.13;
    this._core.position.y = this._ball.position.y;

    // Rotate orb
    this._ball.rotation.y += delta * 1.8;
    this._core.rotation.y -= delta * 2.5;

    // Pulse emissive
    const glow = 0.55 + Math.sin(this._t * 3.0) * 0.25;
    this._ball.material.emissiveIntensity = glow;
    this._light.intensity = glow * 1.5;

    // Ground ring pulse
    const ringPulse = 0.4 + Math.sin(this._t * 2.2) * 0.15;
    this._ring.material.opacity = ringPulse;

    // Outer ring expands and fades
    const expand = 1 + ((this._t * 0.5) % 1) * 0.4;
    this._pulseRing.scale.setScalar(expand);
    this._pulseRing.material.opacity = Math.max(0, 0.3 * (1 - ((this._t * 0.5) % 1)));
  }

  checkCollision(px, py, pz) {
    if (!this.active) return false;
    const dx = px - this.pos.x;
    const dy = py - this.pos.y;
    const dz = pz - this.pos.z;
    return dx*dx + dy*dy + dz*dz < PICKUP_RADIUS * PICKUP_RADIUS;
  }

  collect() {
    this.active            = false;
    this._respawnTimer     = RESPAWN_SECS;
    this.group.visible     = false;
  }

  _activate() {
    this.active        = true;
    this.group.visible = true;
    this._t            = Math.random() * Math.PI * 2;
  }

  dispose() {
    this._scene.remove(this.group);
    this.group.traverse(c => {
      if (c.isMesh) { c.geometry.dispose(); c.material.dispose(); }
    });
  }
}

// ─────────────────────────────────────────────────────────────────────────────
export class PickupSystem {
  constructor(scene, mapId) {
    this._scene   = scene;
    this._caches  = [];
    const list    = POSITIONS[mapId] ?? [];
    list.forEach((p, i) => this._caches.push(new SnowCache(scene, p.x, p.y, p.z, i)));
  }

  /**
   * Call every frame.
   * @param {number} delta
   * @param {THREE.Vector3} playerPos  — player body center
   * @param {Function} onCollect       — callback(ammo: number) when player picks up
   */
  update(delta, playerPos, onCollect) {
    for (const cache of this._caches) {
      cache.update(delta);
      if (cache.active && cache.checkCollision(playerPos.x, playerPos.y, playerPos.z)) {
        cache.collect();
        if (onCollect) onCollect(AMMO_PER_PICKUP);
      }
    }
  }

  dispose() {
    this._caches.forEach(c => c.dispose());
    this._caches = [];
  }
}
