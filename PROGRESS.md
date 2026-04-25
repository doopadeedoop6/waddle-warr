# Waddle Wars — Build Progress

Last updated: 2026-04-24 (Bug fix — glacier_canyon_v2 physics/client mismatch)

---

## Phase Status Overview

| Phase | Name | Status | Notes |
|-------|------|--------|-------|
| 17 | Bug Pass + 16-player Map | ✅ Done | 9 bugs fixed; Glacier Canyon rebuilt for 16 players (400×400) |
| 1 | Setup | ✅ Done | Vite, index.html, main.js, server skeleton |
| 2 | Planet | ✅ Done | Flat ice arena (IcePlanet.js) |
| 3 | Player | ✅ Done | Full penguin mesh + physics + movement |
| 4 | Camera | ✅ Done | Shoulder-offset third-person camera with pitch |
| 5 | Weapon + Particles | ✅ Done | Snowball pool, charge system, melee, particles |
| 6 | HUD | ✅ Done | HUD.js — full overlay with charge ring, vignette, kill feed |
| 7 | Network Client | ✅ Done | Network.js — connect, sendInput, interpolation, reconciliation |
| 8 | Remote Player | ✅ Done | RemotePlayer.js — mesh, label, HP bar, death animations |
| 9 | Server GameRoom | ✅ Done | GameRoom.js + ServerPlayer.js — authoritative 50 tick/s loop |
| 10 | Server PhysicsWorld | ✅ Done | PhysicsWorld.js — gravity, ground clamp, knockback, melee validation |
| 11 | Visual Polish | ⚠️ Partial | Lighting/fog/animations done; audio done; missing idle sway + blizzard |
| 12 | Lobby | ⚠️ Partial | Basic username screen + lobby music done; no player list or room code |
| 13 | Performance + Mobile | ❌ Not done | No nipplejs, no FPS counter, no instanced meshes |
| 14 | Deployment Config | ⚠️ Partial | vite.config.js exists; no netlify.toml / render.yaml |
| 15 | BaseMap Refactor | ✅ Done | BaseMap + MapConfig split; IcePlanet moved to maps/; shared config; ready for second map |
| 16 | Glacier Canyon Map | ✅ Done | Second playable map — Linear Canyon, multi-tier elevation, Frozen Dawn mood; map selection via env var / URL param |

---

## File Map

```
waddle-war/
├── shared/
│   └── maps/
│       ├── index.js                    ✅ Registry + getMapConfig() + DEFAULT_MAP_ID
│       └── ice_planet.config.js        ✅ Pure data — groundY, mapHalf, gravity, spawnPoints, obstacles, visuals
├── client/
│   └── src/
│       ├── maps/
│       │   ├── BaseMap.js              ✅ Abstract class — data accessors, _buildSkyAndLights, _track, dispose
│       │   ├── IcePlanet.js            ✅ Extends BaseMap — ports all visuals + client physics from old IcePlanet.js
│       │   └── index.js                ✅ createMap(id) factory
│       └── (rest unchanged)
└── server/
    ├── MapLoader.js                    ✅ Reads shared config, builds CANNON obstacle bodies
    └── (PhysicsWorld.js + GameRoom.js refactored to use MapLoader)
```

---

```
waddle-war/
├── client/
│   ├── index.html            ✅ Lobby + HUD shell
│   ├── main.js               ✅ Entry, username validation, fade, lobby music
│   ├── vite.config.js        ✅ Dev config (prod config incomplete)
│   └── src/
│       ├── Game.js           ✅ Async start, network wiring, remote mesh loop, audio events
│       ├── AudioManager.js   ✅ Full Web Audio SFX + lobby music system (623 lines)
│       ├── IcePlanet.js      ✅ Flat arena 400×400, 9 ice rocks, physics plane
│       ├── Player.js         ✅ Penguin physics + mesh + input + stamina + audio hooks
│       ├── Camera.js         ✅ Shoulder-offset camera, pitch, lerp
│       ├── Weapon.js         ✅ Snowball pool, charge, melee, sendHit/sendMeleeHit + audio
│       ├── ParticleSystem.js ✅ 200-particle burst pool
│       ├── HUD.js            ✅ Full overlay — HP, stamina, ammo, charge ring,
│       │                        crosshair, kill feed, notify, vignette, minimap
│       ├── Network.js        ✅ Socket.io client, interpolation, reconciliation
│       └── RemotePlayer.js   ✅ Penguin mesh, username label, HP bar,
│                                kinematic body, waddle anim, death anims
└── server/
    ├── index.js              ✅ 42-line entry — delegates all events to GameRoom
    ├── GameRoom.js           ✅ State machine, 50 tick/s loop, hit/melee/blizzard
    ├── ServerPlayer.js       ✅ Per-player state, applyClientState, takeDamage
    └── PhysicsWorld.js       ✅ cannon-es server physics — bodies, gravity, knockback
```

---

## Detailed Phase Notes

---

### ✅ Phase 1 — Setup
- Vite client, Express + Socket.IO server, index.html lobby, main.js entry

---

### ✅ Phase 2 — IcePlanet.js
- Flat 400×400 PlaneGeometry with vertex undulation + gloss overlay
- `GROUND_Y=0`, `MAP_HALF=200`, gravity `(0,-28,0)`, surfaceNormal `(0,1,0)`
- 9 ice rock formations (hex cylinder + spire) with CANNON.Cylinder physics
- Static CANNON.Plane ground (normal faces +Y)

---

### ✅ Phase 3 — Player.js
- Full layered penguin mesh (head, body, beak, eyes, flippers, feet, backpack)
- CANNON.Sphere physics (radius 0.9, mass 1, **collisionFilterGroup=2** so snowballs skip it)
- WASD + mouse yaw/pitch (pointer lock), jump, slide boost (Shift), air dash
- Stamina system: 3s fuel, 4s recharge, wipeout on empty
- Stun from melee hit (0.5s), waddle/slide/fall animations
- `getMuzzlePosition()`, `takeMeleeHit()`, `getState()`
- Footstep sound phase-synced to waddle animation (fires at each π interval of waddleTime×8)

---

### ✅ Phase 4 — Camera.js
- SimonDev two-target lerp (frame-rate independent: `1 - Math.pow(0.001, delta)`)
- Shoulder offset: 5 back, 1 up, 1.5 right
- Pivot at shoulder height, pitch-aware aim direction
- `camera.up = surfaceNormal` prevents roll
- `get forward()` → exact crosshair world direction

---

### ✅ Phase 5 — Weapon.js + ParticleSystem.js

**Weapon:**
- 50-snowball object pool, LMB hold-to-charge (scale 0.75×/s, max 4s, crush at 6s)
- Quick click bypasses cooldown; charged shots scale damage (20–80 HP) and speed
- Ammo: 20 mag / 80 reserve, R to reload (2s)
- Melee: F key, 3-phase animation (windup 150ms / hold 50ms / return 150ms), range 2.5u
- Collision filter: snowballs mask=1, player group=2 → self-immunity
- `sendHit()` / `sendMeleeHit()` calls to Network

**ParticleSystem:**
- 200-particle pool, cone-spread emit, 0.92 drag, color fade over 0.2–0.5s lifetime

---

### ✅ Phase 6 — HUD.js
- **HP bar**: blue → red + pulse at ≤30 HP
- **Stamina bar**: green → orange → red; "WIPEOUT" label when fallen
- **Ammo**: mag + reserve; animated RELOADING / RELOAD [R] prompt
- **Charge ring**: SVG arc fills cyan→orange→red, "MAX" text at full charge
- **Crosshair**: 4-line, `shootFeedback()` expands arms 150ms
- **Kill feed**: top-right, max 5 entries, slide-in, 5s fade
- **Damage vignette**: blue-white radial flash
- **Minimap canvas**: bottom-right (rendered each frame)

---

### ✅ Phase 7 — Network.js
- `connect(username)` → Promise resolving on `'joined'`
- Remote player state buffer (3 entries, 100ms render lag interpolation)
- Position reconciliation: if server disagrees >2 units, lerps over 5 frames
- Offline fallback: 3s timeout → solo mode if server unreachable

---

### ✅ Phase 8 — RemotePlayer.js
- Reuses `buildPenguinCharacter()`, tints body meshes per player color
- Username label (Sprite) + HP bar (Sprite) floating above head
- Kinematic CANNON body synced to network position → snowballs can hit
- Waddle animation + death animations (snowball: parts explode; melee: spin+fly)
- `dispose()` — removes from scene, disposes all geometries/materials

---

### ✅ Phase 9 — Server GameRoom + ServerPlayer
- State machine: `WAITING → PLAYING → ENDED`, resets 10s after game over
- 50 tick/s loop: process hits → process melee → check win → broadcast state
- 16 spawn points (radius 30 ring), 16-color palette by join order

---

### ✅ Phase 10 — Server PhysicsWorld
- cannon-es world, manual gravity, ground plane at y=0
- `validateMelee()` — 2D distance ≤3.5u
- `applyKnockback()` — sets target body velocity
- `step(delta)` — gravity force, world step, ground-clamp all bodies

---

### ⚠️ Phase 11 — Visual Polish

**Done:**
- [x] Night-blue sky + fog (80–280), boosted lighting, 2000 stars
- [x] Walk waddle + slide/fall pose + melee swing animation
- [x] Particle effects on all hit types
- [x] Charge ring SVG in HUD
- [x] **Full AudioManager.js** (see Audio section below)

**Missing:**
- [ ] Snow patches (25 instanced cylinders)
- [ ] Idle body sway animation
- [ ] Airborne wing-spread pose
- [ ] Blizzard zone activation + shrink schedule

---

### ✅ Phase 11 Audio — AudioManager.js (623 lines)

**Background music:**
- `HTMLAudioElement` → `/music/bg.mp3`, loop, vol 0.15
- Auto-starts on first user gesture anywhere on lobby page
- Stops immediately when JOIN clicked

**SFX — all Web Audio API, zero external files:**

| Method | Trigger | Sound |
|--------|---------|-------|
| `shoot()` | Snowball fired | White noise → lowpass 800Hz, 80ms |
| `hitTerrain()` | Snowball hits ground | White noise → lowpass 400Hz, 60ms |
| `hitPlayer(dist)` | Snowball hits player | White noise → lowpass 400Hz, gain 0.05–0.3 by distance |
| `meleeSwoosh()` | F key swing | White noise → bandpass 500Hz Q2, 100ms |
| `meleeHit()` | Melee confirmed | Noise lowpass 200Hz (60ms) + sine 180Hz (80ms) 30ms later |
| `jump(isSecondJump)` | Space pressed | Sine 320Hz; double-jump plays 320→420Hz pair 25ms apart |
| `footstep()` | Each foot lands | Noise → lowpass 110Hz, 45ms — phase-synced to animation |
| `pickup()` | Ammo collected | Sine 880Hz + 1320Hz with pitch rise, 180ms |
| `takeDamage()` | HP drops | Sine 250→100Hz glide, 180ms |
| `kill()` | You got a kill | Sine C5 80ms + E5 120ms ("ding-ding") |
| `died()` | You died | Sine 440→180Hz glide (600ms) + noise thud at +800ms |
| `win()` | You win | C5→E5→G5→E5→C6 fanfare + sustained C major chord |
| `slideStart()` | Shift boost begins | Looping noise → hp 80Hz → lp 300Hz, fade in 0.1s |
| `slideStop()` | Shift boost ends | Exponential decay → node.stop() after 300ms |

**Bus hierarchy:** SFX → `_sfxGain (2.0)` → `_masterGain (0.6)` → destination

**Wired in:**
- `main.js` — lobby music auto-start + stop on join, `audio.resume()` on click
- `Player.js` — `footstep()` (phase-synced), `jump()`, `takeDamage()` on melee hit
- `Weapon.js` — `shoot()`, `meleeSwoosh()`, `hitTerrain()`, `hitPlayer(dist)`
- `Game.js` — `meleeHit()`, `takeDamage()` on server HP drop, `kill()`, `died()`, `win()`

---

### ⚠️ Phase 12 — Lobby

**Done:**
- [x] Username entry with validation (min 2 chars, alphanumeric + `_`)
- [x] Arctic dark-blue theme + 0.5s fade transition
- [x] Lobby background music (auto-start on gesture, stop on join)

**Missing:**
- [ ] Snowflake CSS falling animation
- [ ] Room code display
- [ ] Player list with color dots
- [ ] Waddler count "X / 16"
- [ ] Pointer lock after fade-in

---

### ❌ Phase 13 — Performance + Mobile

- [ ] InstancedMesh for rocks + snow patches
- [ ] Label visibility culling (hide at >120u from camera)
- [ ] FPS counter on `?debug=1`
- [ ] `npm install nipplejs` + virtual joysticks + touch buttons

---

### ⚠️ Phase 14 — Deployment Config

**Done:**
- [x] `client/vite.config.js` (basic)

**Missing:**
- [ ] `client/netlify.toml`
- [ ] `server/render.yaml`
- [ ] CORS restricted to Netlify URL
- [ ] `.env.example` files for both client + server
- [ ] Successful `npm run build` verified

---

## Bugs Fixed

| Bug | Root cause | Fix |
|-----|-----------|-----|
| Normal-throw snowball invisible | Duplicate method defs in Weapon.js | Removed dead first copies |
| shapes array accumulates | `body.shapes = []` left offsets/orientations stale | `.length = 0` on all three arrays |
| Dark screen after flat map | Camera lookat pointed at sky; dim lights | Lookat toward aimDir×20; boosted lights + fog |
| Snowball despawns on downward aim | Spawn from held snowball world pos → low Y when pitched down | Spawn from `body.pos + up×0.5 + forward×(1.2+r)` |
| Crosshair parallax | `aimTarget = camPos + forward×50` shifted by shoulder offset | `throwDir = camera.forward` directly |
| HP bar not found | HUD `#hud-hp-fill` vs Player `#hp-bar` mismatch | Renamed to `#hp-bar` |
| Game blank screen on load | `_initRenderer()` declaration missing, body orphaned | Added missing method declaration + class closing `}` |

---

---

### ✅ Phase 15 — BaseMap Refactor

- Created `shared/maps/ice_planet.config.js` — pure-data single source of truth for all map constants (groundY, mapHalf, gravity, surfaceNormal, spawnPoints, 9 obstacles, visuals)
- Created `shared/maps/index.js` — registry + `getMapConfig(id)` + `DEFAULT_MAP_ID`
- Created `client/src/maps/BaseMap.js` — abstract base class; data accessors, `_buildSkyAndLights()`, `_track()`, `dispose()`
- Created `client/src/maps/IcePlanet.js` — extends BaseMap; ports all visual + client physics from old `client/src/IcePlanet.js`
- Created `client/src/maps/index.js` — `createMap(id)` factory
- Created `server/MapLoader.js` — reads shared config, `buildObstacleBodies(world)` for CANNON bodies
- Refactored `server/PhysicsWorld.js` — constructor now takes `MapLoader`; all hardcoded constants flow from config
- Refactored `server/GameRoom.js` — uses `MapLoader`; spawn points from config array; no hardcoded `MAP_HALF` / `GROUND_Y`
- Refactored `client/src/Game.js` — uses `createMap(DEFAULT_MAP_ID)` + `map.build(scene, physicsWorld)`
- Refactored `Player.js`, `Camera.js`, `Weapon.js` — removed all direct IcePlanet imports; read `map.groundY`, `map.surfaceNormal`, `map.gravity`
- Deleted old `client/src/IcePlanet.js`
- **Discrepancy noted & preserved:** original physics used tapered `CANNON.Cylinder(radiusTop, radiusBottom, ...)` not uniform; config stores both `radiusTop` and `radiusBottom`, MapLoader and client both use them faithfully

---

## Next Recommended Steps

**Option A — Phase 11 remaining (quick wins)**
Snow patches (instanced cylinders) + idle sway animation. ~1 session.

**Option B — Phase 14 (Deploy)**
Netlify + Render config files. Gets the game online for others to play.

**Option C — Phase 12 (Lobby Polish)**
Snowflake animation, player list with color dots, room code display.

**Option D — Map Selection UI (Phase 17)**
Lobby UI to pick Ice Planet vs Glacier Canyon before joining. ~1 session.

**Option E — Phase 11 remaining (quick wins)**
Snow patches + idle sway animation.

---

### ✅ Phase 16 — Glacier Canyon Map

- Second playable map: **Linear Canyon layout**, multi-tier elevation (floor y=0 / ledges y=3 / catwalks y=6), **Frozen Dawn** visual mood
- **~30 obstacles:** 2 cliff walls, 8 canyon walls, 4 Tier-2 ledges, 2 Tier-3 catwalks, 4 stair-step boxes, 10 ice rock cylinders
- **16 team-aware spawn points** (8 blue at z=-170, 8 red at z=+170) — forward-compat for future TDM mode
- `teamSpawns` field added to both maps (Ice Planet and Glacier Canyon)
- `_buildObstacleMeshes()` added to `BaseMap` — generic box + cylinder mesh builder with material support
- `MapLoader.buildObstacleBodies()` now handles both `type:'box'` and `type:'cylinder'`
- **Map selection:** `MAP_ID=glacier_canyon npm start` on server; client reads from server join payload automatically
- **Visual testing:** `?map=glacier_canyon` URL param on client loads Glacier Canyon visuals (note: physics stays on server's map — document as expected for v1)
- `listMapIds()` added to shared registry; `availableMaps()` on client factory
- `GameRoom.setMap(mapId)` — change map between rounds (WAITING state only); broadcasts `mapChanged` event
- `server/index.js` handles `requestMapChange` socket event (no auth in v1)
- Ice Planet unchanged — regression-safe

---

### ✅ Phase 17 — Bug Pass + 16-player Glacier Canyon

#### Bugs fixed

| # | Bug | File | Fix |
|---|-----|------|-----|
| 1 | Air movement had no penalty | `Player.js:490-498` | Removed duplicate `if (isSliding)/if (boosting)` block that overwrote the 0.2× air-force multiplier |
| 2 | `glacier_canyon_v2` crash on load | `shared/maps/index.js:5` | Map was assigned to undefined `MAPS` var instead of `MAP_CONFIGS` |
| 3 | Melee range mismatch | `Weapon.js:406` vs `GameRoom.js:206` | Client used 2.5 units, server 3.5 — aligned client to 3.5 |
| 4 | Melee knockback weakened | `GameRoom.js:213` | Unexplained `+ 0.09` in length calculation cut knockback by ~29%; removed |
| 5 | Blizzard attacker ID wrong type | `GameRoom.js:252` | `'blizzard'` string used where player ID expected; changed to `null` |
| 6 | Remote player desync during death | `RemotePlayer.js:149` | During fall animation only rotation was skipped; now skips position too so network can't fight the anim |
| 7 | `glacier_canyon_v2` missing visuals | `shared/maps/glacier_canyon_v2.config.js` | `_buildSkyAndLights()` received `undefined` for sky/fog/lights; added full visuals block |
| 8 | No client map class for `glacier_canyon_v2` | `client/src/maps/index.js` | Added entry to `MAP_CLASSES` |
| 9 | Broken module-level `buildGlacierCanyon` call | `Game.js:15-17` | Call was at import scope where `scene` doesn't exist; removed 3 lines |
| 10 | `glacier_canyon_v2` physics/client mismatch — players fell through all floors/ramps | `shared/maps/glacier_canyon_v2.config.js` | Config had old simple layout (bridge y=8, flanks x=±120) but client renders 16-player map; replaced all obstacles + spawn points to match `glacier_canyon.config.js` |

#### `?map=glacier_canyon_v2` URL support

- `GlacierCanyon.js` was rewritten as a standalone `buildGlacierCanyon(scene)` function (no longer a class)
- Created `client/src/maps/GlacierCanyonMap.js` — thin adapter that wraps the function into the `build(scene, physicsWorld)` interface the rest of the game expects; converts `COLLISION_BODIES` to Cannon.js physics bodies with rotation support
- Updated `client/src/maps/index.js` — removed broken `import { GlacierCanyon }` (class no longer exists); both `glacier_canyon` and `glacier_canyon_v2` now use `GlacierCanyonMap`
- Added `Network.requestMapChange(mapId)` method; `Game.js` calls it when `?map=` URL param differs from server map

#### Glacier Canyon — 16-player rebuild (400×400)

Previous map was 160×160 — too small for 16 players. Rebuilt from scratch.

**Map dimensions:** 400×400 units, boundary walls at ±202, `mapHalf = 200`

**Zone layout:**
```
        N wall (z=−202)
┌──────────────────────────────────────┐
│  NW Spawn   │  N Flank  │  NE Spawn  │
│  [4 players]│  corridor │  [4 players]│
│      ↘      │  N Mid    │      ↙      │
│ inner cliff │  y=10     │ inner cliff │
│ (chokepoint)│  CENTER   │ (chokepoint)│
│             │  Bridge   │             │
│      ↗      │  y=12-14  │      ↖      │
│ inner cliff │  S Mid    │ inner cliff │
│  SW Spawn   │  S Flank  │  SE Spawn  │
│  [4 players]│  corridor │  [4 players]│
└──────────────────────────────────────┘
        S wall (z=+202)
```

**Zones:**
| Zone | Position | Top Y | Details |
|------|----------|-------|---------|
| Corner Spawns ×4 | (±108, ±108) | 6 | 52×52 pads, spawn circles, 4 cover boulders, 2 ramps |
| Mid Platforms ×4 | (0,±85) / (±85,0) | 10 | 46×46, cover walls on all edges, 1 ramp |
| N-S Catwalk | (0, 0) | 12 | 16×90 bridge deck, side railings |
| W-E Bridge | (0, 0) | 14 | 90×16 bridge deck, crosses above catwalk, 2 mid cover walls |
| Crystal Tower | (0, 0) | 14–40 | Point light glow (range 100), main spire + 6 flanking crystals |
| Inner Cliffs ×4 | (±62, ±62) | 22 | L-shaped pairs, block diagonal shortcuts, snow on top |
| Outer Flanks ×4 | (±158,0)/(0,±158) | 4 | 28-wide raised corridors, 5 cover pillars, inner canyon wall |
| Scatter cover | ~30 positions | 0 | Size varies by position for natural feel |

**Spawn points:** 16 total (4 per corner), y = 6.5

**Blizzard zone stages (updated for larger map):**
| Time | HalfX/Z | Effect |
|------|---------|--------|
| 0s | 200 | Full map |
| 70s | 140 | Squeezes toward mid platforms |
| 110s | 90 | Mid platform pressure |
| 140s | 50 | Center zone only |
| 160s | 20 | Bridge only |
| 175s | 0 | Zone closed |

**Physics:** `COLLISION_BODIES` array resets on each `buildGlacierCanyon()` call. Tilted ramp bodies include `rotation` so Cannon.js matches the visual slope. Server config (`glacier_canyon_v2.config.js`) updated with matching 16 spawn points and `mapHalf: 200`.

#### Known gaps introduced / carried forward
- ~~Server physics for `glacier_canyon_v2` used a completely different old layout — players fell through everything~~ **Fixed 2026-04-24**: `glacier_canyon_v2.config.js` now uses identical obstacles/spawns to `glacier_canyon.config.js`
