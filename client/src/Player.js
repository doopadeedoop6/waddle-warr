import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { audio } from './AudioManager.js';

// ── COLOR CONSTANTS ── (exported เพื่อให้ RemotePlayer/Game ใช้ได้)
export const COLOR_BODY      = 0x6B8FB8; // ฟ้านุ่ม — สีหลักที่ recolor ได้ตามผู้เล่น
export const COLOR_ACCENT    = 0xFFA84D; // ส้มอ่อน
export const COLOR_BELLY     = 0xFFF8F0; // ขาวครีม
export const COLOR_EYE_PUPIL = 0x1A1A2E;
export const COLOR_FUZZ      = 0xAACCEE; // ขนฟู — จะถูก tint ตามสีผู้เล่น

// ── GAME CONSTANTS ──
const MOVE_FORCE        = 45;
const ICE_DAMPING       = 0.88;
const STOP_THRESHOLD    = 0.08;
const JUMP_IMPULSE      = 9;
const SLIDE_BOOST_FORCE = 45;
const MAX_SLIDE_FUEL    = 3;
const SLIDE_RECHARGE    = 4;

const SPHERE_W = 32;
const SPHERE_H = 24;

function createFluffyMaterial(color, opts = {}) {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: 1.0,
    metalness: 0,
    sheen: 1.0,
    sheenRoughness: 0.5,
    sheenColor: new THREE.Color(0xffffff),
    flatShading: false,
    ...opts,
  });
}

function addPlushDisplacement(geometry, amount = 0.015) {
  const pos = geometry.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const n =
      Math.sin(x * 9.1 + y * 3.7) * 0.5 +
      Math.cos(y * 7.3 + z * 5.1) * 0.3 +
      Math.sin(z * 11.2 + x * 2.8) * 0.2;
    const offset = n * amount;
    const len = Math.sqrt(x * x + y * y + z * z) || 1;
    pos.setXYZ(
      i,
      x + (x / len) * offset,
      y + (y / len) * offset,
      z + (z / len) * offset,
    );
  }
  geometry.computeVertexNormals();
  return geometry;
}

/**
 * สร้าง mesh + แท็ก userData.colorRole ไว้ ให้ recolor system รู้ว่าต้องเปลี่ยนสีไหน
 *
 * colorRole:
 *   'body'  → จะถูกแทนที่ด้วย player color เต็มๆ
 *   'fuzz'  → จะถูก tint ด้วย player color (สีอ่อนกว่า body)
 *   null    → ไม่เปลี่ยน (เช่น ปาก, เท้า, ตา, พุง)
 */
function createPart({
  geometry,
  materialProperties = {},
  color,
  position = { x: 0, y: 0, z: 0 },
  rotation = { x: 0, y: 0, z: 0 },
  scale    = { x: 1, y: 1, z: 1 },
  fluffy   = true,
  colorRole = null,   // ← NEW: ระบุบทบาทของสี
}) {
  const mat = fluffy
    ? createFluffyMaterial(color, materialProperties)
    : new THREE.MeshStandardMaterial({ color, flatShading: false, roughness: 0.8, metalness: 0.05, ...materialProperties });
  const mesh = new THREE.Mesh(geometry, mat);
  mesh.position.set(position.x, position.y, position.z);
  mesh.rotation.set(rotation.x, rotation.y, rotation.z);
  mesh.scale.set(scale.x, scale.y, scale.z);
  if (colorRole) mesh.userData.colorRole = colorRole;
  return mesh;
}

function createFuzzLayer(radius, segments = 24) {
  const geo = new THREE.SphereGeometry(radius * 1.06, segments, segments);
  addPlushDisplacement(geo, 0.025);
  const mat = new THREE.MeshBasicMaterial({
    color: COLOR_FUZZ,
    transparent: true,
    opacity: 0.18,
    depthWrite: false,
    side: THREE.BackSide,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.userData.colorRole = 'fuzz'; // tag ให้ tint ได้
  return mesh;
}

/**
 * Apply player color to all tagged meshes in a penguin group.
 * เรียกหลัง buildPenguinCharacter() เพื่อเปลี่ยนสีเฉพาะ body parts
 * โดยไม่กระทบ ปาก/เท้า/พุง/ตา
 */
export function applyPlayerColor(group, hexOrColor) {
  const playerColor = hexOrColor instanceof THREE.Color
    ? hexOrColor
    : new THREE.Color(hexOrColor);

  // Fuzz tint = mix สีผู้เล่นกับขาวให้สว่าง (lighter version)
  const fuzzTint = playerColor.clone().lerp(new THREE.Color(0xffffff), 0.5);

  group.traverse((child) => {
    if (!child.isMesh || !child.userData.colorRole) return;

    // Clone material ก่อนเปลี่ยนสี (ป้องกันแชร์กับเพนกวินคนอื่น)
    if (Array.isArray(child.material)) {
      child.material = child.material.map(m => m.clone());
    } else {
      child.material = child.material.clone();
    }

    if (child.userData.colorRole === 'body') {
      child.material.color.copy(playerColor);
    } else if (child.userData.colorRole === 'fuzz') {
      child.material.color.copy(fuzzTint);
    }
  });
}

// ── buildPenguinCharacter ──
export function buildPenguinCharacter() {
  const group = new THREE.Group();

  // ─── 1. HEAD ───
  const headGroup = new THREE.Group();
  headGroup.position.y = 1.35;

  const headGeo = new THREE.SphereGeometry(0.6, SPHERE_W, SPHERE_H);
  addPlushDisplacement(headGeo, 0.012);
  headGroup.add(createPart({
    geometry: headGeo,
    color: COLOR_BODY,
    colorRole: 'body',          // ← TAG
  }));

  // ขนฟูรอบหัว (auto-tagged 'fuzz')
  headGroup.add(createFuzzLayer(0.6, 28));

  // หน้ากากขาวครีม — ไม่เปลี่ยนสี
  const faceGeo = new THREE.SphereGeometry(0.55, SPHERE_W, SPHERE_H);
  addPlushDisplacement(faceGeo, 0.008);
  headGroup.add(createPart({
    geometry: faceGeo,
    color: COLOR_BELLY,
    position: { x: 0, y: -0.05, z: 0.15 },
    scale:    { x: 1, y: 0.9,   z: 0.95 },
  }));

  // ตา — ไม่เปลี่ยนสี
  const pupilGeo = new THREE.SphereGeometry(0.09, 16, 12);
  const pupilMat = {
    flatShading: false,
    roughness: 0.2,
    metalness: 0.1,
  };
  headGroup.add(createPart({
    geometry: pupilGeo, materialProperties: pupilMat, color: COLOR_EYE_PUPIL,
    position: { x: -0.2, y: 0.05, z: 0.55 },
    fluffy: false,
  }));
  headGroup.add(createPart({
    geometry: pupilGeo, materialProperties: pupilMat, color: COLOR_EYE_PUPIL,
    position: { x:  0.2, y: 0.05, z: 0.55 },
    fluffy: false,
  }));

  // catch-light
  const sparkleGeo = new THREE.SphereGeometry(0.025, 8, 8);
  const sparkleMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const sparkleL = new THREE.Mesh(sparkleGeo, sparkleMat);
  sparkleL.position.set(-0.18, 0.08, 0.62);
  headGroup.add(sparkleL);
  const sparkleR = new THREE.Mesh(sparkleGeo, sparkleMat);
  sparkleR.position.set(0.22, 0.08, 0.62);
  headGroup.add(sparkleR);

  // ปาก — ไม่เปลี่ยนสี (ปากส้มเสมอ)
  headGroup.add(createPart({
    geometry: new THREE.ConeGeometry(0.18, 0.3, 24),
    color:    COLOR_ACCENT,
    position: { x: 0, y: -0.15, z: 0.65 },
    rotation: { x: Math.PI / 2.2, y: 0, z: 0 },
    materialProperties: { roughness: 0.5, metalness: 0.05 },
    fluffy: false,
  }));

  // แก้มชมพู
  const blushGeo = new THREE.SphereGeometry(0.12, 12, 10);
  const blushMat = new THREE.MeshBasicMaterial({
    color: 0xFFB6C1,
    transparent: true,
    opacity: 0.35,
  });
  const blushL = new THREE.Mesh(blushGeo, blushMat);
  blushL.position.set(-0.35, -0.08, 0.42);
  blushL.scale.set(1, 0.6, 0.3);
  headGroup.add(blushL);
  const blushR = new THREE.Mesh(blushGeo, blushMat);
  blushR.position.set(0.35, -0.08, 0.42);
  blushR.scale.set(1, 0.6, 0.3);
  headGroup.add(blushR);

  // ─── 2. BODY ───
  const bodyGroup = new THREE.Group();
  bodyGroup.position.y = 0.1;

  const torsoGeo = new THREE.SphereGeometry(0.8, SPHERE_W, SPHERE_H);
  addPlushDisplacement(torsoGeo, 0.018);
  bodyGroup.add(createPart({
    geometry: torsoGeo,
    color: COLOR_BODY,
    scale: { x: 1, y: 1.1, z: 0.9 },
    colorRole: 'body',          // ← TAG
  }));

  // ขนฟูรอบตัว
  const bodyFuzz = createFuzzLayer(0.8, 32);
  bodyFuzz.scale.set(1, 1.1, 0.9);
  bodyGroup.add(bodyFuzz);

  // พุงขาว — ไม่เปลี่ยนสี
  const bellyGeo = new THREE.SphereGeometry(0.6, SPHERE_W, SPHERE_H);
  addPlushDisplacement(bellyGeo, 0.012);
  bodyGroup.add(createPart({
    geometry: bellyGeo,
    color:    COLOR_BELLY,
    position: { x: 0, y: -0.1, z: 0.35 },
    scale:    { x: 1, y: 1.1,  z: 0.6  },
  }));

  // ─── 3. LIMBS ───
  const limbsGroup = new THREE.Group();

  // ปีก — เปลี่ยนสีตามผู้เล่น
  const flipperGeometry = new THREE.SphereGeometry(0.25, 20, 16);
  const flipInnerGeo    = new THREE.SphereGeometry(0.22, 20, 16);

  const flipL = createPart({
    geometry: flipperGeometry, color: COLOR_BODY,
    position: { x: -0.75, y: 0.15, z: 0.1 },
    rotation: { x: -0.1, y: -0.1, z: 0.35 },
    scale:    { x: 1.2, y: 1.8, z: 0.6 },
    colorRole: 'body',          // ← TAG
  });
  flipL.add(createPart({
    geometry: flipInnerGeo, color: COLOR_BELLY,
    position: { x: 0.05, y: -0.05, z: -0.15 },
    scale:    { x: 1.1, y: 1.7, z: 0.5 },
    // ด้านในปีกเป็นสีขาว ไม่ tag
  }));

  const flipR = createPart({
    geometry: flipperGeometry, color: COLOR_BODY,
    position: { x: 0.75, y: 0.15, z: 0.1 },
    rotation: { x: -0.1, y: 0.1, z: -0.35 },
    scale:    { x: 1.2, y: 1.8, z: 0.6 },
    colorRole: 'body',          // ← TAG
  });
  flipR.add(createPart({
    geometry: flipInnerGeo, color: COLOR_BELLY,
    position: { x: -0.05, y: -0.05, z: -0.15 },
    scale:    { x: 1.1, y: 1.7, z: 0.5 },
  }));

  // เท้า — ส้มเสมอ
  const footGeometry = new THREE.SphereGeometry(0.18, 16, 12);
  const footL = createPart({
    geometry: footGeometry, color: COLOR_ACCENT,
    position: { x: -0.3, y: -0.85, z: 0.25 },
    rotation: { x: 0, y: 0.1, z: 0 },
    scale:    { x: 1.0, y: 0.55, z: 1.4 },
    materialProperties: { roughness: 0.55, metalness: 0.05 },
    fluffy: false,
  });
  const footR = createPart({
    geometry: footGeometry, color: COLOR_ACCENT,
    position: { x:  0.3, y: -0.85, z: 0.25 },
    rotation: { x: 0, y: -0.1, z: 0 },
    scale:    { x: 1.0, y: 0.55, z: 1.4 },
    materialProperties: { roughness: 0.55, metalness: 0.05 },
    fluffy: false,
  });

  limbsGroup.add(flipL, flipR, footL, footR);

  group.add(headGroup, bodyGroup, limbsGroup);

  group.userData = { flipL, flipR, footL, footR };
  return group;
}

// ────────────────────────────────────────────────────────────────
export class Player {
  constructor(scene, physicsWorld, map, spawnPosition = null) {
    this.scene        = scene;
    this.physicsWorld = physicsWorld;
    this.map          = map;
    this._spawnPosition = spawnPosition;

    this.hp          = 100;
    this.ammo        = 20;
    this.kills       = 0;
    this.slideFuel   = MAX_SLIDE_FUEL;
    this.playerColor = new THREE.Color(0x44aaff);

    this._grounded            = false;
    this._groundedByCollision = false;
    this._floorNormal = new THREE.Vector3(0, 1, 0); // actual surface normal updated each collision
    this._spaceWasHeld = false;
    this._yaw        = 0;
    this._aimPitch   = 0;
    this._waddleTime = 0;

    this.isFallen   = false;
    this._fallTimer = 0;
    this.isSliding  = false;
    this._stunTimer = 0;
    this._bodyPitch = 0;

    this._canAirDash = true;

    this._lastFootPhaseCount = 0;
    this._wasSliding         = false;

    this.keys  = {};
    this.mouse = { dx: 0, dy: 0 };

    this._buildMesh();
    this._buildPhysics();
    this._setupInput();
  }

  _buildMesh() {
    this.group = buildPenguinCharacter();

    this._flipL = this.group.userData.flipL;
    this._flipR = this.group.userData.flipR;
    this._footL = this.group.userData.footL;
    this._footR = this.group.userData.footR;
    this.leftFlipper  = this._flipL;
    this.rightFlipper = this._flipR;

    // กระเป๋า
    const bagGroup = new THREE.Group();

    const bagGeo = new THREE.BoxGeometry(0.4, 0.35, 0.25);
    const bagMat = new THREE.MeshStandardMaterial({ color: 0x8B4513, flatShading: false, roughness: 0.85 });
    const bag = new THREE.Mesh(bagGeo, bagMat);
    bag.position.set(-0.6, 0.05, 0.1);
    bag.rotation.y = Math.PI / 8;
    bag.rotation.z = Math.PI / 16;

    const strapGeo = new THREE.CylinderGeometry(0.75, 0.75, 0.06, 32, 1, true);
    const strapMat = new THREE.MeshStandardMaterial({ color: 0x5C3A21, side: THREE.DoubleSide, roughness: 0.85, flatShading: false });
    const strap = new THREE.Mesh(strapGeo, strapMat);
    strap.rotation.x = Math.PI / 2;
    strap.rotation.y = -Math.PI / 6;
    strap.scale.set(1, 1, 1.1);

    bagGroup.add(bag, strap);
    this.group.add(bagGroup);

    // ลูกหิมะถือ
    const heldGeo = new THREE.SphereGeometry(0.2, 28, 20);
    addPlushDisplacement(heldGeo, 0.018);
    const heldMat = new THREE.MeshPhysicalMaterial({
      color: 0xFFFCF8,
      roughness: 1.0,
      metalness: 0,
      sheen: 1.0,
      sheenRoughness: 0.3,
      sheenColor: new THREE.Color(0xCCDDFF),
    });
    this.heldSnowball = new THREE.Mesh(heldGeo, heldMat);
    this.heldSnowball.position.set(0, -0.4, 0.1);
    this.heldSnowball.visible = false;
    this._flipR.add(this.heldSnowball);

    this.scene.add(this.group);
  }

  _buildPhysics() {
    const shape = new CANNON.Sphere(0.9);
    this.body = new CANNON.Body({ mass: 1, shape,
      linearDamping: 0.85,
      angularDamping: 1.0,
      collisionFilterGroup: 2,
      collisionFilterMask:  -1,
    });
    const sx = this._spawnPosition?.x ?? 0;
    const sy = this._spawnPosition?.y ?? (this.map.groundY + 2);
    const sz = this._spawnPosition?.z ?? 0;
    this.body.position.set(sx, sy, sz);
    this.body.previousPosition.set(sx, sy, sz);
    this.physicsWorld.addBody(this.body);

    // Collision-based grounded detection — works on any elevated surface.
    // The contact vector from our center to the contact point is negative-y when
    // we're standing on something (contact point is below our center).
    this.body.addEventListener('collide', (e) => {
      const contact = e.contact;
      const cv = contact.bi === this.body ? contact.ri : contact.rj;
      if (cv.y < -0.3) {
        this._groundedByCollision = true;
        // Store the actual surface normal (-cv/|cv|) so slope movement uses the right axis
        const len = Math.sqrt(cv.x * cv.x + cv.y * cv.y + cv.z * cv.z);
        if (len > 0.001) this._floorNormal.set(-cv.x / len, -cv.y / len, -cv.z / len);
      }
    });
  }

  _setupInput() {
    document.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      if (e.code === 'Space' && !e.repeat) audio.jump(false);
    });
    document.addEventListener('keyup',   (e) => { this.keys[e.code] = false; });
    document.addEventListener('click', () => { document.body.requestPointerLock(); });
    document.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement) {
        this.mouse.dx += e.movementX;
        this.mouse.dy += e.movementY;
      }
    });
  }

  update(delta) {
    // Hard floor clamp — mirrors server-side safety net, prevents sinking through ground plane
    const groundY = this.map.groundY;
    if (this.body.position.y < groundY + 0.9) {
      this.body.position.y = groundY + 0.9;
      if (this.body.velocity.y < 0) this.body.velocity.y = 0;
    }

    // Velocity cap — prevents tunneling through thin geometry at high speed
    const _vx = this.body.velocity.x, _vy = this.body.velocity.y, _vz = this.body.velocity.z;
    const _spd = Math.sqrt(_vx * _vx + _vy * _vy + _vz * _vz);
    if (_spd > 30) {
      const _s = 30 / _spd;
      this.body.velocity.set(_vx * _s, _vy * _s, _vz * _s);
    }

    const pos      = this.body.position;
    const threePos = new THREE.Vector3(pos.x, pos.y, pos.z);
    const surfaceNormal = this.map.surfaceNormal;

    const gravity = this.map.gravity;
    this.body.applyForce(new CANNON.Vec3(gravity.x, gravity.y, gravity.z), new CANNON.Vec3(0, 0, 0));
    // Height check covers flat ground; collision flag covers elevated platforms/ramps/bridges.
    this._grounded = threePos.y < groundY + 1.6 || this._groundedByCollision;
    this._groundedByCollision = false; // reset — collision events will set it again next step

    if (this._grounded) {
      this._canAirDash = true;
    }

    this._yaw -= this.mouse.dx * 0.002;
    this._aimPitch += this.mouse.dy * 0.002;
    this._aimPitch = THREE.MathUtils.clamp(this._aimPitch, -Math.PI / 6, Math.PI / 3);
    this.mouse.dx = 0;
    this.mouse.dy = 0;

    let canControl = true;
    if (this._stunTimer > 0) { this._stunTimer -= delta; canControl = false; }
    if (this._fallTimer > 0) {
      this._fallTimer -= delta;
      canControl = false;
      if (this._fallTimer <= 0) this.isFallen = false;
    }

    this.isSliding = canControl && this._grounded && (this.keys['ControlLeft'] || this.keys['ControlRight']);

    const up      = surfaceNormal.clone();
    // When grounded, use the actual contact surface normal so slopes work correctly.
    // On flat ground _floorNormal == surfaceNormal, so there's no behaviour change there.
    const floorUp = this._grounded ? this._floorNormal.clone() : up.clone();
    const worldUp = new THREE.Vector3(0, 1, 0);
    let ref = worldUp.clone().sub(up.clone().multiplyScalar(worldUp.dot(up)));
    if (ref.lengthSq() < 0.001) ref.set(1, 0, 0);
    ref.normalize();

    const yawQuat = new THREE.Quaternion().setFromAxisAngle(up, this._yaw);
    const forward = ref.clone().applyQuaternion(yawQuat);
    const right   = new THREE.Vector3().crossVectors(forward, up).normalize();

    const moveDir = new THREE.Vector3();
    if (canControl) {
      if (this.keys['KeyW']) moveDir.addScaledVector(forward,  1);
      if (this.keys['KeyS']) moveDir.addScaledVector(forward, -1);
      if (this.keys['KeyA']) moveDir.addScaledVector(right,   -1);
      if (this.keys['KeyD']) moveDir.addScaledVector(right,    1);
    }
    if (canControl && !this._grounded && this.keys['ShiftLeft'] && this._canAirDash && moveDir.lengthSq() > 0) {
      this._canAirDash = false;
      const dashDir = moveDir.clone().normalize();
      const dashForce = 10;
      this.body.applyImpulse(
        new CANNON.Vec3(dashDir.x * dashForce, dashDir.y * dashForce, dashDir.z * dashForce),
        new CANNON.Vec3(0, 0, 0)
      );
    }

    const boosting = canControl && this._grounded && this.keys['ShiftLeft'] && this.slideFuel > 0;

    if (boosting) {
      this.slideFuel -= delta;
      if (this.slideFuel <= 0 && !this.isFallen) {
        this.isFallen  = true;
        this._fallTimer = 0.75;
        this.isSliding  = false;
      }
    } else if (this._grounded && !this.isFallen) {
      this.slideFuel = Math.min(MAX_SLIDE_FUEL, this.slideFuel + delta * (MAX_SLIDE_FUEL / SLIDE_RECHARGE));
    }

    if (moveDir.lengthSq() > 0) {
      // Project movement direction onto the actual floor surface so the force drives
      // along the slope instead of pushing into the ramp face.
      moveDir.addScaledVector(floorUp, -moveDir.dot(floorUp));
      if (moveDir.lengthSq() < 0.0001) {
        moveDir.set(0, 0, 0);
      } else {
        moveDir.normalize();
        let forceMult = MOVE_FORCE;

        if (!this._grounded) {
          forceMult = MOVE_FORCE * 0.2;
        } else if (this.isSliding) {
          forceMult = boosting ? SLIDE_BOOST_FORCE * 1.5 : MOVE_FORCE * 0.5;
        } else if (boosting) {
          forceMult = SLIDE_BOOST_FORCE;
        }

        if (canControl) {
          this.body.applyForce(
            new CANNON.Vec3(moveDir.x * forceMult, moveDir.y * forceMult, moveDir.z * forceMult),
            new CANNON.Vec3(0, 0, 0)
          );
        }
      }
    }

    const vel       = new THREE.Vector3(this.body.velocity.x, this.body.velocity.y, this.body.velocity.z);
    // Decompose along actual floor normal so "along-surface" vs "into-surface" split is
    // correct on slopes — using world-up here distorts velocity on angled ramps.
    const radialVel = floorUp.clone().multiplyScalar(vel.dot(floorUp));
    const tangVel   = vel.clone().sub(radialVel);
    if (this._grounded) {
      // Normalise to 60 fps baseline so damping feel is consistent regardless of frame rate
      let d = ICE_DAMPING;
      if (this.isSliding) d = 0.99;
      if (this.isFallen)  d = 0.80;
      tangVel.multiplyScalar(Math.pow(d, delta * 60));
      // ✅ Fix: ตัด micro-velocity ทิ้ง — ป้องกันไถลต่อหลัง key ปล่อย
      if (!moveDir.lengthSq() && tangVel.length() < STOP_THRESHOLD) {
        tangVel.set(0, 0, 0);
      }
    }
    const newVel = radialVel.add(tangVel);
    this.body.velocity.set(newVel.x, newVel.y, newVel.z);

    const spaceJustPressed = !!this.keys['Space'] && !this._spaceWasHeld;
    this._spaceWasHeld = !!this.keys['Space'];
    if (canControl && spaceJustPressed && this._grounded && !this.isSliding) {
      const imp = floorUp.clone().multiplyScalar(JUMP_IMPULSE);
      this.body.applyImpulse(new CANNON.Vec3(imp.x, imp.y, imp.z), new CANNON.Vec3(0, 0, 0));
    }

    this._waddleTime += delta;
    const isMoving = moveDir.lengthSq() > 0;

    const phase    = this._waddleTime * (boosting ? 12 : 8);

    // Fire footstep sound each time a foot hits the ground (every π in phase)
    if (this._grounded && isMoving && !this.isSliding && !this.isFallen) {
      const stepCount = Math.floor(phase / Math.PI);
      if (stepCount !== this._lastFootPhaseCount) {
        audio.footstep();
        this._lastFootPhaseCount = stepCount;
      }
    } else {
      this._lastFootPhaseCount = Math.floor(phase / Math.PI);
    }

    let rollAngle  = 0;
    let pitchAngle = 0;

    const targetBodyPitch = (this.isSliding || this.isFallen) ? Math.PI / 2 : 0;
    this._bodyPitch = THREE.MathUtils.lerp(this._bodyPitch || 0, targetBodyPitch, 10 * delta);
    pitchAngle += this._bodyPitch;

    if (canControl && !this.isSliding && !this.isFallen) {
      if (isMoving) {
        this._footL.position.y = -0.85 + Math.max(0, Math.sin(phase)) * 0.25;
        this._footR.position.y = -0.85 + Math.max(0, Math.sin(phase + Math.PI)) * 0.25;
        this._footL.position.z =  0.25 + Math.sin(phase) * 0.15;
        this._footR.position.z =  0.25 + Math.sin(phase + Math.PI) * 0.15;
        rollAngle   = Math.sin(phase) * 0.2;
        pitchAngle += Math.abs(Math.sin(phase * 2)) * 0.05;

        const sway = Math.sin(phase) * 0.25;
        this._flipL.rotation.z =  0.28 + Math.abs(sway);
        this._flipL.rotation.x =  sway;
        this._flipR.rotation.z = -0.28 - Math.abs(sway);
        this._flipR.rotation.x = -sway;
      } else {
        this._footL.position.set(-0.3, -0.85, 0.25);
        this._footR.position.set( 0.3, -0.85, 0.25);
        this._flipL.rotation.set(-0.08, -0.18, -0.28);
        this._flipR.rotation.set(-0.08,  0.18,  0.28);
      }
    } else {
      this._footL.position.set(-0.3, -0.6, -0.2);
      this._footR.position.set( 0.3, -0.6, -0.2);
      if (this.isSliding) {
        this._flipL.rotation.set(0.5, 0,  1.0);
        this._flipR.rotation.set(0.5, 0, -1.0);
      } else if (this.isFallen) {
        this._flipL.rotation.set(0, 0,  1.5);
        this._flipR.rotation.set(0, 0, -1.5);
      }
    }

    const zAxis = forward.clone();
    const yAxis = surfaceNormal.clone();
    const xAxis = new THREE.Vector3().crossVectors(yAxis, zAxis).normalize();
    const rotationMatrix = new THREE.Matrix4().makeBasis(xAxis, yAxis, zAxis);
    const targetQuat = new THREE.Quaternion().setFromRotationMatrix(rotationMatrix);
    const animQuat   = new THREE.Quaternion().setFromEuler(new THREE.Euler(pitchAngle, 0, rollAngle));
    targetQuat.multiply(animQuat);
    this.group.quaternion.copy(targetQuat);

    const heightOffset = this._bodyPitch > 0.5 ? 0.5 : 0;
    this.group.position.copy(threePos.clone().addScaledVector(surfaceNormal, heightOffset));

    const hpBar   = document.getElementById('hp-bar');
    const hpVal   = document.getElementById('hp-val');
    const fuelBar = document.getElementById('fuel-bar');
    if (hpBar)   hpBar.style.width   = this.hp + '%';
    if (hpVal)   hpVal.textContent   = this.hp;
    if (fuelBar) fuelBar.style.width = (this.slideFuel / MAX_SLIDE_FUEL * 100) + '%';
  }

  getMuzzlePosition() {
    this.group.updateMatrixWorld(true);
    const pos = new THREE.Vector3();
    this.heldSnowball.getWorldPosition(pos);
    return pos;
  }

  applyRecoil() {}

  takeMeleeHit(sourcePos) {
    if (this._stunTimer > 0) return;

    audio.takeDamage();
    this.isFallen   = true;
    this._fallTimer = 0.5;
    this._stunTimer = 0.5;
    this.isSliding  = false;

    const myPos  = new THREE.Vector3(this.body.position.x, this.body.position.y, this.body.position.z);
    const hitDir = myPos.sub(sourcePos).normalize();
    const up     = this.map.surfaceNormal;
    hitDir.addScaledVector(up, 0.3).normalize();
    this.body.applyImpulse(
      new CANNON.Vec3(hitDir.x * 12, hitDir.y * 12, hitDir.z * 12),
      new CANNON.Vec3(0, 0, 0)
    );
  }

  getState() {
    return {
      position:   this.body.position.clone(),
      quaternion: this.body.quaternion.clone(),
      velocity:   this.body.velocity.clone(),
      hp:    this.hp,
      kills: this.kills,
    };
  }
}