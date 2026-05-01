import { ServerPlayer } from './ServerPlayer.js';
import { BotPlayer } from './BotPlayer.js';
import { PhysicsWorld } from './PhysicsWorld.js';
import { MapLoader } from './MapLoader.js';
import { DEFAULT_MAP_ID, listMapIds } from '../shared/maps/index.js';

const TICK_MS          = 20;   // 50 tick/s
const MAX_PLAYERS      = 16;
const BLIZZARD_DAMAGE  = 5;    // HP/s
const MELEE_DAMAGE     = 33;
const MELEE_RANGE      = 3.5;
const ASSIST_WINDOW_MS = 5000; // assists awarded within 5 s of kill
const VALID_DURATIONS  = [5, 10, 15, 20]; // minutes
const DEFAULT_DURATION = 10;   // minutes

const PLAYER_COLORS = [
  '#ff4444','#ffaa00','#44ff88','#ff44aa',
  '#00ccff','#ff8800','#8844ff','#ffff44',
  '#ff0066','#00ff88','#4488ff','#ff6644',
  '#88ff00','#ff0088','#00aaff','#44aaff',
];

const BOT_NAMES = [
  'IcyBot','SnowBot','FrostyBot','PolarBot','ChillBot',
  'BlizzBot','GlacierBot','TundraBot','ArcticBot','WaddleBot',
  'FlipperBot','IceQueenBot','PenguBot','SleetBot','StormBot',
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

    this._timeRemaining = 0;
    this._gameDuration  = DEFAULT_DURATION * 60;
    this._damageLog     = [];   // [{ targetId, attackerId, timestamp }]
    this._botCounter    = 0;
    this._botThrowQueue = [];

    console.log(`[GameRoom] map: ${this._currentMapId} code: ${this._roomCode}`);
  }

  // ───────────────────────────────────────────── public API ──

  get playerCount()  { return this._players.size; }
  get state()        { return this._state; }
  get currentMapId() { return this._currentMapId; }

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
    if (this._players.has(socket.id)) {
      console.warn(`[GameRoom] duplicate join ignored: ${socket.id}`);
      return;
    }
    if (this._players.size >= MAX_PLAYERS) {
      socket.emit('error', { message: 'Room full' });
      return;
    }

    const spawnPoints = this._mapLoader.spawnPoints;
    const idx         = this._players.size;
    const color       = PLAYER_COLORS[idx % PLAYER_COLORS.length];
    const sp          = spawnPoints[idx % spawnPoints.length];
    const spawnPosition = { x: sp[0], y: sp[1], z: sp[2] };

    const player = new ServerPlayer(socket.id, username || 'Penguin', color, spawnPosition, idx);
    this._players.set(socket.id, player);
    socket.join(this._roomId);
    console.log(`[GameRoom] socket ${socket.id} joined Socket.IO room: ${this._roomId}`);

    this._physics.addPlayer(socket.id, spawnPosition);
    socket.emit('joined', {
      playerId: socket.id, color, spawnPosition,
      mapId: this._currentMapId, roomCode: this._roomCode,
    });
    console.log(`[GameRoom] ${username} joined (${this._players.size} players)`);

    this._broadcastPlayerList();

    if (this._state === 'PLAYING') {
      socket.emit('gameStarted', { duration: this._gameDuration });

      const snapshot = [...this._players.values()]
        .filter(p => p.id !== socket.id)
        .map(p => ({
          id: p.id, username: p.username, color: p.color,
          position: p.position, hp: p.hp, alive: p.alive,
          kills: p.kills, deaths: p.deaths, assists: p.assists,
        }));
      socket.emit('roomSnapshot', snapshot);
    }
  }

  // ───────────────────────────────────────────── startGame ──

  handleStartGame(socket, data = {}) {
    if (this._state !== 'WAITING') {
      socket.emit('startGameResult', { ok: false, reason: 'Game already started' });
      return;
    }
    if (this._players.size < 1) {
      socket.emit('startGameResult', { ok: false, reason: 'No players in room' });
      return;
    }
    const durationMins = VALID_DURATIONS.includes(data.duration) ? data.duration : DEFAULT_DURATION;
    const maxBots  = MAX_PLAYERS - this._players.size;
    const botCount = (typeof data.botCount === 'number')
      ? Math.max(0, Math.min(maxBots, Math.floor(data.botCount)))
      : maxBots;
    if (botCount > 0) this._addBots(botCount);
    this._broadcastPlayerList();
    this._startGame(durationMins * 60);
  }

  handleSoloPlay(socket, data = {}) {
    if (this._state !== 'WAITING') {
      socket.emit('startGameResult', { ok: false, reason: 'Game already started' });
      return;
    }
    const durationMins = VALID_DURATIONS.includes(data.duration) ? data.duration : DEFAULT_DURATION;
    const maxBots  = MAX_PLAYERS - this._players.size;
    const botCount = (typeof data.botCount === 'number')
      ? Math.max(0, Math.min(maxBots, Math.floor(data.botCount)))
      : maxBots;
    if (botCount > 0) this._addBots(botCount);
    this._broadcastPlayerList();
    this._startGame(durationMins * 60);
  }

  // ───────────────────────────────────────────── input ──

  handleInput(socket, inputState) {
    const player = this._players.get(socket.id);
    if (!player) return;
    player.applyClientState(inputState, this._mapLoader.mapHalf, this._mapLoader.groundY);
    if (inputState.position && inputState.velocity) {
      this._physics.updatePlayerPosition(socket.id, inputState.position, inputState.velocity);
    }
  }

  handleHit(socket, { targetId, damage }) {
    if (this._state !== 'PLAYING') return;
    this._hitQueue.push({ attackerId: socket.id, targetId, damage });
  }

  handleMeleeHit(socket, { targetId }) {
    if (this._state !== 'PLAYING') return;
    this._meleeQueue.push({ attackerId: socket.id, targetId });
  }

  handleProjectile(socket, data) {
    socket.to(this._roomId).emit('remoteProjectile', { ...data, shooterId: socket.id });
  }

  handleDropCollected(socket) {
    if (this._state !== 'PLAYING') return;
    const player = this._players.get(socket.id);
    if (!player || !player.alive) return;
    player.hp = Math.min(100, player.hp + 10);
  }

  handleDisconnect(socket) {
    const player = this._players.get(socket.id);
    if (!player) return;
    console.log(`[GameRoom] ${player.username} disconnected`);
    this._physics.removePlayer(socket.id);
    this._players.delete(socket.id);
    this._broadcastPlayerList();

    if (this._state === 'PLAYING') {
      // End game only when no human players remain
      const humanCount = [...this._players.values()].filter(p => !p.isBot).length;
      if (humanCount === 0) {
        clearInterval(this._gameLoop);
        this._gameLoop = null;
        this._reset();
      }
    }
  }

  // ───────────────────────────────────────── game flow ──

  _startGame(duration = DEFAULT_DURATION * 60) {
    this._state         = 'PLAYING';
    this._tick          = 0;
    this._timeRemaining = duration;
    this._gameDuration  = duration;
    this._damageLog     = [];
    this._lastTickTime  = Date.now();
    this._gameLoop      = setInterval(() => this._tickFn(), TICK_MS);
    console.log(`[GameRoom] game started — duration: ${duration}s`);
    this._io.to(this._roomId).emit('gameStarted', { duration });
  }

  _tickFn() {
    this._tick++;
    const now   = Date.now();
    const delta = (now - this._lastTickTime) / 1000;
    this._lastTickTime = now;

    this._timeRemaining -= delta;

    this._processHits();
    this._tickBots(delta);
    this._processBotThrows();
    this._processMelee();
    this._applyBlizzard(delta);
    this._physics.step(delta);

    const authoritativePositions = this._physics.getPlayerPositions();
    for (const [playerId, physicsPos] of authoritativePositions) {
      const player = this._players.get(playerId);
      if (player) {
        player.position.x = physicsPos.position.x;
        player.position.y = physicsPos.position.y;
        player.position.z = physicsPos.position.z;
        player.velocity.x = physicsPos.velocity.x;
        player.velocity.y = physicsPos.velocity.y;
        player.velocity.z = physicsPos.velocity.z;
      }
    }

    // Fall-death: player fell into the void
    for (const [playerId, player] of this._players) {
      if (!player.alive) continue;
      if (player.position.y < -5) {
        player.die();
        this._io.to(this._roomId).emit('playerDied', {
          id: playerId, killerId: null,
          killerName: 'The Void', victimName: player.username, method: 'void',
        });
        this._scheduleRespawn(playerId);
      }
    }

    this._checkTimeExpired();
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

      // Log damage for assist tracking
      this._damageLog.push({ targetId, attackerId, timestamp: now() });

      const result = target.takeDamage(validDmg, attackerId, 'snowball');

      if (result.died) {
        target.die();
        attacker.kills++;
        this._awardAssists(targetId, attackerId);
        console.log(`[GameRoom] ${attacker.username} waddled ${target.username}`);
        this._io.to(this._roomId).emit('playerDied', {
          id:         targetId,
          killerId:   attackerId,
          killerName: attacker.username,
          victimName: target.username,
          method:     'snowball',
        });
        this._scheduleRespawn(targetId);
      }
    }
    this._pruneLog();
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
      const fullLen = Math.sqrt(kx * kx + 0.09 + kz * kz);
      const knockbackDir = { x: kx / fullLen, y: 0.3 / fullLen, z: kz / fullLen };

      this._physics.applyKnockback(targetId, knockbackDir, 8);

      // Log damage for assist tracking
      this._damageLog.push({ targetId, attackerId, timestamp: now() });

      const result = target.takeDamage(MELEE_DAMAGE, attackerId, 'melee');

      this._io.to(this._roomId).emit('meleeConfirmed', { targetId, attackerId, knockbackDir });

      console.log(`[GameRoom] melee hit dist=${dist.toFixed(2)} dmg=${MELEE_DAMAGE} ${attacker.username}→${target.username} hp=${target.hp}`);

      if (result.died) {
        target.die();
        attacker.kills++;
        this._awardAssists(targetId, attackerId);
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
    this._pruneLog();
  }

  // ───────────────────────────────────────── assist helper ──

  _awardAssists(targetId, killerId) {
    const cutoff  = now() - ASSIST_WINDOW_MS;
    const awarded = new Set();
    for (const log of this._damageLog) {
      if (log.targetId    !== targetId)  continue;
      if (log.attackerId  === killerId)  continue;
      if (log.timestamp    < cutoff)     continue;
      if (awarded.has(log.attackerId))   continue;
      const assister = this._players.get(log.attackerId);
      if (assister) { assister.assists++; awarded.add(log.attackerId); }
    }
  }

  _pruneLog() {
    const cutoff = now() - ASSIST_WINDOW_MS;
    this._damageLog = this._damageLog.filter(l => l.timestamp >= cutoff);
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
          this._scheduleRespawn(player.id);
        }
      }
    }
  }

  // ───────────────────────────────────────── win condition (time) ──

  _checkTimeExpired() {
    if (this._state !== 'PLAYING') return;
    if (this._timeRemaining > 0) return;

    this._state = 'ENDED';

    // Sort by kills desc, then deaths asc (fewer deaths breaks tie)
    const players = [...this._players.values()];
    players.sort((a, b) => b.kills - a.kills || a.deaths - b.deaths);
    const winner = players[0] ?? null;

    const standings = players.map(p => ({
      id:       p.id,
      username: p.username,
      color:    p.color,
      kills:    p.kills,
      deaths:   p.deaths,
      assists:  p.assists,
    }));

    console.log(`[GameRoom] time up — winner: ${winner?.username ?? 'nobody'} (${winner?.kills ?? 0}K/${winner?.deaths ?? 0}D)`);

    this._io.to(this._roomId).emit('gameOver', {
      winnerId:   winner?.id   ?? null,
      winnerName: winner?.username ?? 'Nobody',
      standings,
    });

    clearInterval(this._gameLoop);
    this._gameLoop = null;
    setTimeout(() => this._reset(), 15_000);
  }

  // ───────────────────────────────────────── respawn ──

  _scheduleRespawn(targetId) {
    setTimeout(() => {
      const player = this._players.get(targetId);
      if (!player || this._state !== 'PLAYING') return;

      const spawnPoints = this._mapLoader.spawnPoints;
      const mapHalf     = this._mapLoader.mapHalf;
      let spawnPos;
      if (player.isBot) {
        // Bots respawn at a random position on the safe inner ring — never at human spawn points
        const spawnY = spawnPoints.length > 0 ? spawnPoints[0][1] : 1;
        const r      = Math.min(mapHalf * 0.3, 45);
        const angle  = Math.random() * Math.PI * 2;
        spawnPos = { x: Math.cos(angle) * r, y: spawnY, z: Math.sin(angle) * r };
      } else {
        const sp = spawnPoints[player.spawnIndex % spawnPoints.length];
        spawnPos = { x: sp[0], y: sp[1], z: sp[2] };
      }

      player.respawn(spawnPos);
      if (!player.isBot) {
        this._physics.updatePlayerPosition(targetId, spawnPos, { x: 0, y: 0, z: 0 });
      }
      this._io.to(this._roomId).emit('playerRespawned', {
        id: targetId, spawnPosition: spawnPos, hp: 100,
      });
      console.log(`[GameRoom] ${player.username} respawned`);
    }, 5000);
  }

  _broadcastState() {
    this._io.to(this._roomId).emit('gameState', {
      tick:          this._tick,
      players:       [...this._players.values()].map(p => p.getState()),
      zone:          { radius: this._blizzard.radius, active: this._blizzard.active },
      timeRemaining: Math.max(0, Math.ceil(this._timeRemaining)),
      gameDuration:  this._gameDuration,
      pickups:       [],
    });
  }

  _broadcastPlayerList() {
    const list = [...this._players.values()].map(p => ({
      id: p.id, username: p.username, color: p.color,
    }));
    this._io.to(this._roomId).emit('playerList', { players: list });
  }

  // ───────────────────────────────────────── bots ──

  _addBots(count) {
    const spawnPoints = this._mapLoader.spawnPoints;
    const mapHalf     = this._mapLoader.mapHalf;
    // Use actual platform height from spawn points (never use groundY, which is the void floor)
    const spawnY = spawnPoints.length > 0 ? spawnPoints[0][1] : 1;
    // Keep bots within the safe inner area of the main platform (≤45 units from center)
    const r = Math.min(mapHalf * 0.3, 45);
    for (let i = 0; i < count; i++) {
      const idx   = this._players.size;
      if (idx >= MAX_PLAYERS) break;
      const botId  = `bot_${++this._botCounter}`;
      const name   = BOT_NAMES[(this._botCounter - 1) % BOT_NAMES.length];
      const color  = PLAYER_COLORS[idx % PLAYER_COLORS.length];
      // Spread bots evenly around a ring; offset so first bot doesn't face player spawn
      const angle  = (Math.PI / 16) + (i / Math.max(count, 1)) * Math.PI * 2;
      const pos    = { x: Math.cos(angle) * r, y: spawnY, z: Math.sin(angle) * r };
      this._players.set(botId, new BotPlayer(botId, name, color, pos, idx));
    }
  }

  _tickBots(delta) {
    const mapHalf   = this._mapLoader.mapHalf;
    const spawnPts  = this._mapLoader.spawnPoints;
    // Clamp bots to the actual playable platform, not the void boundary (mapHalf).
    // Derive from the max spawn-point radius so it auto-adjusts per map.
    const maxSpawnR = spawnPts.length > 0
      ? Math.max(...spawnPts.map(sp => Math.hypot(sp[0], sp[2])))
      : 45;
    const botBounds = Math.min(mapHalf, maxSpawnR + 12);

    for (const [id, player] of this._players) {
      if (!player.isBot) continue;
      const result = player.think(this._players, delta, botBounds);
      if (result.meleeTarget) {
        this._meleeQueue.push({ attackerId: id, targetId: result.meleeTarget });
      }
      if (result.throwTarget) {
        this._botThrowQueue.push({ attackerId: id, targetId: result.throwTarget });
      }
    }
  }

  _processBotThrows() {
    const queue = this._botThrowQueue.splice(0);
    for (const { attackerId, targetId } of queue) {
      const attacker = this._players.get(attackerId);
      const target   = this._players.get(targetId);
      if (!attacker || !target || !attacker.alive || !target.alive) continue;

      const speed = 22;

      // Lead prediction: aim where the target will be when the snowball arrives
      const dx0  = target.position.x - attacker.position.x;
      const dz0  = target.position.z - attacker.position.z;
      const dist = Math.sqrt(dx0 * dx0 + dz0 * dz0) || 1;
      const tof  = dist / speed; // time-of-flight estimate
      const aimX = target.position.x + (target.velocity?.x ?? 0) * tof * 0.6;
      const aimZ = target.position.z + (target.velocity?.z ?? 0) * tof * 0.6;

      const adx  = aimX - attacker.position.x;
      const adz  = aimZ - attacker.position.z;
      const alen = Math.sqrt(adx * adx + adz * adz) || 1;

      this._io.to(this._roomId).emit('remoteProjectile', {
        shooterId: attackerId,
        position:  { x: attacker.position.x, y: attacker.position.y + 0.5, z: attacker.position.z },
        velocity:  { x: (adx / alen) * speed, y: 2.5, z: (adz / alen) * speed },
        scale:     1,
        color:     attacker.color,
        lifetime:  3,
      });

      // Queue the hit — damage applied on next tick
      this._hitQueue.push({ attackerId, targetId, damage: 20 });
    }
  }

  // ───────────────────────────────────────── reset ──

  _reset() {
    console.log('[GameRoom] resetting to WAITING');
    clearInterval(this._gameLoop);
    this._gameLoop      = null;
    this._state         = 'WAITING';
    this._players.clear();
    this._mapLoader     = new MapLoader(this._currentMapId);
    this._physics       = new PhysicsWorld(this._mapLoader);
    this._tick          = 0;
    this._hitQueue      = [];
    this._meleeQueue    = [];
    this._botThrowQueue = [];
    this._blizzard      = { radius: 9999, active: false };
    this._timeRemaining = 0;
    this._gameDuration  = DEFAULT_DURATION * 60;
    this._damageLog     = [];
  }
}

function now() { return Date.now(); }
