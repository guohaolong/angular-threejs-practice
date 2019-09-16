import * as THREE from 'three';

export class Wall {
    mesh: any;

    constructor(options: any) {
        const wallMaterial = new THREE.MeshLambertMaterial({
            color: 0xccc6c6,
            transparent: true,
            opacity: 0.6
        });

        const wallFrontGeometry = new THREE.BoxGeometry(options.width, options.height, options.depth);
        this.mesh = new THREE.Mesh(wallFrontGeometry, wallMaterial);
        this.mesh.position.x = options.x || 0;
        this.mesh.position.y = options.y || 0;
        this.mesh.position.z = options.z || 0;
    }
}
