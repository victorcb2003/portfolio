import * as THREE from "three";

export function addStar(scene, n) {
    for (let i = 0; i < n; i++) {
        const geometry = new THREE.SphereGeometry(2, 24, 24);
        let color;
        const rand = Math.random();
        if (rand < 0.2) {
            color = 0x99ccff; 
        } else if (rand < 0.4) {
            color = 0xffcccc; 
        } else {
            color = 0xffffff;
        }
        const material = new THREE.MeshBasicMaterial({ color });
        const star = new THREE.Mesh(geometry, material);
        star.position.x = (Math.random() - 0.5) * 2100;
        star.position.y = (Math.random() - 0.5) * 2100;
        star.position.z = (Math.random() - 0.5) * 2100;

        if (rand < 0.333) {
            star.position.x += Math.abs(star.position.x)/star.position.x * 800;
        }   else if (rand < 0.666) {
            star.position.y += Math.abs(star.position.y)/star.position.y * 800;
        } else {
            star.position.z += Math.abs(star.position.z)/star.position.z * 800;
        }

        scene.add(star);
    }
}