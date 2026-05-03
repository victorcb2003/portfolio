import * as THREE from "three";

export function CameraControls(camera, canvas, pov) {
  if (pov === "fps") {
    let isPointerLocked = false;
    let camYaw = 1.6;
    let camPitch = 180;
    const pitchLimit = Math.PI / 2 - 0.1;
    const moveSpeed = 10;
    const keys = {
      z: false,
      q: false,
      s: false,
      d: false,
      espace: false,
      x: false,
    };

    window.addEventListener("keydown", (e) => {
      if (e.key === "z" || e.key === "Z") keys.z = true;
      if (e.key === "q" || e.key === "Q") keys.q = true;
      if (e.key === "s" || e.key === "S") keys.s = true;
      if (e.key === "d" || e.key === "D") keys.d = true;
      if (e.key === " ") keys.espace = true;
      if (e.key === "x" || e.key === "X") keys.x = true;
    });
    window.addEventListener("keyup", (e) => {
      if (e.key === "z" || e.key === "Z") keys.z = false;
      if (e.key === "q" || e.key === "Q") keys.q = false;
      if (e.key === "s" || e.key === "S") keys.s = false;
      if (e.key === "d" || e.key === "D") keys.d = false;
      if (e.key === " ") keys.espace = false;
      if (e.key === "x" || e.key === "X") keys.x = false;
    });

    canvas.addEventListener("click", () => {
      canvas.requestPointerLock(), { once: true };
    });
    document.addEventListener("pointerlockchange", () => {
      (isPointerLocked = document.pointerLockElement === canvas),
        { once: true };
    });
    document.addEventListener("mousemove", (e) => {
      if (!isPointerLocked) return;
      const sens = 0.002;
      camYaw -= e.movementX * sens;
      camPitch -= e.movementY * sens;
      (camPitch = Math.max(-pitchLimit, Math.min(pitchLimit, camPitch))),
        { once: true };
    });

    function update(delta) {
      // Calcul direction de vue
      const dir = new THREE.Vector3(
        Math.cos(camPitch) * Math.sin(camYaw),
        Math.sin(camPitch),
        Math.cos(camPitch) * Math.cos(camYaw)
      );
      dir.normalize();
      // Calcul du vecteur droite
      const right = new THREE.Vector3(
        Math.sin(camYaw - Math.PI / 2),
        0,
        Math.cos(camYaw - Math.PI / 2)
      );
      // Mouvement FPS
      let move = new THREE.Vector3();
      let dirm = new THREE.Vector3();
      dirm.x = dir.x;
      dirm.z = dir.z;
      dirm.normalize();
      if (keys.z) move.add(dirm);
      if (keys.s) move.sub(dirm);
      if (keys.q) move.sub(right);
      if (keys.d) move.add(right);
      if (keys.espace) move.y += 1;
      if (keys.x) move.y -= 1;
      if (move.lengthSq() > 0) {
        move.normalize().multiplyScalar(moveSpeed * delta);
        camera.position.add(move);
      }
      // Applique l'orientation à la caméra
      const lookTarget = new THREE.Vector3();
      lookTarget.copy(camera.position).add(dir);
      camera.lookAt(lookTarget);
    }

    return update;
  }
}
