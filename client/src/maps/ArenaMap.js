// Map: "FPS Shooter Game Arena Map v3" by Heart State Games®
// https://sketchfab.com/3d-models/fps-shooter-game-arena-map-v3-3f19a978e64943d5af13d2dd8a747a91
// License: CC-BY-4.0

import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// ── Coordinate derivation ─────────────────────────────────────────────────────
// GLTF Sketchfab_model matrix: Blender Z-up → GLTF Y-up
//   world_x = local_x,  world_y = local_z,  world_z = −local_y
//
// Floor slab occupies local_z [0, 1] → world Y [0, 1] → after ×3 scale: Y [0, 3]
//   Walkable floor surface = top of slab = Y = 3  (GROUND_Y)
//   Interior elements rest on the slab top: local_z [1, 7] → world Y [3, 21]
//   Outer shell top: local_z [0, 11] → world Y [0, 33]
//
// ROOT_OFFSET centres the model: model XZ centre = (−15, −15) in intermediate
//   space → ROOT_OFFSET = −(−15, 0, −15) × 3 = (45, 0, 45)
//   Result: arena footprint X/Z ∈ [−45, +45]  (mapHalf = 45)

const ARENA_SCALE = 3.0;
const GROUND_Y    = 3;             // world Y of the walkable floor surface
const SPAWN_Y     = GROUND_Y + 2;  // = 5 — safely above the floor collision plane

const ROOT_OFFSET = new THREE.Vector3(45, 0, 45);

// ── Spawn points ──────────────────────────────────────────────────────────────
// Arena footprint ±45.  All spawns at ±30 or closer → minimum 15 units from
// any wall.  Two concentric rings so players spread across the entire arena.
export const SPAWN_POINTS = [
  // Inner ring — corners (±15)
  { x: -15, y: SPAWN_Y, z: -15 }, { x:  15, y: SPAWN_Y, z: -15 },
  { x: -15, y: SPAWN_Y, z:  15 }, { x:  15, y: SPAWN_Y, z:  15 },
  // Inner ring — cardinal (±15)
  { x: -15, y: SPAWN_Y, z:   0 }, { x:  15, y: SPAWN_Y, z:   0 },
  { x:   0, y: SPAWN_Y, z: -15 }, { x:   0, y: SPAWN_Y, z:  15 },
  // Outer ring — corners (±30)
  { x: -30, y: SPAWN_Y, z: -30 }, { x:  30, y: SPAWN_Y, z: -30 },
  { x: -30, y: SPAWN_Y, z:  30 }, { x:  30, y: SPAWN_Y, z:  30 },
  // Outer ring — cardinal (±30)
  { x: -30, y: SPAWN_Y, z:   0 }, { x:  30, y: SPAWN_Y, z:   0 },
  { x:   0, y: SPAWN_Y, z: -30 }, { x:   0, y: SPAWN_Y, z:  30 },
];

const SKY_COLOR = 0xc8dff0;
const FOG_COLOR = 0xc8dff0;

export class ArenaMap {
  constructor(_config) {
    this.groundY       = GROUND_Y;
    this.mapHalf       = 45;
    this.gravity       = new THREE.Vector3(0, -28, 0);
    this.surfaceNormal = new THREE.Vector3(0, 1, 0);
    this.spawnPoints   = SPAWN_POINTS.map(p => new THREE.Vector3(p.x, p.y, p.z));

    this._root       = null;
    this._envObjects = [];
    this._bodies     = [];
    this._snowGeo    = null;
    this._snowPoints = null;
    this._snowSpeeds = null;
  }

  // Returns a Promise so Game.js can await GLTF loading before spawning the player.
  async build(scene, physicsWorld) {
    this._buildEnvironment(scene);
    await this._loadGLTF(scene);
    if (physicsWorld) this._buildPhysics(physicsWorld);
  }

  // ── Step 1: sky, fog, lights, snowfall ─────────────────────────────────────
  _buildEnvironment(scene) {
    scene.background = new THREE.Color(SKY_COLOR);
    scene.fog        = new THREE.Fog(FOG_COLOR, 40, 140);

    const sun = new THREE.DirectionalLight(0xe0f0ff, 1.6);
    sun.position.set(-60, 100, 60);
    sun.castShadow              = true;
    sun.shadow.mapSize.width    = 2048;
    sun.shadow.mapSize.height   = 2048;
    sun.shadow.camera.near      = 1;
    sun.shadow.camera.far       = 280;
    sun.shadow.camera.left      = -60;
    sun.shadow.camera.right     =  60;
    sun.shadow.camera.top       =  60;
    sun.shadow.camera.bottom    = -60;
    sun.shadow.bias             = -0.001;
    scene.add(sun);
    this._envObjects.push(sun);

    const ambient = new THREE.AmbientLight(0xb8d4ee, 0.85);
    scene.add(ambient);
    this._envObjects.push(ambient);

    const hemi = new THREE.HemisphereLight(0x9ec8ee, 0x8899aa, 0.6);
    scene.add(hemi);
    this._envObjects.push(hemi);

    this._buildSnowfall(scene);
  }

  // ── Snowfall particle system ────────────────────────────────────────────────
  _buildSnowfall(scene) {
    const COUNT = 700;
    const RANGE = this.mapHalf + 8;
    const positions = new Float32Array(COUNT * 3);
    this._snowSpeeds = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * RANGE * 2;
      positions[i * 3 + 1] = Math.random() * 38;
      positions[i * 3 + 2] = (Math.random() - 0.5) * RANGE * 2;
      this._snowSpeeds[i]  = 1.8 + Math.random() * 2.2;
    }

    this._snowGeo = new THREE.BufferGeometry();
    this._snowGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color:           0xffffff,
      size:            0.28,
      sizeAttenuation: true,
      transparent:     true,
      opacity:         0.82,
      depthWrite:      false,
    });

    this._snowPoints = new THREE.Points(this._snowGeo, mat);
    this._snowPoints.frustumCulled = false;
    scene.add(this._snowPoints);
    this._envObjects.push(this._snowPoints);
  }

  // ── Step 2: load and dress the GLTF ────────────────────────────────────────
  async _loadGLTF(scene) {
    const loader = new GLTFLoader();
    const gltf = await new Promise((resolve, reject) => {
      loader.load('/assets/maps/arena/scene.gltf', resolve, undefined, reject);
    });

    const root = gltf.scene;
    root.position.copy(ROOT_OFFSET);
    root.scale.setScalar(ARENA_SCALE);

    root.traverse(child => {
      if (!child.isMesh) return;
      child.castShadow    = true;
      child.receiveShadow = true;
      child.frustumCulled = false;
      this._applySnowTheme(child);
    });

    scene.add(root);
    this._root = root;

    // Propagate all world matrices before physics traversal reads them.
    root.updateMatrixWorld(true);

    const aabb = new THREE.Box3().setFromObject(root);
    console.log('[ArenaMap] GLTF world bounds — min:', aabb.min, ' max:', aabb.max,
                ' (floor Y should equal', GROUND_Y, ')');
  }

  // ── Snow theme: strip orange, apply arctic cold palette ────────────────────
  _applySnowTheme(mesh) {
    const remat = (mat) => {
      if (!mat) return;
      const n = (mat.name || '').toLowerCase();
      if (n.includes('orange') || n.includes('playground')) {
        mat.map       = null;
        mat.color.setHex(0x7ab4d4);  // ice-blue
        mat.roughness = 0.40;
        mat.metalness = 0.12;
      } else if (n.includes('grey') || n.includes('gray')) {
        mat.color.setHex(0xe8f4ff);  // snow-white tint
        mat.roughness = 0.88;
        mat.metalness = 0.00;
      } else {
        mat.map       = null;
        mat.color.setHex(0xf0f8ff);  // clean white
        mat.roughness = 0.85;
        mat.metalness = 0.00;
      }
      mat.needsUpdate = true;
    };
    if (Array.isArray(mesh.material)) mesh.material.forEach(remat);
    else remat(mesh.material);
  }

  // ── Step 3: Cannon-ES physics ───────────────────────────────────────────────
  //
  // Three layers — same pattern as IcePlanet:
  //   A) Infinite ground plane at GROUND_Y (cannot be tunnelled through)
  //   B) Explicit perimeter walls — 8 units thick, 40 units tall, corners filled
  //   C) Per-mesh GLTF colliders for interior structures only
  //
  _buildPhysics(physicsWorld) {
    const H  = this.mapHalf;  // 45
    const GY = this.groundY;  // 3

    // ── A) Ground plane ────────────────────────────────────────────────────────
    // Infinite CANNON.Plane at GY — identical to IcePlanet, cannot be fallen through.
    {
      const body = new CANNON.Body({ mass: 0 });
      body.addShape(new CANNON.Plane());
      body.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
      body.position.set(0, GY, 0);
      physicsWorld.addBody(body);
      this._bodies.push(body);
    }

    // ── B) Perimeter walls ────────────────────────────────────────────────────
    //
    // Design (matches IcePlanet's explicit CANNON.Body approach):
    //
    //   Thickness : 8 units  (half = 4)   → fast players cannot tunnel through
    //   Height    : 40 units (half = 20)  → covers visual wall (33 u) + headroom
    //   Inner face: ±H = ±45              → aligns with visual wall surface
    //   Centre    : ±(H + 4) = ±49        → 4 inside wall + 4 outside wall
    //
    //   N and S walls use half-span = H + 4 = 49 along their long axis.
    //   This is wider than the arena so they overlap the E/W walls at all four
    //   corners — no gap for players to slip through.
    //
    //   Wall bodies run from GY to GY+40 (Y = 3 → 43).
    //   wallCY = GY + WALL_HH = 3 + 20 = 23.
    //
    const WALL_HD   = 4;              // half-depth  (8 units total)
    const WALL_HH   = 20;             // half-height (40 units total)
    const WALL_SPAN = H + WALL_HD;    // = 49 — long-axis half covering corners
    const wallCY    = GY + WALL_HH;   // = 23

    // [cx, cz, hx, hz]
    for (const [cx, cz, hx, hz] of [
      [            0, -(H + WALL_HD),  WALL_SPAN,  WALL_HD ],  // north
      [            0,  (H + WALL_HD),  WALL_SPAN,  WALL_HD ],  // south
      [ -(H + WALL_HD),           0,   WALL_HD, WALL_SPAN  ],  // west
      [  (H + WALL_HD),           0,   WALL_HD, WALL_SPAN  ],  // east
    ]) {
      const body = new CANNON.Body({ mass: 0 });
      body.addShape(new CANNON.Box(new CANNON.Vec3(hx, WALL_HH, hz)));
      body.position.set(cx, wallCY, cz);
      physicsWorld.addBody(body);
      this._bodies.push(body);
    }

    // ── C) Per-mesh GLTF colliders (interior structures only) ─────────────────
    //
    // Uses geometry-level local bounding box + world-transform decomposition.
    //
    //   WHY NOT Box3.setFromObject():
    //     Box3.setFromObject returns an axis-aligned box in WORLD space.
    //     For a rotated mesh this bloats to a huge diagonal wrapper, misaligning
    //     the collider from the visual geometry.
    //
    //   CORRECT technique:
    //     1. geometry.computeBoundingBox()     → LOCAL tight box, pre-rotation
    //     2. matrixWorld.decompose()           → worldPos / worldQuat / worldScale
    //     3. halfExtents = localSize × |worldScale| / 2
    //     4. body.quaternion = worldQuat       → body rotates with the mesh
    //     5. body.position = localCenter.applyMatrix4(matrixWorld)
    //                        → exact world-space centre of the geometry
    //
    //   FILTER — skip outer-shell meshes:
    //     Any mesh whose scaled half-extents exceed 80 % of mapHalf (= 36) in
    //     BOTH X and Z is the structural shell (floor slab, roof, full-span wall).
    //     These are already handled by the ground plane + perimeter walls.
    //     Interior props (pillars, boxes, ramps) are all smaller than this.
    //
    if (!this._root) return;

    let count = 0;
    this._root.traverse(child => {
      if (!child.isMesh || !child.geometry) return;   // skip non-geometry nodes

      child.updateWorldMatrix(true, false);

      const worldPos   = new THREE.Vector3();
      const worldQuat  = new THREE.Quaternion();
      const worldScale = new THREE.Vector3();
      child.matrixWorld.decompose(worldPos, worldQuat, worldScale);

      child.geometry.computeBoundingBox();
      const localBox = child.geometry.boundingBox;
      if (!localBox) return;

      const localSize = localBox.getSize(new THREE.Vector3());
      const hx = (localSize.x * Math.abs(worldScale.x)) / 2;
      const hy = (localSize.y * Math.abs(worldScale.y)) / 2;
      const hz = (localSize.z * Math.abs(worldScale.z)) / 2;

      if (hx < 0.05 || hy < 0.05 || hz < 0.05) return;  // degenerate / decorative
      if (hx > H * 0.8 && hz > H * 0.8) return;          // outer shell — skip

      // Transform local bounding-box centre to world space.
      // applyMatrix4 handles translation + rotation + scale in one step.
      const worldCenter = localBox
        .getCenter(new THREE.Vector3())
        .applyMatrix4(child.matrixWorld);

      const body = new CANNON.Body({ mass: 0 });
      body.addShape(new CANNON.Box(new CANNON.Vec3(hx, hy, hz)));
      body.position.set(worldCenter.x, worldCenter.y, worldCenter.z);
      body.quaternion.set(worldQuat.x, worldQuat.y, worldQuat.z, worldQuat.w);
      physicsWorld.addBody(body);
      this._bodies.push(body);
      count++;
    });

    console.log(`[ArenaMap] interior colliders: ${count}  |  total bodies: ${this._bodies.length}`);
  }

  // ── Per-frame: animate snowfall ─────────────────────────────────────────────
  update(delta) {
    if (!this._snowGeo) return;
    const pos   = this._snowGeo.attributes.position;
    const RANGE = this.mapHalf + 8;
    const t     = performance.now() * 0.0004;

    for (let i = 0; i < pos.count; i++) {
      pos.setY(i, pos.getY(i) - this._snowSpeeds[i] * delta);
      if (pos.getY(i) < this.groundY) pos.setY(i, 38);
      const drift = Math.sin(t + i * 0.37) * 0.008;
      let nx = pos.getX(i) + drift;
      if (Math.abs(nx) > RANGE) nx = (Math.random() - 0.5) * RANGE * 2;
      pos.setX(i, nx);
    }
    pos.needsUpdate = true;
  }

  // ── Cleanup ─────────────────────────────────────────────────────────────────
  dispose(scene, physicsWorld) {
    if (this._root) {
      scene.remove(this._root);
      this._root.traverse(child => {
        if (child.isMesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
          else child.material?.dispose();
        }
      });
      this._root = null;
    }

    for (const obj of this._envObjects) scene.remove(obj);
    this._envObjects = [];

    if (this._snowGeo) { this._snowGeo.dispose(); this._snowGeo = null; }

    if (physicsWorld) {
      for (const body of this._bodies) physicsWorld.removeBody(body);
      this._bodies = [];
    }
  }
}
