import * as THREE from 'three';

export class BaseMap {
  constructor(config) {
    if (!config) throw new Error('BaseMap requires a config object');
    this.config = config;
    this._sceneObjects = [];
  }

  // --- Data accessors (single source of truth from config) ---
  get id()            { return this.config.id; }
  get displayName()   { return this.config.displayName; }
  get groundY()       { return this.config.groundY; }
  get mapHalf()       { return this.config.mapHalf; }
  get gravity()       { return new THREE.Vector3(...this.config.gravity); }
  get surfaceNormal() { return new THREE.Vector3(...this.config.surfaceNormal); }
  get spawnPoints()   { return this.config.spawnPoints.map(p => new THREE.Vector3(...p)); }
  get obstacles()     { return this.config.obstacles; }
  get visuals()       { return this.config.visuals; }

  // --- Lifecycle ---
  // physicsWorld is optional; when provided, subclass should also build physics bodies
  build(scene, physicsWorld = null) {
    throw new Error(`${this.constructor.name} must implement build(scene, physicsWorld)`);
  }

  dispose(scene) {
    for (const obj of this._sceneObjects) {
      scene.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
        else obj.material.dispose();
      }
    }
    this._sceneObjects = [];
  }

  update(_delta) {}

  _track(obj) {
    this._sceneObjects.push(obj);
    return obj;
  }

  _buildSkyAndLights(scene) {
    const v = this.visuals;
    scene.background = new THREE.Color(v.skyColor);
    scene.fog = new THREE.Fog(v.fogColor, v.fogNear, v.fogFar);

    const ambient = new THREE.AmbientLight(v.ambientColor, v.ambientIntensity);
    scene.add(ambient); this._track(ambient);

    const dir = new THREE.DirectionalLight(v.directionalColor, v.directionalIntensity);
    const dp = v.directionalPos ?? [200, 300, 100];
    dir.position.set(...dp);
    dir.castShadow = true;
    scene.add(dir); this._track(dir);

    const hemi = new THREE.HemisphereLight(v.hemisphereSkyColor, v.hemisphereGroundColor, v.hemisphereIntensity);
    scene.add(hemi); this._track(hemi);

    if (v.starCount > 0) {
      const positions = new Float32Array(v.starCount * 3);
      for (let i = 0; i < v.starCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 1000;
      }
      const geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.4, sizeAttenuation: true });
      const stars = new THREE.Points(geom, mat);
      scene.add(stars); this._track(stars);
    }
  }

  // Generic obstacle mesh builder — subclasses may override for custom styling.
  // Supports type:'box' (obs.size) and type:'cylinder' (obs.radius or obs.radiusTop/radiusBottom).
  _buildObstacleMeshes(scene) {
    const baseColor = this.visuals.groundColor;
    for (const obs of this.obstacles) {
      let mesh;
      if (obs.type === 'box') {
        const geom = new THREE.BoxGeometry(...obs.size);
        const mat  = new THREE.MeshStandardMaterial({ color: baseColor, roughness: 0.35, metalness: 0.1 });
        mesh = new THREE.Mesh(geom, mat);
      } else if (obs.type === 'cylinder') {
        const rTop    = obs.radiusTop    ?? obs.radius ?? 1;
        const rBottom = obs.radiusBottom ?? obs.radius ?? 1;
        const geom = new THREE.CylinderGeometry(rTop, rBottom, obs.height, obs.segs ?? 8);
        const mat  = new THREE.MeshStandardMaterial({ color: baseColor, roughness: 0.35, metalness: 0.1 });
        mesh = new THREE.Mesh(geom, mat);
      } else {
        console.warn(`[BaseMap] Unknown obstacle type: ${obs.type}`);
        continue;
      }
      mesh.position.set(...obs.pos);
      if (obs.rotation) mesh.rotation.set(...obs.rotation);
      mesh.castShadow    = true;
      mesh.receiveShadow = true;
      scene.add(mesh); this._track(mesh);
    }
  }
}
