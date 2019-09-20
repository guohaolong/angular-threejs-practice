import * as THREE from 'three';

export class Sofa {
    mesh = new THREE.Object3D();

    constructor(options?: any) {
        const sofaMaterial = new THREE.MeshStandardMaterial({
            color: 0xff9933,
        });
        // sofa-1
        const sofaGeometry1 = new THREE.BoxGeometry(0.5, 0.2, 0.5);
        const sofaMesh1 = new THREE.Mesh(sofaGeometry1, sofaMaterial);
        sofaMesh1.position.x = -0.5;
        sofaMesh1.position.y = 0.1;
        sofaMesh1.position.z = -1.25;
        this.mesh.add(sofaMesh1);
        // sofa-2
        const sofaGeometry2 = new THREE.BoxGeometry(1, 0.2, 2);
        const sofaMesh2 = new THREE.Mesh(sofaGeometry2, sofaMaterial);
        sofaMesh2.position.y = 0.1;
        this.mesh.add(sofaMesh2);
        // sofa-3
        const sofaGeometry3 = new THREE.BoxGeometry(1.25, 0.2, 0.5);
        const sofaMesh3 = new THREE.Mesh(sofaGeometry3, sofaMaterial);
        sofaMesh3.position.x = -0.125;
        sofaMesh3.position.y = 0.1;
        sofaMesh3.position.z = 1.25;
        this.mesh.add(sofaMesh3);

        if (options) {
            this.mesh.position.x = options.x || 0;
            this.mesh.position.y = options.y || 0;
            this.mesh.position.z = options.z || 0;
        }
    }
}
