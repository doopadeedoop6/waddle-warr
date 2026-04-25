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

    this._hp      = 100;
    this._time    = 0;
    this._lastPos = new THREE.Vector3();
    this._moving  = false;
    this._dead    = false;
    this._falling = false;

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
      shape: new CANNON.Sphere(0.9),
      collisionFilterGroup: 1,
      collisionFilterMask: -1,
    });
    this.body.position.set(0, -9999, 0);
    if (this._physics) this._physics.addBody(this.body);
  }

  // ─────────────────────────────────────────── mesh ──
  _buildMesh() {
    this.group = buildPenguinCharacter();
    // ── ใช้ helper จาก Player.js แทน traverse แบบเทียบ hex ──
    // จะเปลี่ยนสีทั้ง body parts + tint fuzz layer ตามผู้เล่น
    applyPlayerColor(this.group, this._color);
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
    if (this._dead || !this._networkState) return;

    this._time += delta;

    const ns = this._networkState;

    if (!this._falling) {
      this.group.position.copy(ns.position);
      this.group.quaternion.copy(ns.quaternion);
    }

    if (this.body) {
      this.body.position.set(ns.position.x, ns.position.y + 0.9, ns.position.z);
      this.body.velocity.set(0, 0, 0);
    }

    if (ns.hp !== this._hp) {
      this._hp = ns.hp;
      this.updateHPBar(this._hp);
    }

    this._updateChargeVisuals(ns);

    const dist = this._lastPos.distanceTo(ns.position);
    this._moving = dist > 0.05;
    this._lastPos.copy(ns.position);

    const flippers = this.group.userData;
    const charging = !!ns.charging;

    if (this._moving && flippers.flipL && flippers.flipR && !charging) {
      const swing = Math.sin(this._time * 8) * (Math.PI / 12);
      flippers.flipL.rotation.z =  swing;
      flippers.flipR.rotation.z = -swing;

      const bob = Math.sin(this._time * 8) * 0.05;
      this.group.position.y += bob;
    }
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