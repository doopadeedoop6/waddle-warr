# Waddle Wars — Bug Report (Phase 16–18)

> Audited: 2026-04-27  
> Branch: `master`  
> Files read: `server/GameRoom.js`, `server/PhysicsWorld.js`, `server/MapLoader.js`, `server/ServerPlayer.js`, `server/index.js`, `client/main.js`, `client/src/Game.js`, `client/src/Network.js`, `client/src/RemotePlayer.js`, `client/src/maps/index.js`, `client/src/maps/GlacierCanyonMap.js`, `client/src/maps/GlacierCanyon.js`, `client/src/maps/BaseMap.js`, `shared/maps/index.js`, `shared/maps/glacier_canyon.config.js`, `shared/maps/ice_planet.config.js`, `shared/maps/arena.config.js`

---

## Summary

**14 confirmed bugs** (3 Critical · 5 High · 4 Medium · 2 Low)

The most severe problems are all concentrated in the Glacier Canyon rebuild (Phase 17): the server and client ended up running two completely different physics worlds at two different coordinate scales. Every player on the Glacier Canyon map spawns in the wrong location (typically inside a cliff wall), and the server bounds-clamp fires at the wrong threshold. These three issues together make the map unplayable.

| Severity | Count |
|----------|-------|
| Critical | 3 |
| High     | 5 |
| Medium   | 4 |
| Low      | 2 |

---

## Bugs

---

### BUG-001 — Glacier Canyon: server and client physics worlds are at completely different scales

- **Files:** `shared/maps/glacier_canyon.config.js` · `client/src/maps/GlacierCanyon.js`
- **Severity:** Critical
- **Phase:** 16 / 17

**Description:**  
Phase 17 rebuilt Glacier Canyon as a 400 × 400 unit map, but the shared config (`glacier_canyon.config.js`) was never updated to match. The server loads the old config; the client loads `GlacierCanyon.js` directly and ignores the config entirely. The two physics worlds are unrelated to each other.

| Property | Server (`glacier_canyon.config.js`) | Client (`GlacierCanyon.js`) |
|---|---|---|
| Map half-extent | 100 | ~202 (walls at ±202) |
| Corner platforms | centre ±54, top y=3 | centre ±108, top y=6 |
| Boundary wall Z | ±101 | ±202 |
| Bridge deck | y=6.5 | y=14 |

Concretely: the server's SW boundary wall body is `pos=[0, 8, -101] size=[202, 16, 6]`; the client's equivalent is a CANNON body centred at `(0, 16, -202)` with size `(404, 32, 12)` — double the coordinate and double the scale in every axis.

**Reproduction:** Join any Glacier Canyon game. Open the physics debugger (`` ` `` key). Server-side collision bodies bear no geometric relationship to the client visual or client physics.

**Suggested fix:** Create `shared/maps/glacier_canyon_v2.config.js` whose obstacles, spawn points, and `mapHalf` match the Phase 17 geometry (400 × 400, corners at ±108, etc.). Register it in `shared/maps/index.js` and make `GlacierCanyonMap` use it the same way `IcePlanet` uses its config.

---

### BUG-002 — Glacier Canyon: server spawn points place players inside cliff walls

- **Files:** `shared/maps/glacier_canyon.config.js` (lines 28–36) · `client/src/maps/GlacierCanyon.js` (lines 83–96, 292–313)
- **Severity:** Critical
- **Phase:** 16 / 17

**Description:**  
The server assigns spawn positions from `glacier_canyon.config.js`. The SW spawn points are `[-50, 3.5, 50]`, `[-58, 3.5, 50]`, etc. On the rebuilt 400 × 400 client map the SW inner canyon cliff (Block-A) is a CANNON body centred at `(-62, 11, 70)` with half-extents `(14, 11, 24)`, spanning `x ∈ [-76, -48]`, `z ∈ [46, 94]`.

Spawn point `(-50, 3.5, 50)`:  
- `x = -50` ∈ `[-76, -48]` ✓  
- `z = 50` ∈ `[46, 94]` ✓  

The first player spawns entirely inside a cliff wall. Physics will immediately eject the player with an unpredictable velocity, or lock them in a clipping state depending on the solver.

The client's own `SPAWN_POINTS` are at `{x:-116, y:6.9, z:100}` and are never used (BUG-005 explains why), so the only spawn coordinates in play are the wrong ones from the config.

**Reproduction:** Start a Glacier Canyon game. Player 0 (first to join) will clip through the floor/cliff and teleport erratically.

**Suggested fix:** Fix BUG-001 first. The new v2 config's spawn points should match the client's `SPAWN_POINTS` array.

---

### BUG-003 — Default server URL in Network.js uses port 3000; server listens on port 3001

- **File:** `client/src/Network.js` (line 4) · `server/index.js` (line 7)
- **Severity:** Critical
- **Phase:** 18

**Description:**

```js
// Network.js line 4
const SERVER_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:3000';

// server/index.js line 7
const PORT = process.env.PORT || 3001;
```

Without `VITE_SERVER_URL` set in the environment, every client connection attempt targets port 3000. The server is not listening on that port. The connection times out after 10 s (lobby) or 3 s (solo path in Game.js), falling back to solo offline mode silently. Multiplayer is impossible in a default local-dev setup.

**Reproduction:** `npm run dev` (or equivalent) without setting `VITE_SERVER_URL`. Open the game in a browser. Network tab shows a failed WebSocket connection to `ws://localhost:3000/socket.io/`.

**Suggested fix:**

```js
// Network.js line 4
const SERVER_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:3001';
```

---

### BUG-004 — Win condition never fires when a player disconnects during a 2-player game

- **File:** `server/GameRoom.js` (lines 173, 302–321)
- **Severity:** High
- **Phase:** 17 / 18

**Description:**

```js
// GameRoom.js _checkWinCondition
_checkWinCondition() {
  if (this._state !== 'PLAYING') return;
  if (this._players.size < 2) return;   // ← the problem
  const alive = [...this._players.values()].filter(p => p.alive);
  if (alive.length > 1) return;
  // ... declare winner
}
```

`handleDisconnect` removes the leaving player from `_players`, then calls `_checkWinCondition`. If the game started with 2 players and one disconnects, `_players.size` drops to 1. The guard `size < 2` fires and exits immediately. The remaining player is trapped in an endless `PLAYING` loop with no opponents and no way to win. The game loop runs until the server process is restarted.

**Reproduction:** Start a 2-player Glacier Canyon game. Close one browser tab.

**Suggested fix:**

```js
_checkWinCondition() {
  if (this._state !== 'PLAYING') return;
  const alive = [...this._players.values()].filter(p => p.alive);
  if (alive.length > 1) return;
  if (this._players.size === 0 && alive.length === 0) return; // truly empty room
  // ... declare winner
}
```

---

### BUG-005 — GlacierCanyonMap ignores its config argument entirely

- **File:** `client/src/maps/GlacierCanyonMap.js` (lines 6–12)
- **Severity:** High
- **Phase:** 16

**Description:**

```js
export class GlacierCanyonMap {
  constructor(_config) {           // underscore signals "intentionally unused"
    this.groundY       = 0;        // hardcoded
    this.mapHalf       = 100;      // hardcoded (config says 100, but see BUG-001)
    this.gravity       = new THREE.Vector3(0, -28, 0);  // hardcoded
    this.spawnPoints   = SPAWN_POINTS.map(...);          // from GlacierCanyon.js, not config
  }
```

Unlike `IcePlanet` and `ArenaMap`, `GlacierCanyonMap` does not extend `BaseMap` and does not read from the shared config. This breaks the architecture that lets the server and client share a single source of truth. Any change to `glacier_canyon.config.js` is silently ignored on the client.

It also means the `dispose()` method does not call `scene.remove()` on visual objects (no `_sceneObjects` tracking), causing memory leaks on map switches.

**Suggested fix:** Extend `BaseMap`, remove hardcoded property assignments, and build obstacle physics by iterating `this.obstacles` from config (the same pattern `BaseMap._buildObstacleMeshes` uses).

---

### BUG-006 — ServerPlayer clamps positions to MAP_HALF=200 but Glacier Canyon's mapHalf is 100

- **File:** `server/ServerPlayer.js` (lines 1, 28–32)
- **Severity:** High
- **Phase:** 16 / 17

**Description:**

```js
// ServerPlayer.js line 1
const MAP_HALF = 200;   // hardcoded module constant

applyClientState(input) {
  this.position = {
    x: Math.max(-MAP_HALF, Math.min(MAP_HALF, p.x)),  // clamps to ±200
    z: Math.max(-MAP_HALF, Math.min(MAP_HALF, p.z)),
  };
}
```

`PhysicsWorld.updatePlayerPosition` also clamps, but to `this._mapLoader.mapHalf` (100 for Glacier Canyon). The two clamps are inconsistent:

- `ServerPlayer.position` (used for melee range check, broadcast, kill feed) allows ±200  
- Physics body (used for knockback, support-Y raycast) clamps to ±100  

A player standing at `x=150` will have `position.x=150` in `ServerPlayer` but `body.position.x=100` in the physics world. Melee distance calculated from `ServerPlayer.position` will differ from actual physical separation.

`MAP_HALF = 200` happens to match `ice_planet.config.js` (`mapHalf: 200`) but silently mismatches Glacier Canyon.

**Suggested fix:** Remove the hardcoded constant and pass `mapHalf` from the config through `GameRoom` to `ServerPlayer`, or look it up from the map loader.

---

### BUG-007 — enterLobby() stacks duplicate event listeners on each invocation

- **File:** `client/main.js` (lines 70–85)
- **Severity:** High
- **Phase:** 18

**Description:**

```js
async function enterLobby() {
  // ... validation ...

  document.querySelectorAll('.map-btn').forEach(btn => {
    btn.addEventListener('click', () => { ... });  // added every call
  });

  startBtn.addEventListener('click', () => { ... });  // added every call
  soloBtn.addEventListener('click',  () => launchGame(null));  // added every call
```

These `addEventListener` calls are inside `enterLobby`, which is wired to both `joinBtn` (click) and `usernameInput` (keydown Enter). The join button is never disabled after the first successful call, so a user who presses Enter rapidly (or double-clicks) will register N listeners on each button. Each subsequent click on `startBtn` fires N `requestStartGame()` calls, potentially starting the game N times. Each click on a map button fires N `requestMapChange()` calls.

**Reproduction:** Press Enter twice quickly in the username field. Then click a map button — two `requestMapChange` events are sent.

**Suggested fix:** Disable `joinBtn` immediately on first call, or use `{ once: true }` on the inner listeners:

```js
startBtn.addEventListener('click', () => { if (_network) _network.requestStartGame(); }, { once: true });
```

Or move the listener wiring outside `enterLobby` entirely.

---

### BUG-008 — Blizzard zone is designed and exported but never activated

- **File:** `client/src/maps/GlacierCanyon.js` (lines 469–481) · `server/GameRoom.js` (lines 29, 282–298)
- **Severity:** High
- **Phase:** 16

**Description:**

`GlacierCanyon.js` exports a detailed `BLIZZARD_ZONE` object with six time-keyed stages:

```js
export const BLIZZARD_ZONE = {
  stages: [
    { time:   0, halfX: 100, halfZ: 100 },
    { time:  70, halfX:  70, halfZ:  70 },
    // ...
    { time: 175, halfX: 0, halfZ: 0 },
  ],
  damagePerSecond: 5,
};
```

`GameRoom` initialises `this._blizzard = { radius: 9999, active: false }` and never mutates `active`. `_applyBlizzard` exits on line 283 (`if (!this._blizzard.active) return;`) on every tick. Nothing in the game loop reads `BLIZZARD_ZONE` or starts a shrink timer.

Late-game has no closing zone; 16 players can camp indefinitely.

**Suggested fix:** Import `BLIZZARD_ZONE` from the map config (or a shared constant), start a game-time counter in `_startGame`, and in `_applyBlizzard` compare elapsed time against the stage breakpoints to set `this._blizzard.radius` and `this._blizzard.active`.

---

### BUG-009 — `glacier_canyon_v2.config.js` does not exist

- **File:** `shared/maps/` (directory) · `shared/maps/index.js`
- **Severity:** Medium
- **Phase:** 17

**Description:**  
Phase 17 is described as "16-player Glacier Canyon rebuild (400 × 400 map)." The naming convention for a second version would be `glacier_canyon_v2.config.js`, but no such file exists in `shared/maps/`. The existing `glacier_canyon.config.js` still describes the old 200 × 200 geometry (BUG-001). Either the v2 config was planned but never written, or it was written and accidentally deleted/omitted from the repo.

The impact is that BUG-001 cannot be fixed without creating this file.

**Suggested fix:** Create `shared/maps/glacier_canyon_v2.config.js` matching the rebuilt 400 × 400 geometry, or update `glacier_canyon.config.js` in-place and adjust spawn/obstacle coordinates to match `GlacierCanyon.js`.

---

### BUG-010 — `socket.once('joined')` fires once; stale `playerId` after reconnect

- **File:** `client/src/Network.js` (lines 60–67) · `server/index.js` (line 22)
- **Severity:** Medium
- **Phase:** 18

**Description:**

```js
// Network.js
this._socket.once('joined', (data) => {
  this._playerId = data.playerId;
  this._joinData = data;
  resolve(data);
});

// server/index.js
socket.once('join', (data) => gameRoom.handleJoin(socket, data));
```

On a Socket.IO reconnect the client reuses the same `socket` object but receives a new `socket.id`. The server fires a new `connection` event and registers a fresh `once('join')` listener. The Network.js `reconnect` handler correctly re-emits `join`, and the server accepts it and responds with a new `joined` event — but the client's `once('joined')` listener was already consumed during the original connect. The new `joined` event is silently dropped.

Consequences:
- `this._playerId` keeps the old (now-invalid) id
- `this._joinData.spawnPosition` keeps the old spawn
- The old player entry on the server was removed on disconnect; the new entry uses a new socket id the client doesn't know about
- All subsequent `sendHit`, `sendMeleeHit` etc. reference a player id the server no longer recognises

**Reproduction:** Join a game, disconnect the network briefly (DevTools → throttle → offline → back online), then fire a snowball. Hit never registers.

**Suggested fix:** Replace `once('joined', ...)` with a persistent `on('joined', ...)` handler that updates `_playerId` and `_joinData` on every receipt. Guard the `resolve()` call for the initial Promise with a flag so it is only called once.

---

### BUG-011 — Melee range check is 2D only; works across elevation gaps

- **File:** `server/GameRoom.js` (lines 238–245) · `server/PhysicsWorld.js` (lines 91–95)
- **Severity:** Medium
- **Phase:** 16

**Description:**

```js
// GameRoom._processMelee
const dx   = target.position.x - attacker.position.x;
const dz   = target.position.z - attacker.position.z;
const dist = Math.sqrt(dx * dx + dz * dz);   // ← Y axis ignored

if (dist > MELEE_RANGE) { ... continue; }   // MELEE_RANGE = 3.5
```

A player standing on the bridge (y ≈ 14) and a player directly below on the canyon floor (y ≈ 0) have a vertical separation of 14 units. If their XZ separation is 3 units, `dist = 3 < 3.5`, so the melee registers as a hit despite 14 units of actual separation.

`PhysicsWorld.validateMelee()` has the same flaw (lines 92–95) and is also never called (BUG-014).

**Suggested fix:**

```js
const dx = target.position.x - attacker.position.x;
const dy = target.position.y - attacker.position.y;
const dz = target.position.z - attacker.position.z;
const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
```

---

### BUG-012 — Server physics simulation results are never broadcast; gameState uses client-reported positions

- **File:** `server/GameRoom.js` (lines 344–352) · `server/PhysicsWorld.js` (line 143)
- **Severity:** Medium
- **Phase:** 16 / 17

**Description:**

`PhysicsWorld.getPlayerPositions()` exists and returns authoritative server-simulated positions, but it is never called anywhere in `GameRoom`. The `_broadcastState` method broadcasts `p.getState()` from `ServerPlayer`, whose `position` field is set by `applyClientState` (client-reported). The server physics step runs every tick, applies knockback, clamps bounds, and detects support — but its outputs are only used for those side effects and are never relayed to clients.

```js
// GameRoom._broadcastState (line 344)
players: [...this._players.values()].map(p => p.getState())
// getState() returns ServerPlayer.position — set by client, not by physics
```

This means knockback velocity is applied to the server physics body (line 252), but other clients see the victim at the client-reported position, not the knocked-back position. Knockback is therefore visual-only from the perspective of spectators and has no server authority.

**Suggested fix:** After `this._physics.step(delta)`, call `getPlayerPositions()` and update each `ServerPlayer.position` from the physics result before calling `_broadcastState`.

---

### BUG-013 — `GlacierCanyon.js` logs full JSON of all collision bodies to console on every build

- **File:** `client/src/maps/GlacierCanyon.js` (line 465)
- **Severity:** Low
- **Phase:** 16

**Description:**

```js
// GlacierCanyon.js line 465
console.log(JSON.stringify(COLLISION_BODIES));
```

A debug line that serialises the entire collision body array (dozens of objects) is emitted to the browser console every time `buildGlacierCanyon` is called. This runs each time Glacier Canyon is loaded. In production it is noisy; in heavy-traffic usage it adds measurable serialisation overhead.

**Suggested fix:** Remove the line.

---

### BUG-014 — `PhysicsWorld.validateMelee()` exists but is never called

- **File:** `server/PhysicsWorld.js` (lines 86–106) · `server/GameRoom.js` (lines 231–277)
- **Severity:** Low
- **Phase:** 16

**Description:**

`PhysicsWorld` exposes `validateMelee(attackerId, targetId)` which checks distance against the physics bodies (rather than the client-reported `ServerPlayer.position`) and returns a normalised knockback direction. `GameRoom._processMelee` ignores it and duplicates the distance logic inline using `player.position` (client-reported), manually computing knockback.

The duplicated knockback computation in `_processMelee` also has a non-obvious formula:

```js
// GameRoom.js line 247–250
const hLen = Math.sqrt(dx * dx + dz * dz) || 1;
const kx = dx / hLen, kz = dz / hLen;
const fullLen = Math.sqrt(kx * kx + 0.09 + kz * kz); // 0.09 = 0.3²
const knockbackDir = { x: kx / fullLen, y: 0.3 / fullLen, z: kz / fullLen };
```

`kx` and `kz` are already a unit XZ vector; `kx*kx + kz*kz = 1` always. So `fullLen = Math.sqrt(1 + 0.09) = Math.sqrt(1.09) ≈ 1.044` — a constant. The normalisation step is redundant and the Y component (`0.3 / 1.044 ≈ 0.287`) is slightly off from the intended `0.3`. In contrast `PhysicsWorld.validateMelee` performs a clean normalisation. The dead code implies the two implementations diverged during a refactor.

**Suggested fix:** Call `this._physics.validateMelee(attackerId, targetId)` and use its `knockbackDir` result, then remove the duplicate inline calculation.

---

## Unverified risks

These patterns look suspicious but could not be confirmed without running the game:

1. **Respawn camping** — `_scheduleRespawn` always sends players back to `spawnPoints[player.spawnIndex % spawnPoints.length]`. Because `spawnIndex` is set once at join time, every respawn goes to the same pad. Players with the same spawn index (because the original occupant left and someone else was assigned the same index) could be stacked on the same platform.

2. **Fall-off-map soft-lock** — If a player falls below `groundY` (e.g. through a seam in the physics due to the server/client mismatch in BUG-001), there is no server-side detection of `position.y < groundY` and no automatic kill or respawn trigger. The player would be frozen in void with full HP.

3. **Remote projectile gravity constant** — `Game._updateRemoteProjectiles` applies `GRAVITY = map.gravity.y * 0.8` (line 228), while local snowball physics uses full gravity. Remote projectiles appear to fly ~25% further than they actually do, making hit feedback misleading.

4. **Solo path reconnects to server anyway** — Clicking the solo button calls `launchGame(null)`. `Game.start()` then tries to `network.connect()` with a 3-second timeout. If the server is reachable, the player ends up in a multiplayer session they didn't intend to join. If the server is not reachable, they fall through to offline mode. The "solo" intent is not enforced.

5. **Map change after game-over reset** — `GameRoom._reset()` at line 363 reconstructs `MapLoader` and `PhysicsWorld` from `this._currentMapId` (the last map played). If a map-change request arrives in the brief window between `gameOver` being emitted and `_reset()` completing (10 s timeout, line 320), `setMap` correctly rejects it (`state !== 'WAITING'`). However a request arriving after `_reset()` completes will succeed and change the map for the next session — but the broadcast happens immediately (`emit('mapChanged')`), and any clients still on the end-game screen (which may take more than 10 s for some players) will receive this silently and load the wrong map on next rejoin.

6. **`SERVER_LINEAR_DAMPING = 0.4` comment mismatch** — `PhysicsWorld.js` line 10 sets damping to `0.4`. The comment above (lines 6–9) says it should correspond to `ICE_DAMPING = 0.88 per frame @ 60fps ≈ 0.9994 per second`. The comment then says to use `0.85` as a conservative value, but the code uses `0.4`. Sliding behaviour on the server (used for knockback physics) decays significantly faster than the comment intends, which may cause knockback to look weaker to other players than the victim feels it.
