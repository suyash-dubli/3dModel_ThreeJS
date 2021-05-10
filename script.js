import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';

function main() {
    const scene = new THREE.Scene();
    const canvas = document.querySelector('#c');
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({color: 0xfffa88});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube); 
    const camera = new THREE.PerspectiveCamera(70,window.innerWidth / window.innerHeight,1,10000);
    camera.position.z = 2;
    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.render(scene,camera);
}
main();