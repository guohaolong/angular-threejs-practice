import * as THREE from 'three';

/**
 * 玄关
 */
export class Entranceway {
    mesh = new THREE.Object3D();

    constructor(options?: any) {
        const textureLoader = new THREE.TextureLoader();
        const entrancewayMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0
        });
        // 纵向
        const entrancewayVGeometry = new THREE.BoxGeometry(0.05, 1, 0.05);
        const entrancewayVMesh1 = new THREE.Mesh(entrancewayVGeometry, entrancewayMaterial);
        entrancewayVMesh1.position.x = -0.275;
        this.mesh.add(entrancewayVMesh1);
        const entrancewayVMesh2 = new THREE.Mesh(entrancewayVGeometry, entrancewayMaterial);
        entrancewayVMesh2.position.x = 0.275;
        this.mesh.add(entrancewayVMesh2);
        // 横向
        const entrancewayHGeometry = new THREE.BoxGeometry(0.5, 0.02, 0.02);
        const entrancewayHMesh1 = new THREE.Mesh(entrancewayHGeometry, entrancewayMaterial);
        entrancewayHMesh1.position.y = -0.49;
        this.mesh.add(entrancewayHMesh1);
        const entrancewayHMesh2 = new THREE.Mesh(entrancewayHGeometry, entrancewayMaterial);
        entrancewayHMesh2.position.y = -0.31;
        this.mesh.add(entrancewayHMesh2);
        const entrancewayHMesh3 = new THREE.Mesh(entrancewayHGeometry, entrancewayMaterial);
        entrancewayHMesh3.position.y = -0.11;
        this.mesh.add(entrancewayHMesh3);
        const entrancewayHMesh4 = new THREE.Mesh(entrancewayHGeometry, entrancewayMaterial);
        entrancewayHMesh4.position.y = 0.11;
        this.mesh.add(entrancewayHMesh4);
        const entrancewayHMesh5 = new THREE.Mesh(entrancewayHGeometry, entrancewayMaterial);
        entrancewayHMesh5.position.y = 0.31;
        this.mesh.add(entrancewayHMesh5);
        const entrancewayMesh6 = new THREE.Mesh(entrancewayHGeometry, entrancewayMaterial);
        entrancewayMesh6.position.y = 0.49;
        this.mesh.add(entrancewayMesh6);

        // 玄关饰品-中国结
        const knottingMaterial = new THREE.MeshLambertMaterial({
            transparent: true,
        });
        const knottingGeometry = new THREE.BoxGeometry(0.25, 0.4, 0.01);
        textureLoader.load('./assets/images/Chinese-knotting.png', (map: any) => {
            map.anisotropy = 4;
            map.repeat.set(1, 1);
            knottingMaterial.map = map;
            knottingMaterial.needsUpdate = true;
        });
        const knottingMesh = new THREE.Mesh(knottingGeometry, knottingMaterial);
        knottingMesh.position.z = -0.05;
        this.mesh.add(knottingMesh);

        if (options) {
            this.mesh.position.x = options.x || 0;
            this.mesh.position.y = options.y || 0;
            this.mesh.position.z = options.z || 0;
        }
    }
}
