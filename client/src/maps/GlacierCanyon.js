import * as THREE from 'three';

// ═══════════════════════════════════════════════════════════════════════════
//  GLACIER CANYON  —  16-player map  (400 × 400 units)
//
//  Y levels:
//    0   = canyon floor
//    6   = corner spawn platforms
//    10  = mid platforms (N/S/E/W)
//    14  = center W-E bridge deck
//    12  = center N-S catwalk deck
//    28+ = crystal tower
//
//  Zones:
//    SW/SE/NW/NE Spawns  —  (±108, ±108), 4 players each
//    N/S/E/W Mid         —  (0,±85) / (±85,0), y=10
//    Center Bridge       —  (0,0), y=12-14
//    Crystal Tower       —  (0,0), y=14-40
//    Inner Canyon Cliffs —  diagonal chokepoints between zones
// ═══════════════════════════════════════════════════════════════════════════

const MAT = {
  floor:      new THREE.MeshStandardMaterial({ color: 0x9bbdd4, roughness: 0.85, metalness: 0.05 }),
  wall:       new THREE.MeshStandardMaterial({ color: 0x5a7fa8, roughness: 0.90, metalness: 0.00 }),
  platform:   new THREE.MeshStandardMaterial({ color: 0x7aaac8, roughness: 0.75, metalness: 0.08 }),
  bridge:     new THREE.MeshStandardMaterial({ color: 0x4a6880, roughness: 0.60, metalness: 0.30 }),
  railing:    new THREE.MeshStandardMaterial({ color: 0x3a5060, roughness: 0.50, metalness: 0.50 }),
  iceBoulder: new THREE.MeshStandardMaterial({ color: 0xadd4e8, roughness: 0.70, metalness: 0.10 }),
  crystal:    new THREE.MeshStandardMaterial({ color: 0x88d4ff, roughness: 0.10, metalness: 0.40, transparent: true, opacity: 0.82 }),
  spawnPad:   new THREE.MeshStandardMaterial({ color: 0x2a9a6a, roughness: 0.60, metalness: 0.20, emissive: 0x0a3020, emissiveIntensity: 0.4 }),
  highGround: new THREE.MeshStandardMaterial({ color: 0x6858a8, roughness: 0.80, metalness: 0.05 }),
  snow:       new THREE.MeshStandardMaterial({ color: 0xeef6ff, roughness: 1.00, metalness: 0.00 }),
  ramp:       new THREE.MeshStandardMaterial({ color: 0x6a9ab8, roughness: 0.80, metalness: 0.05 }),
};

function box(w, h, d, mat, x = 0, y = 0, z = 0) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  mesh.position.set(x, y + h / 2, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function tiltedBox(w, h, d, mat, cx, cy, cz, rotX = 0, rotZ = 0) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  mesh.position.set(cx, cy, cz);
  mesh.rotation.set(rotX, 0, rotZ);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function cylinder(rt, rb, h, seg, mat, x, y, z) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat);
  mesh.position.set(x, y + h / 2, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function cone(r, h, seg, mat, x, y, z) {
  const mesh = new THREE.Mesh(new THREE.ConeGeometry(r, h, seg), mat);
  mesh.position.set(x, y + h / 2, z);
  mesh.castShadow = true;
  return mesh;
}

// ── Collision registry (read by GlacierCanyonMap adapter) ─────────────────
export const COLLISION_BODIES = [];

function addBox(px, py, pz, sx, sy, sz, rotX = 0, rotZ = 0) {
  COLLISION_BODIES.push({
    type:     'box',
    position: [ px, py + sy / 2, pz ], 
    size:     [ sx, sy, sz ],
    rotation: rotX !== 0 || rotZ !== 0 ? [rotX, 0, rotZ] : null,
  });
}

// ── Spawn points: 4 per corner = 16 total ─────────────────────────────────
export const SPAWN_POINTS = [
  // SW  (x−, z+)  — y=7.0: platform top at y=6, sphere radius 0.9 → min center = 6.9
  { x: -100, y: 7.0, z:  100 }, { x: -116, y: 7.0, z:  100 },
  { x: -100, y: 7.0, z:  116 }, { x: -116, y: 7.0, z:  116 },
  // SE  (x+, z+)
  { x:  100, y: 7.0, z:  100 }, { x:  116, y: 7.0, z:  100 },
  { x:  100, y: 7.0, z:  116 }, { x:  116, y: 7.0, z:  116 },
  // NW  (x−, z−)
  { x: -100, y: 7.0, z: -100 }, { x: -116, y: 7.0, z: -100 },
  { x: -100, y: 7.0, z: -116 }, { x: -116, y: 7.0, z: -116 },
  // NE  (x+, z−)
  { x:  100, y: 7.0, z: -100 }, { x:  116, y: 7.0, z: -100 },
  { x:  100, y: 7.0, z: -116 }, { x:  116, y: 7.0, z: -116 },
];

export const AMMO_PICKUP_POSITIONS = [
  { x: 0,    y: 15, z:   0  },  // center bridge
  { x: 0,    y: 11, z: -85  }, { x: 0,    y: 11, z:  85  },  // N/S mid
  { x: -85,  y: 11, z:   0  }, { x: 85,   y: 11, z:   0  },  // W/E mid
  { x: -108, y: 7,  z: -108 }, { x:  108, y: 7,  z: -108 },  // NW/NE spawn
  { x: -108, y: 7,  z:  108 }, { x:  108, y: 7,  z:  108 },  // SW/SE spawn
  { x: -45,  y: 1,  z:   0  }, { x:  45,  y: 1,  z:   0  },  // inner mid E/W
  { x: 0,    y: 1,  z: -45  }, { x:   0,  y: 1,  z:  45  },  // inner mid N/S
];

// ── Main build function ────────────────────────────────────────────────────
export function buildGlacierCanyon(scene) {
  // Reset collision registry (safe for hot-reload / map switches)
  COLLISION_BODIES.length = 0;

  const root = new THREE.Group();
  root.name = 'GlacierCanyon';

  // ── 1. GROUND FLOOR ─────────────────────────────────────────────────────
  const floor = box(404, 1, 404, MAT.floor, 0, -1, 0);
  root.add(floor);
  // ground plane handled by Cannon.Plane in adapter — no addBox needed

  // ── 2. BOUNDARY WALLS ───────────────────────────────────────────────────
  [
    [404, 32, 12,  0,  0, -202],
    [404, 32, 12,  0,  0,  202],
    [12,  32, 404, -202, 0,  0],
    [12,  32, 404,  202, 0,  0],
  ].forEach(([w, h, d, x, y, z]) => {
    root.add(box(w, h, d, MAT.wall, x, y, z));
    addBox(x, y, z, w, h, d);
  });

  // ── 3. CORNER SPAWN PLATFORMS  (one per corner, 52×52, top at y=6) ──────
  function buildCornerSpawn(xs, zs) {
    const cx = xs * 108, cz = zs * 108;
    const g  = new THREE.Group();

    // Main pad
    g.add(box(52, 6, 52, MAT.platform, cx, 0, cz));
    addBox(cx, 0, cz, 52, 6, 52);

    // Snow surface
    g.add(box(48, 0.3, 48, MAT.snow, cx, 6, cz));

    // Spawn circles (4 per pad)
    [[cx-8, cz-8],[cx+8, cz-8],[cx-8, cz+8],[cx+8, cz+8]].forEach(([px, pz]) => {
      g.add(cylinder(3, 3, 0.3, 12, MAT.spawnPad, px, 6, pz));
    });

    // Cover boulders (4)
    [[-14,0],[14,0],[0,-14],[0,14]].forEach(([dx, dz]) => {
      g.add(box(4, 4, 4, MAT.iceBoulder, cx + dx, 6, cz + dz));
      addBox(cx + dx, 6, cz + dz, 4, 4, 4);
    });

    // Low parapet on outer two edges (open toward center)
    g.add(box(52, 2.5, 1.5, MAT.wall, cx,         6, cz + zs * 26));
    addBox(cx, 6, cz + zs * 26, 52, 2.5, 1.5);
    g.add(box(1.5, 2.5, 52, MAT.wall, cx + xs * 26, 6, cz));
    addBox(cx + xs * 26, 6, cz, 1.5, 2.5, 52);

    // Ramp toward center-Z (faces N/S toward mid)
    // cy=3.881 places the low end surface exactly at y=0 so players can walk onto the ramp
    const rzAngle = zs * Math.atan2(6, 22);
    g.add(tiltedBox(40, 1.5, 24, MAT.ramp, cx, 3.881, cz - zs * 34, -rzAngle, 0));
    addBox(cx, 3.131, cz - zs * 34, 40, 1.5, 24, -rzAngle, 0);

    // Ramp toward center-X (faces E/W toward mid)
    const rxAngle = xs * Math.atan2(6, 22);
    g.add(tiltedBox(24, 1.5, 40, MAT.ramp, cx - xs * 34, 3.881, cz, 0, rxAngle));
    addBox(cx - xs * 34, 3.131, cz, 24, 1.5, 40, 0, rxAngle);

    return g;
  }

  root.add(buildCornerSpawn(-1,  1)); // SW
  root.add(buildCornerSpawn( 1,  1)); // SE
  root.add(buildCornerSpawn(-1, -1)); // NW
  root.add(buildCornerSpawn( 1, -1)); // NE

  // ── 4. MID PLATFORMS  (N/S/E/W, 46×46, top at y=10) ────────────────────
  function buildMidPlatform(px, pz) {
    const g = new THREE.Group();

    g.add(box(46, 10, 46, MAT.highGround, px, 0, pz));
    addBox(px, 0, pz, 46, 10, 46);

    g.add(box(42, 0.3, 42, MAT.snow, px, 10, pz));

    // Two cover boulders on top
    g.add(box(4, 5, 4, MAT.iceBoulder, px + 10, 10, pz - 10));
    addBox(px + 10, 10, pz - 10, 4, 5, 4);
    g.add(box(5, 4, 4, MAT.iceBoulder, px - 12, 10, pz + 12));
    addBox(px - 12, 10, pz + 12, 5, 4, 4);

    // Low parapet on all four edges
    [
      [46, 2, 1.5, px,      10, pz - 22],
      [46, 2, 1.5, px,      10, pz + 22],
      [1.5, 2, 46, px - 22, 10, pz     ],
      [1.5, 2, 46, px + 22, 10, pz     ],
    ].forEach(([w, h, d, x, y, z]) => {
      g.add(box(w, h, d, MAT.wall, x, y, z));
      addBox(x, y, z, w, h, d);
    });

    // Ramp up from ground (toward whichever axis is zero, i.e. toward center)
    if (px === 0) {
      // N or S mid — ramp from ground on the center-facing side
      // cy=6.424, depth=34: low end surface sits at y=0; high end reaches platform top (~11.4)
      const zs   = pz > 0 ? 1 : -1;
      const angle = zs * Math.atan2(10, 28);
      g.add(tiltedBox(36, 1.5, 34, MAT.ramp, px, 6.424, pz - zs * 36, -angle, 0));
      addBox(px, 5.674, pz - zs * 36, 36, 1.5, 34, -angle, 0);
    } else {
      // E or W mid — ramp on center-facing side
      const xs   = px > 0 ? 1 : -1;
      const angle = xs * Math.atan2(10, 28);
      g.add(tiltedBox(34, 1.5, 36, MAT.ramp, px - xs * 36, 6.424, pz, 0, angle));
      addBox(px - xs * 36, 5.674, pz, 34, 1.5, 36, 0, angle);
    }

    return g;
  }

  root.add(buildMidPlatform( 0,  -85)); // North mid
  root.add(buildMidPlatform( 0,   85)); // South mid
  root.add(buildMidPlatform(-85,   0)); // West mid
  root.add(buildMidPlatform( 85,   0)); // East mid

  // ── 5. CENTER BRIDGE COMPLEX ─────────────────────────────────────────────
  // N-S catwalk — deck at y=12
  root.add(box(16, 2, 90, MAT.bridge, 0, 10, 0));
  addBox(0, 10, 0, 16, 2, 90);
  // catwalk railings
  root.add(box(1, 2.5, 90, MAT.railing, -8.5,  12, 0));
  root.add(box(1, 2.5, 90, MAT.railing,  8.5,  12, 0));

  // W-E bridge — deck at y=14 (crosses over the catwalk)
  root.add(box(90, 2, 16, MAT.bridge, 0, 12, 0));
  addBox(0, 12, 0, 90, 2, 16);
  // bridge railings
  root.add(box(90, 2.5, 1, MAT.railing, 0, 14, -8.5));
  root.add(box(90, 2.5, 1, MAT.railing, 0, 14,  8.5));

  // Bridge cover (two low walls across the midpoint)
  root.add(box(1.5, 3, 14, MAT.railing, -20, 14, 0));
  addBox(-20, 14, 0, 1.5, 3, 14);
  root.add(box(1.5, 3, 14, MAT.railing,  20, 14, 0));
  addBox( 20, 14, 0, 1.5, 3, 14);

  // Pillars holding the bridge (8 total — 4 per bridge)
  [[-28,-6],[28,-6],[-28,6],[28,6]].forEach(([px, pz]) => {
    root.add(cylinder(1.8, 2.5, 14, 8, MAT.bridge, px, 0, pz));
    addBox(px, 0, pz, 3.6, 14, 3.6);
  });
  [[-6,-28],[-6,28],[6,-28],[6,28]].forEach(([px, pz]) => {
    root.add(cylinder(1.8, 2.5, 12, 8, MAT.bridge, px, 0, pz));
    addBox(px, 0, pz, 3.6, 12, 3.6);
  });

  // Ramps from E/W mid platforms (y=10) up onto W-E bridge (y=14, rise=4)
  // cy=12.870 places low end surface at y=10 (mid platform top) so players can ride up
  const bridgeRampAngle = Math.atan2(4, 26);
  root.add(tiltedBox(28, 1.5, 14, MAT.ramp,  60, 12.870, 0, 0, -bridgeRampAngle));
  addBox( 60, 12.120, 0, 28, 1.5, 14, 0, -bridgeRampAngle);
  root.add(tiltedBox(28, 1.5, 14, MAT.ramp, -60, 12.870, 0, 0,  bridgeRampAngle));
  addBox(-60, 12.120, 0, 28, 1.5, 14, 0,  bridgeRampAngle);

  // Ramps from N/S mid platforms (y=10) up onto N-S catwalk (y=12, rise=2)
  // cy=11.822 places low end surface at y=10 so players can ride up
  const catRampAngle = Math.atan2(2, 26);
  root.add(tiltedBox(14, 1.5, 28, MAT.ramp,  0, 11.822,  60, -catRampAngle, 0));
  addBox(0, 11.072,  60, 14, 1.5, 28, -catRampAngle, 0);
  root.add(tiltedBox(14, 1.5, 28, MAT.ramp,  0, 11.822, -60,  catRampAngle, 0));
  addBox(0, 11.072, -60, 14, 1.5, 28,  catRampAngle, 0);

  // ── 6. CRYSTAL TOWER  (center landmark) ─────────────────────────────────
  root.add(cylinder(4.5, 6, 3, 8, MAT.platform, 0, 14, 0)); // base
  addBox(0, 14, 0, 9, 3, 9); // collision approx for cylinder base — players can't walk through
  root.add(cone(3.5, 22, 7, MAT.crystal, 0, 17, 0));         // main spire
  // Flanking crystals
  [[-5,2],[5,-2],[3,5],[-3,-5],[-7,0],[7,0]].forEach(([sx, sz], i) => {
    root.add(cone(1.4 - i * 0.1, 12 - i, 6, MAT.crystal, sx, 17, sz));
  });
  const glow = new THREE.PointLight(0x44aaff, 6, 100);
  glow.position.set(0, 36, 0);
  root.add(glow);

  // ── 7. INNER CANYON CLIFFS  (diagonal chokepoints, one per quadrant) ─────
  // These block the direct diagonal path from corner spawn to center,
  // forcing players through N/S/E/W mid platforms or the center approach.
  function buildInnerCliff(xs, zs) {
    const g = new THREE.Group();
    const cx = xs * 62, cz = zs * 62;

    // L-shaped cliff pair
    g.add(box(28, 22, 48, MAT.wall, cx,          0, cz + zs * 8));
    addBox(cx, 0, cz + zs * 8, 28, 22, 48);

    g.add(box(48, 22, 28, MAT.wall, cx + xs * 8, 0, cz));
    addBox(cx + xs * 8, 0, cz, 48, 22, 28);

    // Snow on top
    g.add(box(26, 0.3, 46, MAT.snow, cx,          22, cz + zs * 8));
    g.add(box(46, 0.3, 26, MAT.snow, cx + xs * 8, 22, cz));

    // Gap fillers — seal the 6-unit openings between this cliff and the corner fortress.
    // Gap-A: between Block-A outer-x edge (x = cx±14) and fortress x edge (x = ±82)
    g.add(box(6, 22, 12, MAT.wall, cx + xs * 17, 0, cz + zs * 26));
    addBox(cx + xs * 17, 0, cz + zs * 26, 6, 22, 12);
    // Gap-B: between Block-B outer-z edge (z = cz±14) and fortress z edge (z = ±82)
    g.add(box(12, 22, 6, MAT.wall, cx + xs * 26, 0, cz + zs * 17));
    addBox(cx + xs * 26, 0, cz + zs * 17, 12, 22, 6);

    return g;
  }

  root.add(buildInnerCliff(-1,  1)); // SW
  root.add(buildInnerCliff( 1,  1)); // SE
  root.add(buildInnerCliff(-1, -1)); // NW
  root.add(buildInnerCliff( 1, -1)); // NE

  // ── 8. LOWER MID COVER  (under / around bridge) ─────────────────────────
  [
    [  0,  0,  38, 20, 3, 1.5 ],
    [  0,  0, -38, 20, 3, 1.5 ],
    [ 38,  0,   0, 1.5, 3, 20 ],
    [-38,  0,   0, 1.5, 3, 20 ],
    [ 18,  0,  22,  4, 5, 4   ],
    [-18,  0, -22,  4, 5, 4   ],
    [ 18,  0, -22,  4, 5, 4   ],
    [-18,  0,  22,  4, 5, 4   ],
  ].forEach(([x, y, z, w, h, d]) => {
    root.add(box(w, h, d, MAT.iceBoulder, x, y, z));
    addBox(x, y, z, w, h, d);
  });

  // ── 9. MID-FIELD SCATTER COVER  (between corners and mid platforms) ──────
  const scatter = [
    // Inner ring (near center)
    [-42, 0,  0], [42,  0,  0], [0,  0, -42], [0,  0,  42],
    [-30, 0, 30], [30,  0, 30], [-30, 0,-30], [30,  0, -30],
    // Outer ring (between spawn and mid)
    [-60, 0, 50], [60,  0, 50], [-60, 0,-50], [60,  0, -50],
    [-50, 0, 60], [50,  0, 60], [-50, 0,-60], [50,  0, -60],
    // Far scatter (open spaces between corners)
    [-145, 0, 0], [145, 0, 0], [0,  0, -145], [0,  0, 145],
    [-140, 0, 50], [140, 0, 50], [-140, 0,-50], [140, 0,-50],
    [-50,  0,140], [50,  0,140], [-50,  0,-140],[50,  0,-140],
  ];
  scatter.forEach(([x, y, z]) => {
    const s = 3.5 + Math.abs(Math.sin(x * 0.13 + z * 0.07)) * 2.5;
    root.add(box(s, s + 1.5, s, MAT.iceBoulder, x, y, z));
    addBox(x, y, z, s, s + 1.5, s);
  });

  // ── 10. OUTER FLANK CORRIDORS  (raised walkways on all 4 sides) ──────────
  // These give a safe(r) outer route between corner zones.
  // Each corridor: 28 wide, y=4 elevated, running parallel to one axis.
  function buildFlankCorridor(axis, sign) {
    const g = new THREE.Group();
    const px = axis === 'X' ? sign * 158 : 0;
    const pz = axis === 'Z' ? sign * 158 : 0;
    const fw = axis === 'X' ? 28 : 160;
    const fd = axis === 'Z' ? 28 : 160;

    // Raised floor
    g.add(box(fw, 4, fd, MAT.platform, px, 0, pz));
    addBox(px, 0, pz, fw, 4, fd);

    g.add(box(fw - 4, 0.3, fd - 4, MAT.snow, px, 4, pz));

    // Cover pillars evenly spaced along the corridor
    const count = 5;
    for (let i = 0; i < count; i++) {
      const t = (i / (count - 1) - 0.5) * 130;
      const cpx = axis === 'Z' ? t       : px;
      const cpz = axis === 'X' ? t       : pz;
      g.add(box(5, 6, 5, MAT.iceBoulder, cpx, 4, cpz));
      addBox(cpx, 4, cpz, 5, 6, 5);
    }

    // Inner canyon wall separating corridor from open mid
    // Extended to 170 (±85) so walls seal against the fortress edges at ±82
    const iwW = axis === 'X' ? 3   : 170;
    const iwD = axis === 'Z' ? 3   : 170;
    const iwX = axis === 'X' ? sign * 142 : 0;
    const iwZ = axis === 'Z' ? sign * 142 : 0;
    g.add(box(iwW, 18, iwD, MAT.wall, iwX, 0, iwZ));
    addBox(iwX, 0, iwZ, iwW, 18, iwD);

    return g;
  }

  root.add(buildFlankCorridor('X',  1)); // East flank
  root.add(buildFlankCorridor('X', -1)); // West flank
  root.add(buildFlankCorridor('Z',  1)); // South flank
  root.add(buildFlankCorridor('Z', -1)); // North flank

  // ── 11. SNOW DRIFTS  (visual detail along walls) ─────────────────────────
  [
    [0, -197, 404, 6], [0, 197, 404, 6],
    [-197, 0, 6, 404], [197, 0, 6, 404],
    [-60, 28, 18, 8],  [55, -25, 14, 10],
    [20, 90, 16, 6],   [-30, -80, 12, 14],
  ].forEach(([x, z, w, d]) => {
    root.add(box(w, 0.5, d, MAT.snow, x, 0, z));
  });

  // ── 12. LIGHTING ────────────────────────────────────────────────────────
  // Arctic sun
  const sun = new THREE.DirectionalLight(0xfff4e0, 1.8);
  sun.position.set(180, 240, 120);
  sun.castShadow = true;
  sun.shadow.mapSize.width  = 4096;
  sun.shadow.mapSize.height = 4096;
  sun.shadow.camera.near   = 1;
  sun.shadow.camera.far    = 700;
  sun.shadow.camera.left   = -220;
  sun.shadow.camera.right  =  220;
  sun.shadow.camera.top    =  220;
  sun.shadow.camera.bottom = -220;
  sun.shadow.bias = -0.001;
  root.add(sun);

  // Hemisphere
  root.add(new THREE.HemisphereLight(0xb0d8ff, 0xddeeff, 0.7));

  // Zone accent lights
  [
    [    0, 5,    0, 0x2266aa, 1.0,  70 ], // center
    [ -158, 5,    0, 0x4488cc, 1.2,  80 ], // W flank
    [  158, 5,    0, 0x4488cc, 1.2,  80 ], // E flank
    [    0, 5, -158, 0x4488cc, 1.2,  80 ], // N flank
    [    0, 5,  158, 0x4488cc, 1.2,  80 ], // S flank
    [ -108, 10, -108, 0x8866cc, 1.5,  60 ], // NW spawn
    [  108, 10, -108, 0x8866cc, 1.5,  60 ], // NE spawn
    [ -108, 10,  108, 0x8866cc, 1.5,  60 ], // SW spawn
    [  108, 10,  108, 0x8866cc, 1.5,  60 ], // SE spawn
  ].forEach(([x, y, z, color, intensity, dist]) => {
    const l = new THREE.PointLight(color, intensity, dist);
    l.position.set(x, y, z);
    root.add(l);
  });

  // ── 13. ZONE METADATA ───────────────────────────────────────────────────
  root.userData.zones = {
    CENTER:      { position: new THREE.Vector3(  0, 15,    0), label: 'Center Bridge' },
    NORTH_MID:   { position: new THREE.Vector3(  0, 11,  -85), label: 'North Mid'     },
    SOUTH_MID:   { position: new THREE.Vector3(  0, 11,   85), label: 'South Mid'     },
    WEST_MID:    { position: new THREE.Vector3(-85, 11,    0), label: 'West Mid'      },
    EAST_MID:    { position: new THREE.Vector3( 85, 11,    0), label: 'East Mid'      },
    NW_SPAWN:    { position: new THREE.Vector3(-108, 8, -108), label: 'NW Spawn'      },
    NE_SPAWN:    { position: new THREE.Vector3( 108, 8, -108), label: 'NE Spawn'      },
    SW_SPAWN:    { position: new THREE.Vector3(-108, 8,  108), label: 'SW Spawn'      },
    SE_SPAWN:    { position: new THREE.Vector3( 108, 8,  108), label: 'SE Spawn'      },
    WEST_FLANK:  { position: new THREE.Vector3(-158, 5,    0), label: 'West Flank'    },
    EAST_FLANK:  { position: new THREE.Vector3( 158, 5,    0), label: 'East Flank'    },
    NORTH_FLANK: { position: new THREE.Vector3(   0, 5, -158), label: 'North Flank'   },
    SOUTH_FLANK: { position: new THREE.Vector3(   0, 5,  158), label: 'South Flank'   },
  };

  scene.add(root);
  // พิมพ์ก้อนฟิสิกส์ทั้งหมดออกมาเป็น JSON
  console.log(JSON.stringify(COLLISION_BODIES));
  return root;
}

// ── Blizzard zone — scales from full map down to center bridge ────────────
export const BLIZZARD_ZONE = {
  type: 'box',
  stages: [
    { time:   0, halfX: 200, halfZ: 200 },  // full map
    { time:  70, halfX: 140, halfZ: 140 },  // squeeze toward mid platforms
    { time: 110, halfX:  90, halfZ:  90 },  // mid platform pressure
    { time: 140, halfX:  50, halfZ:  50 },  // center zone only
    { time: 160, halfX:  20, halfZ:  20 },  // bridge only
    { time: 175, halfX:   0, halfZ:   0 },  // zone closed
  ],
  damagePerSecond: 5,
};