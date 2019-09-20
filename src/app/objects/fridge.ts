import * as THREE from 'three';

export class Fridge {
    mesh = new THREE.Object3D();

    constructor(options?: any) {
        const textureLoader = new THREE.TextureLoader();
        const fridgeMaterial = new THREE.MeshStandardMaterial({
            color: 0xbcbdc2,
        });
        const fridgeGeometry = new THREE.BoxGeometry(0.4, 0.8, 0.4);
        const fridgeMesh = new THREE.Mesh(fridgeGeometry, fridgeMaterial);
        this.mesh.add(fridgeMesh);

        const fridgeDoorMaterial = new THREE.MeshLambertMaterial();
        const fridgeeDoorGeometry = new THREE.PlaneGeometry(0.4, 0.8);
        textureLoader.load('./assets/images/fridge.png', (map: any) => {
            map.anisotropy = 4;
            map.repeat.set(1, 1);
            fridgeDoorMaterial.map = map;
            fridgeDoorMaterial.needsUpdate = true;
        });
        const fridgeeDoorMesh = new THREE.Mesh(fridgeeDoorGeometry, fridgeDoorMaterial);
        fridgeeDoorMesh.rotation.y = -Math.PI / 2;
        fridgeeDoorMesh.position.x = -0.21;
        this.mesh.add(fridgeeDoorMesh);

        if (options) {
            this.mesh.position.x = options.x || 0;
            this.mesh.position.y = options.y || 0;
            this.mesh.position.z = options.z || 0;
        }
    }
}
