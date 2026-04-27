import * as THREE from "./node_modules/three/build/three.module.js";
import { CameraControls } from "./modules/cameraControls.js";
import { addStar } from "./modules/addStar.js";
import { Planet } from "./modules/planet.js";
import { orbitalControls } from "./modules/orbitalControls.js";
import { userInterface } from "./modules/userInterface.js";

//
//
//

let temps = 1; // Vitesse de rotation des planètes
const display = document.querySelector("#tempsDisplay")
const slider = document.getElementById("temps");

slider.addEventListener("input", () => {
  temps = parseFloat(slider.value);
  display.textContent = String(temps)
});

const pov = "Orbital"; // "FPS" or "Orbital"

const canvas = document.getElementById("canvas");

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const updateCamera = CameraControls(camera, canvas, pov);
const orbitControls = orbitalControls(camera, canvas, pov);

const clock = new THREE.Clock();

Planet.addPlanet(scene, camera, canvas);
const Planets = Planet.getPlanet();

const target = {
  current: Planets.sun,
  previous: null,
};

Planet.lumièreSolaire(scene);

addStar(scene, 2000);

//
//    EventListener
//

function cam(delta) {
  if (pov === "FPS") {
    updateCamera(delta);
  } else if (pov === "Orbital") {
    orbitControls.update(delta);
    orbitControls.target.copy(target.current.object3D.position);
  }
}

let objet;
if (pov === "Orbital") {
  objet = orbitControls;
} else {
  objet = camera;
}

userInterface(Planets, target);

//
//   Boucle d'animation
//

function loop() {
  requestAnimationFrame(loop);
  const delta = clock.getDelta();
  cam(delta);
  renderer.render(scene, camera);
  Planet.planetRotation(temps);
  Planet.planetRotate(temps);
}

loop();
