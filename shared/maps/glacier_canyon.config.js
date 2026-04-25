// shared/maps/glacier_canyon.config.js
// Pure data — no imports. Server reads obs.pos directly; client reads COLLISION_BODIES from GlacierCanyon.js.
// All pos values are box centres, derived from addBox(px,py,pz,w,h,d) → position:[px, py+h/2, pz].
// Rotations are [rotX, rotY, rotZ] Euler angles passed to CANNON quaternion.setFromEuler.
//
// Y levels:
//   0  = canyon floor
//   6  = corner spawn platform tops      (pad h=6, base at y=0)
//   10 = mid platform tops               (pad h=10, base at y=0)
//   12 = N-S catwalk deck top            (deck h=2, addBox py=10)
//   14 = W-E bridge deck top             (deck h=2, addBox py=12)
//   17 = crystal tower base top          (base h=3, addBox py=14)
//
// Spawn Y = 7.0:  platform top (6) + player sphere radius (0.9) → min centre 6.9 → 7.0

export default {
  id: 'glacier_canyon',
  displayName: 'Glacier Canyon',

  groundY: 0,
  mapHalf: 200,
  gravity: [0, -28, 0],
  surfaceNormal: [0, 1, 0],

  // ── Spawn points — 4 per corner platform, y=7.0 ─────────────────────────
  // Order matches GlacierCanyon.js SPAWN_POINTS: SW → SE → NW → NE
  spawnPoints: [
    // SW (x−, z+)
    [-100, 7.0,  100], [-116, 7.0,  100], [-100, 7.0,  116], [-116, 7.0,  116],
    // SE (x+, z+)
    [ 100, 7.0,  100], [ 116, 7.0,  100], [ 100, 7.0,  116], [ 116, 7.0,  116],
    // NW (x−, z−)
    [-100, 7.0, -100], [-116, 7.0, -100], [-100, 7.0, -116], [-116, 7.0, -116],
    // NE (x+, z−)
    [ 100, 7.0, -100], [ 116, 7.0, -100], [ 100, 7.0, -116], [ 116, 7.0, -116],
  ],

  // blue = north (z < 0), red = south (z > 0)
  teamSpawns: {
    blue: [
      [-100, 7.0, -100], [-116, 7.0, -100], [-100, 7.0, -116], [-116, 7.0, -116],
      [ 100, 7.0, -100], [ 116, 7.0, -100], [ 100, 7.0, -116], [ 116, 7.0, -116],
    ],
    red: [
      [-100, 7.0,  100], [-116, 7.0,  100], [-100, 7.0,  116], [-116, 7.0,  116],
      [ 100, 7.0,  100], [ 116, 7.0,  100], [ 100, 7.0,  116], [ 116, 7.0,  116],
    ],
  },

  // ── Physics obstacles — 169 boxes total ─────────────────────────────────
  // Sections mirror GlacierCanyon.js build order so they stay in sync.
  obstacles: [

    // ── §1  BOUNDARY WALLS (4) ──────────────────────────────────────────────
    { "type": "box", "pos": [   0, 16, -202], "size": [404, 32,  12], "rotation": null },
    { "type": "box", "pos": [   0, 16,  202], "size": [404, 32,  12], "rotation": null },
    { "type": "box", "pos": [-202, 16,    0], "size": [ 12, 32, 404], "rotation": null },
    { "type": "box", "pos": [ 202, 16,    0], "size": [ 12, 32, 404], "rotation": null },

    // ── §2  CORNER SPAWN PLATFORMS (9 bodies × 4 corners = 36) ─────────────
    // buildCornerSpawn(xs, zs): cx=xs*108, cz=zs*108
    //   main pad    addBox(cx, 0, cz, 52, 6, 52)               → pos=[cx, 3, cz]
    //   boulders    addBox(cx±14, 6, cz, 4,4,4) × 4             → pos=[…, 8, …]
    //   parapet-Z   addBox(cx, 6, cz+zs*26, 52, 2.5, 1.5)       → pos=[cx, 7.25, cz+zs*26]
    //   parapet-X   addBox(cx+xs*26, 6, cz, 1.5, 2.5, 52)       → pos=[cx+xs*26, 7.25, cz]
    //   ramp-Z      addBox(cx, 2.42, cz−zs*34, 40, 1.5, 24, −rzAngle, 0)   rzAngle=zs*atan2(6,22)
    //   ramp-X      addBox(cx−xs*34, 2.42, cz, 24, 1.5, 40, 0, rxAngle)    rxAngle=xs*atan2(6,22)
    // atan2(6,22) = 0.2662520491509253 rad

    // SW  xs=-1  zs=+1  cx=-108  cz=+108
    { "type": "box", "pos": [-108,  3,  108], "size": [52, 6, 52],     "rotation": null },
    { "type": "box", "pos": [-122,  8,  108], "size": [ 4, 4,  4],     "rotation": null },
    { "type": "box", "pos": [ -94,  8,  108], "size": [ 4, 4,  4],     "rotation": null },
    { "type": "box", "pos": [-108,  8,   94], "size": [ 4, 4,  4],     "rotation": null },
    { "type": "box", "pos": [-108,  8,  122], "size": [ 4, 4,  4],     "rotation": null },
    { "type": "box", "pos": [-108,  7.25, 134], "size": [52, 2.5, 1.5], "rotation": null },
    { "type": "box", "pos": [-134,  7.25, 108], "size": [1.5, 2.5, 52], "rotation": null },
    { "type": "box", "pos": [-108,  3.881,  74], "size": [40, 1.5, 24], "rotation": [-0.2662520491509253, 0, 0] },
    { "type": "box", "pos": [ -74,  3.881, 108], "size": [24, 1.5, 40], "rotation": [0, 0, -0.2662520491509253] },

    // SE  xs=+1  zs=+1  cx=+108  cz=+108
    { "type": "box", "pos": [ 108,  3,  108], "size": [52, 6, 52],     "rotation": null },
    { "type": "box", "pos": [  94,  8,  108], "size": [ 4, 4,  4],     "rotation": null },
    { "type": "box", "pos": [ 122,  8,  108], "size": [ 4, 4,  4],     "rotation": null },
    { "type": "box", "pos": [ 108,  8,   94], "size": [ 4, 4,  4],     "rotation": null },
    { "type": "box", "pos": [ 108,  8,  122], "size": [ 4, 4,  4],     "rotation": null },
    { "type": "box", "pos": [ 108,  7.25, 134], "size": [52, 2.5, 1.5], "rotation": null },
    { "type": "box", "pos": [ 134,  7.25, 108], "size": [1.5, 2.5, 52], "rotation": null },
    { "type": "box", "pos": [ 108,  3.881,  74], "size": [40, 1.5, 24], "rotation": [-0.2662520491509253, 0, 0] },
    { "type": "box", "pos": [  74,  3.881, 108], "size": [24, 1.5, 40], "rotation": [0, 0,  0.2662520491509253] },

    // NW  xs=-1  zs=-1  cx=-108  cz=-108
    { "type": "box", "pos": [-108,  3, -108], "size": [52, 6, 52],     "rotation": null },
    { "type": "box", "pos": [-122,  8, -108], "size": [ 4, 4,  4],     "rotation": null },
    { "type": "box", "pos": [ -94,  8, -108], "size": [ 4, 4,  4],     "rotation": null },
    { "type": "box", "pos": [-108,  8, -122], "size": [ 4, 4,  4],     "rotation": null },
    { "type": "box", "pos": [-108,  8,  -94], "size": [ 4, 4,  4],     "rotation": null },
    { "type": "box", "pos": [-108,  7.25, -134], "size": [52, 2.5, 1.5], "rotation": null },
    { "type": "box", "pos": [-134,  7.25, -108], "size": [1.5, 2.5, 52], "rotation": null },
    { "type": "box", "pos": [-108,  3.881,  -74], "size": [40, 1.5, 24], "rotation": [0.2662520491509253, 0, 0] },
    { "type": "box", "pos": [ -74,  3.881, -108], "size": [24, 1.5, 40], "rotation": [0, 0, -0.2662520491509253] },

    // NE  xs=+1  zs=-1  cx=+108  cz=-108
    { "type": "box", "pos": [ 108,  3, -108], "size": [52, 6, 52],     "rotation": null },
    { "type": "box", "pos": [  94,  8, -108], "size": [ 4, 4,  4],     "rotation": null },
    { "type": "box", "pos": [ 122,  8, -108], "size": [ 4, 4,  4],     "rotation": null },
    { "type": "box", "pos": [ 108,  8, -122], "size": [ 4, 4,  4],     "rotation": null },
    { "type": "box", "pos": [ 108,  8,  -94], "size": [ 4, 4,  4],     "rotation": null },
    { "type": "box", "pos": [ 108,  7.25, -134], "size": [52, 2.5, 1.5], "rotation": null },
    { "type": "box", "pos": [ 134,  7.25, -108], "size": [1.5, 2.5, 52], "rotation": null },
    { "type": "box", "pos": [ 108,  3.881,  -74], "size": [40, 1.5, 24], "rotation": [0.2662520491509253, 0, 0] },
    { "type": "box", "pos": [  74,  3.881, -108], "size": [24, 1.5, 40], "rotation": [0, 0,  0.2662520491509253] },

    // ── §3  MID PLATFORMS (8 bodies × 4 platforms = 32) ───────────────────
    // buildMidPlatform(px, pz):
    //   main pad     addBox(px, 0, pz, 46, 10, 46)              → pos=[px, 5, pz]
    //   boulder-1    addBox(px+10, 10, pz-10, 4, 5, 4)          → pos=[…, 12.5, …]
    //   boulder-2    addBox(px-12, 10, pz+12, 5, 4, 4)          → pos=[…, 12, …]
    //   parapets ×4  addBox(…, 10, …, …, 2, …)                  → pos y=11
    //   ramp (N/S)   addBox(px, 4.45, pz∓zs*36, 36, 1.5, 30, ∓angle, 0)  angle=atan2(10,28)=0.3430239404207034
    //   ramp (E/W)   addBox(px∓xs*36, 4.45, pz, 30, 1.5, 36, 0, ±angle)

    // North  px=0  pz=-85
    { "type": "box", "pos": [   0,  5,  -85], "size": [46, 10, 46], "rotation": null },
    { "type": "box", "pos": [  10, 12.5, -95], "size": [ 4,  5,  4], "rotation": null },
    { "type": "box", "pos": [ -12, 12,  -73], "size": [ 5,  4,  4], "rotation": null },
    { "type": "box", "pos": [   0, 11, -107], "size": [46,  2, 1.5], "rotation": null },
    { "type": "box", "pos": [   0, 11,  -63], "size": [46,  2, 1.5], "rotation": null },
    { "type": "box", "pos": [ -22, 11,  -85], "size": [1.5, 2, 46], "rotation": null },
    { "type": "box", "pos": [  22, 11,  -85], "size": [1.5, 2, 46], "rotation": null },
    { "type": "box", "pos": [   0,  6.424, -49], "size": [36, 1.5, 34], "rotation": [0.3430239404207034, 0, 0] },

    // South  px=0  pz=+85
    { "type": "box", "pos": [   0,  5,   85], "size": [46, 10, 46], "rotation": null },
    { "type": "box", "pos": [  10, 12.5,  75], "size": [ 4,  5,  4], "rotation": null },
    { "type": "box", "pos": [ -12, 12,   97], "size": [ 5,  4,  4], "rotation": null },
    { "type": "box", "pos": [   0, 11,   63], "size": [46,  2, 1.5], "rotation": null },
    { "type": "box", "pos": [   0, 11,  107], "size": [46,  2, 1.5], "rotation": null },
    { "type": "box", "pos": [ -22, 11,   85], "size": [1.5, 2, 46], "rotation": null },
    { "type": "box", "pos": [  22, 11,   85], "size": [1.5, 2, 46], "rotation": null },
    { "type": "box", "pos": [   0,  6.424,  49], "size": [36, 1.5, 34], "rotation": [-0.3430239404207034, 0, 0] },

    // West  px=-85  pz=0
    { "type": "box", "pos": [ -85,  5,    0], "size": [46, 10, 46], "rotation": null },
    { "type": "box", "pos": [ -75, 12.5, -10], "size": [ 4,  5,  4], "rotation": null },
    { "type": "box", "pos": [ -97, 12,   12], "size": [ 5,  4,  4], "rotation": null },
    { "type": "box", "pos": [ -85, 11,  -22], "size": [46,  2, 1.5], "rotation": null },
    { "type": "box", "pos": [ -85, 11,   22], "size": [46,  2, 1.5], "rotation": null },
    { "type": "box", "pos": [-107, 11,    0], "size": [1.5, 2, 46], "rotation": null },
    { "type": "box", "pos": [ -63, 11,    0], "size": [1.5, 2, 46], "rotation": null },
    { "type": "box", "pos": [ -49,  6.424,   0], "size": [34, 1.5, 36], "rotation": [0, 0, -0.3430239404207034] },

    // East  px=+85  pz=0
    { "type": "box", "pos": [  85,  5,    0], "size": [46, 10, 46], "rotation": null },
    { "type": "box", "pos": [  95, 12.5, -10], "size": [ 4,  5,  4], "rotation": null },
    { "type": "box", "pos": [  73, 12,   12], "size": [ 5,  4,  4], "rotation": null },
    { "type": "box", "pos": [  85, 11,  -22], "size": [46,  2, 1.5], "rotation": null },
    { "type": "box", "pos": [  85, 11,   22], "size": [46,  2, 1.5], "rotation": null },
    { "type": "box", "pos": [  63, 11,    0], "size": [1.5, 2, 46], "rotation": null },
    { "type": "box", "pos": [ 107, 11,    0], "size": [1.5, 2, 46], "rotation": null },
    { "type": "box", "pos": [  49,  6.424,   0], "size": [34, 1.5, 36], "rotation": [0, 0,  0.3430239404207034] },

    // ── §4  CENTER BRIDGE COMPLEX (16 bodies) ─────────────────────────────
    // N-S catwalk deck: addBox(0,10,0,16,2,90) → pos=[0,11,0]
    { "type": "box", "pos": [   0, 11,    0], "size": [16,  2, 90], "rotation": null },
    // W-E bridge deck: addBox(0,12,0,90,2,16) → pos=[0,13,0]
    { "type": "box", "pos": [   0, 13,    0], "size": [90,  2, 16], "rotation": null },
    // Bridge mid-covers: addBox(±20,14,0,1.5,3,14) → pos=[±20,15.5,0]
    { "type": "box", "pos": [ -20, 15.5,   0], "size": [1.5, 3, 14], "rotation": null },
    { "type": "box", "pos": [  20, 15.5,   0], "size": [1.5, 3, 14], "rotation": null },
    // Tall pillars (h=14): addBox(±28,0,∓6,3.6,14,3.6) → pos y=7
    { "type": "box", "pos": [ -28,  7,   -6], "size": [3.6, 14, 3.6], "rotation": null },
    { "type": "box", "pos": [  28,  7,   -6], "size": [3.6, 14, 3.6], "rotation": null },
    { "type": "box", "pos": [ -28,  7,    6], "size": [3.6, 14, 3.6], "rotation": null },
    { "type": "box", "pos": [  28,  7,    6], "size": [3.6, 14, 3.6], "rotation": null },
    // Short pillars (h=12): addBox(∓6,0,±28,3.6,12,3.6) → pos y=6
    { "type": "box", "pos": [  -6,  6,  -28], "size": [3.6, 12, 3.6], "rotation": null },
    { "type": "box", "pos": [  -6,  6,   28], "size": [3.6, 12, 3.6], "rotation": null },
    { "type": "box", "pos": [   6,  6,  -28], "size": [3.6, 12, 3.6], "rotation": null },
    { "type": "box", "pos": [   6,  6,   28], "size": [3.6, 12, 3.6], "rotation": null },
    // W-E bridge ramps: addBox(±60,11.45,0,28,1.5,14,0,∓bridgeRampAngle) → pos y=12.2
    // bridgeRampAngle = atan2(4,26) = 0.15264932839526518
    { "type": "box", "pos": [  60, 12.870,   0], "size": [28, 1.5, 14], "rotation": [0, 0, -0.15264932839526518] },
    { "type": "box", "pos": [ -60, 12.870,   0], "size": [28, 1.5, 14], "rotation": [0, 0,  0.15264932839526518] },
    // N-S catwalk ramps: addBox(0,10.45,±60,14,1.5,28,∓catRampAngle,0) → pos y=11.2
    // catRampAngle = atan2(2,26) = 0.07677189126977804
    { "type": "box", "pos": [   0, 11.822,   60], "size": [14, 1.5, 28], "rotation": [-0.07677189126977804, 0, 0] },
    { "type": "box", "pos": [   0, 11.822,  -60], "size": [14, 1.5, 28], "rotation": [ 0.07677189126977804, 0, 0] },

    // ── §5  CRYSTAL TOWER BASE (1) ────────────────────────────────────────
    // addBox(0,14,0,9,3,9) → pos=[0,15.5,0]
    { "type": "box", "pos": [   0, 15.5,   0], "size": [9, 3, 9], "rotation": null },

    // ── §6  INNER CANYON CLIFFS (4 bodies × 4 quadrants = 16) ─────────────
    // buildInnerCliff(xs, zs): cx=xs*62, cz=zs*62
    //   block-A  addBox(cx, 0, cz+zs*8, 28, 22, 48)          → pos y=11
    //   block-B  addBox(cx+xs*8, 0, cz, 48, 22, 28)          → pos y=11
    //   gap-A    addBox(cx+xs*17, 0, cz+zs*26, 6, 22, 12)    → pos y=11
    //   gap-B    addBox(cx+xs*26, 0, cz+zs*17, 12, 22, 6)    → pos y=11

    // SW  xs=-1  zs=+1  cx=-62  cz=+62
    { "type": "box", "pos": [ -62, 11,  70], "size": [28, 22, 48], "rotation": null },
    { "type": "box", "pos": [ -70, 11,  62], "size": [48, 22, 28], "rotation": null },
    { "type": "box", "pos": [ -79, 11,  88], "size": [ 6, 22, 12], "rotation": null },
    { "type": "box", "pos": [ -88, 11,  79], "size": [12, 22,  6], "rotation": null },

    // SE  xs=+1  zs=+1  cx=+62  cz=+62
    { "type": "box", "pos": [  62, 11,  70], "size": [28, 22, 48], "rotation": null },
    { "type": "box", "pos": [  70, 11,  62], "size": [48, 22, 28], "rotation": null },
    { "type": "box", "pos": [  79, 11,  88], "size": [ 6, 22, 12], "rotation": null },
    { "type": "box", "pos": [  88, 11,  79], "size": [12, 22,  6], "rotation": null },

    // NW  xs=-1  zs=-1  cx=-62  cz=-62
    { "type": "box", "pos": [ -62, 11, -70], "size": [28, 22, 48], "rotation": null },
    { "type": "box", "pos": [ -70, 11, -62], "size": [48, 22, 28], "rotation": null },
    { "type": "box", "pos": [ -79, 11, -88], "size": [ 6, 22, 12], "rotation": null },
    { "type": "box", "pos": [ -88, 11, -79], "size": [12, 22,  6], "rotation": null },

    // NE  xs=+1  zs=-1  cx=+62  cz=-62
    { "type": "box", "pos": [  62, 11, -70], "size": [28, 22, 48], "rotation": null },
    { "type": "box", "pos": [  70, 11, -62], "size": [48, 22, 28], "rotation": null },
    { "type": "box", "pos": [  79, 11, -88], "size": [ 6, 22, 12], "rotation": null },
    { "type": "box", "pos": [  88, 11, -79], "size": [12, 22,  6], "rotation": null },

    // ── §7  LOWER MID COVER — barriers and pillars under the bridge (8) ───
    { "type": "box", "pos": [   0, 1.5,  38], "size": [20, 3, 1.5], "rotation": null },
    { "type": "box", "pos": [   0, 1.5, -38], "size": [20, 3, 1.5], "rotation": null },
    { "type": "box", "pos": [  38, 1.5,   0], "size": [1.5, 3, 20], "rotation": null },
    { "type": "box", "pos": [ -38, 1.5,   0], "size": [1.5, 3, 20], "rotation": null },
    { "type": "box", "pos": [  18, 2.5,  22], "size": [4, 5, 4],   "rotation": null },
    { "type": "box", "pos": [ -18, 2.5, -22], "size": [4, 5, 4],   "rotation": null },
    { "type": "box", "pos": [  18, 2.5, -22], "size": [4, 5, 4],   "rotation": null },
    { "type": "box", "pos": [ -18, 2.5,  22], "size": [4, 5, 4],   "rotation": null },

    // ── §8  MID-FIELD SCATTER COVER (28) ──────────────────────────────────
    // s = 3.5 + |sin(x*0.13 + z*0.07)| * 2.5
    // addBox(x, 0, z, s, s+1.5, s)  →  pos=[x, (s+1.5)/2, z]

    // Inner ring
    { "type": "box", "pos": [ -42, 3.4166440012445705,    0], "size": [5.333288002489141, 6.833288002489141, 5.333288002489141], "rotation": null },
    { "type": "box", "pos": [  42, 3.4166440012445705,    0], "size": [5.333288002489141, 6.833288002489141, 5.333288002489141], "rotation": null },
    { "type": "box", "pos": [   0, 2.7502874809022124,  -42], "size": [4.000574961804425, 5.500574961804425, 4.000574961804425], "rotation": null },
    { "type": "box", "pos": [   0, 2.7502874809022124,   42], "size": [4.000574961804425, 5.500574961804425, 4.000574961804425], "rotation": null },
    { "type": "box", "pos": [ -30, 3.717309538597744,    30], "size": [5.934619077195488, 7.434619077195488, 5.934619077195488], "rotation": null },
    { "type": "box", "pos": [  30, 2.8492693727486573,   30], "size": [4.198538745497315, 5.698538745497315, 4.198538745497315], "rotation": null },
    { "type": "box", "pos": [ -30, 2.8492693727486573,  -30], "size": [4.198538745497315, 5.698538745497315, 4.198538745497315], "rotation": null },
    { "type": "box", "pos": [  30, 3.717309538597744,   -30], "size": [5.934619077195488, 7.434619077195488, 5.934619077195488], "rotation": null },

    // Mid ring
    { "type": "box", "pos": [ -60, 3.645207420936819,    50], "size": [5.790414841873638, 7.290414841873638, 5.790414841873638], "rotation": null },
    { "type": "box", "pos": [  60, 3.692524062377611,    50], "size": [5.885048124755222, 7.385048124755222, 5.885048124755222], "rotation": null },
    { "type": "box", "pos": [ -60, 3.692524062377611,   -50], "size": [5.885048124755222, 7.385048124755222, 5.885048124755222], "rotation": null },
    { "type": "box", "pos": [  60, 3.645207420936819,   -50], "size": [5.790414841873638, 7.290414841873638, 5.790414841873638], "rotation": null },
    { "type": "box", "pos": [ -50, 3.4321315152209,      60], "size": [5.3642630304418,   6.8642630304418,   5.3642630304418  ], "rotation": null },
    { "type": "box", "pos": [  50, 3.695793770337735,    60], "size": [5.89158754067547,  7.39158754067547,  5.89158754067547 ], "rotation": null },
    { "type": "box", "pos": [ -50, 3.695793770337735,   -60], "size": [5.89158754067547,  7.39158754067547,  5.89158754067547 ], "rotation": null },
    { "type": "box", "pos": [  50, 3.4321315152209,     -60], "size": [5.3642630304418,   6.8642630304418,   5.3642630304418  ], "rotation": null },

    // Far ring
    { "type": "box", "pos": [-145, 2.5005550980583076,    0], "size": [3.5011101961166156, 5.001110196116615,  3.5011101961166156], "rotation": null },
    { "type": "box", "pos": [ 145, 2.5005550980583076,    0], "size": [3.5011101961166156, 5.001110196116615,  3.5011101961166156], "rotation": null },
    { "type": "box", "pos": [   0, 3.3291270281887475, -145], "size": [5.158254056377495,  6.658254056377495,  5.158254056377495 ], "rotation": null },
    { "type": "box", "pos": [   0, 3.3291270281887475,  145], "size": [5.158254056377495,  6.658254056377495,  5.158254056377495 ], "rotation": null },
    { "type": "box", "pos": [-140, 3.557183538928668,    50], "size": [5.614367077857336,  7.114367077857336,  5.614367077857336 ], "rotation": null },
    { "type": "box", "pos": [ 140, 2.8588158141596605,   50], "size": [4.217631628319321,  5.717631628319321,  4.217631628319321 ], "rotation": null },
    { "type": "box", "pos": [-140, 2.8588158141596605,  -50], "size": [4.217631628319321,  5.717631628319321,  4.217631628319321 ], "rotation": null },
    { "type": "box", "pos": [ 140, 3.557183538928668,   -50], "size": [5.614367077857336,  7.114367077857336,  5.614367077857336 ], "rotation": null },
    { "type": "box", "pos": [ -50, 2.6971821176790614,  140], "size": [3.8943642353581227, 5.394364235358123,  3.8943642353581227], "rotation": null },
    { "type": "box", "pos": [  50, 3.197565339108474,   140], "size": [4.895130678216948,  6.395130678216948,  4.895130678216948 ], "rotation": null },
    { "type": "box", "pos": [ -50, 3.197565339108474,  -140], "size": [4.895130678216948,  6.395130678216948,  4.895130678216948 ], "rotation": null },
    { "type": "box", "pos": [  50, 2.6971821176790614, -140], "size": [3.8943642353581227, 5.394364235358123,  3.8943642353581227], "rotation": null },

    // ── §9  OUTER FLANK CORRIDORS (7 bodies × 4 sides = 28) ───────────────
    // buildFlankCorridor(axis, sign):
    //   floor         addBox(px, 0, pz, fw, 4, fd)          → pos y=2
    //   5 pillars     addBox(cpx, 4, cpz, 5, 6, 5)          → pos y=7,  t=(i/4-0.5)*130 for i=0..4
    //   inner wall    addBox(iwX, 0, iwZ, iwW, 18, iwD)     → pos y=9

    // East flank  axis=X  sign=+1  px=158  pz=0  fw=28  fd=160  iwX=142  iwZ=0  iwW=3  iwD=170
    { "type": "box", "pos": [ 158,  2,     0], "size": [ 28,  4, 160], "rotation": null },
    { "type": "box", "pos": [ 158,  7,   -65], "size": [  5,  6,   5], "rotation": null },
    { "type": "box", "pos": [ 158,  7, -32.5], "size": [  5,  6,   5], "rotation": null },
    { "type": "box", "pos": [ 158,  7,     0], "size": [  5,  6,   5], "rotation": null },
    { "type": "box", "pos": [ 158,  7,  32.5], "size": [  5,  6,   5], "rotation": null },
    { "type": "box", "pos": [ 158,  7,    65], "size": [  5,  6,   5], "rotation": null },
    { "type": "box", "pos": [ 142,  9,     0], "size": [  3, 18, 170], "rotation": null },

    // West flank  axis=X  sign=-1  px=-158  pz=0  fw=28  fd=160  iwX=-142  iwZ=0  iwW=3  iwD=170
    { "type": "box", "pos": [-158,  2,     0], "size": [ 28,  4, 160], "rotation": null },
    { "type": "box", "pos": [-158,  7,   -65], "size": [  5,  6,   5], "rotation": null },
    { "type": "box", "pos": [-158,  7, -32.5], "size": [  5,  6,   5], "rotation": null },
    { "type": "box", "pos": [-158,  7,     0], "size": [  5,  6,   5], "rotation": null },
    { "type": "box", "pos": [-158,  7,  32.5], "size": [  5,  6,   5], "rotation": null },
    { "type": "box", "pos": [-158,  7,    65], "size": [  5,  6,   5], "rotation": null },
    { "type": "box", "pos": [-142,  9,     0], "size": [  3, 18, 170], "rotation": null },

    // South flank  axis=Z  sign=+1  px=0  pz=158  fw=160  fd=28  iwX=0  iwZ=142  iwW=170  iwD=3
    { "type": "box", "pos": [   0,  2,   158], "size": [160,  4,  28], "rotation": null },
    { "type": "box", "pos": [ -65,  7,   158], "size": [  5,  6,   5], "rotation": null },
    { "type": "box", "pos": [-32.5, 7,   158], "size": [  5,  6,   5], "rotation": null },
    { "type": "box", "pos": [   0,  7,   158], "size": [  5,  6,   5], "rotation": null },
    { "type": "box", "pos": [ 32.5, 7,   158], "size": [  5,  6,   5], "rotation": null },
    { "type": "box", "pos": [  65,  7,   158], "size": [  5,  6,   5], "rotation": null },
    { "type": "box", "pos": [   0,  9,   142], "size": [170, 18,   3], "rotation": null },

    // North flank  axis=Z  sign=-1  px=0  pz=-158  fw=160  fd=28  iwX=0  iwZ=-142  iwW=170  iwD=3
    { "type": "box", "pos": [   0,  2,  -158], "size": [160,  4,  28], "rotation": null },
    { "type": "box", "pos": [ -65,  7,  -158], "size": [  5,  6,   5], "rotation": null },
    { "type": "box", "pos": [-32.5, 7,  -158], "size": [  5,  6,   5], "rotation": null },
    { "type": "box", "pos": [   0,  7,  -158], "size": [  5,  6,   5], "rotation": null },
    { "type": "box", "pos": [ 32.5, 7,  -158], "size": [  5,  6,   5], "rotation": null },
    { "type": "box", "pos": [  65,  7,  -158], "size": [  5,  6,   5], "rotation": null },
    { "type": "box", "pos": [   0,  9,  -142], "size": [170, 18,   3], "rotation": null },
  ],

  // Visual-only config (server ignores these) — Frozen Dawn mood
  visuals: {
    skyColor:              0xa8c8e8,
    fogColor:              0xd0e0f0,
    fogNear:               60,
    fogFar:                220,
    ambientColor:          0xe8f0ff,
    ambientIntensity:      1.2,
    directionalColor:      0xbfdcff,
    directionalIntensity:  1.4,
    directionalPos:        [100, 200, -100],
    hemisphereSkyColor:    0xaaccee,
    hemisphereGroundColor: 0x6688aa,
    hemisphereIntensity:   0.8,
    groundColor:           0xc8dde8,
    starCount:             0,
  },
};