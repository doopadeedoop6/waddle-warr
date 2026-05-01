export class PhysicsDebugger {
  constructor(scene, physicsWorld) {
    this.scene = scene;
    this.world = physicsWorld;
    this.meshes = [];
    this.enabled = new URLSearchParams(location.search).has('debug');
  }

  update() {
    if (!this.enabled) return;
    // ลบ mesh เก่าทิ้ง
    this.meshes.forEach(m => this.scene.remove(m));
    this.meshes = [];

    this.world.bodies.forEach(body => {
      body.shapes.forEach((shape, i) => {
        const offset = body.shapeOffsets[i];
        const orientation = body.shapeOrientations[i];
        let geo, mat;

        if (shape.type === CANNON.Shape.types.BOX) {
          const h = shape.halfExtents;
          geo = new THREE.BoxGeometry(h.x*2, h.y*2, h.z*2);
        } else if (shape.type === CANNON.Shape.types.CYLINDER) {
          geo = new THREE.CylinderGeometry(shape.radiusTop, shape.radiusBottom, shape.height, 8);
        } else if (shape.type === CANNON.Shape.types.PLANE) {
          geo = new THREE.PlaneGeometry(400, 400);
        } else return;

        mat = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        const mesh = new THREE.Mesh(geo, mat);

        // ตำแหน่ง + rotation ของ body
        mesh.position.copy(body.position);
        mesh.quaternion.copy(body.quaternion);

        // offset ของ shape (ถ้ามี)
        if (offset) mesh.position.add(new THREE.Vector3(offset.x, offset.y, offset.z));

        this.scene.add(mesh);
        this.meshes.push(mesh);
      });
    });
  }

  dispose() {
    this.meshes.forEach(m => this.scene.remove(m));
    this.meshes = [];
  }
}