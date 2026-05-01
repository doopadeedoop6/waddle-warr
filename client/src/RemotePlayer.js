import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { buildPenguinCharacter, applyPlayerColor } from './Player.js';

// ── Charge visuals (must match Weapon.js constants) ──
const CHARGE_SCALE_RATE = 0.75;
const CHARGE_MAX_SEC    = 4.0;

export default class RemotePlayer {
  constructor(scene, playerData, physicsWorld) {
    this._scene        = scene;
    this._physics      = physicsWorld;
    this._id           = playerData.id;
    this._username     = playerData.username || 'Penguin';
    this._color        = playerData.color || '#44aaff';
    this._networkState = null;

    this._hp         = 100;
    this._time       = 0;
    this._lastPos    = new THREE.Vector3();
    this._moving     = false;
    this._dead       = false;
    this._falling    = false;
    this._disposed   = false;
    this._animPhase  = 0;
    this._bodyPitch  = 0;
    this._animQuat   = new THREE.Quaternion();

    this._buildMesh();
    this._buildLabel();
    this._buildHPBar();
    this._buildHeldSnowball();
    this._buildBody();

    scene.add(this.group);
  }

  _buildBody() {
    this.body = new CANNON.Body({
      mass: 0,
      type: CANNON.Body.KINEMATIC,
      shape: new CANNON.Sphere(0.85),
      collisionFilterGroup: 1,
      collisionFilterMask: -1,
    });
    this.body.position.set(0, -9999, 0);
    if (this._physics) this._physics.addBody(this.body);
  }

  // ─────────────────────────────────────────── mesh ──
  _buildMesh() {
    this.group = buildPenguinCharacter();
    applyPlayerColor(this.group, this._color);
    this._bodyGroup = this.group.userData.bodyGroup ?? null;
    this._torsoMesh = this._bodyGroup?.children[0] ?? null;
  }

  _buildHeldSnowball() {
    const geo = new THREE.SphereGeometry(0.2, 28, 20);
    const mat = new THREE.MeshPhysicalMaterial({
      color: 0xFFFCF8,
      roughness: 1.0,
      metalness: 0,
      sheen: 1.0,
      sheenRoughness: 0.3,
      sheenColor: new THREE.Color(0xCCDDFF),
    });
    this._heldSnowball = new THREE.Mesh(geo, mat);
    this._heldSnowball.visible = false;

    const ud = this.group.userData;
    const rightFlipper = ud.flipR || ud.rightFlipper;

    if (rightFlipper) {
      rightFlipper.add(this._heldSnowball);
      this._heldSnowball.position.set(0, -0.4, 0.1);
    } else {
      this.group.add(this._heldSnowball);
      this._heldSnowball.position.set(0.5, 1.0, 0.4);
    }
  }

  _buildLabel() {
    const canvas = document.createElement('canvas');
    canvas.width  = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    this._roundRect(ctx, 4, 4, 248, 56, 12);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this._username.slice(0, 14), 128, 34);

    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: tex, depthTest: false });
    this._label = new THREE.Sprite(mat);
    this._label.position.y = 2.8;
    this._label.scale.set(2.5, 0.6, 1);
    this._label.frustumCulled = false;
    this.group.add(this._label);
  }

  _buildHPBar() {
    this._hpCanvas = document.createElement('canvas');
    this._hpCanvas.width  = 256;
    this._hpCanvas.height = 16;
    this._hpTex = new THREE.CanvasTexture(this._hpCanvas);
    const mat = new THREE.SpriteMaterial({ map: this._hpTex, depthTest: false });
    this._hpSprite = new THREE.Sprite(mat);
    this._hpSprite.position.y = 2.3;
    this._hpSprite.scale.set(2.0, 0.2, 1);
    this._hpSprite.frustumCulled = false;
    this.group.add(this._hpSprite);
    this.updateHPBar(100);
  }

  updateHPBar(hp) {
    const ctx = this._hpCanvas.getContext('2d');
    ctx.clearRect(0, 0, 256, 16);

    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.fillRect(0, 0, 256, 16);

    const pct = Math.max(0, Math.min(100, hp)) / 100;
    let color;
    if (hp > 60)      color = '#4488ff';
    else if (hp > 30) color = '#ffaa33';
    else              color = '#ff4444';

    ctx.fillStyle = color;
    ctx.fillRect(0, 0, Math.round(256 * pct), 16);

    this._hpTex.needsUpdate = true;
  }

  setNetworkState(networkState) {
    this._networkState = networkState;
  }

  update(delta) {
    if (this._disposed || this._dead || !this._networkState) return;
    if (!this._networkState.alive) { this.group.visible = false; return; }
    this.group.visible = true;

    this._time += delta;
    const ns = this._networkState;

    if (this.body) {
      this.body.position.set(ns.position.x, ns.position.y + 0.9, ns.position.z);
      this.body.velocity.set(0, 0, 0);
    }

    if (ns.hp !== this._hp) {
      this._hp = ns.hp;
      this.updateHPBar(this._hp);
    }

    if (this._falling) {
      this._updateChargeVisuals(ns);
      return;
    }

    // Speed detection
    const dist  = this._lastPos.distanceTo(ns.position);
    const speed = delta > 0 ? dist / delta : 0;
    this._moving = dist > 0.05;
    this._lastPos.copy(ns.position);
    const isGrounded = Math.abs(ns.velocityY ?? 0) < 1.5;
    const isIdle     = !this._moving && isGrounded && !ns.isSliding;

    const ud      = this.group.userData;
    const flipL   = ud.flipL;
    const flipR   = ud.flipR;
    const footL   = ud.footL;
    const footR   = ud.footR;
    const sliding = !!ns.isSliding;
    const charging = !!ns.charging;

    // Body pitch: lean forward when sliding, upright otherwise
    const targetPitch = sliding ? Math.PI / 2 : 0;
    this._bodyPitch   = THREE.MathUtils.lerp(this._bodyPitch, targetPitch, 10 * delta);

    let rollAngle  = 0;
    let pitchAngle = this._bodyPitch;
    let bobY       = 0;

    if (!sliding && !charging && this._moving && flipL && flipR && footL && footR) {
      // Walking / running
      const phaseRate   = speed > 6 ? 12 : 8;
      this._animPhase  += delta * phaseRate;
      const phase       = this._animPhase;

      footL.position.y = -0.85 + Math.max(0, Math.sin(phase)) * 0.25;
      footR.position.y = -0.85 + Math.max(0, Math.sin(phase + Math.PI)) * 0.25;
      footL.position.z =  0.25 + Math.sin(phase) * 0.15;
      footR.position.z =  0.25 + Math.sin(phase + Math.PI) * 0.15;

      rollAngle   = Math.sin(phase) * 0.2;
      pitchAngle += Math.abs(Math.sin(phase * 2)) * 0.05;
      bobY        = Math.sin(phase * 2) * 0.04;

      const sway = Math.sin(phase) * 0.25;
      flipL.rotation.z =  0.28 + Math.abs(sway);
      flipL.rotation.x =  sway;
      flipR.rotation.z = -0.28 - Math.abs(sway);
      flipR.rotation.x = -sway;
    } else if (sliding) {
      if (footL && footR) {
        footL.position.set(-0.3, -0.6, -0.2);
        footR.position.set( 0.3, -0.6, -0.2);
      }
      if (flipL && flipR) {
        flipL.rotation.set(0.5, 0,  1.0);
        flipR.rotation.set(0.5, 0, -1.0);
      }
    } else {
      // Idle
      if (footL && footR) {
        footL.position.set(-0.3, -0.85, 0.25);
        footR.position.set( 0.3, -0.85, 0.25);
      }
      if (flipL && flipR && !charging) {
        flipL.rotation.set(-0.08, -0.18, -0.28);
        flipR.rotation.set(-0.08,  0.18,  0.28);
      }
      if (isIdle) bobY = Math.sin(this._time * 1.2) * 0.04;
    }

    // ── Airborne wing-spread ──────────────────────────────────────────────────
    if (!isGrounded && !sliding && flipL && flipR) {
      const t = 1 - Math.pow(0.01, delta);
      flipL.rotation.z += ( 0.9 - flipL.rotation.z) * t;
      flipR.rotation.z += (-0.9 - flipR.rotation.z) * t;
      flipL.rotation.x += ( 0   - flipL.rotation.x) * t;
      flipR.rotation.x += ( 0   - flipR.rotation.x) * t;
    }
    // Torso x-scale: puff when airborne, restore on landing
    if (this._torsoMesh) {
      const tgtX = (!isGrounded && !sliding) ? 1.08 : 1.0;
      this._torsoMesh.scale.x += (tgtX - this._torsoMesh.scale.x) * (1 - Math.pow(0.01, delta));
    }
    // ── Idle body sway ────────────────────────────────────────────────────────
    if (this._bodyGroup) {
      const tgtSwayZ = isIdle ? Math.sin(this._time * 1.2) * 0.04 : 0;
      this._bodyGroup.rotation.z += (tgtSwayZ - this._bodyGroup.rotation.z) * (1 - Math.pow(0.08, delta));
    }

    // Position with forward-lean offset when sliding + walk bob + idle bob
    const heightOffset = Math.sin(this._bodyPitch) * 0.5;
    this.group.position.set(
      ns.position.x,
      ns.position.y + heightOffset + bobY,
      ns.position.z
    );

    // Quaternion = server yaw (facing) × local animation (pitch + roll)
    this._animQuat.setFromEuler(new THREE.Euler(pitchAngle, 0, rollAngle));
    this.group.quaternion.copy(ns.quaternion).multiply(this._animQuat);

    this._updateChargeVisuals(ns);
  }

  _updateChargeVisuals(ns) {
    if (!this._heldSnowball) return;

    const ud         = this.group.userData;
    const rightFlip  = ud.flipR || ud.rightFlipper;
    const charging   = !!ns.charging;
    const chargeAmt  = Math.max(0, Math.min(1, ns.chargeAmount ?? 0));

    if (charging) {
      this._heldSnowball.visible = true;
      const scale = 1 + chargeAmt * CHARGE_MAX_SEC * CHARGE_SCALE_RATE;
      this._heldSnowball.scale.set(scale, scale, scale);

      if (rightFlip) {
        rightFlip.rotation.x = -Math.PI / 1.5;
      }
    } else {
      this._heldSnowball.visible = false;
      this._heldSnowball.scale.set(1, 1, 1);
      if (rightFlip && !this._moving) {
        rightFlip.rotation.x = 0;
      }
    }
  }

  playDeathAnimation(method, knockbackDir) {
    if (this._dead) return;
    this._dead = true;

    if (this._heldSnowball) this._heldSnowball.visible = false;

    if (method === 'snowball') {
      this._deathSnowball();
    } else {
      this._deathMelee(knockbackDir || new THREE.Vector3(0, 0, -1));
    }
  }

  playFallAnimation() {
    if (this._falling || this._dead) return;
    this._falling = true;

    const FALL_MS = 150;
    const LIE_MS  = 500;
    const RISE_MS = 300;
    const start   = performance.now();

    const animate = () => {
      const elapsed = performance.now() - start;

      if (elapsed < FALL_MS) {
        const t = elapsed / FALL_MS;
        this.group.rotation.x = (Math.PI / 2) * t;
        requestAnimationFrame(animate);
      } else if (elapsed < FALL_MS + LIE_MS) {
        this.group.rotation.x = Math.PI / 2;
        requestAnimationFrame(animate);
      } else if (elapsed < FALL_MS + LIE_MS + RISE_MS) {
        const t = (elapsed - FALL_MS - LIE_MS) / RISE_MS;
        this.group.rotation.x = (Math.PI / 2) * (1 - t);
        requestAnimationFrame(animate);
      } else {
        this.group.rotation.x = 0;
        this._falling = false;
      }
    };

    requestAnimationFrame(animate);
  }

  _deathSnowball() {
    const parts = [];
    const ud = this.group.userData;
    const candidates = [ud.headGroup, ud.bodyGroup, ud.flipL, ud.flipR].filter(Boolean);

    const targets = candidates.length ? candidates : [...this.group.children].filter(c => c.isMesh || c.isGroup);

    for (const part of targets) {
      this.group.remove(part);
      this._scene.add(part);
      part.position.copy(this.group.position);

      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        3 + Math.random() * 5,
        (Math.random() - 0.5) * 10
      );
      part.userData._deathVel = vel;
      parts.push(part);

      part.traverse(child => {
        if (child.isMesh) {
          child.material = child.material.clone();
          child.material.transparent = true;
        }
      });
    }

    const start = performance.now();
    const duration = 1200;

    const animate = () => {
      const elapsed = performance.now() - start;
      const t = Math.min(elapsed / duration, 1);
      const opacity = 1 - t;
      const dt = 0.016;

      for (const part of parts) {
        part.userData._deathVel.y -= 9.8 * dt;
        part.position.addScaledVector(part.userData._deathVel, dt);
        part.rotation.x += dt * 2;
        part.rotation.z += dt * 1.5;
        part.traverse(child => {
          if (child.isMesh) child.material.opacity = opacity;
        });
      }

      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        for (const part of parts) {
          this._scene.remove(part);
          part.traverse(c => { if (c.isMesh) { c.geometry.dispose(); c.material.dispose(); } });
        }
      }
    };

    this._scene.remove(this.group);
    requestAnimationFrame(animate);
  }

  _deathMelee(knockbackDir) {
    const startPos = this.group.position.clone();
    const endPos   = startPos.clone().addScaledVector(knockbackDir.normalize(), -4);
    const startTime = performance.now();

    this.group.traverse(child => {
      if (child.isMesh) {
        child.material = child.material.clone();
        child.material.transparent = true;
        child.material.opacity = 1;
      }
    });

    const flyDuration  = 500;
    const fadeDuration = 300;

    const animate = () => {
      const elapsed = performance.now() - startTime;

      if (elapsed < flyDuration) {
        const t = elapsed / flyDuration;
        this.group.position.lerpVectors(startPos, endPos, t);
        this.group.rotation.y += 0.2;
      } else {
        const fadeT = Math.min((elapsed - flyDuration) / fadeDuration, 1);
        const opacity = 1 - fadeT;
        this.group.traverse(child => {
          if (child.isMesh) child.material.opacity = opacity;
        });

        if (fadeT >= 1) {
          this.dispose();
          return;
        }
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }

  dispose() {
    if (this._disposed) return;
    this._disposed = true;
    this._scene.remove(this.group);

    if (this.body && this._physics) {
      this._physics.removeBody(this.body);
      this.body = null;
    }

    this.group.traverse((child) => {
      if (child.isMesh) {
        child.geometry?.dispose();
        if (Array.isArray(child.material)) {
          child.material.forEach(m => m.dispose());
        } else {
          child.material?.dispose();
        }
      }
      if (child.isSprite) {
        child.material?.map?.dispose();
        child.material?.dispose();
      }
    });

    if (this._hpTex) this._hpTex.dispose();
  }

  get id()       { return this._id; }
  get position() { return this.group.position; }
  get hp()       { return this._hp; }

  _roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }
}