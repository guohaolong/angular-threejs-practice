import * as THREE from 'three';

export class TeaTable {
    mesh = new THREE.Object3D();

    constructor(options?: any) {
        const textureLoader = new THREE.TextureLoader();

        // 面
        const topMaterial = new THREE.MeshStandardMaterial({
            color: 0xF0FFFF,
            transparent: true,
            opacity: 0.7
        });
        const topGeometry = new THREE.BoxGeometry(0.6, 0.02, 1.2);
        const topMesh = new THREE.Mesh(topGeometry, topMaterial);
        topMesh.position.y = 0.3;
        this.mesh.add(topMesh);

        // 主体部分-外框
        const bodyMainMaterial = new THREE.MeshStandardMaterial({
            color: 0x000000,
        });
        const bodyMainGeometry1 = new THREE.BoxGeometry(0.4, 0.05, 0.05);
        const bodyMainMesh1 = new THREE.Mesh(bodyMainGeometry1, bodyMainMaterial);
        bodyMainMesh1.position.y = 0.2;
        bodyMainMesh1.position.z = 0.4;
        this.mesh.add(bodyMainMesh1);

        const bodyMainGeometry2 = new THREE.BoxGeometry(0.4, 0.05, 0.05);
        const bodyMainMesh2 = new THREE.Mesh(bodyMainGeometry2, bodyMainMaterial);
        bodyMainMesh2.position.y = 0.2;
        bodyMainMesh2.position.z = -0.4;
        this.mesh.add(bodyMainMesh2);

        const bodyMainGeometry3 = new THREE.BoxGeometry(0.05, 0.05, 0.85);
        const bodyMainMesh3 = new THREE.Mesh(bodyMainGeometry3, bodyMainMaterial);
        bodyMainMesh3.position.y = 0.2;
        bodyMainMesh3.position.x = -0.225;
        this.mesh.add(bodyMainMesh3);

        const bodyMainGeometry4 = new THREE.BoxGeometry(0.05, 0.05, 0.85);
        const bodyMainMesh4 = new THREE.Mesh(bodyMainGeometry4, bodyMainMaterial);
        bodyMainMesh4.position.y = 0.2;
        bodyMainMesh4.position.x = 0.225;
        this.mesh.add(bodyMainMesh4);

        // 主体部分-中间支撑
        const mainTopMaterial = new THREE.MeshLambertMaterial();
        const mainTopGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.1, 100);
        textureLoader.load('./assets/images/stainless-steel.jpg', (map: any) => {
            map.wrapS = THREE.RepeatWrapping;
            map.wrapT = THREE.ClampToEdgeWrapping;
            map.anisotropy = 4;
            map.repeat.set(1, 1);
            mainTopMaterial.map = map;
            mainTopMaterial.needsUpdate = true;
        });
        const mainTopMesh1 = new THREE.Mesh(mainTopGeometry, mainTopMaterial);
        mainTopMesh1.position.x = 0.225;
        mainTopMesh1.position.y = 0.25;
        mainTopMesh1.position.z = 0.4;
        this.mesh.add(mainTopMesh1);

        const mainTopMesh2 = new THREE.Mesh(mainTopGeometry, mainTopMaterial);
        mainTopMesh2.position.x = -0.225;
        mainTopMesh2.position.y = 0.25;
        mainTopMesh2.position.z = 0.4;
        this.mesh.add(mainTopMesh2);

        const mainTopMesh3 = new THREE.Mesh(mainTopGeometry, mainTopMaterial);
        mainTopMesh3.position.x = -0.225;
        mainTopMesh3.position.y = 0.25;
        mainTopMesh3.position.z = -0.4;
        this.mesh.add(mainTopMesh3);

        const mainTopMesh4 = new THREE.Mesh(mainTopGeometry, mainTopMaterial);
        mainTopMesh4.position.x = 0.225;
        mainTopMesh4.position.y = 0.25;
        mainTopMesh4.position.z = -0.4;
        this.mesh.add(mainTopMesh4);

        // 主体部分-内部横隔
        const bodyBeamMaterial = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0
        });
        const bodyBeamGeometry = new THREE.BoxGeometry(0.4, 0.03, 0.03);
        const bodyBeamMesh1 = new THREE.Mesh(bodyBeamGeometry, bodyBeamMaterial);
        bodyBeamMesh1.position.y = 0.21;
        bodyBeamMesh1.position.z = 0.3;
        this.mesh.add(bodyBeamMesh1);

        const bodyBeamMesh2 = new THREE.Mesh(bodyBeamGeometry, bodyBeamMaterial);
        bodyBeamMesh2.position.y = 0.21;
        bodyBeamMesh2.position.z = 0.2;
        this.mesh.add(bodyBeamMesh2);

        const bodyBeamMesh3 = new THREE.Mesh(bodyBeamGeometry, bodyBeamMaterial);
        bodyBeamMesh3.position.y = 0.21;
        bodyBeamMesh3.position.z = 0.1;
        this.mesh.add(bodyBeamMesh3);

        const bodyBeamMesh4 = new THREE.Mesh(bodyBeamGeometry, bodyBeamMaterial);
        bodyBeamMesh4.position.y = 0.21;
        bodyBeamMesh4.position.z = 0;
        this.mesh.add(bodyBeamMesh4);

        const bodyBeamMesh5 = new THREE.Mesh(bodyBeamGeometry, bodyBeamMaterial);
        bodyBeamMesh5.position.y = 0.21;
        bodyBeamMesh5.position.z = -0.1;
        this.mesh.add(bodyBeamMesh5);

        const bodyBeamMesh6 = new THREE.Mesh(bodyBeamGeometry, bodyBeamMaterial);
        bodyBeamMesh6.position.y = 0.21;
        bodyBeamMesh6.position.z = -0.2;
        this.mesh.add(bodyBeamMesh6);

        const bodyBeamMesh7 = new THREE.Mesh(bodyBeamGeometry, bodyBeamMaterial);
        bodyBeamMesh7.position.y = 0.21;
        bodyBeamMesh7.position.z = -0.3;
        this.mesh.add(bodyBeamMesh7);

        // 桌子腿
        const legGeometry = new THREE.BoxGeometry(0.05, 0.175, 0.05);
        const legMesh1 = new THREE.Mesh(legGeometry, bodyMainMaterial);
        legMesh1.position.x = 0.225;
        legMesh1.position.y = 0.0875;
        legMesh1.position.z = 0.4;
        this.mesh.add(legMesh1);

        const legMesh2 = new THREE.Mesh(legGeometry, bodyMainMaterial);
        legMesh2.position.x = -0.225;
        legMesh2.position.y = 0.0875;
        legMesh2.position.z = 0.4;
        this.mesh.add(legMesh2);

        const legMesh3 = new THREE.Mesh(legGeometry, bodyMainMaterial);
        legMesh3.position.x = -0.225;
        legMesh3.position.y = 0.0875;
        legMesh3.position.z = -0.4;
        this.mesh.add(legMesh3);

        const legMesh4 = new THREE.Mesh(legGeometry, bodyMainMaterial);
        legMesh4.position.x = 0.225;
        legMesh4.position.y = 0.0875;
        legMesh4.position.z = -0.4;
        this.mesh.add(legMesh4);

        if (options) {
            this.mesh.position.x = options.x || 0;
            this.mesh.position.y = options.y || 0;
            this.mesh.position.z = options.z || 0;
        }
    }
}
