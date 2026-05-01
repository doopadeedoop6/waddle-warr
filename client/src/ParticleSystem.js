import * as THREE from 'three';

const POOL_SIZE = 400;
const HIDE_Y    = -99999;

const VERTEX_SHADER = /* glsl */`
  attribute float pSize;
  attribute vec3  color;
  varying   vec3  vColor;
  void main() {
    vColor = color;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = pSize * (250.0 / -mv.z);
    gl_Position  = projectionMatrix * mv;
  }
`;

const FRAGMENT_SHADER = /* glsl */`
  varying vec3 vColor;
  void main() {
    vec2  uv = gl_PointCoord - vec2(0.5);
    float d  = length(uv);
    if (d > 0.5) discard;
    float a = 1.0 - smoothstep(0.2, 0.5, d);
    gl_FragColor = vec4(vColor, a);
  }
`;

export class ParticleSystem {
  constructor(scene) {
    this._scene = scene;

    this._particles = Array.from({ length: POOL_SIZE }, () => ({
      active:  false,
      position: new THREE.Vector3(),
      velocity: new THREE.Vector3(),
      life:    0,
      maxLife: 1,
      baseR: 1, baseG: 1, baseB: 1,
      size: 1.5,
    }));

    this._positions = new Float32Array(POOL_SIZE * 3);
    this._colors    = new Float32Array(POOL_SIZE * 3);
    this._sizes     = new Float32Array(POOL_SIZE);

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this._positions, 3));
    geo.setAttribute('color',    new THREE.BufferAttribute(this._colors,    3));
    geo.setAttribute('pSize',    new THREE.BufferAttribute(this._sizes,     1));

    const mat = new THREE.ShaderMaterial({
      vertexShader:   VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      transparent:    true,
      depthWrite:     false,
      blending:       THREE.AdditiveBlending,
    });

    this._points = new THREE.Points(geo, mat);
    this._points.frustumCulled = false;
    scene.add(this._points);
  }

  /**
   * Emit particles from a position.
   * @param {THREE.Vector3} position
   * @param {THREE.Vector3} direction  normalised direction
   * @param {THREE.Color|number} color
   * @param {number} count
   * @param {number} speed
   * @param {number} spreadDeg
   * @param {number} size  visual size (1.5 = small trail, 4.0 = big splat)
   */
  emit(position, direction, color, count, speed, spreadDeg, size = 1.5) {
    const col = color instanceof THREE.Color ? color : new THREE.Color(color);
    const dir = direction.clone().normalize();
    if (dir.lengthSq() < 0.001) dir.set(0, 1, 0);
    const spreadRad = (spreadDeg * Math.PI) / 180;

    let spawned = 0;
    for (let i = 0; i < POOL_SIZE && spawned < count; i++) {
      const p = this._particles[i];
      if (p.active) continue;

      p.active = true;
      p.position.copy(position);
      p.life    = 0.22 + Math.random() * 0.50;
      p.maxLife = p.life;
      p.size    = size * (0.65 + Math.random() * 0.70);

      const theta  = Math.random() * Math.PI * 2;
      const phi    = Math.random() * spreadRad;
      const spread = new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(phi),
      );
      const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
      spread.applyQuaternion(q);

      p.velocity.copy(spread).multiplyScalar(speed * (0.65 + Math.random() * 0.70));
      p.baseR = col.r; p.baseG = col.g; p.baseB = col.b;

      spawned++;
    }
  }

  update(delta) {
    const posAttr  = this._points.geometry.attributes.position;
    const sizeAttr = this._points.geometry.attributes.pSize;
    const colAttr  = this._points.geometry.attributes.color;

    for (let i = 0; i < POOL_SIZE; i++) {
      const p    = this._particles[i];
      const base = i * 3;

      if (!p.active) {
        this._positions[base + 1] = HIDE_Y;
        this._sizes[i]            = 0;
        continue;
      }

      p.life -= delta;
      if (p.life <= 0) {
        p.active              = false;
        this._positions[base + 1] = HIDE_Y;
        this._sizes[i]            = 0;
        continue;
      }

      p.position.addScaledVector(p.velocity, delta);
      p.velocity.multiplyScalar(0.88);   // drag
      p.velocity.y -= 14 * delta;        // gravity arc

      this._positions[base]     = p.position.x;
      this._positions[base + 1] = p.position.y;
      this._positions[base + 2] = p.position.z;

      const t = Math.max(0, p.life / p.maxLife);
      this._colors[base]     = p.baseR * t;
      this._colors[base + 1] = p.baseG * t;
      this._colors[base + 2] = p.baseB * t;
      this._sizes[i]         = p.size * t;
    }

    posAttr.needsUpdate  = true;
    sizeAttr.needsUpdate = true;
    colAttr.needsUpdate  = true;
  }
}
