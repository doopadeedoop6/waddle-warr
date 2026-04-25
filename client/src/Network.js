import { io } from 'socket.io-client';
import * as THREE from 'three';

const SERVER_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:3000';

const BUFFER_MAX    = 3;
const RENDER_LAG_MS = 100;
const PING_INTERVAL = 2000;

export default class Network {
  constructor() {
    this._socket       = null;
    this._playerId     = null;
    this._currentMapId = null;
    this._latency      = NaN;
    this._serverPos    = null;   // position correction target from last gameState

    this._onJoinedCb         = null;
    this._onGameStateCb      = null;
    this._onPlayerDiedCb     = null;
    this._onGameOverCb       = null;
    this._onMeleeConfirmedCb = null;
    this._onRespawnCb        = null;
    this._onProjectileCb     = null;

    // id → remote player object  (live; Weapon reads this array)
    this._remoteMap     = new Map();
    this._remotePlayers = [];
  }

  // ─────────────────────────────────────────────── connect ──
  /**
   * Opens socket, sends 'join', resolves when server emits 'joined'.
   * @returns {Promise<{playerId, color, spawnPosition}>}
   */
  connect(username) {
    return new Promise((resolve, reject) => {
      this._socket = io(SERVER_URL, { transports: ['websocket'] });

      this._socket.once('connect_error', reject);

      this._socket.on('connect', () => {
        console.log('[Network] connected, joining as', username);
        this._socket.emit('join', { username });
      });

      this._socket.once('joined', (data) => {
        this._playerId     = data.playerId;
        this._currentMapId = data.mapId ?? null;
        console.log('[Network] joined, playerId =', data.playerId, 'map =', this._currentMapId);
        resolve(data);
        if (this._onJoinedCb) this._onJoinedCb(data);
      });

      this._socket.on('gameState', (state) => {
        this._handleGameState(state);
        if (this._onGameStateCb) this._onGameStateCb(state);
      });

      this._socket.on('playerDied', (data) => {
        if (this._onPlayerDiedCb) this._onPlayerDiedCb(data);
      });

      this._socket.on('meleeConfirmed', (data) => {
        if (this._onMeleeConfirmedCb) this._onMeleeConfirmedCb(data);
      });

      this._socket.on('playerRespawned', (data) => {
        if (this._onRespawnCb) this._onRespawnCb(data);
      });

      this._socket.on('remoteProjectile', (data) => {
        if (this._onProjectileCb) this._onProjectileCb(data);
      });

      this._socket.on('gameOver', (data) => {
        if (this._onGameOverCb) this._onGameOverCb(data);
      });

      this._socket.on('pong', ({ serverTime, clientTime }) => {
        this._latency = (Date.now() - clientTime) / 2;
      });

      this._socket.on('disconnect', () => {
        console.warn('[Network] disconnected from server');
      });

      // Ping loop — start once after connect
      this._pingInterval = setInterval(() => {
        if (this._socket?.connected) {
          this._socket.emit('ping', { clientTime: Date.now() });
        }
      }, PING_INTERVAL);
    });
  }

  // ─────────────────────────────────────── gameState handler ──
  _handleGameState(state) {
    if (!state.players) return;

    const now    = Date.now();
    const seenIds = new Set();

    for (const p of state.players) {
      if (p.id === this._playerId) {
        // Store server position for reconciliation (applied in update())
        this._serverPos = new THREE.Vector3(p.position.x, p.position.y, p.position.z);
        continue;
      }

      seenIds.add(p.id);

      if (!this._remoteMap.has(p.id)) {
        this._remoteMap.set(p.id, {
          id:           p.id,
          username:     p.username,
          color:        p.color,
          position:     new THREE.Vector3(),
          quaternion:   new THREE.Quaternion(),
          hp:           p.hp,
          kills:        p.kills ?? 0,
          alive:        p.alive,
          // ── NEW: charge state ──
          charging:     false,
          chargeAmount: 0,
          body:         null,  // no physics — mesh only
          _buffer:      [],
        });
      }

      const remote = this._remoteMap.get(p.id);
      remote.hp    = p.hp;
      remote.alive = p.alive;
      remote.color = p.color;
      if (p.username) remote.username = p.username;

      // ── NEW: relay charge state every tick ──
      remote.charging     = !!p.charging;
      remote.chargeAmount = p.chargeAmount ?? 0;

      // State buffer for interpolation
      remote._buffer.push({
        position:  new THREE.Vector3(p.position.x, p.position.y, p.position.z),
        quaternion: new THREE.Quaternion(
          p.quaternion.x, p.quaternion.y, p.quaternion.z, p.quaternion.w
        ),
        timestamp: now,
      });
      if (remote._buffer.length > BUFFER_MAX) remote._buffer.shift();
    }

    // Remove players who disconnected
    for (const id of this._remoteMap.keys()) {
      if (!seenIds.has(id)) {
        console.log('[Network] remote player left:', id);
        this._remoteMap.delete(id);
      }
    }

    this._remotePlayers = [...this._remoteMap.values()];
  }

  // ───────────────────────────────────────── per-frame update ──
  /**
   * Call from Game._animate() every frame.
   * @param {number} delta
   * @param {Player} player — local player, used for reconciliation
   */
  update(delta, player) {
    // Interpolate all remote players 100ms behind server time
    const renderTime = Date.now() - RENDER_LAG_MS;
    for (const remote of this._remotePlayers) {
      this._interpolate(remote, renderTime);
    }

    // Position reconciliation: if server says we're > 2 units off, nudge back
    if (this._serverPos && player) {
      const lp = player.body.position;
      const dx = this._serverPos.x - lp.x;
      const dy = this._serverPos.y - lp.y;
      const dz = this._serverPos.z - lp.z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (dist > 2) {
        const t = 1 / 5; // lerp over 5 frames
        player.body.position.x += dx * t;
        player.body.position.y += dy * t;
        player.body.position.z += dz * t;
      }
      this._serverPos = null;
    }
  }

  _interpolate(remote, renderTime) {
    const buf = remote._buffer;
    if (buf.length === 0) return;
    if (buf.length === 1) {
      remote.position.copy(buf[0].position);
      remote.quaternion.copy(buf[0].quaternion);
      return;
    }

    // Find the two entries straddling renderTime
    let a = buf[0], b = buf[buf.length - 1];
    for (let i = 0; i < buf.length - 1; i++) {
      if (buf[i].timestamp <= renderTime && renderTime <= buf[i + 1].timestamp) {
        a = buf[i];
        b = buf[i + 1];
        break;
      }
    }

    const span = b.timestamp - a.timestamp;
    const t = span > 0 ? Math.max(0, Math.min(1, (renderTime - a.timestamp) / span)) : 1;
    remote.position.lerpVectors(a.position, b.position, t);
    remote.quaternion.slerpQuaternions(a.quaternion, b.quaternion, t);
  }

  // ─────────────────────────────────────────────── send ──
  /**
   * Send input state every frame.
   * Includes position/quaternion so server can relay in gameState.
   */
  sendInput(inputState) {
    if (!this._socket?.connected) return;
    this._socket.emit('input', inputState);
  }

  /** Called by Weapon when a snowball hits a remote player */
  sendHit(targetId, damage) {
    if (!this._socket?.connected) return;
    this._socket.emit('hit', { targetId, damage });
  }

  /** Called by Weapon on melee contact */
  sendMeleeHit(targetId) {
    if (!this._socket?.connected) return;
    this._socket.emit('meleeHit', { targetId });
  }

  // ─────────────────────────────────────── callbacks ──
  onJoined(cb)         { this._onJoinedCb         = cb; }
  onGameState(cb)      { this._onGameStateCb      = cb; }
  onPlayerDied(cb)     { this._onPlayerDiedCb     = cb; }
  onGameOver(cb)       { this._onGameOverCb       = cb; }
  onMeleeConfirmed(cb) { this._onMeleeConfirmedCb = cb; }
  onRespawn(cb)        { this._onRespawnCb        = cb; }
  onProjectile(cb)     { this._onProjectileCb     = cb; }

  sendProjectile(data) {
    if (!this._socket?.connected) return;
    this._socket.emit('spawnProjectile', data);
  }

  requestMapChange(mapId) {
    if (!this._socket?.connected) return;
    this._socket.emit('requestMapChange', { mapId });
  }

  // ─────────────────────────────────────── getters ──
  get latency()       { return this._latency; }
  get playerId()      { return this._playerId; }
  get remotePlayers() { return this._remotePlayers; }
  get currentMapId()  { return this._currentMapId; }
}