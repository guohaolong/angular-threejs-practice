import * as THREE from 'three';

export class Sofa {
    mesh = new THREE.Object3D();

    constructor(options?: any) {
        const sofaMaterial = new THREE.MeshStandardMaterial({
            color: 0xF7F7F7,
            metalness: 0.15
        });
        const cushionMaterial = new THREE.MeshStandardMaterial({
            color: 0xff9933,
            metalness: 0.3
        });

        // 沙发-1
        const sofaGeometry1 = new THREE.BoxGeometry(0.6, 0.1, 0.6);
        const sofaMesh1 = new THREE.Mesh(sofaGeometry1, sofaMaterial);
        sofaMesh1.position.x = -0.5;
        sofaMesh1.position.y = 0.1;
        sofaMesh1.position.z = -1.3;
        this.mesh.add(sofaMesh1);
        // 靠背
        const backrestGeometry1 = new THREE.BoxGeometry(0.6, 0.3, 0.1);
        const backrestMesh1 = new THREE.Mesh(backrestGeometry1, sofaMaterial);
        backrestMesh1.position.x = -0.5;
        backrestMesh1.position.y = 0.3;
        backrestMesh1.position.z = -1.55;
        this.mesh.add(backrestMesh1);
        // 坐垫
        const cushionGeometry1 = new THREE.BoxGeometry(0.6, 0.1, 0.5);
        const cushionMesh1 = new THREE.Mesh(cushionGeometry1, cushionMaterial);
        cushionMesh1.position.x = -0.5;
        cushionMesh1.position.y = 0.2;
        cushionMesh1.position.z = -1.25;
        this.mesh.add(cushionMesh1);

        // 沙发-2
        const sofaGeometry2 = new THREE.BoxGeometry(1, 0.1, 2);
        const sofaMesh2 = new THREE.Mesh(sofaGeometry2, sofaMaterial);
        sofaMesh2.position.y = 0.1;
        this.mesh.add(sofaMesh2);
        // 靠背
        const backrestGeometry2 = new THREE.BoxGeometry(0.1, 0.4, 2);
        const backrestMesh2 = new THREE.Mesh(backrestGeometry2, sofaMaterial);
        backrestMesh2.position.x = 0.45;
        backrestMesh2.position.y = 0.35;
        this.mesh.add(backrestMesh2);
        // 右扶手
        const backrestRightGeometry2 = new THREE.BoxGeometry(0.5, 0.25, 0.1);
        const backrestRightMesh2 = new THREE.Mesh(backrestRightGeometry2, sofaMaterial);
        backrestRightMesh2.position.x = 0.25;
        backrestRightMesh2.position.y = 0.25;
        backrestRightMesh2.position.z = -0.96;
        this.mesh.add(backrestRightMesh2);        
        // 坐垫
        const cushionGeometry2 = new THREE.BoxGeometry(0.9, 0.1, 2);
        const cushionMesh2 = new THREE.Mesh(cushionGeometry2, cushionMaterial);
        cushionMesh2.position.x = -0.05;
        cushionMesh2.position.y = 0.2;
        this.mesh.add(cushionMesh2);

        // 沙发-3
        const sofaGeometry3 = new THREE.BoxGeometry(1.5, 0.1, 1);
        const sofaMesh3 = new THREE.Mesh(sofaGeometry3, sofaMaterial);
        sofaMesh3.position.x = -0.25;
        sofaMesh3.position.y = 0.1;
        sofaMesh3.position.z = 1.5;
        this.mesh.add(sofaMesh3);
        // 靠背
        const backrestGeometry3 = new THREE.BoxGeometry(0.1, 0.4, 1);
        const backrestMesh3 = new THREE.Mesh(backrestGeometry3, sofaMaterial);
        backrestMesh3.position.x = 0.45;
        backrestMesh3.position.y = 0.35;
        backrestMesh3.position.z = 1.5;
        this.mesh.add(backrestMesh3);
        // 左扶手
        const backrestLeftGeometry3 = new THREE.BoxGeometry(0.75, 0.25, 0.1);
        const backrestLeftMesh3 = new THREE.Mesh(backrestLeftGeometry3, sofaMaterial);
        backrestLeftMesh3.position.x = 0.125;
        backrestLeftMesh3.position.y = 0.25;
        backrestLeftMesh3.position.z = 1.96;
        this.mesh.add(backrestLeftMesh3);          
        // 坐垫
        const cushionGeometry3 = new THREE.BoxGeometry(1.4, 0.1, 1);
        const cushionMesh3 = new THREE.Mesh(cushionGeometry3, cushionMaterial);
        cushionMesh3.position.x = -0.3;
        cushionMesh3.position.y = 0.2;
        cushionMesh3.position.z = 1.5;
        this.mesh.add(cushionMesh3);        

        if (options) {
            this.mesh.position.x = options.x || 0;
            this.mesh.position.y = options.y || 0;
            this.mesh.position.z = options.z || 0;
        }
    }
}
