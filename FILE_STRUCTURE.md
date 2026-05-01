# Waddle Wars — File Structure

```
waddle-war/
│
├── FILE_STRUCTURE.md          ← this file
├── PROGRESS.md                ← phase-by-phase build log
├── BUG_REPORT.md              ← known issues / bug tracker
├── .env                       ← root-level env (unused; see client/ and server/)
├── .env.example
├── .gitignore
├── .gitattributes
├── netlify.toml               ← Netlify deploy config (client SPA redirect)
├── render.yaml                ← Render deploy config (server)
├── package.json               ← root workspace (optional; client+server each have their own)
│
├── shared/                    ← isomorphic code — imported by BOTH client and server
│   └── maps/
│       ├── index.js           ← registry: MAP_CONFIGS map, getMapConfig(id), listMapIds(), DEFAULT_MAP_ID
│       ├── ice_planet.config.js      ← Ice Planet pure-data config (groundY, mapHalf, gravity,
│       │                               surfaceNormal, spawnPoints, teamSpawns, obstacles, visuals)
│       └── glacier_canyon.config.js  ← Glacier Canyon pure-data config (same shape)
│
├── client/
│   ├── package.json           ← { three, cannon-es, cannon-es-debugger, socket.io-client, vite }
│   ├── vite.config.js         ← Vite dev/build config
│   ├── .env.example           ← VITE_SERVER_URL=http://localhost:3001
│   ├── index.html             ← Shell: lobby DOM + HUD mount point + canvas
│   ├── main.js                ← Entry point: lobby UI, username validation, network pre-connect,
│   │                            fade transition, hands off to Game.start()
│   │
│   ├── public/
│   │   ├── music/
│   │   │   └── bg.mp3         ← Lobby background music
│   │   └── assets/
│   │       └── maps/
│   │           └── arena/     ← GLTF arena map asset (CC-BY-4.0, Heart State Games)
│   │               ├── scene.gltf
│   │               ├── scene.bin
│   │               ├── license.txt
│   │               └── textures/
│   │                   ├── Grey_plain_baseColor.png
│   │                   └── Orange_Playground_textures_baseColor.png
│   │
│   ├── dist/                  ← Vite production build output (git-ignored)
│   │   ├── index.html
│   │   ├── music/bg.mp3
│   │   └── assets/index-*.js
│   │
│   └── src/
│       │
│       ├── Game.js            ← Main game controller: renderer, scene, physics, network wiring,
│       │                        remote mesh loop, game-state callbacks (respawn, death, game over),
│       │                        ESC menu, death drops, animation loop
│       │
│       ├── Player.js          ← Local player: penguin mesh builder (buildPenguinCharacter),
│       │                        applyPlayerColor helper, CANNON sphere physics, WASD+mouse input,
│       │                        slide/boost/jump/melee, waddle anim, idle sway, airborne wing-spread,
│       │                        damage/stun, getState(), getMuzzlePosition()
│       │
│       ├── RemotePlayer.js    ← Networked opponents: penguin mesh + color tint, username label,
│       │                        HP bar sprite, kinematic CANNON body, interpolated walk/slide/idle
│       │                        animation, idle sway, airborne wing-spread, charge visuals,
│       │                        death animations (snowball explosion, melee fly+fade), fall anim
│       │
│       ├── Weapon.js          ← Snowball system: 50-object pool, hold-to-charge (scale over 4s),
│       │                        quick-throw bypass, ammo (20 mag / 80 reserve), reload (2s),
│       │                        melee (F key, 3-phase anim, 3.5u range), hit detection against
│       │                        remote CANNON bodies, reset() + addAmmo() for respawn/pickups
│       │
│       ├── Camera.js          ← Third-person shoulder camera: SimonDev lerp, 5-back/1-up/1.5-right
│       │                        offset, pitch-clamped aim, shake() for hit feedback
│       │
│       ├── Network.js         ← Socket.IO client: connect/join, 3-entry interpolation buffer
│       │                        (100ms render lag), position reconciliation, remote player map,
│       │                        sendInput/sendHit/sendMeleeHit/sendProjectile/sendDropCollected,
│       │                        callback registry (onPlayerDied, onGameOver, onRespawn, etc.)
│       │
│       ├── HUD.js             ← Full UI overlay: HP bar, stamina bar, ammo counter, charge ring
│       │                        (SVG arc), crosshair, kill feed, damage vignette, minimap canvas,
│       │                        game timer, kill-streak banner, respawn countdown, Tab scoreboard,
│       │                        final scoreboard + Play Again button, ☰ menu button + ESC overlay,
│       │                        How to Play controls list
│       │
│       ├── AudioManager.js    ← Web Audio SFX engine: shoot, hitTerrain, hitPlayer, meleeSwoosh,
│       │                        meleeHit, jump, footstep, pickup, takeDamage, kill, died, win,
│       │                        slideStart/Stop — all synthesized (no external SFX files)
│       │
│       ├── ParticleSystem.js  ← 200-particle burst pool: cone-spread emit, 0.92 drag,
│       │                        color fade over 0.2–0.5s lifetime
│       │
│       ├── DeathDropSystem.js ← Death-drop pickups: gold glowing orb spawns at kill position,
│       │                        proximity collection gives +20 ammo (client) + +10 HP (server),
│       │                        20s lifetime with fade-out, no respawn
│       │
│       ├── PickupSystem.js    ← (legacy) Static Snow Cache ammo pickups — superseded by
│       │                        DeathDropSystem; kept in repo but not imported by Game.js
│       │
│       ├── PhysicsDebugger.js ← Thin wrapper: cannon-es-debugger toggle (` key)
│       │
│       └── maps/
│           ├── index.js       ← createMap(id) factory, availableMaps() — maps id → class
│           ├── BaseMap.js     ← Abstract base: config accessors (groundY, mapHalf, gravity,
│           │                    surfaceNormal, spawnPoints, obstacles, visuals), _buildSkyAndLights(),
│           │                    _track() for dispose, getCollisionBoxes()
│           ├── IcePlanet.js   ← Extends BaseMap: floating ice platforms (undulating BoxGeometry),
│           │                    gloss overlays, edge glow, void floor + mist layers, 9 ice-rock
│           │                    cylinders, 25 instanced snow patches, client CANNON bodies
│           ├── GlacierCanyonMap.js  ← Extends BaseMap: adapter wrapping GlacierCanyon.js build
│           │                          function into the build(scene, physicsWorld) interface;
│           │                          converts COLLISION_BODIES to CANNON bodies with rotation
│           ├── GlacierCanyon.js     ← Standalone buildGlacierCanyon(scene) function:
│           │                          400×400 map, cliff walls, canyon walls, spawn pads,
│           │                          mid platforms, catwalks, W-E bridge, crystal tower,
│           │                          inner cliffs, outer flanks, scatter cover
│           └── ArenaMap.js    ← GLTF arena loader (GLTFLoader, CC-BY-4.0 asset),
│                                physics bodies derived from parsed mesh geometry
│
└── server/
    ├── package.json           ← { express, socket.io, cannon-es, nodemon }
    ├── .env                   ← PORT, MAP_ID
    ├── .env.example
    │
    ├── index.js               ← Express + Socket.IO entry: one GameRoom instance,
    │                            socket event wiring (join, startGame, soloPlay, input,
    │                            hit, meleeHit, spawnProjectile, collectDrop, ping,
    │                            requestMapChange, disconnect), /health endpoint
    │
    ├── GameRoom.js            ← Authoritative game state machine (WAITING → PLAYING → ENDED):
    │                            50 tick/s loop, hit/melee/blizzard processing, bot tick,
    │                            bot throw queue with lead prediction, respawn scheduling,
    │                            death drop HP healing, time expiry + winner calculation,
    │                            15s auto-reset, player list broadcast
    │
    ├── ServerPlayer.js        ← Per-player server state: position, velocity, quaternion, hp,
    │                            kills/deaths/assists, alive flag, isSliding, applyClientState(),
    │                            takeDamage(), die(), respawn(), getState()
    │
    ├── BotPlayer.js           ← Extends ServerPlayer: AI state machine (roam → chase → charge
    │                            → attack), smooth yaw via lerpAngle(), strafe oscillation,
    │                            per-bot personality, charge wind-up (0.55s), lead prediction,
    │                            platform-boundary clamping + bounce
    │
    ├── MapLoader.js           ← Reads shared config: exposes groundY, mapHalf, spawnPoints,
    │                            gravity; buildObstacleBodies(world) creates CANNON box + cylinder
    │                            bodies for server physics
    │
    └── PhysicsWorld.js        ← cannon-es server world: gravity, ground plane, per-player
                                 sphere bodies, addPlayer/removePlayer, applyKnockback(),
                                 getPlayerPositions(), step(delta)
```

---

## Data flow summary

```
shared/maps/*.config.js
       │
       ├─► server/MapLoader.js  →  server/PhysicsWorld.js  (CANNON obstacle bodies)
       │         │
       │         └─► server/GameRoom.js  (spawnPoints, mapHalf, groundY)
       │
       └─► client/src/maps/BaseMap.js  →  IcePlanet / GlacierCanyonMap  (visuals + client physics)
                 │
                 └─► client/src/Game.js  (map.groundY, map.surfaceNormal, map.gravity)
```

## Socket events

| Direction | Event | Payload |
|-----------|-------|---------|
| C → S | `join` | `{ username }` |
| C → S | `startGame` | `{ duration, botCount }` |
| C → S | `soloPlay` | `{ duration, botCount }` |
| C → S | `input` | position, velocity, yaw, keys, isSliding, charging… |
| C → S | `hit` | `{ targetId, damage }` |
| C → S | `meleeHit` | `{ targetId }` |
| C → S | `spawnProjectile` | position, velocity, color, lifetime… |
| C → S | `collectDrop` | *(no payload — server heals calling player +10 HP)* |
| C → S | `requestMapChange` | `{ mapId }` |
| C → S | `ping` | `{ clientTime }` |
| S → C | `joined` | `{ playerId, color, spawnPosition, mapId, roomCode }` |
| S → C | `gameStarted` | `{ duration }` |
| S → C | `gameState` | players[], zone, timeRemaining, gameDuration |
| S → C | `playerDied` | `{ id, killerId, killerName, victimName, method }` |
| S → C | `playerRespawned` | `{ id, spawnPosition, hp }` |
| S → C | `meleeConfirmed` | `{ targetId, attackerId, knockbackDir }` |
| S → C | `remoteProjectile` | position, velocity, shooterId, color, lifetime |
| S → C | `gameOver` | `{ winnerId, winnerName, standings[] }` |
| S → C | `playerList` | `{ players[] }` |
| S → C | `roomSnapshot` | players[] (for late joiners) |
| S → C | `mapChanged` | `{ mapId }` |
| S → C | `pong` | `{ serverTime, clientTime }` |
