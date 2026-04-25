import * as THREE from 'three';

const CAM_BACK = 5;
const CAM_UP = 1.0;
const SHOULDER_OFFSET = 1.5;

export default class ThirdPersonCamera {
  constructor(camera, player, map) {
    this._camera = camera;
    this._player = player;
    this._map    = map;

    this._forward = new THREE.Vector3(0, 0, -1);

    const startPos    = new THREE.Vector3(player.body.position.x, player.body.position.y, player.body.position.z);
    const startNormal = map.surfaceNormal;
    this._currentPosition = startPos.clone().addScaledVector(startNormal, CAM_UP + 2);
    this._currentLookat   = startPos.clone();
  }

  update(delta) {
    const pos = this._player.body.position;
    const playerPos = new THREE.Vector3(pos.x, pos.y, pos.z);
    const surfaceNormal = this._map.surfaceNormal;

    // ---- Rebuild player's local frame (same as Player.js) ----
    const up = surfaceNormal.clone();
    const worldUp = new THREE.Vector3(0, 1, 0);
    let ref = worldUp.clone().sub(up.clone().multiplyScalar(worldUp.dot(up)));
    if (ref.lengthSq() < 0.001) ref.set(1, 0, 0);
    ref.normalize();
    const yawQuat = new THREE.Quaternion().setFromAxisAngle(up, this._player._yaw);
    const forward = ref.clone().applyQuaternion(yawQuat);
    const right = new THREE.Vector3().crossVectors(forward, up).normalize();

   // 1. หาจุดหมุน (Pivot) ให้อยู่ระดับหัวไหล่ของเพนกวิน
    const pivot = playerPos.clone().addScaledVector(surfaceNormal, 1.5);

    // 2. คำนวณทิศทางการมอง (Aim Direction) ที่รวมมุมก้ม/เงยเมาส์แล้ว
    const aimPitch = this._player._aimPitch;
    const pitchQuat = new THREE.Quaternion().setFromAxisAngle(right, -aimPitch);
    const aimDir = forward.clone().applyQuaternion(pitchQuat);

    // 3. ตำแหน่งกล้อง: ถอยหลังจากจุด Aim, ยกขึ้นนิดนึง, เบี่ยงขวาข้ามไหล่
    const idealPosition = pivot.clone()
      .addScaledVector(aimDir, -CAM_BACK)        // ถอยหลังตามแนวที่มอง
      .addScaledVector(up, CAM_UP)               // ยกกล้องให้สูงกว่าไหล่
      .addScaledVector(right, SHOULDER_OFFSET);  // เบี่ยงขวา

    // 4. 🎯 จุดที่กล้องต้องมอง: เล็งไปข้างหน้าตามทิศ Aim Direction จริงๆ
    const idealLookat = pivot.clone().addScaledVector(aimDir, 20);

    // ---- Frame-rate independent lerp (SimonDev) ----
    const t = 1.0 - Math.pow(0.001, delta);
    this._currentPosition.lerp(idealPosition, t);
    this._currentLookat.lerp(idealLookat, t);

    // ---- Floor clamp: prevent camera from clipping below the ice ----
    const camFloorY = this._map.groundY + 1.5;
    if (this._currentPosition.y < camFloorY) {
      this._currentPosition.y = camFloorY;
    }

    // ---- Apply to Three.js camera ----
    this._camera.position.copy(this._currentPosition);
    this._camera.up.copy(surfaceNormal); // prevents roll at poles
    this._camera.lookAt(this._currentLookat);

    // Store world-space forward for weapon aiming
    this._forward.copy(aimDir);
  }

  /** Camera forward in world space — used for snowball aiming */
  get forward() {
    return this._forward.clone();
  }

  /** Current pitch angle in radians (same as player upper-body aim) */
  get pitch() {
    return this._player._aimPitch;
  }
}
