import * as THREE from 'three';
import { DiningStool } from './dining-stool';

export class DiningTableStool {
    mesh = new THREE.Object3D();

    constructor(options?: any) {
        const textureLoader = new THREE.TextureLoader();

        // 餐桌
        const diningTableMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
        });
        const diningTableGeometry = new THREE.BoxGeometry(1, 0.4, 0.5);
        const diningTableMesh = new THREE.Mesh(diningTableGeometry, diningTableMaterial);
        this.mesh.add(diningTableMesh);

        const diningTableTopMaterial = new THREE.MeshStandardMaterial();
        const diningTableTopGeometry = new THREE.BoxGeometry(1, 0.01, 0.5);
        textureLoader.load('./assets/images/dining-table-skin.jpg', (map: any) => {
            map.wrapS = THREE.RepeatWrapping;
            map.wrapT = THREE.RepeatWrapping;
            map.anisotropy = 4;
            map.repeat.set(1, 1);
            diningTableTopMaterial.map = map;
            diningTableTopMaterial.needsUpdate = true;
        });
        const diningTableTopMesh = new THREE.Mesh(diningTableTopGeometry, diningTableTopMaterial);
        diningTableTopMesh.position.y = 0.2;
        this.mesh.add(diningTableTopMesh);

        // 餐凳1
        const diningStool1 = new DiningStool({ x: -0.25, y: -0.075, z: -0.4 });
        this.mesh.add(diningStool1.mesh);

        // 餐凳2
        const diningStool2 = new DiningStool({ x: 0.25, y: -0.075, z: -0.4 });
        this.mesh.add(diningStool2.mesh);

        // 餐凳3
        const diningStool3 = new DiningStool({ x: -0.25, y: -0.075, z: 0.4 });
        this.mesh.add(diningStool3.mesh);

        // 餐凳4
        const diningStool4 = new DiningStool({ x: 0.25, y: -0.075, z: 0.4 });
        this.mesh.add(diningStool4.mesh);

        if (options) {
            this.mesh.position.x = options.x || 0;
            this.mesh.position.y = options.y || 0;
            this.mesh.position.z = options.z || 0;
        }
    }
}
