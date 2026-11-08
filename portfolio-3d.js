

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
