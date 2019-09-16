import * as THREE from 'three';

export class DiningStool {
    mesh: any;
    topMesh: any;

    constructor(options: any) {
        const textureLoader = new THREE.TextureLoader();
        const diningStoolMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
        });

        const diningStoolGeometry = new THREE.BoxGeometry(options.width, options.height, options.depth);
        this.mesh = new THREE.Mesh(diningStoolGeometry, diningStoolMaterial);
        this.mesh.position.x = options.x || 0;
        this.mesh.position.y = options.y || 0;
        this.mesh.position.z = options.z || 0;
        
        const diningStoolTopMaterial = new THREE.MeshStandardMaterial();
        const diningStoolTopGeometry = new THREE.BoxGeometry(options.width, 0.01, options.depth);
        textureLoader.load('../../assets/images/dining-stool-skin.jpg', (map: any) => {
          map.wrapS = THREE.RepeatWrapping;
          map.wrapT = THREE.RepeatWrapping;
          map.anisotropy = 4;
          map.repeat.set(1, 1);
          diningStoolTopMaterial.map = map;
          diningStoolTopMaterial.needsUpdate = true;
        });
        this.topMesh = new THREE.Mesh(diningStoolTopGeometry, diningStoolTopMaterial);
        this.topMesh.position.x = options.x || 0;
        this.topMesh.position.y = options.height + 0.01;
        this.topMesh.position.z = options.z || 0;
    }
}
