import * as THREE from "three";

export function makeClickable({ object, camera, canvas, onClick }) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let isPointerLocked = false;

    function onPointerLockChange() {
        isPointerLocked = document.pointerLockElement === canvas;
    }

    function onMouseDown(event) {
        if (event.button !== 0) return;
        if (isPointerLocked) {
            mouse.x = 0;
            mouse.y = 0;
        } else {
            const rect = canvas.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        }
        raycaster.setFromCamera(mouse, camera);
        if (object) {
            const intersects = raycaster.intersectObject(object, true);
            if (intersects.length > 0) {
                onClick(intersects[0]);
            }
        }
    }

    document.addEventListener('pointerlockchange', onPointerLockChange);
    document.addEventListener('mousedown', onMouseDown);

    return () => {
        document.removeEventListener('pointerlockchange', onPointerLockChange);
        document.removeEventListener('mousedown', onMouseDown);
    };
}
