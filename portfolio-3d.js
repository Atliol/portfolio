import * as THREE from
'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 7;

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);

renderer.domElement.id = 'portfolio-3d-canvas';

document.body.prepend(renderer.domElement);

// Main 3D Object

const geometry = new THREE.IcosahedronGeometry(1.3, 2);

const material = new THREE.MeshStandardMaterial({
    color: 0x00bfff,
    metalness: 0.8,
    roughness: 0.2,
    wireframe: true
});

const sphere = new THREE.Mesh(geometry, material);

sphere.position.x = 2;

scene.add(sphere);

// Lighting

const light1 = new THREE.PointLight(
    0x00bfff, 5, 100
);

light1.position.set(3, 3, 5);

scene.add(light1);

const light2 = new THREE.PointLight(
    0x8a2be2, 4, 100
);

light2.position.set(-4, -3, 3);

scene.add(light2);

// Animation

function animate() {

    requestAnimationFrame(animate);

    sphere.rotation.x += 0.002;
    sphere.rotation.y += 0.004;

    renderer.render(scene, camera);

}

animate();

// Responsive

window.addEventListener('resize', () => {

    camera.aspect =
        window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

});
