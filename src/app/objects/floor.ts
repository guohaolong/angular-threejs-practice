import * as THREE from 'three';

/**
 * 地板
 */
export class Floor {
    mesh = new THREE.Object3D();

    constructor() {
        const textureLoader = new THREE.TextureLoader();

        const floorMaterial = new THREE.MeshStandardMaterial({
            roughness: 0.8,
            color: 0xffffff,
            metalness: 0.2,
            bumpScale: 0.0005
        });
        textureLoader.load('./assets/images/wood-floor.jpg', (map: any) => {
            map.wrapS = THREE.RepeatWrapping;
            map.wrapT = THREE.RepeatWrapping;
            map.repeat.set(8, 8);
            map.anisotropy = 2;
            floorMaterial.map = map;
            floorMaterial.needsUpdate = true;
        });
        const floorGeometry = new THREE.PlaneBufferGeometry(10, 10);
        const flooMesh = new THREE.Mesh(floorGeometry, floorMaterial);
        flooMesh.receiveShadow = true;
        flooMesh.rotation.x = -Math.PI / 2.0;

        this.mesh.add(flooMesh);
    }
}
