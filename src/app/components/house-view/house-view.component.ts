import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import * as OrbitControls from 'three-orbitcontrols';
import * as Stats from 'stats-js';
import { Sofa } from 'src/app/objects/sofa';
import { Fridge } from './../../objects/fridge';
import { Entranceway } from 'src/app/objects/entranceway';
import { Floor } from 'src/app/objects/floor';
import { RoomWall } from 'src/app/objects/room-wall';
import { DiningTableStool } from 'src/app/objects/dining-table-stool';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.scss']
})
export class HouseViewComponent implements OnInit, AfterViewInit {

  @ViewChild('container') container: any;

  scene: any;
  renderer: any;
  camera: any;
  light: any;
  controls: any;
  stats: any;
  width: number;
  height: number;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    // 初始化性能检测插件
    this.initStats();
    // 初始化场景
    this.initScene();
    // 初始化渲染器
    this.initRenderer();
    // 初始化相机
    this.initCamera();
    // 初始化光源
    this.initLight();
    // 初始化物体
    this.initObject();
    // 初始化鼠标交互控制
    this.initOrbit();
    // 渲染
    this.render();
  }

  initStats(): void {
    this.stats = new Stats();
    this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    this.stats.domElement.style.position = 'absolute';
    this.stats.domElement.style.top = (window.innerHeight - 50) + 'px';
    this.stats.domElement.style.left = '0px';
    document.body.appendChild(this.stats.dom);
  }

  initScene(): void {
    this.scene = new THREE.Scene();
    const axes = new THREE.AxisHelper(10);
    this.scene.add(axes);
  }

  initRenderer(): void {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.gammaInput = true;
    this.renderer.gammaOutput = true;
    this.renderer.shadowMap.enabled = true;
    this.renderer.toneMapping = THREE.ReinhardToneMapping;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.container.nativeElement.appendChild(this.renderer.domElement);
  }

  initCamera(): void {
    // 设置透视投影的相机,默认情况下相机的上方向为Y轴，右方向为X轴，沿着Z轴朝里
    // 视野角：fov 纵横比：aspect 相机离视体积最近的距离：near 相机离视体积最远的距离：far
    this.camera = new THREE.PerspectiveCamera(50, this.width / this.height, 0.1, 1000);
    // 设置相机的位置坐标
    this.camera.position.x = 0;
    this.camera.position.y = 8;
    this.camera.position.z = 12;
  }

  initLight(): void {
    this.light = new THREE.AmbientLight(0xffffff);
    this.scene.add(this.light);
  }

  initObject(): void {
    const textureLoader = new THREE.TextureLoader();

    // 地板
    const floor = new Floor();
    this.scene.add(floor.mesh);

    // 房间围墙
    const walls = new RoomWall();
    this.scene.add(walls.mesh);

    // 沙发
    const sofa = new Sofa({ x: 4.5, y: 0.1, z: -2.5 });
    this.scene.add(sofa.mesh);

    // 电视柜
    const tvCabinetMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
    });
    const tvCabinetGeometry = new THREE.BoxGeometry(0.5, 0.2, 2.5);
    const tvCabinetMesh = new THREE.Mesh(tvCabinetGeometry, tvCabinetMaterial);
    tvCabinetMesh.position.x = 0.3;
    tvCabinetMesh.position.y = 0.1;
    tvCabinetMesh.position.z = -2.75;
    this.scene.add(tvCabinetMesh);

    // 电视背景墙
    const tvBgMaterial = new THREE.MeshStandardMaterial({
      color: 0xf68e5d,
    });
    const tvBgGeometry = new THREE.BoxGeometry(0.1, 0.8, 2.5);
    const tvBgMesh = new THREE.Mesh(tvBgGeometry, tvBgMaterial);
    tvBgMesh.position.x = 0.1;
    tvBgMesh.position.y = 0.6;
    tvBgMesh.position.z = -2.75;
    this.scene.add(tvBgMesh);

    // 电视
    const tvMaterial = new THREE.MeshStandardMaterial();
    const tvGeometry = new THREE.PlaneGeometry(1, 0.5);
    textureLoader.load('./assets/images/tv.png', (map: any) => {
      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.RepeatWrapping;
      map.anisotropy = 4;
      map.repeat.set(1, 1);
      tvMaterial.map = map;
      tvMaterial.needsUpdate = true;
    });
    const tvMesh = new THREE.Mesh(tvGeometry, tvMaterial);
    tvMesh.rotation.y = Math.PI / 2.0;
    tvMesh.position.x = 0.175;
    tvMesh.position.y = 0.6;
    tvMesh.position.z = -2.75;
    this.scene.add(tvMesh);

    // // 阳台
    // const balconyFloorMaterial = new THREE.MeshStandardMaterial({
    //   roughness: 0.8,
    //   color: 0xffffff,
    //   metalness: 0.2,
    //   bumpScale: 0.0005
    // });
    // textureLoader.load('../../../assets/images/wood-floor.jpg', (map: any) => {
    //     map.wrapS = THREE.RepeatWrapping;
    //     map.wrapT = THREE.RepeatWrapping;
    //     map.repeat.set(2, 2);
    //     map.anisotropy = 2;
    //     balconyFloorMaterial.map = map;
    //     balconyFloorMaterial.needsUpdate = true;
    // });
    // const balconyFloorGeometry = new THREE.BoxGeometry(4, 0.2, 1);
    // const balconyFloorMesh = new THREE.Mesh(balconyFloorGeometry, balconyFloorMaterial);
    // balconyFloorMesh.position.x = 3;
    // balconyFloorMesh.position.y = 0.1;
    // balconyFloorMesh.position.z = -4.5;
    // this.scene.add(balconyFloorMesh);

    // 阳台小房间前围墙
    const balconyMaterial = new THREE.MeshLambertMaterial({
      color: 0xffffff,
    });
    const balconyWallGeometry = new THREE.BoxGeometry(1.25, 1, 0.1);
    const balconyWallMesh = new THREE.Mesh(balconyWallGeometry, balconyMaterial);
    balconyWallMesh.position.x = 4.375;
    balconyWallMesh.position.y = 0.5;
    balconyWallMesh.position.z = -4;
    this.scene.add(balconyWallMesh);

    // 照片
    const photoMaterial = new THREE.MeshStandardMaterial();
    const photoGeometry = new THREE.PlaneGeometry(0.3, 0.2);
    textureLoader.load('./assets/images/baby.png', (map: any) => {
      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.RepeatWrapping;
      map.anisotropy = 4;
      map.repeat.set(1, 1);
      photoMaterial.map = map;
      photoMaterial.needsUpdate = true;
    });
    const photoMesh = new THREE.Mesh(photoGeometry, photoMaterial);
    photoMesh.position.x = 4;
    photoMesh.position.y = 0.6;
    photoMesh.position.z = -3.9;
    this.scene.add(photoMesh);

    // 空调
    const acMaterial = new THREE.MeshLambertMaterial();
    const acGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 50);
    textureLoader.load('./assets/images/ac.png', (map: any) => {
      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.ClampToEdgeWrapping;
      map.anisotropy = 4;
      map.repeat.set(1, 1);
      acMaterial.map = map;
      acMaterial.needsUpdate = true;
    });
    const acMesh = new THREE.Mesh(acGeometry, acMaterial);
    acMesh.rotation.y = Math.PI / 1.2;
    acMesh.position.x = 4.8;
    acMesh.position.y = 0.4;
    acMesh.position.z = -3.8;
    this.scene.add(acMesh);

    // 茶几
    const teaTableMaterial = new THREE.MeshLambertMaterial({
      transparent: true,
      opacity: 0.8
    });
    const teaTableGeometry = new THREE.BoxGeometry(0.6, 0.2, 1.2);
    textureLoader.load('./assets/images/tea-table-skin.png', (map: any) => {
      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.ClampToEdgeWrapping;
      map.anisotropy = 4;
      map.repeat.set(1, 1);
      teaTableMaterial.map = map;
      teaTableMaterial.needsUpdate = true;
    });
    const teaTableMesh = new THREE.Mesh(teaTableGeometry, teaTableMaterial);
    teaTableMesh.position.x = 3.25;
    teaTableMesh.position.y = 0.1;
    teaTableMesh.position.z = -2.6;
    this.scene.add(teaTableMesh);

    // 餐厅背景墙
    const diningBgMaterial = new THREE.MeshStandardMaterial({
      color: 0xf68e5d,
    });
    const diningBgGeometry = new THREE.BoxGeometry(0.1, 1, 1);
    const diningBgMesh = new THREE.Mesh(diningBgGeometry, diningBgMaterial);
    diningBgMesh.position.x = 0.1;
    diningBgMesh.position.y = 0.5;
    diningBgMesh.position.z = 2;
    this.scene.add(diningBgMesh);

    // 冰箱
    const fridge = new Fridge({ x: 4.6, y: 0.4, z: 0.5 });
    this.scene.add(fridge.mesh);

    // 餐桌/凳
    const diningTableStool = new DiningTableStool({ x: 0.75, y: 0.2, z: 2 });
    this.scene.add(diningTableStool.mesh);

    // 玄关
    const entranceway = new Entranceway({ x: 4.75, y: 0.5, z: 0 });
    this.scene.add(entranceway.mesh);

    // TODO 厨房、卧室等
  }

  render(): void {
    this.renderer.clear();
    this.stats.begin();
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    this.stats.end();
    window.requestAnimationFrame(() => this.render());
  }

  initOrbit(): void {
    document.addEventListener('mousedown', this.onDocumentMouseDown, false);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 0, 0);
    this.controls.update();
  }

  onDocumentMouseDown(event: any): void {
    event.preventDefault();
  }
}
