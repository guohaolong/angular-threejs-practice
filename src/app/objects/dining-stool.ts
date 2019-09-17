import * as THREE from 'three';

export class DiningStool {
    mesh = new THREE.Object3D();

    constructor(options?: any) {
        const width = 0.2;
        const height = 0.25;
        const depth = 0.2;

        const textureLoader = new THREE.TextureLoader();
        const diningStoolMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
        });
        const diningStoolGeometry = new THREE.BoxGeometry(width, height, depth);
        const diningStoolMesh = new THREE.Mesh(diningStoolGeometry, diningStoolMaterial);
        this.mesh.add(diningStoolMesh);

        const diningStoolTopMaterial = new THREE.MeshStandardMaterial();
        const diningStoolTopGeometry = new THREE.BoxGeometry(width, 0.01, depth);
        textureLoader.load('../../assets/images/dining-stool-skin.jpg', (map: any) => {
            map.wrapS = THREE.RepeatWrapping;
            map.wrapT = THREE.RepeatWrapping;
            map.anisotropy = 4;
            map.repeat.set(1, 1);
            diningStoolTopMaterial.map = map;
            diningStoolTopMaterial.needsUpdate = true;
        });
        const diningStoolTopMesh = new THREE.Mesh(diningStoolTopGeometry, diningStoolTopMaterial);
        diningStoolTopMesh.position.y = height / 2 + 0.01;
        this.mesh.add(diningStoolTopMesh);

        if (options) {
            this.mesh.position.x = options.x || 0;
            this.mesh.position.y = options.y || 0;
            this.mesh.position.z = options.z || 0;
        }
    }
}
