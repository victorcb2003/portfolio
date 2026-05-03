import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export function orbitalControls(camera, canvas, pov) {
  if (pov === "Orbital") {
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;

    return controls;
  }
}
