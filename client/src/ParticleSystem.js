import * as THREE from 'three';

const POOL_SIZE = 200;
const HIDE_POS = new THREE.Vector3(0, -99999, 0);

export class ParticleSystem {
  constructor(scene) {
    this._scene = scene;

    // --- Internal pool data ---
    this._particles = Array.from({ length: POOL_SIZE }, () => ({
      active: false,
      position: new THREE.Vector3(),
      velocity: new THREE.Vector3(),
      life: 0,
      maxLife: 1,
      baseR: 1, baseG: 1, baseB: 1, // original color for fade
    }));

    // --- Single Points draw call ---
    this._positions = new Float32Array(POOL_SIZE * 3);
    this._colors    = new Float32Array(POOL_SIZE * 3);

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this._positions, 3));
    geo.setAttribute('color',    new THREE.BufferAttribute(this._colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      sizeAttenuation: true,
      transparent: true,
      depthWrite: false,
    });

    this._points = new THREE.Points(geo, mat);
    this._points.frustumCulled = false;
    scene.add(this._points);
  }

  /**
   * Emit particles from a position in a direction with spread.
   * @param {THREE.Vector3} position
   * @param {THREE.Vector3} direction  (will be normalized)
   * @param {THREE.Color|number} color  THREE.Color or hex number
   * @param {number} count
   * @param {number} speed
   * @param {number} spreadDeg  spread angle in degrees
   */
  emit(position, direction, color, count, speed, spreadDeg) {
    const col = color instanceof THREE.Color ? color : new THREE.Color(color);
    const dir = direction.clone().normalize();
    const spreadRad = (spreadDeg * Math.PI) / 180;

    let spawned = 0;
    for (let i = 0; i < POOL_SIZE && spawned < count; i++) {
      const p = this._particles[i];
      if (p.active) continue;

      p.active = true;
      p.position.copy(position);
      p.life = 0.2 + Math.random() * 0.3; // 0.2–0.5s
      p.maxLife = p.life;

      // Random cone spread around dir
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.random() * spreadRad;
      const spread = new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(phi)
      );
      // Rotate spread to align with dir
      const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
      spread.applyQuaternion(q);

      p.velocity.copy(spread).multiplyScalar(speed * (0.7 + Math.random() * 0.6));

      // Store base color for fade
      p.baseR = col.r; p.baseG = col.g; p.baseB = col.b;

      spawned++;
    }
  }

  update(delta) {
    const posAttr = this._points.geometry.attributes.position;

    for (let i = 0; i < POOL_SIZE; i++) {
      const p = this._particles[i];
      const base = i * 3;

      if (!p.active) {
        this._positions[base]     = HIDE_POS.x;
        this._positions[base + 1] = HIDE_POS.y;
        this._positions[base + 2] = HIDE_POS.z;
        continue;
      }

      p.life -= delta;
      if (p.life <= 0) {
        p.active = false;
        this._positions[base]     = HIDE_POS.x;
        this._positions[base + 1] = HIDE_POS.y;
        this._positions[base + 2] = HIDE_POS.z;
        continue;
      }

      // Move
      p.position.addScaledVector(p.velocity, delta);
      // Velocity decay (ice/snow drag)
      p.velocity.multiplyScalar(0.92);

      this._positions[base]     = p.position.x;
      this._positions[base + 1] = p.position.y;
      this._positions[base + 2] = p.position.z;

      // Fade color toward 0 as life runs out
      const t = Math.max(0, p.life / p.maxLife);
      this._colors[base]     = p.baseR * t;
      this._colors[base + 1] = p.baseG * t;
      this._colors[base + 2] = p.baseB * t;
    }

    posAttr.needsUpdate = true;
    this._points.geometry.attributes.color.needsUpdate = true;
  }
}
