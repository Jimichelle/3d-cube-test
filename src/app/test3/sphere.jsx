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
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
}

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
