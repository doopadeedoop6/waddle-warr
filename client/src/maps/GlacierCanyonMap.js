import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { buildGlacierCanyon } from './GlacierCanyon.js';
import { BaseMap } from './BaseMap.js';

export class GlacierCanyonMap extends BaseMap {
  constructor(config) {
    super(config);
  }

  build(scene, physicsWorld) {
    // 1. โหลดโมเดล 3D และจัดเก็บไว้ในตัวแปรเพื่อนำไปลบทิ้งทีหลัง
    this._visualGroup = buildGlacierCanyon(scene);
    
    // สำคัญ: บังคับให้ BaseMap ช่วยติดตาม (Track) วัตถุนี้ เพื่อลบทิ้งในตอน Dispose
    if (this._visualGroup && typeof this._track === 'function') {
      this._track(this._visualGroup);
    }

    // 2. จำลอง Minimap จากไฟล์ Config ได้เลย ไม่ต้องง้อ COLLISION_BODIES
    this.minimapObstacles = this.obstacles.map(obs => ({
      type:     obs.type,
      position: { x: obs.pos[0], y: obs.pos[1], z: obs.pos[2] },
      size:     { x: obs.size[0], y: obs.size[1], z: obs.size[2] },
      rotation: obs.rotation,
    }));
    
    scene.fog = new THREE.Fog(this.visuals.fogColor, this.visuals.fogNear, this.visuals.fogFar);
    
    this._obstacleBodies = [];
    this._groundBody = null;

    if (physicsWorld) {
      // 3. สร้างพื้นโลก
      const groundBody = new CANNON.Body({ mass: 0 });
      groundBody.addShape(new CANNON.Plane());
      groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
      groundBody.position.set(0, this.groundY, 0);
      physicsWorld.addBody(groundBody);
      this._groundBody = groundBody;

      // 4. สร้างกล่องฟิสิกส์จาก this.obstacles (Single Source of Truth)
      for (const obs of this.obstacles) {
        if (obs.type !== 'box') continue;
        const shape = new CANNON.Box(new CANNON.Vec3(obs.size[0] / 2, obs.size[1] / 2, obs.size[2] / 2));
        const body  = new CANNON.Body({ mass: 0, shape });
        body.position.set(obs.pos[0], obs.pos[1], obs.pos[2]);
        
        if (obs.rotation) {
          body.quaternion.setFromEuler(obs.rotation[0], obs.rotation[1], obs.rotation[2]);
        }
        
        physicsWorld.addBody(body);
        this._obstacleBodies.push(body);
      }
    }
  }

  update(_delta) {}

  dispose(scene, physicsWorld) {
    // 1. ล้างกล่องฟิสิกส์เฉพาะของแมปนี้ทิ้งให้หมด
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
    
    // 2. ให้ BaseMap จัดการเก็บกวาดโมเดล 3D และข้อมูลอื่นๆ ที่เหลือ (ป้องกัน Memory Leak)
    super.dispose(scene, physicsWorld);
  }
}