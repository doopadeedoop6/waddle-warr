import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { BaseMap } from './BaseMap.js';

export class IcePlanet extends BaseMap {
  build(scene, physicsWorld = null) {
    this._buildSkyAndLights(scene);
    this._buildVoid(scene);
    this._buildPlatforms(scene, physicsWorld);
    this._buildIceRocks(scene, physicsWorld);
    this._buildSnowPatches(scene);
  }

  // Dark abyss below the platforms — visual only
  _buildVoid(scene) {
    const voidY = this.groundY + 0.5;

    // Infinite dark void floor
    const floorGeo = new THREE.PlaneGeometry(2000, 2000);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x010810, roughness: 1, metalness: 0 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = voidY;
    scene.add(floor); this._track(floor);

    // Mist layers rising from the void
    const mistColors = [0x091828, 0x0a2035, 0x0c2840];
    for (let i = 0; i < 3; i++) {
      const mistGeo = new THREE.PlaneGeometry(600, 600);
      const mistMat = new THREE.MeshBasicMaterial({
        color: mistColors[i],
        transparent: true,
        opacity: 0.35 - i * 0.08,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      const mist = new THREE.Mesh(mistGeo, mistMat);
      mist.rotation.x = -Math.PI / 2;
      mist.position.y = voidY + 2 + i * 5;
      scene.add(mist); this._track(mist);
    }
  }

  _buildPlatforms(scene, physicsWorld) {
    const iceMat = new THREE.MeshStandardMaterial({
      color:     this.visuals.groundColor,
      roughness: 0.18,
      metalness: 0.08,
    });
    const glossOverlay = new THREE.MeshStandardMaterial({
      color:       0xaaddff,
      roughness:   0.05,
      metalness:   0.2,
      transparent: true,
      opacity:     0.16,
      depthWrite:  false,
    });

    for (const obs of this.obstacles) {
      if (obs.type !== 'box') continue;

      const [cx, cy, cz] = obs.pos;
      const [w, h, d]    = obs.size;

      // Slightly undulating top surface for the larger platforms
      let geo;
      if (w >= 40 && d >= 40) {
        geo = new THREE.BoxGeometry(w, h, d, Math.ceil(w / 12), 1, Math.ceil(d / 12));
        const pos = geo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          if (pos.getY(i) > h / 2 - 0.1) {
            const px = pos.getX(i), pz = pos.getZ(i);
            const bump = Math.sin(px * 0.09) * Math.cos(pz * 0.07) * 0.15
                       + Math.sin(px * 0.24 + pz * 0.18) * 0.05;
            pos.setY(i, pos.getY(i) + bump);
          }
        }
        geo.computeVertexNormals();
      } else {
        geo = new THREE.BoxGeometry(w, h, d);
      }

      const mesh = new THREE.Mesh(geo, iceMat);
      mesh.position.set(cx, cy, cz);
      mesh.receiveShadow = true;
      scene.add(mesh); this._track(mesh);

      // Gloss overlay on top face only (flat quad)
      const ovGeo = new THREE.PlaneGeometry(w - 0.1, d - 0.1);
      const ov    = new THREE.Mesh(ovGeo, glossOverlay);
      ov.rotation.x = -Math.PI / 2;
      ov.position.set(cx, cy + h / 2 + 0.02, cz);
      scene.add(ov); this._track(ov);

      // Subtle edge glow on platform sides
      const edgeGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(w, h, d));
      const edgeMat = new THREE.LineBasicMaterial({ color: 0x66ccff, transparent: true, opacity: 0.25 });
      const edges   = new THREE.LineSegments(edgeGeo, edgeMat);
      edges.position.set(cx, cy, cz);
      scene.add(edges); this._track(edges);

      // Client physics box
      if (physicsWorld) {
        const body = new CANNON.Body({ mass: 0 });
        body.addShape(new CANNON.Box(new CANNON.Vec3(w / 2, h / 2, d / 2)));
        body.position.set(cx, cy, cz);
        physicsWorld.addBody(body);
      }
    }
  }

  _buildSnowPatches(scene) {
    const COUNT = 25;

    // Unit disc sitting flat — scaled per-instance to vary radius 3–8 units
    const geo = new THREE.CylinderGeometry(1, 1, 0.05, 8);
    const mat = new THREE.MeshStandardMaterial({
      color:       0xddeeff,
      roughness:   0.95,
      metalness:   0.0,
      transparent: true,
      opacity:     0.82,
      depthWrite:  false,
    });

    const mesh = new THREE.InstancedMesh(geo, mat, COUNT);
    mesh.receiveShadow = true;

    // Exclusion zones: raised corners, center platform, bumps, ice rocks
    const BLOCKED = [
      { x:  38, z: -38, r: 15 }, { x: -38, z: -38, r: 15 },
      { x:  38, z:  38, r: 15 }, { x: -38, z:  38, r: 15 },
      { x:   0, z:   0, r: 14 },
      { x:  48, z:   0, r: 10 }, { x: -48, z:   0, r: 10 },
      { x:   0, z:  48, r: 10 }, { x:   0, z: -48, r: 10 },
      { x:  35, z:  20, r:  6 }, { x: -42, z:  15, r:  8 },
      { x:  18, z: -38, r:  5 }, { x:  28, z: -30, r:  6 },
      { x: -25, z: -28, r:  7 }, { x: -20, z:  48, r:  6 },
      { x: -52, z: -12, r:  8 }, { x:   8, z:  55, r:  6 },
      { x:  55, z: -18, r:  6 },
    ];

    const dummy   = new THREE.Object3D();
    const HALF    = 56;   // scatter within ±56, inside the 60-unit platform edge
    let placed    = 0;
    let attempts  = 0;

    while (placed < COUNT && attempts < 400) {
      attempts++;
      const x = (Math.random() * 2 - 1) * HALF;
      const z = (Math.random() * 2 - 1) * HALF;
      const r = 3 + Math.random() * 5;  // radius 3–8 units

      let blocked = false;
      for (const b of BLOCKED) {
        const dx = x - b.x, dz = z - b.z;
        if (dx * dx + dz * dz < (b.r + r) * (b.r + r)) { blocked = true; break; }
      }
      if (blocked) continue;

      dummy.position.set(x, 0.03, z);
      dummy.rotation.y = Math.random() * Math.PI * 2;
      dummy.scale.set(r, 1, r);
      dummy.updateMatrix();
      mesh.setMatrixAt(placed, dummy.matrix);
      placed++;
    }

    // Hide any unfilled slots (scale to zero)
    dummy.scale.set(0, 0, 0);
    dummy.updateMatrix();
    for (let i = placed; i < COUNT; i++) mesh.setMatrixAt(i, dummy.matrix);

    mesh.instanceMatrix.needsUpdate = true;
    scene.add(mesh);
    this._track(mesh);
  }

  _buildIceRocks(scene, physicsWorld) {
    const iceMat = new THREE.MeshStandardMaterial({
      color: 0xc2eeff, roughness: 0.08, metalness: 0.35, flatShading: true,
    });
    const spireMat = new THREE.MeshStandardMaterial({
      color: 0xe8f8ff, roughness: 0.04, metalness: 0.55, flatShading: true,
    });

    for (const obs of this.obstacles) {
      if (obs.type !== 'cylinder') continue;

      const [rx, ry, rz] = obs.pos;
      const { radiusBottom: baseR, radiusTop, height, segs, scale } = obs;

      const rockGroup = new THREE.Group();

      const bodyGeo = new THREE.CylinderGeometry(radiusTop, baseR, height, segs);
      const bPos = bodyGeo.attributes.position;
      for (let i = 0; i < bPos.count; i++) {
        if (bPos.getY(i) > 0) {
          bPos.setX(i, bPos.getX(i) * (1 + Math.sin(i * 2.3) * 0.07));
          bPos.setZ(i, bPos.getZ(i) * (1 + Math.cos(i * 1.9) * 0.07));
        }
      }
      bodyGeo.computeVertexNormals();
      rockGroup.add(new THREE.Mesh(bodyGeo, iceMat));

      if (scale > 1.5) {
        const spireH   = height * 0.45;
        const spireGeo = new THREE.ConeGeometry(baseR * 0.28, spireH, 5);
        const spire    = new THREE.Mesh(spireGeo, spireMat);
        spire.position.y = height / 2 + spireH / 2;
        rockGroup.add(spire);
      }

      // pos[1] is already the correct world-space center Y (pre-computed in config)
      rockGroup.position.set(rx, ry, rz);
      rockGroup.rotation.y = (rx * 0.31 + rz * 0.17) % (Math.PI * 2);
      rockGroup.castShadow = true;
      scene.add(rockGroup); this._track(rockGroup);

      if (physicsWorld) {
        const rockBody = new CANNON.Body({ mass: 0 });
        rockBody.addShape(new CANNON.Cylinder(radiusTop, baseR, height, segs));
        rockBody.position.set(rx, ry, rz);
        physicsWorld.addBody(rockBody);
      }
    }
  }
}
