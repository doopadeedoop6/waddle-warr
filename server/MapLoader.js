import * as CANNON from 'cannon-es';
import { getMapConfig } from '../shared/maps/index.js';

export class MapLoader {
  constructor(mapId) {
    this.config = getMapConfig(mapId);
  }

  get id()            { return this.config.id; }
  get groundY()       { return this.config.groundY; }
  get mapHalf()       { return this.config.mapHalf; }
  get gravity()       { return this.config.gravity; }        // [x,y,z]
  get surfaceNormal() { return this.config.surfaceNormal; }  // [x,y,z]
  get spawnPoints() {
    return this.config.spawnPoints.map(sp =>
      Array.isArray(sp) ? sp : [sp.x, sp.y, sp.z]
    );
  }
  get obstacles()     { return this.config.obstacles; }

  // Build CANNON bodies for all obstacles; adds them to world and returns array
  // ✅ Fix: return bodies array so PhysicsWorld._getSupportY() can query them
  buildObstacleBodies(world, groundMaterial = null) {
    const bodies = [];
    const s = this.config.scale ?? 1.0;
    for (const obs of this.obstacles) {
      let shape;
      if (obs.type === 'cylinder') {
        const rTop    = (obs.radiusTop    ?? obs.radius ?? 1) * s;
        const rBottom = (obs.radiusBottom ?? obs.radius ?? 1) * s;
        shape = new CANNON.Cylinder(rTop, rBottom, obs.height * s, obs.segs ?? 8);
      } else if (obs.type === 'box') {
        const [w, h, d] = obs.size;
        shape = new CANNON.Box(new CANNON.Vec3(w * s / 2, h * s / 2, d * s / 2));
      } else {
        continue;
      }
      const body = new CANNON.Body({
        mass: 0,
        shape,
        collisionFilterGroup: 1,
        collisionFilterMask: -1,
      });
      body.position.set(obs.pos[0] * s, obs.pos[1] * s, obs.pos[2] * s);
      if (groundMaterial) body.material = groundMaterial;
      if (obs.rotation) body.quaternion.setFromEuler(...obs.rotation);
      world.addBody(body);
      bodies.push(body);
    }
    return bodies;
  }
}