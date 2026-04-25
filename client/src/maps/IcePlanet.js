import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { BaseMap } from './BaseMap.js';

export class IcePlanet extends BaseMap {
  // physicsWorld is passed so we can register ground + rock bodies for local simulation
  build(scene, physicsWorld = null) {
    this._buildSkyAndLights(scene);
    this._buildGround(scene, physicsWorld);
    this._buildIceRocks(scene, physicsWorld);
  }

  _buildGround(scene, physicsWorld) {
    const size = this.mapHalf * 2;

    // Main ice mesh with slight vertex undulation
    const geo = new THREE.PlaneGeometry(size, size, 48, 48);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const bump =
        Math.sin(x * 0.08) * Math.cos(y * 0.06) * 0.18 +
        Math.sin(x * 0.22 + y * 0.17) * 0.06;
      pos.setZ(i, bump);
    }
    geo.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      color:     this.visuals.groundColor,
      roughness: 0.15,
      metalness: 0.05,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = this.groundY;
    mesh.receiveShadow = true;
    scene.add(mesh); this._track(mesh);

    // Translucent gloss overlay — ice sheen
    const overlayGeo = new THREE.PlaneGeometry(size, size);
    const overlayMat = new THREE.MeshStandardMaterial({
      color:       0xaaddff,
      roughness:   0.05,
      metalness:   0.2,
      transparent: true,
      opacity:     0.18,
    });
    const overlay = new THREE.Mesh(overlayGeo, overlayMat);
    overlay.rotation.x = -Math.PI / 2;
    overlay.position.y = this.groundY + 0.02;
    scene.add(overlay); this._track(overlay);

    // Client-side ground physics plane
    if (physicsWorld) {
      const groundBody = new CANNON.Body({ mass: 0 });
      groundBody.addShape(new CANNON.Plane());
      groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
      groundBody.position.set(0, this.groundY, 0);
      physicsWorld.addBody(groundBody);
      this.groundBody = groundBody;
    }
  }

  _buildIceRocks(scene, physicsWorld) {
    this.rocks = [];

    const iceMat = new THREE.MeshStandardMaterial({
      color:       0xc2eeff,
      roughness:   0.08,
      metalness:   0.35,
      flatShading: true,
    });
    const spireMat = new THREE.MeshStandardMaterial({
      color:       0xe8f8ff,
      roughness:   0.04,
      metalness:   0.55,
      flatShading: true,
    });

    for (const obs of this.obstacles) {
      const [rx, , rz] = obs.pos;
      const { radiusBottom: baseR, radiusTop, height, segs, scale } = obs;

      const rockGroup = new THREE.Group();

      // Tapered hex cylinder body with jittered upper verts
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

      // Taller rocks get a spire
      if (scale > 1.5) {
        const spireH   = height * 0.45;
        const spireGeo = new THREE.ConeGeometry(baseR * 0.28, spireH, 5);
        const spire    = new THREE.Mesh(spireGeo, spireMat);
        spire.position.y = height / 2 + spireH / 2;
        rockGroup.add(spire);
      }

      rockGroup.position.set(rx, this.groundY + height / 2, rz);
      rockGroup.rotation.y = (rx * 0.31 + rz * 0.17) % (Math.PI * 2);
      rockGroup.castShadow = true;
      scene.add(rockGroup); this._track(rockGroup);

      // Client-side rock physics
      if (physicsWorld) {
        const rockBody = new CANNON.Body({ mass: 0 });
        rockBody.addShape(new CANNON.Cylinder(radiusTop, baseR, height, segs));
        rockBody.position.set(rx, this.groundY + height / 2, rz);
        physicsWorld.addBody(rockBody);
        this.rocks.push({ mesh: rockGroup, body: rockBody });
      } else {
        this.rocks.push({ mesh: rockGroup });
      }
    }
  }
}
