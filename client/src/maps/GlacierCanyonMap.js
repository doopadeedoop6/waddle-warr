import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { buildGlacierCanyon, SPAWN_POINTS, COLLISION_BODIES } from './GlacierCanyon.js';

export class GlacierCanyonMap {
  constructor(_config) {
    this.groundY       = 0;
    this.mapHalf       = 200;
    this.gravity       = new THREE.Vector3(0, -28, 0);
    this.surfaceNormal = new THREE.Vector3(0, 1, 0);
    this.spawnPoints   = SPAWN_POINTS.map(p => new THREE.Vector3(p.x, p.y, p.z));
  }

  build(scene, physicsWorld) {
    buildGlacierCanyon(scene);
    this.minimapObstacles = COLLISION_BODIES.map(cb => ({
      type:     cb.type,
      position: { x: cb.position[0], y: cb.position[1], z: cb.position[2] },
      size:     { x: cb.size[0],     y: cb.size[1],     z: cb.size[2] },
      rotation: cb.rotation,
    }));
    scene.fog = new THREE.Fog(0xc8e8ff, 180, 520);
    this._obstacleBodies = [];
    this._groundBody = null;

    if (physicsWorld) {
      // Ground plane — stops players from falling below y=0
      const groundBody = new CANNON.Body({ mass: 0 });
      groundBody.addShape(new CANNON.Plane());
      groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
      groundBody.position.set(0, this.groundY, 0);
      physicsWorld.addBody(groundBody);
      this._groundBody = groundBody;

      for (const cb of COLLISION_BODIES) {
        if (cb.type !== 'box') continue;
        const shape = new CANNON.Box(new CANNON.Vec3(cb.size[0] / 2, cb.size[1] / 2, cb.size[2] / 2));
        const body  = new CANNON.Body({ mass: 0, shape });
        body.position.set(cb.position[0], cb.position[1], cb.position[2]);
        if (cb.rotation) body.quaternion.setFromEuler(cb.rotation[0], cb.rotation[1], cb.rotation[2]);
        physicsWorld.addBody(body);
        this._obstacleBodies.push(body);
      }
    }
  }

  update(_delta) {}

  dispose(_scene, physicsWorld) {
    if (physicsWorld) {
      if (this._groundBody) {
        physicsWorld.removeBody(this._groundBody);
        this._groundBody = null;
      }
      if (this._obstacleBodies) {
        for (const body of this._obstacleBodies) {
          physicsWorld.removeBody(body);
        }
        this._obstacleBodies = [];
      }
    }
  }
}
