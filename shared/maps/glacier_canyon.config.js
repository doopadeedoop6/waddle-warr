// shared/maps/glacier_canyon.config.js
// Updated for Phase 17 rebuild: 400×400 map (mapHalf=200).
//
// Obstacle pos/size/rotation values are derived directly from COLLISION_BODIES
// populated by client/src/maps/GlacierCanyon.js so both sides share identical geometry.
//
// addBox(px, py, pz, sx, sy, sz, rotX, rotZ) stores:
//   pos  = [px,  py + sy/2,  pz]   (world-space centre)
//   size = [sx,  sy,  sz]           (full width / height / depth)
//   rotation = [rotX, 0, rotZ]  or null
//
// Y levels (world-space):
//   0   = canyon floor
//   6   = corner spawn platform tops  (52×6 pads centred at ±108)
//   6.9 = spawn-point Y (top + sphere radius 0.9)
//  10   = mid-platform tops  (46×10 blocks centred at ±85)
//  12   = N-S catwalk deck top
//  14   = W-E bridge deck top
//  17   = crystal tower base top

export default {
  id: 'glacier_canyon',
  displayName: 'Glacier Canyon',

  groundY: 0,
  mapHalf: 200,
  gravity: [0, -28, 0],
  surfaceNormal: [0, 1, 0],

  // ── 16 spawn points: 4 per corner platform, y = 6.9 ──────────────────────
  // Order: SW → SE → NW → NE  (matches GlacierCanyon.js SPAWN_POINTS)
  spawnPoints: [
    // SW  cx=-108, cz=+108
    [-116, 6.9,  100], [-100, 6.9,  100],
    [-116, 6.9,  116], [-100, 6.9,  116],
    // SE  cx=+108, cz=+108
    [ 100, 6.9,  100], [ 116, 6.9,  100],
    [ 100, 6.9,  116], [ 116, 6.9,  116],
    // NW  cx=-108, cz=-108
    [-116, 6.9, -100], [-100, 6.9, -100],
    [-116, 6.9, -116], [-100, 6.9, -116],
    // NE  cx=+108, cz=-108
    [ 100, 6.9, -100], [ 116, 6.9, -100],
    [ 100, 6.9, -116], [ 116, 6.9, -116],
  ],

  teamSpawns: {
    blue: [
      [-116, 6.9, -100], [-100, 6.9, -100], [-116, 6.9, -116], [-100, 6.9, -116],
      [ 100, 6.9, -100], [ 116, 6.9, -100], [ 100, 6.9, -116], [ 116, 6.9, -116],
    ],
    red: [
      [-116, 6.9,  100], [-100, 6.9,  100], [-116, 6.9,  116], [-100, 6.9,  116],
      [ 100, 6.9,  100], [ 116, 6.9,  100], [ 100, 6.9,  116], [ 116, 6.9,  116],
    ],
  },

  // ── Blizzard stages (radius in world units, scaled 2× vs old 200×200 map) ──
  blizzardStages: [
    { time:   0, radius: 200 },
    { time:  70, radius: 140 },
    { time: 110, radius:  90 },
    { time: 140, radius:  50 },
    { time: 160, radius:  20 },
    { time: 175, radius:   0 },
  ],

  // ── 169 physics obstacles — mirror of COLLISION_BODIES from GlacierCanyon.js ──
  // Ramp angles (radians):
  //   cornerRamp  = atan2(6,22)  ≈ 0.26627
  //   midRamp     = atan2(10,28) ≈ 0.34302
  //   bridgeRamp  = atan2(4,26)  ≈ 0.15265
  //   catwalkRamp = atan2(2,26)  ≈ 0.07677
  obstacles: [

    // ── §1  BOUNDARY WALLS (4) ──────────────────────────────────────────────
    { type: 'box', pos: [    0,  16, -202], size: [404, 32,  12], rotation: null },
    { type: 'box', pos: [    0,  16,  202], size: [404, 32,  12], rotation: null },
    { type: 'box', pos: [ -202,  16,    0], size: [ 12, 32, 404], rotation: null },
    { type: 'box', pos: [  202,  16,    0], size: [ 12, 32, 404], rotation: null },

    // ── §2  CORNER SPAWN PLATFORMS (9 × 4 corners = 36) ─────────────────────
    // buildCornerSpawn(xs, zs): cx = xs*108, cz = zs*108
    //   main pad  [cx, 3, cz]  52×6×52
    //   boulders  [cx±14, 8, cz] and [cx, 8, cz±14]  4×4×4 each
    //   parapets  outer Z/X edges at y=7.25
    //   ramp-Z    facing N/S toward mids, rotX = zs * atan2(6,22)
    //   ramp-X    facing E/W toward mids, rotZ = xs * atan2(6,22)

    // SW  xs=-1  zs=+1  cx=-108  cz=+108
    { type: 'box', pos: [-108,  3,    108], size: [ 52,   6,  52  ], rotation: null },
    { type: 'box', pos: [-122,  8,    108], size: [  4,   4,   4  ], rotation: null },
    { type: 'box', pos: [ -94,  8,    108], size: [  4,   4,   4  ], rotation: null },
    { type: 'box', pos: [-108,  8,     94], size: [  4,   4,   4  ], rotation: null },
    { type: 'box', pos: [-108,  8,    122], size: [  4,   4,   4  ], rotation: null },
    { type: 'box', pos: [-108,  7.25, 134], size: [ 52, 2.5, 1.5  ], rotation: null },
    { type: 'box', pos: [-134,  7.25, 108], size: [1.5, 2.5,  52  ], rotation: null },
    { type: 'box', pos: [-108,  3.881, 74], size: [ 40, 1.5,  24  ], rotation: [ 0.26627, 0,       0] },
    { type: 'box', pos: [ -74,  3.881,108], size: [ 24, 1.5,  40  ], rotation: [       0, 0, -0.26627] },

    // SE  xs=+1  zs=+1  cx=+108  cz=+108
    { type: 'box', pos: [ 108,  3,    108], size: [ 52,   6,  52  ], rotation: null },
    { type: 'box', pos: [  94,  8,    108], size: [  4,   4,   4  ], rotation: null },
    { type: 'box', pos: [ 122,  8,    108], size: [  4,   4,   4  ], rotation: null },
    { type: 'box', pos: [ 108,  8,     94], size: [  4,   4,   4  ], rotation: null },
    { type: 'box', pos: [ 108,  8,    122], size: [  4,   4,   4  ], rotation: null },
    { type: 'box', pos: [ 108,  7.25, 134], size: [ 52, 2.5, 1.5  ], rotation: null },
    { type: 'box', pos: [ 134,  7.25, 108], size: [1.5, 2.5,  52  ], rotation: null },
    { type: 'box', pos: [ 108,  3.881, 74], size: [ 40, 1.5,  24  ], rotation: [ 0.26627, 0,       0] },
    { type: 'box', pos: [  74,  3.881,108], size: [ 24, 1.5,  40  ], rotation: [       0, 0,  0.26627] },

    // NW  xs=-1  zs=-1  cx=-108  cz=-108
    { type: 'box', pos: [-108,  3,   -108], size: [ 52,   6,  52  ], rotation: null },
    { type: 'box', pos: [-122,  8,   -108], size: [  4,   4,   4  ], rotation: null },
    { type: 'box', pos: [ -94,  8,   -108], size: [  4,   4,   4  ], rotation: null },
    { type: 'box', pos: [-108,  8,   -122], size: [  4,   4,   4  ], rotation: null },
    { type: 'box', pos: [-108,  8,    -94], size: [  4,   4,   4  ], rotation: null },
    { type: 'box', pos: [-108,  7.25,-134], size: [ 52, 2.5, 1.5  ], rotation: null },
    { type: 'box', pos: [-134,  7.25,-108], size: [1.5, 2.5,  52  ], rotation: null },
    { type: 'box', pos: [-108,  3.881,-74], size: [ 40, 1.5,  24  ], rotation: [-0.26627, 0,       0] },
    { type: 'box', pos: [ -74,  3.881,-108],size: [ 24, 1.5,  40  ], rotation: [       0, 0, -0.26627] },

    // NE  xs=+1  zs=-1  cx=+108  cz=-108
    { type: 'box', pos: [ 108,  3,   -108], size: [ 52,   6,  52  ], rotation: null },
    { type: 'box', pos: [  94,  8,   -108], size: [  4,   4,   4  ], rotation: null },
    { type: 'box', pos: [ 122,  8,   -108], size: [  4,   4,   4  ], rotation: null },
    { type: 'box', pos: [ 108,  8,   -122], size: [  4,   4,   4  ], rotation: null },
    { type: 'box', pos: [ 108,  8,    -94], size: [  4,   4,   4  ], rotation: null },
    { type: 'box', pos: [ 108,  7.25,-134], size: [ 52, 2.5, 1.5  ], rotation: null },
    { type: 'box', pos: [ 134,  7.25,-108], size: [1.5, 2.5,  52  ], rotation: null },
    { type: 'box', pos: [ 108,  3.881,-74], size: [ 40, 1.5,  24  ], rotation: [-0.26627, 0,       0] },
    { type: 'box', pos: [  74,  3.881,-108],size: [ 24, 1.5,  40  ], rotation: [       0, 0,  0.26627] },

    // ── §3  MID PLATFORMS (8 × 4 = 32) ──────────────────────────────────────
    // buildMidPlatform(px, pz): 46×10×46 block, top at y=10
    //   two cover boulders, four parapets, one ramp toward center

    // North  px=0  pz=-85
    { type: 'box', pos: [   0,   5,  -85], size: [46, 10,  46  ], rotation: null },
    { type: 'box', pos: [  10, 12.5,  -95], size: [ 4,  5,   4  ], rotation: null },
    { type: 'box', pos: [ -12,  12,  -73], size: [ 5,  4,   4  ], rotation: null },
    { type: 'box', pos: [   0,  11, -107], size: [46,  2, 1.5  ], rotation: null },
    { type: 'box', pos: [   0,  11,  -63], size: [46,  2, 1.5  ], rotation: null },
    { type: 'box', pos: [ -22,  11,  -85], size: [1.5, 2,  46  ], rotation: null },
    { type: 'box', pos: [  22,  11,  -85], size: [1.5, 2,  46  ], rotation: null },
    { type: 'box', pos: [   0, 6.424, -49], size: [36, 1.5, 34 ], rotation: [-0.34302, 0, 0] },
    { type: 'box', pos: [   0, 6.424,-121], size: [36, 1.5, 34 ], rotation: [-0.34302, 0, 0] },

    // South  px=0  pz=+85
    { type: 'box', pos: [   0,   5,   85], size: [46, 10,  46  ], rotation: null },
    { type: 'box', pos: [  10, 12.5,   75], size: [ 4,  5,   4  ], rotation: null },
    { type: 'box', pos: [ -12,  12,   97], size: [ 5,  4,   4  ], rotation: null },
    { type: 'box', pos: [   0,  11,   63], size: [46,  2, 1.5  ], rotation: null },
    { type: 'box', pos: [   0,  11,  107], size: [46,  2, 1.5  ], rotation: null },
    { type: 'box', pos: [ -22,  11,   85], size: [1.5, 2,  46  ], rotation: null },
    { type: 'box', pos: [  22,  11,   85], size: [1.5, 2,  46  ], rotation: null },
    { type: 'box', pos: [   0, 6.424,  49], size: [36, 1.5, 34 ], rotation: [ 0.34302, 0, 0] },
    { type: 'box', pos: [   0, 6.424, 121], size: [36, 1.5, 34 ], rotation: [ 0.34302, 0, 0] },

    // West  px=-85  pz=0
    { type: 'box', pos: [ -85,   5,    0], size: [46, 10,  46  ], rotation: null },
    { type: 'box', pos: [ -75, 12.5,  -10], size: [ 4,  5,   4  ], rotation: null },
    { type: 'box', pos: [ -97,  12,   12], size: [ 5,  4,   4  ], rotation: null },
    { type: 'box', pos: [ -85,  11,  -22], size: [46,  2, 1.5  ], rotation: null },
    { type: 'box', pos: [ -85,  11,   22], size: [46,  2, 1.5  ], rotation: null },
    { type: 'box', pos: [-107,  11,    0], size: [1.5, 2,  46  ], rotation: null },
    { type: 'box', pos: [ -63,  11,    0], size: [1.5, 2,  46  ], rotation: null },
    { type: 'box', pos: [ -49, 6.424,   0], size: [34, 1.5, 36 ], rotation: [0, 0, -0.34302] },
    { type: 'box', pos: [-121, 6.424,   0], size: [34, 1.5, 36 ], rotation: [0, 0,  0.34302] },

    // East  px=+85  pz=0
    { type: 'box', pos: [  85,   5,    0], size: [46, 10,  46  ], rotation: null },
    { type: 'box', pos: [  95, 12.5,  -10], size: [ 4,  5,   4  ], rotation: null },
    { type: 'box', pos: [  73,  12,   12], size: [ 5,  4,   4  ], rotation: null },
    { type: 'box', pos: [  85,  11,  -22], size: [46,  2, 1.5  ], rotation: null },
    { type: 'box', pos: [  85,  11,   22], size: [46,  2, 1.5  ], rotation: null },
    { type: 'box', pos: [  63,  11,    0], size: [1.5, 2,  46  ], rotation: null },
    { type: 'box', pos: [ 107,  11,    0], size: [1.5, 2,  46  ], rotation: null },
    { type: 'box', pos: [  49, 6.424,   0], size: [34, 1.5, 36 ], rotation: [0, 0,  0.34302] },
    { type: 'box', pos: [ 121, 6.424,   0], size: [34, 1.5, 36 ], rotation: [0, 0, -0.34302] },

    // ── §4  CENTER BRIDGE COMPLEX (16) ──────────────────────────────────────
    // N-S catwalk deck top at y=12, W-E bridge deck top at y=14
    { type: 'box', pos: [    0,  11,    0], size: [ 16,  2,  90 ], rotation: null },
    { type: 'box', pos: [    0,  13,    0], size: [ 90,  2,  16 ], rotation: null },
    // Bridge mid-cover walls
    { type: 'box', pos: [  -20, 15.5,   0], size: [1.5,  3,  14 ], rotation: null },
    { type: 'box', pos: [   20, 15.5,   0], size: [1.5,  3,  14 ], rotation: null },
    // Bridge pillars (h=14)
    { type: 'box', pos: [  -28,   7,   -6], size: [3.6, 14, 3.6 ], rotation: null },
    { type: 'box', pos: [   28,   7,   -6], size: [3.6, 14, 3.6 ], rotation: null },
    { type: 'box', pos: [  -28,   7,    6], size: [3.6, 14, 3.6 ], rotation: null },
    { type: 'box', pos: [   28,   7,    6], size: [3.6, 14, 3.6 ], rotation: null },
    // Catwalk pillars (h=12)
    { type: 'box', pos: [   -6,   6,  -28], size: [3.6, 12, 3.6 ], rotation: null },
    { type: 'box', pos: [   -6,   6,   28], size: [3.6, 12, 3.6 ], rotation: null },
    { type: 'box', pos: [    6,   6,  -28], size: [3.6, 12, 3.6 ], rotation: null },
    { type: 'box', pos: [    6,   6,   28], size: [3.6, 12, 3.6 ], rotation: null },
    // W-E bridge ramps  rise=4 over 26 → angle=atan2(4,26)≈0.15265
    { type: 'box', pos: [   60, 12.870,  0], size: [ 28, 1.5,  14], rotation: [0, 0, -0.15265] },
    { type: 'box', pos: [  -60, 12.870,  0], size: [ 28, 1.5,  14], rotation: [0, 0,  0.15265] },
    // N-S catwalk ramps  rise=2 over 26 → angle=atan2(2,26)≈0.07677
    { type: 'box', pos: [    0, 11.822,  60], size: [ 14, 1.5,  28], rotation: [-0.07677, 0, 0] },
    { type: 'box', pos: [    0, 11.822, -60], size: [ 14, 1.5,  28], rotation: [ 0.07677, 0, 0] },

    // ── §5  CRYSTAL TOWER BASE (1) ────────────────────────────────────────
    { type: 'box', pos: [    0,  15.5,   0], size: [  9,  3,   9 ], rotation: null },

    // ── §6  INNER CANYON CLIFFS (4 × 4 = 16) ─────────────────────────────
    // buildInnerCliff(xs, zs): cx=xs*62, cz=zs*62
    //   Block-A  [cx, 11, cz+zs*8]   28×22×48
    //   Block-B  [cx+xs*8, 11, cz]   48×22×28
    //   Gap-A    [cx+xs*17, 11, cz+zs*26]   6×22×12
    //   Gap-B    [cx+xs*26, 11, cz+zs*17]  12×22×6

    // SW  xs=-1  zs=+1  cx=-62  cz=+62
    { type: 'box', pos: [ -62,  11,   70], size: [ 28, 22, 48], rotation: null },
    { type: 'box', pos: [ -70,  11,   62], size: [ 48, 22, 28], rotation: null },
    { type: 'box', pos: [ -79,  11,   88], size: [  6, 22, 12], rotation: null },
    { type: 'box', pos: [ -88,  11,   79], size: [ 12, 22,  6], rotation: null },

    // SE  xs=+1  zs=+1  cx=+62  cz=+62
    { type: 'box', pos: [  62,  11,   70], size: [ 28, 22, 48], rotation: null },
    { type: 'box', pos: [  70,  11,   62], size: [ 48, 22, 28], rotation: null },
    { type: 'box', pos: [  79,  11,   88], size: [  6, 22, 12], rotation: null },
    { type: 'box', pos: [  88,  11,   79], size: [ 12, 22,  6], rotation: null },

    // NW  xs=-1  zs=-1  cx=-62  cz=-62
    { type: 'box', pos: [ -62,  11,  -70], size: [ 28, 22, 48], rotation: null },
    { type: 'box', pos: [ -70,  11,  -62], size: [ 48, 22, 28], rotation: null },
    { type: 'box', pos: [ -79,  11,  -88], size: [  6, 22, 12], rotation: null },
    { type: 'box', pos: [ -88,  11,  -79], size: [ 12, 22,  6], rotation: null },

    // NE  xs=+1  zs=-1  cx=+62  cz=-62
    { type: 'box', pos: [  62,  11,  -70], size: [ 28, 22, 48], rotation: null },
    { type: 'box', pos: [  70,  11,  -62], size: [ 48, 22, 28], rotation: null },
    { type: 'box', pos: [  79,  11,  -88], size: [  6, 22, 12], rotation: null },
    { type: 'box', pos: [  88,  11,  -79], size: [ 12, 22,  6], rotation: null },

    // ── §7  LOWER MID COVER (8) ───────────────────────────────────────────
    { type: 'box', pos: [   0, 1.5,   38], size: [ 20,   3, 1.5], rotation: null },
    { type: 'box', pos: [   0, 1.5,  -38], size: [ 20,   3, 1.5], rotation: null },
    { type: 'box', pos: [  38, 1.5,    0], size: [1.5,   3,  20], rotation: null },
    { type: 'box', pos: [ -38, 1.5,    0], size: [1.5,   3,  20], rotation: null },
    { type: 'box', pos: [  18, 2.5,   22], size: [  4,   5,   4], rotation: null },
    { type: 'box', pos: [ -18, 2.5,  -22], size: [  4,   5,   4], rotation: null },
    { type: 'box', pos: [  18, 2.5,  -22], size: [  4,   5,   4], rotation: null },
    { type: 'box', pos: [ -18, 2.5,   22], size: [  4,   5,   4], rotation: null },

    // ── §8  MID-FIELD SCATTER COVER (28) ─────────────────────────────────
    // s = 3.5 + |sin(x*0.13 + z*0.07)| * 2.5
    // pos = [x, (s+1.5)/2, z]   size = [s, s+1.5, s]

    // Inner ring
    { type: 'box', pos: [ -42, 3.4147,    0], size: [5.3293, 6.8293, 5.3293], rotation: null },
    { type: 'box', pos: [  42, 3.4147,    0], size: [5.3293, 6.8293, 5.3293], rotation: null },
    { type: 'box', pos: [   0, 2.7504,  -42], size: [4.0007, 5.5007, 4.0007], rotation: null },
    { type: 'box', pos: [   0, 2.7504,   42], size: [4.0007, 5.5007, 4.0007], rotation: null },
    { type: 'box', pos: [ -30, 3.7173,   30], size: [5.9346, 7.4346, 5.9346], rotation: null },
    { type: 'box', pos: [  30, 2.8493,   30], size: [4.1986, 5.6986, 4.1986], rotation: null },
    { type: 'box', pos: [ -30, 2.8493,  -30], size: [4.1986, 5.6986, 4.1986], rotation: null },
    { type: 'box', pos: [  30, 3.7173,  -30], size: [5.9346, 7.4346, 5.9346], rotation: null },

    // Outer ring
    { type: 'box', pos: [ -60, 3.6519,   50], size: [5.8038, 7.3038, 5.8038], rotation: null },
    { type: 'box', pos: [  60, 3.6909,   50], size: [5.8818, 7.3818, 5.8818], rotation: null },
    { type: 'box', pos: [ -60, 3.6909,  -50], size: [5.8818, 7.3818, 5.8818], rotation: null },
    { type: 'box', pos: [  60, 3.6519,  -50], size: [5.8038, 7.3038, 5.8038], rotation: null },
    { type: 'box', pos: [ -50, 3.4322,   60], size: [5.3643, 6.8643, 5.3643], rotation: null },
    { type: 'box', pos: [  50, 3.7002,   60], size: [5.9004, 7.4004, 5.9004], rotation: null },
    { type: 'box', pos: [ -50, 3.7002,  -60], size: [5.9004, 7.4004, 5.9004], rotation: null },
    { type: 'box', pos: [  50, 3.4322,  -60], size: [5.3643, 6.8643, 5.3643], rotation: null },

    // Far scatter
    { type: 'box', pos: [-145, 2.5006,    0], size: [3.5011, 5.0011, 3.5011], rotation: null },
    { type: 'box', pos: [ 145, 2.5006,    0], size: [3.5011, 5.0011, 3.5011], rotation: null },
    { type: 'box', pos: [   0, 3.3272, -145], size: [5.1543, 6.6543, 5.1543], rotation: null },
    { type: 'box', pos: [   0, 3.3272,  145], size: [5.1543, 6.6543, 5.1543], rotation: null },
    { type: 'box', pos: [-140, 3.5585,   50], size: [5.6170, 7.1170, 5.6170], rotation: null },
    { type: 'box', pos: [ 140, 2.8594,   50], size: [4.2187, 5.7187, 4.2187], rotation: null },
    { type: 'box', pos: [-140, 2.8594,  -50], size: [4.2187, 5.7187, 4.2187], rotation: null },
    { type: 'box', pos: [ 140, 3.5585,  -50], size: [5.6170, 7.1170, 5.6170], rotation: null },
    { type: 'box', pos: [ -50, 2.6972,  140], size: [3.8944, 5.3944, 3.8944], rotation: null },
    { type: 'box', pos: [  50, 3.1973,  140], size: [4.8946, 6.3946, 4.8946], rotation: null },
    { type: 'box', pos: [ -50, 3.1973, -140], size: [4.8946, 6.3946, 4.8946], rotation: null },
    { type: 'box', pos: [  50, 2.6972, -140], size: [3.8944, 5.3944, 3.8944], rotation: null },

    // ── §9  OUTER FLANK CORRIDORS (7 × 4 = 28) ───────────────────────────
    // buildFlankCorridor: raised floor y=4, pillars t∈{-65,-32.5,0,32.5,65}, inner canyon wall

    // East  px=+158
    { type: 'box', pos: [ 158,   2,      0], size: [ 28,  4, 160], rotation: null },
    { type: 'box', pos: [ 158,   7,    -65], size: [  5,  6,   5], rotation: null },
    { type: 'box', pos: [ 158,   7,  -32.5], size: [  5,  6,   5], rotation: null },
    { type: 'box', pos: [ 158,   7,      0], size: [  5,  6,   5], rotation: null },
    { type: 'box', pos: [ 158,   7,   32.5], size: [  5,  6,   5], rotation: null },
    { type: 'box', pos: [ 158,   7,     65], size: [  5,  6,   5], rotation: null },
    { type: 'box', pos: [ 142,   9,      0], size: [  3, 18, 170], rotation: null },

    // West  px=-158
    { type: 'box', pos: [-158,   2,      0], size: [ 28,  4, 160], rotation: null },
    { type: 'box', pos: [-158,   7,    -65], size: [  5,  6,   5], rotation: null },
    { type: 'box', pos: [-158,   7,  -32.5], size: [  5,  6,   5], rotation: null },
    { type: 'box', pos: [-158,   7,      0], size: [  5,  6,   5], rotation: null },
    { type: 'box', pos: [-158,   7,   32.5], size: [  5,  6,   5], rotation: null },
    { type: 'box', pos: [-158,   7,     65], size: [  5,  6,   5], rotation: null },
    { type: 'box', pos: [-142,   9,      0], size: [  3, 18, 170], rotation: null },

    // South  pz=+158
    { type: 'box', pos: [   0,   2,    158], size: [160,  4,  28], rotation: null },
    { type: 'box', pos: [ -65,   7,    158], size: [  5,  6,   5], rotation: null },
    { type: 'box', pos: [-32.5,  7,    158], size: [  5,  6,   5], rotation: null },
    { type: 'box', pos: [   0,   7,    158], size: [  5,  6,   5], rotation: null },
    { type: 'box', pos: [32.5,   7,    158], size: [  5,  6,   5], rotation: null },
    { type: 'box', pos: [  65,   7,    158], size: [  5,  6,   5], rotation: null },
    { type: 'box', pos: [   0,   9,    142], size: [170, 18,   3], rotation: null },

    // North  pz=-158
    { type: 'box', pos: [   0,   2,   -158], size: [160,  4,  28], rotation: null },
    { type: 'box', pos: [ -65,   7,   -158], size: [  5,  6,   5], rotation: null },
    { type: 'box', pos: [-32.5,  7,   -158], size: [  5,  6,   5], rotation: null },
    { type: 'box', pos: [   0,   7,   -158], size: [  5,  6,   5], rotation: null },
    { type: 'box', pos: [32.5,   7,   -158], size: [  5,  6,   5], rotation: null },
    { type: 'box', pos: [  65,   7,   -158], size: [  5,  6,   5], rotation: null },
    { type: 'box', pos: [   0,   9,   -142], size: [170, 18,   3], rotation: null },
  ],

  // Visual-only config (server ignores these) — Frozen Dawn mood
  // fogNear/fogFar updated for 400×400 footprint
  visuals: {
    skyColor:              0xc8e8ff,
    fogColor:              0xc8e8ff,
    fogNear:               90,
    fogFar:                260,
    ambientColor:          0xe8f0ff,
    ambientIntensity:      1.2,
    directionalColor:      0xbfdcff,
    directionalIntensity:  1.4,
    directionalPos:        [90, 120, 60],
    hemisphereSkyColor:    0xb0d8ff,
    hemisphereGroundColor: 0xddeeff,
    hemisphereIntensity:   0.7,
    groundColor:           0x9bbdd4,
    starCount:             0,
  },
};
