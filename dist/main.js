(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/components/index/index.component.ts");
/* harmony import */ var _components_house_view_house_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/house-view/house-view.component */ "./src/app/components/house-view/house-view.component.ts");





var routes = [
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
    },
    {
        path: 'house',
        component: _components_house_view_house_view_component__WEBPACK_IMPORTED_MODULE_4__["HouseViewComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-threejs-practice';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/components/index/index.component.ts");
/* harmony import */ var _components_house_view_house_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/house-view/house-view.component */ "./src/app/components/house-view/house-view.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
                _components_house_view_house_view_component__WEBPACK_IMPORTED_MODULE_6__["HouseViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/house-view/house-view.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/house-view/house-view.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <nav class=\"navbar navbar-expand-lg fixed-top navbar-dark bg-dark\">\r\n        <a class=\"navbar-brand\"\r\n           href=\"/\">three.js practice</a>\r\n        <a class=\"navbar-brand\"\r\n           href=\"https://github.com/guohaolong/angular-threejs-practice\">\r\n            <svg class=\"navbar-nav-svg\"\r\n                 xmlns=\"http://www.w3.org/2000/svg\"\r\n                 viewBox=\"0 0 512 499.36\"\r\n                 focusable=\"false\">\r\n                <title>GitHub</title>\r\n                <path d=\"M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z\"\r\n                      fill=\"currentColor\"\r\n                      fill-rule=\"evenodd\"></path>\r\n            </svg>\r\n        </a>\r\n        <button class=\"navbar-toggler\"\r\n                type=\"button\"\r\n                data-toggle=\"collapse\"\r\n                data-target=\"#navbarNav\"\r\n                aria-controls=\"navbarNav\"\r\n                aria-expanded=\"false\"\r\n                aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\"\r\n             id=\"navbarNav\">\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\"\r\n                       href=\"/index\">Home <span class=\"sr-only\">(current)</span></a>\r\n                </li>\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\"\r\n                       href=\"/house\">House</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</header>\r\n<div #container></div>"

/***/ }),

/***/ "./src/app/components/house-view/house-view.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/house-view/house-view.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-nav-svg {\n  display: inline-block;\n  width: 1rem;\n  height: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob3VzZS12aWV3L0U6XFxXb3JrXFxNeVByb2plY3RzXFxhbmd1bGFyLXRocmVlanMtcHJhY3RpY2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvdXNlLXZpZXdcXGhvdXNlLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG91c2Utdmlldy9ob3VzZS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1uYXYtc3ZnIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/house-view/house-view.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/house-view/house-view.component.ts ***!
  \***************************************************************/
/*! exports provided: HouseViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseViewComponent", function() { return HouseViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_orbitcontrols__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three-orbitcontrols */ "./node_modules/three-orbitcontrols/OrbitControls.js");
/* harmony import */ var three_orbitcontrols__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(three_orbitcontrols__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stats-js */ "./node_modules/stats-js/build/stats.min.js");
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(stats_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_objects_wall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/objects/wall */ "./src/app/objects/wall.ts");
/* harmony import */ var src_app_objects_dining_stool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/objects/dining-stool */ "./src/app/objects/dining-stool.ts");







var HouseViewComponent = /** @class */ (function () {
    function HouseViewComponent() {
    }
    HouseViewComponent.prototype.ngOnInit = function () { };
    HouseViewComponent.prototype.ngAfterViewInit = function () {
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
    };
    HouseViewComponent.prototype.initStats = function () {
        this.stats = new stats_js__WEBPACK_IMPORTED_MODULE_4__();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.top = (window.innerHeight - 50) + 'px';
        this.stats.domElement.style.left = '0px';
        document.body.appendChild(this.stats.dom);
    };
    HouseViewComponent.prototype.initScene = function () {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        var axes = new three__WEBPACK_IMPORTED_MODULE_2__["AxisHelper"](10);
        this.scene.add(axes);
    };
    HouseViewComponent.prototype.initRenderer = function () {
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]();
        this.renderer.gammaInput = true;
        this.renderer.gammaOutput = true;
        this.renderer.shadowMap.enabled = true;
        this.renderer.toneMapping = three__WEBPACK_IMPORTED_MODULE_2__["ReinhardToneMapping"];
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.width, this.height);
        this.container.nativeElement.appendChild(this.renderer.domElement);
    };
    HouseViewComponent.prototype.initCamera = function () {
        // 设置透视投影的相机,默认情况下相机的上方向为Y轴，右方向为X轴，沿着Z轴朝里
        // 视野角：fov 纵横比：aspect 相机离视体积最近的距离：near 相机离视体积最远的距离：far
        this.camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](50, this.width / this.height, 0.1, 1000);
        // 设置相机的位置坐标
        this.camera.position.x = 0;
        this.camera.position.y = 8;
        this.camera.position.z = 12;
    };
    HouseViewComponent.prototype.initLight = function () {
        this.light = new three__WEBPACK_IMPORTED_MODULE_2__["AmbientLight"](0xffffff);
        this.scene.add(this.light);
    };
    HouseViewComponent.prototype.initObject = function () {
        var textureLoader = new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]();
        // 地板
        var floorMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshStandardMaterial"]({
            roughness: 0.8,
            color: 0xffffff,
            metalness: 0.2,
            bumpScale: 0.0005
        });
        textureLoader.load('../../../assets/images/wood-floor.jpg', function (map) {
            map.wrapS = three__WEBPACK_IMPORTED_MODULE_2__["RepeatWrapping"];
            map.wrapT = three__WEBPACK_IMPORTED_MODULE_2__["RepeatWrapping"];
            map.repeat.set(8, 8);
            map.anisotropy = 2;
            floorMaterial.map = map;
            floorMaterial.needsUpdate = true;
        });
        var floorGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["PlaneBufferGeometry"](10, 10);
        var flooMesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](floorGeometry, floorMaterial);
        flooMesh.receiveShadow = true;
        flooMesh.rotation.x = -Math.PI / 2.0;
        this.scene.add(flooMesh);
        // 左围墙
        var leftWall = new src_app_objects_wall__WEBPACK_IMPORTED_MODULE_5__["Wall"]({ width: 0.1, height: 1, depth: 10, x: -5, y: 0.5, z: 0 });
        this.scene.add(leftWall.mesh);
        // 右围墙
        var rightWall = new src_app_objects_wall__WEBPACK_IMPORTED_MODULE_5__["Wall"]({ width: 0.1, height: 1, depth: 10, x: 5, y: 0.5, z: 0 });
        this.scene.add(rightWall.mesh);
        // 前围墙
        var frontWall = new src_app_objects_wall__WEBPACK_IMPORTED_MODULE_5__["Wall"]({ width: 6.75, height: 1, depth: 0.1, x: -1.625, y: 0.5, z: 5 });
        this.scene.add(frontWall.mesh);
        // 后围墙
        var backWall = new src_app_objects_wall__WEBPACK_IMPORTED_MODULE_5__["Wall"]({ width: 10, height: 1, depth: 0.1, x: 0, y: 0.5, z: -5 });
        this.scene.add(backWall.mesh);
        // 厨房与卧室
        var kitchenAndBedRoomWall = new src_app_objects_wall__WEBPACK_IMPORTED_MODULE_5__["Wall"]({ width: 6, height: 1, depth: 0.1, x: -2, y: 0.5, z: 3.5 });
        this.scene.add(kitchenAndBedRoomWall.mesh);
        // 客厅前围墙1
        var livingRoomFrontWall = new src_app_objects_wall__WEBPACK_IMPORTED_MODULE_5__["Wall"]({ width: 2, height: 1, depth: 0.1, x: 2.75, y: 0.5, z: 3.5 });
        this.scene.add(livingRoomFrontWall.mesh);
        // 客厅前围墙2
        var livingRoomFrontWall2 = new src_app_objects_wall__WEBPACK_IMPORTED_MODULE_5__["Wall"]({ width: 0.5, height: 1, depth: 0.1, x: 4.75, y: 0.5, z: 3.5 });
        this.scene.add(livingRoomFrontWall2.mesh);
        // 厨房右侧围墙
        var kitchenRightWall = new src_app_objects_wall__WEBPACK_IMPORTED_MODULE_5__["Wall"]({ width: 0.1, height: 1, depth: 1.5, x: 1.75, y: 0.5, z: 4.25 });
        this.scene.add(kitchenRightWall.mesh);
        // 客厅与卧室墙1
        var livingAndBedRoomWall1 = new src_app_objects_wall__WEBPACK_IMPORTED_MODULE_5__["Wall"]({ width: 0.1, height: 1, depth: 3, x: 1, y: 0.5, z: 2 });
        this.scene.add(livingAndBedRoomWall1.mesh);
        // 客厅与卧室墙2
        var livingAndBedRoomWall2 = new src_app_objects_wall__WEBPACK_IMPORTED_MODULE_5__["Wall"]({ width: 0.1, height: 1, depth: 3.5, x: 1, y: 0.5, z: -3.25 });
        this.scene.add(livingAndBedRoomWall2.mesh);
        // 卫生间与卧室墙1
        var toiletAndBedRoomWall1 = new src_app_objects_wall__WEBPACK_IMPORTED_MODULE_5__["Wall"]({ width: 5, height: 1, depth: 0.1, x: -2.5, y: 0.5, z: -1.5 });
        this.scene.add(toiletAndBedRoomWall1.mesh);
        // 卫生间与卧室墙2
        var toiletAndBedRoomWall2 = new src_app_objects_wall__WEBPACK_IMPORTED_MODULE_5__["Wall"]({ width: 5, height: 1, depth: 0.1, x: -2.5, y: 0.5, z: 0.5 });
        this.scene.add(toiletAndBedRoomWall2.mesh);
        // 沙发1
        var sofaMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshStandardMaterial"]({
            color: 0xff9933,
        });
        var sofaGeometry1 = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](0.5, 0.2, 0.5);
        var sofaMesh1 = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](sofaGeometry1, sofaMaterial);
        sofaMesh1.position.x = 4;
        sofaMesh1.position.y = 0.1;
        sofaMesh1.position.z = -3.75;
        this.scene.add(sofaMesh1);
        // 沙发2
        var sofaGeometry2 = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](1, 0.2, 1.25);
        var sofaMesh2 = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](sofaGeometry2, sofaMaterial);
        sofaMesh2.position.x = 4.5;
        sofaMesh2.position.y = 0.1;
        sofaMesh2.position.z = -2.875;
        this.scene.add(sofaMesh2);
        // 沙发3
        var sofaGeometry3 = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](1.25, 0.2, 0.5);
        var sofaMesh3 = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](sofaGeometry3, sofaMaterial);
        sofaMesh3.position.x = 4.375;
        sofaMesh3.position.y = 0.1;
        sofaMesh3.position.z = -2;
        this.scene.add(sofaMesh3);
        // 电视柜
        var tvCabinetMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshStandardMaterial"]({
            color: 0xffffff,
        });
        var tvCabinetGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](0.5, 0.2, 2.5);
        var tvCabinetMesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](tvCabinetGeometry, tvCabinetMaterial);
        tvCabinetMesh.position.x = 1.25;
        tvCabinetMesh.position.y = 0.1;
        tvCabinetMesh.position.z = -2.75;
        this.scene.add(tvCabinetMesh);
        // 电视背景墙
        var tvBgMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshStandardMaterial"]({
            color: 0xf68e5d,
        });
        var tvBgGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](0.1, 0.8, 2.5);
        var tvBgMesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](tvBgGeometry, tvBgMaterial);
        tvBgMesh.position.x = 1.1;
        tvBgMesh.position.y = 0.6;
        tvBgMesh.position.z = -2.75;
        this.scene.add(tvBgMesh);
        // 电视
        var tvMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshStandardMaterial"]();
        var tvGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["PlaneGeometry"](1, 0.5);
        textureLoader.load('../../../assets/images/tv.png', function (map) {
            map.wrapS = three__WEBPACK_IMPORTED_MODULE_2__["RepeatWrapping"];
            map.wrapT = three__WEBPACK_IMPORTED_MODULE_2__["RepeatWrapping"];
            map.anisotropy = 4;
            map.repeat.set(1, 1);
            tvMaterial.map = map;
            tvMaterial.needsUpdate = true;
        });
        var tvMesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](tvGeometry, tvMaterial);
        tvMesh.rotation.y = Math.PI / 2.0;
        tvMesh.position.x = 1.175;
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
        var balconyMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({
            color: 0xffffff,
        });
        var balconyWallGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](1.25, 1, 0.1);
        var balconyWallMesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](balconyWallGeometry, balconyMaterial);
        balconyWallMesh.position.x = 4.375;
        balconyWallMesh.position.y = 0.5;
        balconyWallMesh.position.z = -4;
        this.scene.add(balconyWallMesh);
        // 照片
        var photoMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshStandardMaterial"]();
        var photoGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["PlaneGeometry"](0.3, 0.2);
        textureLoader.load('../../../assets/images/baby.png', function (map) {
            map.wrapS = three__WEBPACK_IMPORTED_MODULE_2__["RepeatWrapping"];
            map.wrapT = three__WEBPACK_IMPORTED_MODULE_2__["RepeatWrapping"];
            map.anisotropy = 4;
            map.repeat.set(1, 1);
            photoMaterial.map = map;
            photoMaterial.needsUpdate = true;
        });
        var photoMesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](photoGeometry, photoMaterial);
        photoMesh.position.x = 4;
        photoMesh.position.y = 0.6;
        photoMesh.position.z = -3.9;
        this.scene.add(photoMesh);
        // 空调
        var acMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]();
        var acGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["CylinderGeometry"](0.1, 0.1, 0.8, 50);
        textureLoader.load('../../../assets/images/ac.png', function (map) {
            map.wrapS = three__WEBPACK_IMPORTED_MODULE_2__["RepeatWrapping"];
            map.wrapT = three__WEBPACK_IMPORTED_MODULE_2__["ClampToEdgeWrapping"];
            map.anisotropy = 4;
            map.repeat.set(1, 1);
            acMaterial.map = map;
            acMaterial.needsUpdate = true;
        });
        var acMesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](acGeometry, acMaterial);
        acMesh.rotation.y = Math.PI / 1.2;
        acMesh.position.x = 4.8;
        acMesh.position.y = 0.4;
        acMesh.position.z = -3.8;
        this.scene.add(acMesh);
        // 茶几
        var teaTableMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({
            transparent: true,
            opacity: 0.8
        });
        var teaTableGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](0.6, 0.2, 1.2);
        textureLoader.load('../../../assets/images/tea-table-skin.png', function (map) {
            map.wrapS = three__WEBPACK_IMPORTED_MODULE_2__["RepeatWrapping"];
            map.wrapT = three__WEBPACK_IMPORTED_MODULE_2__["ClampToEdgeWrapping"];
            map.anisotropy = 4;
            map.repeat.set(1, 1);
            teaTableMaterial.map = map;
            teaTableMaterial.needsUpdate = true;
        });
        var teaTableMesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](teaTableGeometry, teaTableMaterial);
        teaTableMesh.position.x = 3.25;
        teaTableMesh.position.y = 0.1;
        teaTableMesh.position.z = -2.8;
        this.scene.add(teaTableMesh);
        // 餐厅背景墙
        var diningBgMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshStandardMaterial"]({
            color: 0xf68e5d,
        });
        var diningBgGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](0.1, 1, 1);
        var diningBgMesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](diningBgGeometry, diningBgMaterial);
        diningBgMesh.position.x = 1.1;
        diningBgMesh.position.y = 0.5;
        diningBgMesh.position.z = 2;
        this.scene.add(diningBgMesh);
        // 冰箱
        var fridgeMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshStandardMaterial"]({
            color: 0xbcbdc2,
        });
        var fridgeGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](0.4, 0.8, 0.4);
        var fridgeMesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](fridgeGeometry, fridgeMaterial);
        fridgeMesh.position.x = 4.6;
        fridgeMesh.position.y = 0.4;
        fridgeMesh.position.z = 1;
        this.scene.add(fridgeMesh);
        var fridgeDoorMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]();
        var fridgeeDoorGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["PlaneGeometry"](0.4, 0.8);
        textureLoader.load('../../../assets/images/fridge.png', function (map) {
            map.anisotropy = 4;
            map.repeat.set(1, 1);
            fridgeDoorMaterial.map = map;
            fridgeDoorMaterial.needsUpdate = true;
        });
        var fridgeeDoorMesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](fridgeeDoorGeometry, fridgeDoorMaterial);
        fridgeeDoorMesh.rotation.y = -Math.PI / 2;
        fridgeeDoorMesh.position.x = 4.39;
        fridgeeDoorMesh.position.y = 0.4;
        fridgeeDoorMesh.position.z = 1;
        this.scene.add(fridgeeDoorMesh);
        // 餐桌
        var diningTableMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshStandardMaterial"]({
            color: 0xffffff,
        });
        var diningTableGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](1, 0.4, 0.5);
        var diningTableMesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](diningTableGeometry, diningTableMaterial);
        diningTableMesh.position.x = 1.65;
        diningTableMesh.position.y = 0.2;
        diningTableMesh.position.z = 2;
        this.scene.add(diningTableMesh);
        var diningTableTopMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshStandardMaterial"]();
        var diningTableTopGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](1, 0.01, 0.5);
        textureLoader.load('../../../assets/images/dining-table-skin.jpg', function (map) {
            map.wrapS = three__WEBPACK_IMPORTED_MODULE_2__["RepeatWrapping"];
            map.wrapT = three__WEBPACK_IMPORTED_MODULE_2__["RepeatWrapping"];
            map.anisotropy = 4;
            map.repeat.set(1, 1);
            diningTableTopMaterial.map = map;
            diningTableTopMaterial.needsUpdate = true;
        });
        var diningTableTopMesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](diningTableTopGeometry, diningTableTopMaterial);
        diningTableTopMesh.position.x = 1.65;
        diningTableTopMesh.position.y = 0.4;
        diningTableTopMesh.position.z = 2;
        this.scene.add(diningTableTopMesh);
        // 餐凳1
        var diningStool1Mesh = new src_app_objects_dining_stool__WEBPACK_IMPORTED_MODULE_6__["DiningStool"]({ x: 1.4, y: 0.125, z: 1.6 });
        this.scene.add(diningStool1Mesh.mesh);
        // 餐凳2
        var diningStool2Mesh = new src_app_objects_dining_stool__WEBPACK_IMPORTED_MODULE_6__["DiningStool"]({ x: 1.9, y: 0.125, z: 1.6 });
        this.scene.add(diningStool2Mesh.mesh);
        // 餐凳3
        var diningStool3Mesh = new src_app_objects_dining_stool__WEBPACK_IMPORTED_MODULE_6__["DiningStool"]({ x: 1.4, y: 0.125, z: 2.4 });
        this.scene.add(diningStool3Mesh.mesh);
        // 餐凳4
        var diningStool4Mesh = new src_app_objects_dining_stool__WEBPACK_IMPORTED_MODULE_6__["DiningStool"]({ x: 1.9, y: 0.125, z: 2.4 });
        this.scene.add(diningStool4Mesh.mesh);
        // TODO 玄关、厨房、卧室等
    };
    HouseViewComponent.prototype.render = function () {
        var _this = this;
        this.renderer.clear();
        this.stats.begin();
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
        this.stats.end();
        window.requestAnimationFrame(function () { return _this.render(); });
    };
    HouseViewComponent.prototype.initOrbit = function () {
        document.addEventListener('mousedown', this.onDocumentMouseDown, false);
        this.controls = new three_orbitcontrols__WEBPACK_IMPORTED_MODULE_3__(this.camera, this.renderer.domElement);
        this.controls.target.set(0, 0, 0);
        this.controls.update();
    };
    HouseViewComponent.prototype.onDocumentMouseDown = function (event) {
        event.preventDefault();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HouseViewComponent.prototype, "container", void 0);
    HouseViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-house-view',
            template: __webpack_require__(/*! ./house-view.component.html */ "./src/app/components/house-view/house-view.component.html"),
            styles: [__webpack_require__(/*! ./house-view.component.scss */ "./src/app/components/house-view/house-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HouseViewComponent);
    return HouseViewComponent;
}());



/***/ }),

/***/ "./src/app/components/index/index.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/index/index.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav class=\"navbar navbar-expand-lg fixed-top navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\"\r\n       href=\"/\">three.js practice</a>\r\n    <a class=\"navbar-brand\"\r\n       href=\"https://github.com/guohaolong/angular-threejs-practice\">\r\n      <svg class=\"navbar-nav-svg\"\r\n           xmlns=\"http://www.w3.org/2000/svg\"\r\n           viewBox=\"0 0 512 499.36\"\r\n           focusable=\"false\">\r\n        <title>GitHub</title>\r\n        <path d=\"M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z\"\r\n              fill=\"currentColor\"\r\n              fill-rule=\"evenodd\"></path>\r\n      </svg>\r\n    </a>\r\n    <button class=\"navbar-toggler\"\r\n            type=\"button\"\r\n            data-toggle=\"collapse\"\r\n            data-target=\"#navbarNav\"\r\n            aria-controls=\"navbarNav\"\r\n            aria-expanded=\"false\"\r\n            aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\"\r\n         id=\"navbarNav\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\"\r\n             href=\"/index\">Home <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\"\r\n             href=\"/house\">House</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</header>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md\">\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top\"\r\n             src=\".../../../../../assets/images/Screenshot/house.png\"\r\n             alt=\"Card image\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">House</h5>\r\n          <p class=\"card-text\">\r\n            This is a 3D model of the house, including the structure of the house, the layout and furniture appliances.\r\n          </p>\r\n          <a href=\"../house\"\r\n             class=\"btn btn-primary\">View</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md\">\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top\"\r\n             src=\".../../../../../assets/images/Screenshot/house.png\"\r\n             alt=\"Card image\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">House</h5>\r\n          <p class=\"card-text\">\r\n            This is a 3D model of the house, including the structure of the house, the layout and furniture appliances.\r\n          </p>\r\n          <a href=\"../house\"\r\n             class=\"btn btn-primary\">View</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md\">\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top\"\r\n             src=\".../../../../../assets/images/Screenshot/house.png\"\r\n             alt=\"Card image\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">House</h5>\r\n          <p class=\"card-text\">\r\n            This is a 3D model of the house, including the structure of the house, the layout and furniture appliances.\r\n          </p>\r\n          <a href=\"../house\"\r\n             class=\"btn btn-primary\">View</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md\">\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top\"\r\n             src=\".../../../../../assets/images/Screenshot/house.png\"\r\n             alt=\"Card image\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">House</h5>\r\n          <p class=\"card-text\">\r\n            This is a 3D model of the house, including the structure of the house, the layout and furniture appliances.\r\n          </p>\r\n          <a href=\"../house\"\r\n             class=\"btn btn-primary\">View</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/index/index.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/index/index.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 71px; }\n\n.navbar-nav-svg {\n  display: inline-block;\n  width: 1rem;\n  height: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmRleC9FOlxcV29ya1xcTXlQcm9qZWN0c1xcYW5ndWxhci10aHJlZWpzLXByYWN0aWNlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxpbmRleFxcaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDcxcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2LXN2ZyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGhlaWdodDogMXJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/index/index.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/index/index.component.ts ***!
  \*****************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/components/index/index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/objects/dining-stool.ts":
/*!*****************************************!*\
  !*** ./src/app/objects/dining-stool.ts ***!
  \*****************************************/
/*! exports provided: DiningStool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiningStool", function() { return DiningStool; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");

var DiningStool = /** @class */ (function () {
    function DiningStool(options) {
        this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Object3D"]();
        var width = 0.2;
        var height = 0.25;
        var depth = 0.2;
        var textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]();
        var diningStoolMaterial = new three__WEBPACK_IMPORTED_MODULE_0__["MeshStandardMaterial"]({
            color: 0xffffff,
        });
        var diningStoolGeometry = new three__WEBPACK_IMPORTED_MODULE_0__["BoxGeometry"](width, height, depth);
        var diningStoolMesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](diningStoolGeometry, diningStoolMaterial);
        this.mesh.add(diningStoolMesh);
        var diningStoolTopMaterial = new three__WEBPACK_IMPORTED_MODULE_0__["MeshStandardMaterial"]();
        var diningStoolTopGeometry = new three__WEBPACK_IMPORTED_MODULE_0__["BoxGeometry"](width, 0.01, depth);
        textureLoader.load('../../assets/images/dining-stool-skin.jpg', function (map) {
            map.wrapS = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
            map.wrapT = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
            map.anisotropy = 4;
            map.repeat.set(1, 1);
            diningStoolTopMaterial.map = map;
            diningStoolTopMaterial.needsUpdate = true;
        });
        var diningStoolTopMesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](diningStoolTopGeometry, diningStoolTopMaterial);
        diningStoolTopMesh.position.y = height / 2 + 0.01;
        this.mesh.add(diningStoolTopMesh);
        if (options) {
            this.mesh.position.x = options.x || 0;
            this.mesh.position.y = options.y || 0;
            this.mesh.position.z = options.z || 0;
        }
    }
    return DiningStool;
}());



/***/ }),

/***/ "./src/app/objects/wall.ts":
/*!*********************************!*\
  !*** ./src/app/objects/wall.ts ***!
  \*********************************/
/*! exports provided: Wall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wall", function() { return Wall; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");

var Wall = /** @class */ (function () {
    function Wall(options) {
        var wallMaterial = new three__WEBPACK_IMPORTED_MODULE_0__["MeshLambertMaterial"]({
            color: 0xccc6c6,
            transparent: true,
            opacity: 0.6
        });
        var wallFrontGeometry = new three__WEBPACK_IMPORTED_MODULE_0__["BoxGeometry"](options.width, options.height, options.depth);
        this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](wallFrontGeometry, wallMaterial);
        this.mesh.position.x = options.x || 0;
        this.mesh.position.y = options.y || 0;
        this.mesh.position.z = options.z || 0;
    }
    return Wall;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Work\MyProjects\angular-threejs-practice\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map