import { ServerPlayer } from './ServerPlayer.js';
import { PhysicsWorld } from './PhysicsWorld.js';
import { MapLoader } from './MapLoader.js';
import { DEFAULT_MAP_ID, listMapIds } from '../shared/maps/index.js';

const TICK_MS         = 20;   // 50 tick/s
const MAX_PLAYERS     = 16;
const BLIZZARD_DAMAGE = 5;    // HP/s
const MELEE_DAMAGE    = 33;
const MELEE_RANGE     = 3.5;

const PLAYER_COLORS = [
  '#ff4444','#ffaa00','#44ff88','#ff44aa',
  '#00ccff','#ff8800','#8844ff','#ffff44',
  '#ff0066','#00ff88','#4488ff','#ff6644',
  '#88ff00','#ff0088','#00aaff','#44aaff',
];

export class GameRoom {
  constructor(io, mapId = DEFAULT_MAP_ID) {
    this._io        = io;
    this._roomId    = 'main';
    this._players   = new Map();   // socketId → ServerPlayer
    this._state     = 'WAITING';
    this._tick      = 0;
    this._gameLoop  = null;
    this._hitQueue  = [];
    this._meleeQueue = [];
    this._blizzard  = { radius: 9999, active: false };
    this._lastTickTime = Date.now();
    this._currentMapId = this._validateMapId(mapId);
    this._mapLoader    = new MapLoader(this._currentMapId);
    this._physics      = new PhysicsWorld(this._mapLoader);
    this._roomCode     = Math.random().toString(36).slice(2, 8).toUpperCase();
    console.log(`[GameRoom] map: ${this._currentMapId} code: ${this._roomCode}`);
  }

  // ───────────────────────────────────────────── public API ──

  get playerCount()  { return this._players.size; }
  get state()        { return this._state; }
  get currentMapId() { return this._currentMapId; }

  // Change map — only allowed in WAITING state (no active game)
  setMap(mapId) {
    const validated = this._validateMapId(mapId);
    if (this._state !== 'WAITING') {
      console.warn(`[GameRoom] setMap ignored — game in state: ${this._state}`);
      return false;
    }
    this._currentMapId = validated;
    this._mapLoader    = new MapLoader(validated);
    this._physics      = new PhysicsWorld(this._mapLoader);
    console.log(`[GameRoom] map changed to: ${validated}`);
    this._io.to(this._roomId).emit('mapChanged', { mapId: validated });
    return true;
  }

  _validateMapId(mapId) {
    const valid = listMapIds();
    if (!valid.includes(mapId)) {
      console.warn(`[GameRoom] unknown mapId "${mapId}", falling back to ${DEFAULT_MAP_ID}`);
      return DEFAULT_MAP_ID;
    }
    return mapId;
  }

  // ───────────────────────────────────────────── join ──

  handleJoin(socket, { username }) {
    if (this._players.size >= MAX_PLAYERS) {
      socket.emit('error', { message: 'Room full' });
      return;
    }

    const spawnPoints = this._mapLoader.spawnPoints;  // [[x,y,z], ...]
    const idx         = this._players.size;
    const color       = PLAYER_COLORS[idx % PLAYER_COLORS.length];
    const sp          = spawnPoints[idx % spawnPoints.length];
    const spawnPosition = { x: sp[0], y: sp[1], z: sp[2] };

    const player = new ServerPlayer(socket.id, username || 'Penguin', color, spawnPosition, idx);
    this._players.set(socket.id, player);
    socket.join(this._roomId);

    this._physics.addPlayer(socket.id, spawnPosition);
    socket.emit('joined', { playerId: socket.id, color, spawnPosition, mapId: this._currentMapId, roomCode: this._roomCode });
    console.log(`[GameRoom] ${username} joined (${this._players.size} players)`);

    this._broadcastPlayerList();

    if (this._players.size >= 2 && this._state === 'WAITING') {
      this._startGame();
    }
  }

  // ───────────────────────────────────────────── input ──

  handleInput(socket, inputState) {
    const player = this._players.get(socket.id);
    if (!player) return;
    player.applyClientState(inputState);
    if (inputState.position && inputState.velocity) {
      this._physics.updatePlayerPosition(socket.id, inputState.position, inputState.velocity);
    }
  }

  // ───────────────────────────────────────────── hit ──

  handleHit(socket, { targetId, damage }) {
    if (this._state !== 'PLAYING') return;
    this._hitQueue.push({ attackerId: socket.id, targetId, damage });
  }

  // ───────────────────────────────────────────── melee ──

  handleMeleeHit(socket, { targetId }) {
    if (this._state !== 'PLAYING') return;
    this._meleeQueue.push({ attackerId: socket.id, targetId });
  }

  // ───────────────────────────────────────────── projectile ──

  handleProjectile(socket, data) {
    socket.to(this._roomId).emit('remoteProjectile', {
      ...data,
      shooterId: socket.id,
    });
  }

  // ───────────────────────────────────────────── disconnect ──

  handleDisconnect(socket) {
    const player = this._players.get(socket.id);
    if (!player) return;
    console.log(`[GameRoom] ${player.username} disconnected`);
    this._physics.removePlayer(socket.id);
    this._players.delete(socket.id);
    this._broadcastPlayerList();
    if (this._state === 'PLAYING') this._checkWinCondition();
  }

  // ───────────────────────────────────────── game flow ──

  _startGame() {
    this._state    = 'PLAYING';
    this._tick     = 0;
    this._lastTickTime = Date.now();
    this._gameLoop = setInterval(() => this._tickFn(), TICK_MS);
    console.log('[GameRoom] game started');
    this._io.to(this._roomId).emit('gameStarted', {});
  }

  _tickFn() {
    this._tick++;
    const now   = Date.now();
    const delta = (now - this._lastTickTime) / 1000;
    this._lastTickTime = now;

    this._processHits();
    this._processMelee();
    this._applyBlizzard(delta);
    this._checkWinCondition();
    this._physics.step(delta);
    this._broadcastState();
  }

  // ───────────────────────────────────────── hit processing ──

  _processHits() {
    const queue = this._hitQueue.splice(0);
    for (const { attackerId, targetId, damage } of queue) {
      const attacker = this._players.get(attackerId);
      const target   = this._players.get(targetId);
      if (!attacker || !target || !attacker.alive || !target.alive) continue;

      const validDmg = Math.max(1, Math.min(80, damage ?? 20));
      const result   = target.takeDamage(validDmg, attackerId, 'snowball');

      if (result.died) {
        target.die();
        attacker.kills++;
        console.log(`[GameRoom] ${attacker.username} waddled ${target.username}`);
        this._io.to(this._roomId).emit('playerDied', {
          id:          targetId,
          killerId:    attackerId,
          killerName:  attacker.username,
          victimName:  target.username,
          method:      'snowball',
        });
        this._scheduleRespawn(targetId);
      }
    }
  }

  // ───────────────────────────────────────── melee processing ──

  _processMelee() {
    const queue = this._meleeQueue.splice(0);
    for (const { attackerId, targetId } of queue) {
      const attacker = this._players.get(attackerId);
      const target   = this._players.get(targetId);
      if (!attacker || !target || !attacker.alive || !target.alive) continue;

      const dx   = target.position.x - attacker.position.x;
      const dz   = target.position.z - attacker.position.z;
      const dist = Math.sqrt(dx * dx + dz * dz);

      if (dist > MELEE_RANGE) {
        console.log(`[GameRoom] melee rejected (dist=${dist.toFixed(2)}): ${attackerId} → ${targetId}`);
        continue;
      }

      const hLen = Math.sqrt(dx * dx + dz * dz) || 1;
      const kx = dx / hLen, kz = dz / hLen;
      const fullLen = Math.sqrt(kx * kx + 0.09 + kz * kz); // 0.09 = 0.3²
      const knockbackDir = { x: kx / fullLen, y: 0.3 / fullLen, z: kz / fullLen };

      this._physics.applyKnockback(targetId, knockbackDir, 8);

      const result = target.takeDamage(MELEE_DAMAGE, attackerId, 'melee');

      this._io.to(this._roomId).emit('meleeConfirmed', {
        targetId,
        attackerId,
        knockbackDir,
      });

      console.log(`[GameRoom] melee hit dist=${dist.toFixed(2)} dmg=${MELEE_DAMAGE} ${attacker.username}→${target.username} hp=${target.hp}`);

      if (result.died) {
        target.die();
        attacker.kills++;
        console.log(`[GameRoom] ${attacker.username} slapped ${target.username}`);
        this._io.to(this._roomId).emit('playerDied', {
          id:         targetId,
          killerId:   attackerId,
          killerName: attacker.username,
          victimName: target.username,
          method:     'melee',
        });
        this._scheduleRespawn(targetId);
      }
    }
  }

  // ───────────────────────────────────────── blizzard ──

  _applyBlizzard(deltaSeconds) {
    if (!this._blizzard.active) return;
    for (const player of this._players.values()) {
      if (!player.alive) continue;
      const dist2D = Math.sqrt(player.position.x ** 2 + player.position.z ** 2);
      if (dist2D > this._blizzard.radius) {
        const result = player.takeDamage(BLIZZARD_DAMAGE * deltaSeconds, null, 'blizzard');
        if (result.died) {
          player.die();
          this._io.to(this._roomId).emit('playerDied', {
            id: player.id, killerId: null,
            killerName: 'Blizzard', victimName: player.username, method: 'blizzard',
          });
        }
      }
    }
  }

  // ───────────────────────────────────────── win condition ──

  _checkWinCondition() {
    if (this._state !== 'PLAYING') return;
    if (this._players.size < 2) return;

    const alive = [...this._players.values()].filter(p => p.alive);
    if (alive.length > 1) return;

    this._state = 'ENDED';
    const winner = alive[0] ?? null;
    console.log(`[GameRoom] game over — winner: ${winner?.username ?? 'nobody'}`);

    this._io.to(this._roomId).emit('gameOver', {
      winnerId:   winner?.id   ?? null,
      winnerName: winner?.username ?? 'Nobody',
    });

    clearInterval(this._gameLoop);
    this._gameLoop = null;
    setTimeout(() => this._reset(), 10_000);
  }

  // ───────────────────────────────────────── respawn ──

  _scheduleRespawn(targetId) {
    setTimeout(() => {
      const player = this._players.get(targetId);
      if (!player || this._state !== 'PLAYING') return;

      const spawnPoints = this._mapLoader.spawnPoints;
      const sp          = spawnPoints[player.spawnIndex % spawnPoints.length];
      const spawnPos    = { x: sp[0], y: sp[1], z: sp[2] };

      player.respawn(spawnPos);
      this._physics.updatePlayerPosition(targetId, spawnPos, { x:0, y:0, z:0 });
      this._io.to(this._roomId).emit('playerRespawned', {
        id: targetId,
        spawnPosition: spawnPos,
        hp: 100,
      });
      console.log(`[GameRoom] ${player.username} respawned`);
    }, 3000);
  }

  _broadcastState() {
    this._io.to(this._roomId).emit('gameState', {
      tick:    this._tick,
      players: [...this._players.values()].map(p => p.getState()),
      zone:    { radius: this._blizzard.radius, active: this._blizzard.active },
      pickups: [],
    });
  }

  _broadcastPlayerList() {
    const list = [...this._players.values()].map(p => ({
      id: p.id, username: p.username, color: p.color,
    }));
    this._io.to(this._roomId).emit('playerList', { players: list });
  }

  // ───────────────────────────────────────── reset ──

  _reset() {
    console.log('[GameRoom] resetting to WAITING');
    clearInterval(this._gameLoop);
    this._gameLoop   = null;
    this._state      = 'WAITING';
    this._players.clear();
    this._mapLoader  = new MapLoader(this._currentMapId);
    this._physics    = new PhysicsWorld(this._mapLoader);
    this._tick       = 0;
    this._hitQueue   = [];
    this._meleeQueue = [];
    this._blizzard   = { radius: 9999, active: false };
  }
}
