import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import * as OrbitControls from 'three-orbitcontrols';
import * as Stats from 'stats-js';

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
    const floorMaterial = new THREE.MeshStandardMaterial({
      roughness: 0.8,
      color: 0xffffff,
      metalness: 0.2,
      bumpScale: 0.0005
    });
    textureLoader.load('../../../assets/images/wood-floor.jpg', (map: any) => {
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

    this.scene.add(flooMesh);
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
