// shared/maps/arena.config.js
// Pure data — no imports. Server reads spawnPoints + obstacles; client reads ArenaMap.js for GLTF.
//
// World-space layout (after GLTF scale ×3 + centering):
//   Floor slab:  Y = 0 → 3   (1 model unit × 3)  — walkable surface at Y = 3
//   Interior:    Y = 3 → 21  (interior elements rest on top of slab)
//   Outer shell: Y = 0 → 33  (11 model units × 3)
//   mapHalf: 45  →  arena footprint  −45 … +45  in X and Z
//
// Client physics generated in ArenaMap.js:
//   • Infinite ground plane at groundY = 3
//   • 4 explicit perimeter walls (8 units thick, 40 units tall)
//   • Per-mesh GLTF colliders for interior structures
// obstacles array is intentionally empty — no server-side static boxes needed.

export default {
  id: 'arena',
  displayName: 'Arena',

  // groundY = 3: top of the 3-unit-thick floor slab (the walkable surface).
  // Server uses this for respawn Y; client uses it for the physics ground plane.
  groundY: 3,
  mapHalf: 45,
  gravity: [0, -28, 0],
  surfaceNormal: [0, 1, 0],

  // 16 spawn points — two concentric rings, all at Y = 5 (groundY + 2).
  // Maximum distance from any wall: 15 units (arena is ±45; spawns within ±30).
  // No spawn is closer than 15 units to any perimeter wall.
  spawnPoints: [
    // Inner ring — corners (±15)
    [-15, 5, -15], [ 15, 5, -15],
    [-15, 5,  15], [ 15, 5,  15],
    // Inner ring — cardinal (±15)
    [-15, 5,   0], [ 15, 5,   0],
    [  0, 5, -15], [  0, 5,  15],
    // Outer ring — corners (±30)
    [-30, 5, -30], [ 30, 5, -30],
    [-30, 5,  30], [ 30, 5,  30],
    // Outer ring — cardinal (±30)
    [-30, 5,   0], [ 30, 5,   0],
    [  0, 5, -30], [  0, 5,  30],
  ],

  teamSpawns: {
    blue: [
      [-15, 5, -15], [ 15, 5, -15], [  0, 5, -15],
      [-30, 5, -30], [ 30, 5, -30], [  0, 5, -30],
      [-15, 5,   0], [ 15, 5,   0],
    ],
    red: [
      [-15, 5,  15], [ 15, 5,  15], [  0, 5,  15],
      [-30, 5,  30], [ 30, 5,  30], [  0, 5,  30],
      [-30, 5,   0], [ 30, 5,   0],
    ],
  },

  obstacles: [],

  visuals: {
    skyColor:              0xc8dff0,
    fogColor:              0xc8dff0,
    fogNear:               40,
    fogFar:                140,
    ambientColor:          0xb8d4ee,
    ambientIntensity:      0.85,
    directionalColor:      0xe0f0ff,
    directionalIntensity:  1.6,
    directionalPos:        [-60, 100, 60],
    hemisphereSkyColor:    0x9ec8ee,
    hemisphereGroundColor: 0x8899aa,
    hemisphereIntensity:   0.6,
    groundColor:           0xd8ecf8,
    starCount:             0,
  },
};
