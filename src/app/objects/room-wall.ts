import * as THREE from 'three';
import { Wall } from './wall';

/**
 * 房间围墙
 */
export class RoomWall {
    mesh = new THREE.Object3D();

    defaultWalls = [{
        name: '左围墙',
        data: { width: 0.1, height: 1, depth: 10, x: -5, y: 0.5, z: 0 }
    }, {
        name: '右围墙',
        data: { width: 0.1, height: 1, depth: 10, x: 5, y: 0.5, z: 0 }
    }, {
        name: '前围墙',
        data: { width: 6.75, height: 1, depth: 0.1, x: -1.625, y: 0.5, z: 5 }
    }, {
        name: '后围墙',
        data: { width: 10, height: 1, depth: 0.1, x: 0, y: 0.5, z: -5 }
    }, {
        name: '厨房与卧室',
        data: { width: 5, height: 1, depth: 0.1, x: -2.5, y: 0.5, z: 3.5 }
    }, {
        name: '客厅前围墙1',
        data: { width: 3, height: 1, depth: 0.1, x: 2.25, y: 0.5, z: 3.5 }
    }, {
        name: '客厅前围墙2',
        data: { width: 0.5, height: 1, depth: 0.1, x: 4.75, y: 0.5, z: 3.5 }
    }, {
        name: '厨房右侧围墙',
        data: { width: 0.1, height: 1, depth: 1.5, x: 0.75, y: 0.5, z: 4.25 }
    }, {
        name: '客厅与卧室墙1',
        data: { width: 0.1, height: 1, depth: 3.25, x: 0, y: 0.5, z: 1.875 }
    }, {
        name: '客厅与卧室墙2',
        data: { width: 0.1, height: 1, depth: 3.75, x: 0, y: 0.5, z: -3.125 }
    }, {
        name: '卫生间与卧室墙1',
        data: { width: 4, height: 1, depth: 0.1, x: -3, y: 0.5, z: -1.25 }
    }, {
        name: '卫生间与卧室墙2',
        data: { width: 4, height: 1, depth: 0.1, x: -3, y: 0.5, z: 0.25 }
    }];

    constructor(walls = []) {
        const roomWalls = [...this.defaultWalls, ...walls];
        roomWalls.forEach(element => {
            const wall = new Wall(element.data);
            this.mesh.add(wall.mesh);
        });
    }
}
