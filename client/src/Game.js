import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import CannonDebugger from 'cannon-es-debugger';
import { createMap, availableMaps } from './maps/index.js';
import { DEFAULT_MAP_ID } from '../../shared/maps/index.js';
import { Player, applyPlayerColor } from './Player.js';
import ThirdPersonCamera from './Camera.js';
import { ParticleSystem } from './ParticleSystem.js';
import Weapon from './Weapon.js';
import HUD from './HUD.js';
import Network from './Network.js';
import RemotePlayer from './RemotePlayer.js';
import { audio } from './AudioManager.js';

export class Game {
  constructor(username) {
    this.username  = username;
    this.clock     = new THREE.Clock();
    this._inputSeq = 0;
  }

  async start() {
    this._initRenderer();
    this._initScene();
    this._initPhysics();

    this.hud = new HUD();
    this.hud.show();

    // ── Connect to server — timeout 3s so offline mode still works ──
    this.network = new Network();
    let joinData = null;
    try {
      joinData = await Promise.race([
        this.network.connect(this.username),
        new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 3000)),
      ]);
    } catch (err) {
      console.warn('[Game] server offline, running solo:', err.message);
    }

    // ── Determine which map to load ──
    // Priority: 1) URL ?map= param (visual testing), 2) server join payload, 3) default
    const urlMapId    = new URLSearchParams(window.location.search).get('map');
    const serverMapId = joinData?.mapId ?? null;
    const resolvedMapId = this._resolveMapId(urlMapId ?? serverMapId ?? DEFAULT_MAP_ID);
    if (urlMapId && urlMapId !== serverMapId) {
      console.log(`[Game] URL map "${urlMapId}" differs from server map "${serverMapId}" — requesting server switch`);
      this.network.requestMapChange(urlMapId);
    }

    // ── Build map (visual + client physics) ──
    this.map = createMap(resolvedMapId);
    this.map.build(this.scene, this.physicsWorld);
    this.hud.setMap(this.map);

    // ── Physics debugger (toggle with ` key) ──
    this._debugGroup = new THREE.Group();
    this._debugGroup.visible = false;
    this.scene.add(this._debugGroup);
    this._cannonDebugger = new CannonDebugger(this._debugGroup, this.physicsWorld, {
      color: 0x00ff00,
      onInit: (_body, mesh) => {
        mesh.material.depthTest  = false;
        mesh.material.transparent = true;
        mesh.material.opacity    = 0.75;
        mesh.renderOrder         = 999;
      },
    });
    this._debugPhysics = false;
    this._debugLabel = this._createDebugLabel();
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Backquote') {
        this._debugPhysics = !this._debugPhysics;
        this._debugGroup.visible = this._debugPhysics;
        this._debugLabel.style.display = this._debugPhysics ? 'block' : 'none';
        console.log('[Physics Debug]', this._debugPhysics ? 'ON — green = physics bodies' : 'OFF');
      }
    });

    // ── Resolve spawn position before creating Player so the body starts in the right place ──
    const rawSpawn = joinData?.spawnPosition;
    const fallback = this.map.spawnPoints?.[0];
    const spawnPos = rawSpawn
      ?? (fallback ? { x: fallback.x, y: fallback.y, z: fallback.z } : null);

    // ── Create game objects ──
    this.player          = new Player(this.scene, this.physicsWorld, this.map, spawnPos);
    this.thirdPersonCamera = new ThirdPersonCamera(this.camera, this.player, this.map);
    this.particles       = new ParticleSystem(this.scene);
    this.weapon          = new Weapon(
      this.scene, this.physicsWorld, this.player,
      this.thirdPersonCamera, this.particles, this.network, this.map
    );

    // ── Apply server-assigned color ──
    if (joinData?.color) {
      this.player.playerColor.set(joinData.color);
      applyPlayerColor(this.player.group, joinData.color);
    }

    // ── Network callbacks ──
    this._lastKnownHp = 100;
    this._isDead      = false;

    this.network.onGameState((state) => {
      this.weapon.remotePlayers = this.network.remotePlayers;

      if (state.zone?.timeToShrink != null) {
        this.hud.setZoneTimer(state.zone.timeToShrink);
      }
      if (state.zone != null) {
        this.hud.setZone(state.zone.radius, state.zone.active);
      }

      const total = this.network.remotePlayers.length + 1;
      const alive = this.network.remotePlayers.filter(p => p.alive).length + 1;
      this.hud.setPlayerCount(alive, total);

      const myState = state.players?.find(p => p.id === this.network.playerId);
      if (myState && myState.hp < this._lastKnownHp) {
        this.hud.takeDamage();
        audio.takeDamage();
        this.player.hp = myState.hp;
        const pos = new THREE.Vector3(
          this.player.body.position.x,
          this.player.body.position.y + 1,
          this.player.body.position.z
        );
        this.particles.emit(pos, new THREE.Vector3(0,1,0), 0xaaccff, 10, 4, 360);
      }
      if (myState) this._lastKnownHp = myState.hp;
    });

    this._remoteMeshes = new Map();

    this.network.onMeleeConfirmed(({ targetId, attackerId }) => {
      audio.meleeHit();
      const rm = this._remoteMeshes.get(targetId);
      if (rm) rm.playFallAnimation();

      if (targetId === this.network.playerId) {
        const attackerRm = this._remoteMeshes.get(attackerId);
        const sourcePos = attackerRm ? attackerRm.position : new THREE.Vector3();
        this.player.takeMeleeHit(sourcePos);
        this.hud.takeDamage();
      }
    });

    this.network.onPlayerDied(({ id, killerName, victimName, method, knockbackDir }) => {
      this.hud.addKill(killerName, victimName, method);
      if (method === 'snowball') this.hud.notify('WADDLED! ❄', 2000);
      if (method === 'melee')   this.hud.notify('SLAPPED! 🐧', 2000);

      if (killerName === this.username) audio.kill();

      if (id === this.network.playerId) {
        audio.died();
        this._isDead = true;
        this.player.group.visible = false;
        this.player.isFallen = true;
        this.player._fallTimer = 999;
        this.hud.notify('YOU DIED... respawning 🐧', 3000);
      } else {
        const rm = this._remoteMeshes.get(id);
        if (rm) rm.playDeathAnimation(method, knockbackDir);
      }
    });

    this.network.onRespawn(({ id, spawnPosition, hp }) => {
      if (id === this.network.playerId) {
        this._isDead = false;
        this.player.group.visible = true;
        this.player.isFallen = false;
        this.player._fallTimer = 0;
        this.player.hp = hp;
        this._lastKnownHp = hp;
        this.player.body.position.set(spawnPosition.x, spawnPosition.y, spawnPosition.z);
        this.player.body.previousPosition.set(spawnPosition.x, spawnPosition.y, spawnPosition.z);
        this.player.body.velocity.set(0, 0, 0);
        this.player.body.force.set(0, 0, 0);
        this.player.body.aabbNeedsUpdate = true;
        this.hud.notify('BACK IN THE WADDLE! 🐧', 1500);
      }
    });

    this.network.onGameOver(({ winnerName }) => {
      this.hud.notify(`🏆 ${winnerName} WINS!`, 6000);
      if (winnerName === this.username) audio.win();
    });

    // ── Remote projectiles (visual only — no physics) ──
    this._remoteProjectiles = [];
    this.network.onProjectile((data) => {
      this._spawnRemoteProjectile(data);
    });

    this._animate();
  }

  _spawnRemoteProjectile({ position, velocity, scale = 1, color = '#ffffff', lifetime = 3 }) {
    const geo  = new THREE.SphereGeometry(0.25 * scale, 6, 6);
    const mat  = new THREE.MeshStandardMaterial({ color, roughness: 0.95 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(position.x, position.y, position.z);
    this.scene.add(mesh);

    this._remoteProjectiles.push({
      mesh,
      velocity: new THREE.Vector3(velocity.x, velocity.y, velocity.z),
      life: lifetime,
      scale,
    });
  }

  _updateRemoteProjectiles(delta) {
    const GRAVITY  = this.map.gravity.y * 0.8; // e.g. -28 * 0.8
    const GROUND_Y = this.map.groundY;
    for (let i = this._remoteProjectiles.length - 1; i >= 0; i--) {
      const p = this._remoteProjectiles[i];
      p.life -= delta;
      p.velocity.y += GRAVITY * delta;
      p.mesh.position.addScaledVector(p.velocity, delta);

      const hit = p.mesh.position.y < GROUND_Y + 0.3 && p.life < 2.9;
      if (hit || p.life <= 0) {
        if (hit) {
          this.particles.emit(
            p.mesh.position.clone(),
            new THREE.Vector3(0,1,0),
            p.mesh.material.color,
            6, 4, 45
          );
        }
        this.scene.remove(p.mesh);
        p.mesh.geometry.dispose();
        p.mesh.material.dispose();
        this._remoteProjectiles.splice(i, 1);
      }
    }
  }

  _resolveMapId(id) {
    const valid = availableMaps();
    if (valid.includes(id)) return id;
    console.warn(`[Game] unknown map "${id}", falling back to ${DEFAULT_MAP_ID}`);
    return DEFAULT_MAP_ID;
  }

  _initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    document.body.appendChild(this.renderer.domElement);

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  _initScene() {
    this.scene = new THREE.Scene();
    // Scene background/fog will be set by map.build(); set a fallback here
    this.scene.background = new THREE.Color(0x0a1a3a);

    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 100, 0);
  }

  _initPhysics() {
    this.physicsWorld = new CANNON.World({
      gravity: new CANNON.Vec3(0, 0, 0),
      broadphase: new CANNON.SAPBroadphase(),
      allowSleep: false,
    });
    this.physicsWorld.defaultContactMaterial.friction    = 0.05;
    this.physicsWorld.defaultContactMaterial.restitution = 0.0;
    this.physicsWorld.solver.iterations = 20;
  }

  _animate() {
    requestAnimationFrame(() => this._animate());
    const delta = Math.min(this.clock.getDelta(), 0.05);

    this.physicsWorld.step(1 / 60, delta, 10);

    if (this.player) {
      this.player.update(delta);
      this.thirdPersonCamera.update(delta);
      this.weapon.update(delta);
      this.particles.update(delta);
      this._updateRemoteProjectiles(delta);

      this.network.update(delta, this.player);

      // ── Remote player meshes ──
      const remotes = this.network.remotePlayers;

      for (const rp of remotes) {
        if (!this._remoteMeshes.has(rp.id)) {
          const rm = new RemotePlayer(this.scene, {
            id: rp.id, username: rp.username, color: rp.color,
          }, this.physicsWorld);
          rm.setNetworkState(rp);
          this._remoteMeshes.set(rp.id, rm);
        }
      }

      for (const [id, rm] of this._remoteMeshes) {
        if (!remotes.find(r => r.id === id)) {
          rm.dispose();
          this._remoteMeshes.delete(id);
        } else {
          rm.update(delta);
        }
      }

      this.weapon.remotePlayers = [...this._remoteMeshes.values()].map(rm => ({
        id: rm.id,
        position: rm.position,
        hp: rm.hp,
        body: rm.body ?? null,
      }));

      this.network.sendInput({
        seq:      this._inputSeq++,
        delta,
        forward:  !!this.player.keys['KeyW'],
        back:     !!this.player.keys['KeyS'],
        left:     !!this.player.keys['KeyA'],
        right:    !!this.player.keys['KeyD'],
        jump:     !!this.player.keys['Space'],
        sprint:   !!this.player.keys['ShiftLeft'],
        yaw:      this.player._yaw,
        pitch:    this.player._aimPitch,
        reload:   !!this.player.keys['KeyR'],
        melee:    !!this.player.keys['KeyF'],
        charging:     !!this.weapon.isCharging,
        chargeAmount: this.weapon.chargeAmount ?? 0,
        position:   {
          x: this.player.body.position.x,
          y: this.player.body.position.y,
          z: this.player.body.position.z,
        },
        quaternion: {
          x: this.player.group.quaternion.x,
          y: this.player.group.quaternion.y,
          z: this.player.group.quaternion.z,
          w: this.player.group.quaternion.w,
        },
        velocity: {
          x: this.player.body.velocity.x,
          y: this.player.body.velocity.y,
          z: this.player.body.velocity.z,
        },
      });

      const remoteList = [...this._remoteMeshes.values()].map(rm => ({
        position: rm.position,
        color: rm._color,
      }));
      this.hud.update(this.player, this.weapon, remoteList);
    }

    if (this._debugPhysics) {
      try { this._cannonDebugger.update(); } catch (e) { console.error('[PhysicsDebug]', e); }
    }
    this.renderer.render(this.scene, this.camera);
  }

  _createDebugLabel() {
    const el = document.createElement('div');
    el.textContent = 'PHYSICS DEBUG ON  [` to toggle]';
    Object.assign(el.style, {
      position: 'fixed', top: '8px', left: '50%', transform: 'translateX(-50%)',
      background: 'rgba(0,0,0,0.65)', color: '#00ff00', fontFamily: 'monospace',
      fontSize: '13px', padding: '4px 12px', borderRadius: '4px',
      pointerEvents: 'none', zIndex: '9999', display: 'none',
    });
    document.body.appendChild(el);
    return el;
  }
}
