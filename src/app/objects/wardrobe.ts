import * as THREE from 'three';

export class Wardrobe {
    mesh = new THREE.Object3D();

    constructor(options?: any) {
        const width = 1.75;
        const height = 1;
        const depth = 0.5;

        const textureLoader = new THREE.TextureLoader();
        const wardrobeMaterial = new THREE.MeshStandardMaterial({
            color: 0xbcbdc2,
        });
        const wardrobeGeometry = new THREE.BoxGeometry(width, height, depth);
        const wardrobeMesh = new THREE.Mesh(wardrobeGeometry, wardrobeMaterial);
        this.mesh.add(wardrobeMesh);

        const wardrobeDoorMaterial = new THREE.MeshLambertMaterial();
        const wardrobeDoorGeometry = new THREE.PlaneGeometry(1.75, 1);
        textureLoader.load('./assets/images/wardrobe.png', (map: any) => {
            map.anisotropy = 4;
            map.repeat.set(1, 1);
            wardrobeDoorMaterial.map = map;
            wardrobeDoorMaterial.needsUpdate = true;
        });
        const wardrobeDoorMesh = new THREE.Mesh(wardrobeDoorGeometry, wardrobeDoorMaterial);
        wardrobeDoorMesh.rotation.y = Math.PI;
        wardrobeDoorMesh.position.z = -0.26;
        this.mesh.add(wardrobeDoorMesh);

        if (options) {
            this.mesh.position.x = options.x || 0;
            this.mesh.position.y = options.y || 0;
            this.mesh.position.z = options.z || 0;
        }
    }
}
