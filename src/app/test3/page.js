'use client'
import THREE from 'three';

import ThreeGlobe from 'three-globe';

import { OrbitControls } from '@react-three/drei';



var renderer , camera, scene , controls;

let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
var globe;

init();
initGlobe();
onWindowResize();
animate();

function init() {
    const renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );


scene = new THREE.Scene();

var ambientLight = new THREE.AmbientLight( 0xffffff, 0.3 );
scene.add( ambientLight );
scene.background = new THREE.Color( 0x000000 );

camera = new THREE.PerspectiveCamera();
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();

var dLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
dLight.position.set( -800, 2000, 400 );
scene.add( dLight );

var dLight1 = new THREE.DirectionalLight( 0x7982f6, 1 );
dLight1.position.set( -200, 2000, 200 );
scene.add( dLight1 );

var dLight2 = new THREE.DirectionalLight( 0x8566cc, 0.5 );
dLight2.position.set( -200, 500, 200 );
scene.add( dLight2 );

camera.position.z = 400;
camera.position.y = 0;
camera.position.x = 0;

scene.add( camera );

scene.fog = new THREE.Fog( 0x53ef3, 400, 2000 ); 

controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.dynamicDampingFactor = 0.01;
controls.enablePan = false;
controls.minDistance = 200;
controls.maxDistance = 500;
controls.rotateSpeed = 0.8;
controls.zoomSpeed = 1;
controls.autoRotate = false;

controls.minPolarAngle = Math.PI / 3.5;
controls.maxPolarAngle = Math.PI / 3;

window.addEventListener( 'resize', onWindowResize, false );
document.addEventListener( 'mousemove', onDocumentMouseMove, false );

}

function initGlobe() {

    Globe = new ThreeGlobe({
        waitForGlobeReady: true,
        animateIn: false,
    })


    Globe.rotateY( Math.PI * (5/9) );
    Globe.rotateX( Math.PI / 6 );
    const globeMaterial = Globe.globeMaterial();
    globeMaterial.color = new THREE.Color( 0x3a228a );
    globeMaterial.emissive = new THREE.Color( 0x220038 );
    globeMaterial.emissiveIntensity = 0.1;
    globeMaterial.shininess = 0.7;

    scene.add( Globe );

}

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    windowHalfX = window.innerWidth / 1.5;
    windowHalfY = window.innerHeight / 1.5;
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate(){
    requestAnimationFrame( animate );
    render();
}


