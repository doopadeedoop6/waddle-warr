// shared/maps/ice_planet.config.js
// Pure data — no imports. Both client and server read from here.

export default {
  id: 'ice_planet',
  displayName: 'Ice Planet',

  // Physics constants
  groundY: -30,        // void safety net; real platforms sit at y=0
  mapHalf: 180,
  gravity: [0, -28, 0],
  surfaceNormal: [0, 1, 0],

  // Spawn ring on the main platform surface (y=1) — 16 points for 16 players
  spawnPoints: [
    [ 28, 1,   0],
    [ 20, 1,  20],
    [  0, 1,  28],
    [-20, 1,  20],
    [-28, 1,   0],
    [-20, 1, -20],
    [  0, 1, -28],
    [ 20, 1, -20],
    [ 40, 1,  12],
    [-40, 1,  12],
    [ 40, 1, -12],
    [-40, 1, -12],
    [ 35, 1,  35],
    [-35, 1,  35],
    [-35, 1, -35],
    [ 35, 1, -35],
  ],

  teamSpawns: {
    blue: [
      [ 28, 1,   0], [ 20, 1,  20], [  0, 1,  28], [-20, 1,  20],
      [-28, 1,   0], [-20, 1, -20],
    ],
    red: [
      [  0, 1, -28], [ 20, 1, -20],
      [ 40, 1,  12], [-40, 1,  12], [ 40, 1, -12], [-40, 1, -12],
    ],
  },

  // Obstacles array drives BOTH physics (server MapLoader) and client visuals.
  //
  // BOX platforms:
  //   pos  = [cx, cy, cz] — center of the box
  //   size = [w,  h,  d]  — full extents
  //   top surface = cy + h/2
  //
  // Main platform: 120×5×120, center at (0, -2.5, 0) → top at y=0
  // Four satellite islands + four bridges + four raised corners + center high platform
  // Nine ice-rock cylinders from original map (positions unchanged)
  obstacles: [
    // ── Main platform ──────────────────────────────────────────────────────
    { type: 'box', pos: [0, -2.5, 0],   size: [120, 5, 120] },

    // ── Satellite islands (top at y=0) ─────────────────────────────────────
    { type: 'box', pos: [0,  -2.5, -115], size: [55, 5, 50] },   // North
    { type: 'box', pos: [0,  -2.5,  115], size: [55, 5, 50] },   // South
    { type: 'box', pos: [-115, -2.5, 0],  size: [50, 5, 55] },   // West
    { type: 'box', pos: [ 115, -2.5, 0],  size: [50, 5, 55] },   // East

    // ── Bridges (top at y=0) ───────────────────────────────────────────────
    { type: 'box', pos: [0,  -2.5, -80],  size: [12, 5, 24] },   // North bridge
    { type: 'box', pos: [0,  -2.5,  80],  size: [12, 5, 24] },   // South bridge
    { type: 'box', pos: [-80, -2.5, 0],   size: [24, 5, 12] },   // West bridge
    { type: 'box', pos: [ 80, -2.5, 0],   size: [24, 5, 12] },   // East bridge

    // ── Raised corner platforms (top at y=3) ──────────────────────────────
    { type: 'box', pos: [ 38, 1.5, -38], size: [22, 3, 22] },   // NE corner
    { type: 'box', pos: [-38, 1.5, -38], size: [22, 3, 22] },   // NW corner
    { type: 'box', pos: [ 38, 1.5,  38], size: [22, 3, 22] },   // SE corner
    { type: 'box', pos: [-38, 1.5,  38], size: [22, 3, 22] },   // SW corner

    // ── Center high platform (top at y=4) ─────────────────────────────────
    { type: 'box', pos: [0, 2.0, 0], size: [20, 4, 20] },

    // ── Small bumps on main platform (top at y=1.5) ───────────────────────
    { type: 'box', pos: [ 48, -1.25, 0],  size: [14, 2.5, 14] },
    { type: 'box', pos: [-48, -1.25, 0],  size: [14, 2.5, 14] },
    { type: 'box', pos: [0,  -1.25,  48], size: [14, 2.5, 14] },
    { type: 'box', pos: [0,  -1.25, -48], size: [14, 2.5, 14] },

    // ── Ice rock cylinders (original 9, adjusted posY to sit on main platform) ──
    { type: 'cylinder', pos: [35,  2.880,  20], radiusBottom: 2.700, radiusTop: 1.350, height: 5.760, segs: 6, scale: 1.8 },
    { type: 'cylinder', pos: [-42, 4.000,  15], radiusBottom: 3.750, radiusTop: 1.875, height: 8.000, segs: 6, scale: 2.5 },
    { type: 'cylinder', pos: [18,  2.080, -38], radiusBottom: 1.950, radiusTop: 0.975, height: 4.160, segs: 6, scale: 1.3 },
    { type: 'cylinder', pos: [28,  2.560, -30], radiusBottom: 2.400, radiusTop: 1.200, height: 5.120, segs: 6, scale: 1.6 },
    { type: 'cylinder', pos: [-25, 3.200, -28], radiusBottom: 3.000, radiusTop: 1.500, height: 6.400, segs: 6, scale: 2.0 },
    { type: 'cylinder', pos: [-20, 2.560,  48], radiusBottom: 2.400, radiusTop: 1.200, height: 5.120, segs: 6, scale: 1.6 },
    { type: 'cylinder', pos: [-52, 3.520, -12], radiusBottom: 3.300, radiusTop: 1.650, height: 7.040, segs: 6, scale: 2.2 },
    { type: 'cylinder', pos: [8,   2.240,  55], radiusBottom: 2.100, radiusTop: 1.050, height: 4.480, segs: 6, scale: 1.4 },
    { type: 'cylinder', pos: [55,  3.200, -18], radiusBottom: 2.700, radiusTop: 1.350, height: 6.400, segs: 6, scale: 1.8 },
  ],

  // Visual-only config (server ignores these)
  visuals: {
    skyColor:              0x04101e,
    fogColor:              0x04101e,
    fogNear:               120,
    fogFar:                350,
    ambientColor:          0x334466,
    ambientIntensity:      0.9,
    directionalColor:      0xfff0dd,
    directionalIntensity:  1.8,
    directionalPos:        [200, 300, 100],
    hemisphereSkyColor:    0x4488bb,
    hemisphereGroundColor: 0x112233,
    hemisphereIntensity:   0.6,
    groundColor:           0x8ec8e8,
    starCount:             2000,
  },
};
