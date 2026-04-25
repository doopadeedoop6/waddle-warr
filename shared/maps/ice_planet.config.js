// shared/maps/ice_planet.config.js
// Pure data — no imports. Both client and server read from here.

export default {
  id: 'ice_planet',
  displayName: 'Ice Planet',

  // Physics constants
  groundY: 0,
  mapHalf: 200,
  gravity: [0, -28, 0],
  surfaceNormal: [0, 1, 0],

  // Spawn ring: 16 points evenly spaced, radius 30, y = groundY + 2
  // [cos(i*2π/16)*30, 2, sin(i*2π/16)*30]  (rounded to 3 decimals)
  spawnPoints: [
    [ 30.000, 2,   0.000],
    [ 27.716, 2,  11.481],
    [ 21.213, 2,  21.213],
    [ 11.481, 2,  27.716],
    [  0.000, 2,  30.000],
    [-11.481, 2,  27.716],
    [-21.213, 2,  21.213],
    [-27.716, 2,  11.481],
    [-30.000, 2,   0.000],
    [-27.716, 2, -11.481],
    [-21.213, 2, -21.213],
    [-11.481, 2, -27.716],
    [  0.000, 2, -30.000],
    [ 11.481, 2, -27.716],
    [ 21.213, 2, -21.213],
    [ 27.716, 2, -11.481],
  ],

  // Team-aware spawn grouping (forward-compat for TDM mode)
  // Ice Planet has no teams — split ring in half: blue = first 8, red = second 8
  teamSpawns: {
    blue: [
      [ 30.000, 2,   0.000], [ 27.716, 2,  11.481], [ 21.213, 2,  21.213], [ 11.481, 2,  27.716],
      [  0.000, 2,  30.000], [-11.481, 2,  27.716], [-21.213, 2,  21.213], [-27.716, 2,  11.481],
    ],
    red: [
      [-30.000, 2,   0.000], [-27.716, 2, -11.481], [-21.213, 2, -21.213], [-11.481, 2, -27.716],
      [  0.000, 2, -30.000], [ 11.481, 2, -27.716], [ 21.213, 2, -21.213], [ 27.716, 2, -11.481],
    ],
  },

  // Physics + visual obstacles — 9 ice rock formations.
  // Derived from IcePlanet.js ROCK_DEFS: [rx, rz, scale]
  //   baseR = 1.5 * scale, height = 3.2 * scale
  //   radiusBottom = baseR, radiusTop = baseR * 0.5 (tapered hex cylinder)
  //   posY = height / 2  (sits on ground at y=0)
  //   segs = 6 (hexagonal cross-section)
  obstacles: [
    // rx=35, rz=20, scale=1.8
    { type: 'cylinder', pos: [35,  2.880,  20], radiusBottom: 2.700, radiusTop: 1.350, height: 5.760, segs: 6, scale: 1.8 },
    // rx=-42, rz=15, scale=2.5
    { type: 'cylinder', pos: [-42,  4.000,  15], radiusBottom: 3.750, radiusTop: 1.875, height: 8.000, segs: 6, scale: 2.5 },
    // rx=18, rz=-38, scale=1.3
    { type: 'cylinder', pos: [18,  2.080, -38], radiusBottom: 1.950, radiusTop: 0.975, height: 4.160, segs: 6, scale: 1.3 },
    // rx=28, rz=-30, scale=1.6
    { type: 'cylinder', pos: [28,  2.560, -30], radiusBottom: 2.400, radiusTop: 1.200, height: 5.120, segs: 6, scale: 1.6 },
    // rx=-25, rz=-28, scale=2.0
    { type: 'cylinder', pos: [-25,  3.200, -28], radiusBottom: 3.000, radiusTop: 1.500, height: 6.400, segs: 6, scale: 2.0 },
    // rx=58, rz=-14, scale=2.8
    { type: 'cylinder', pos: [58,  4.480, -14], radiusBottom: 4.200, radiusTop: 2.100, height: 8.960, segs: 6, scale: 2.8 },
    // rx=-20, rz=48, scale=1.6
    { type: 'cylinder', pos: [-20,  2.560,  48], radiusBottom: 2.400, radiusTop: 1.200, height: 5.120, segs: 6, scale: 1.6 },
    // rx=-52, rz=-12, scale=2.2
    { type: 'cylinder', pos: [-52,  3.520, -12], radiusBottom: 3.300, radiusTop: 1.650, height: 7.040, segs: 6, scale: 2.2 },
    // rx=8, rz=55, scale=1.4
    { type: 'cylinder', pos: [8,  2.240,  55], radiusBottom: 2.100, radiusTop: 1.050, height: 4.480, segs: 6, scale: 1.4 },
  ],

  // Visual-only config (server ignores these)
  visuals: {
    skyColor:              0x0a1a3a,
    fogColor:              0x0a1a3a,
    fogNear:               80,
    fogFar:                280,
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
