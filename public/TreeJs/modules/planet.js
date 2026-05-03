import * as THREE from "three";
import { Entity } from "./entity.js";
import {Ring} from "./ring.js";

export class Planet extends Entity {
  /**
   * @param {Object} options
   *   - position: THREE.Vector3
   *   - radius: number
   *   - texture: string (url)
   *   - scene: THREE.Scene
   *   - camera: THREE.Camera
   *   - canvas: HTMLCanvasElement
   */
  constructor({
    position = new THREE.Vector3(),
    radius = 50,
    texture = null,
    scene,
    camera,
    canvas,
  }) {
    const geometry = new THREE.SphereGeometry(radius, 64, 64);

    super({ position, geometry, texture, scene, camera, canvas });

    this.angle = 0;
    this.distance = null;
    this.radius = radius;
  }

  static addPlanet(scene, camera, canvas) {
    const sun = new Planet({
      position: new THREE.Vector3(0, 0, 0),
      radius: 20,
      texture: "./models/planets/sun.jpg",
      scene,
      camera,
      canvas,
    });

    const mercury = new Planet({
      position: new THREE.Vector3(25, 0, 0),
      radius: 0.070100575,
      texture: "./models/planets/mercury.jpg",
      scene,
      camera,
      canvas,
    });

    const venus = new Planet({
      position: new THREE.Vector3(29.34369603, 0, 0),
      radius: 0.173908046,
      texture: "./models/planets/venus.jpg",
      scene,
      camera,
      canvas,
    });

    const earth = new Planet({
      position: new THREE.Vector3(32.91882556, 0, 0),
      radius: 0.183275862,
      texture: "./models/planets/earth.jpg",
      scene,
      camera,
      canvas,
    });

    const moon = new Planet({
      position: new THREE.Vector3(32.91882556, 0, 1),
      radius: 0.049928161,
      texture: "./models/planets/moon.jpg",
      scene,
      camera,
      canvas,
    });

    const mars = new Planet({
      position: new THREE.Vector3(39.68911917, 0, 0),
      radius: 0.0975862075,
      texture: "./models/planets/mars.jpg",
      scene,
      camera,
      canvas,
    });

    const jupiter = new Planet({
      position: new THREE.Vector3(87.18480138, 0, 0),
      radius: 2.054367816,
      texture: "./models/planets/jupiter.jpg",
      scene,
      camera,
      canvas,
    });

    const saturn = new Planet({
      position: new THREE.Vector3(143.6614853, 0, 0),
      radius: 1.73183908,
      texture: "./models/planets/saturn.jpg",
      scene,
      camera,
      canvas,
    });
      
      const uranus = new Planet({
      position: new THREE.Vector3(267.582038, 0, 0),
      radius: 0.734454023,
      texture: "./models/planets/uranus.jpg",
      scene,
      camera,
      canvas,
    });

    const neptune = new Planet({
      position: new THREE.Vector3(409, 0, 0),
      radius: 0.711609195,
      texture: "./models/planets/neptune.jpg",
      scene,
      camera,
      canvas,
    });

    const saturnRing = new Ring({
      position: saturn.object3D.position,
      texture: "./models/planets/ring.glb", // ton image
      scale: 2.5,
      scene,
      camera,
      canvas,
    });

    this.children = {
      sun,
      mercury,
      venus,
      earth,
      moon,
      mars,
      jupiter,
      saturn,
      saturnRing,
      neptune,
      uranus,
    };
  }

  static planetRotation(v = 1) {
    this.children.mercury.doRotation(0 * v, 0.0006200824 * v, 0 * v);
    this.children.venus.doRotation(0 * v, -0.000149649 * v, 0 * v);
    this.children.earth.doRotation(0 * v, 0.03652 * v, 0 * v);
    this.children.moon.doRotation(0 * v, 0.0013311392 * v, 0 * v);
    this.children.mars.doRotation(0 * v, 0.035480813 * v, 0 * v);
    this.children.jupiter.doRotation(0 * v, 0.0881644444 * v, 0 * v);
    this.children.saturn.doRotation(0 * v, 0.0815727103 * v, 0 * v);
    this.children.saturnRing.doRotation(0 * v, 0.001 * v, 0 * v);
    this.children.neptune.doRotation(0 * v, -0.050745814 * v, 0 * v);
    this.children.uranus.doRotation(0 * v, 0.0542129193 * v, 0 * v);
    this.children.sun.doRotation(0 * v, 0.00001 *v, 0.000005 * v);
  }

  static getPlanet(name) {
    if (name) {
      return this.children.name || null;
    }
    return this.children;
  }

  static planetRotate(v = 1) {
    this.children.mercury.rotateAround(this.children.sun, 0.000415 * v);
    this.children.venus.rotateAround(this.children.sun, 0.0001625278 * v);
    this.children.earth.rotateAround(this.children.sun, 0.0001 * v);
    this.children.moon.rotateAround(this.children.earth, 0.0013377289 * v);
    this.children.mars.rotateAround(this.children.sun, 0.0000531587 * v);
    this.children.jupiter.rotateAround(this.children.sun, 0.00000843223 * v);
    this.children.saturn.rotateAround(this.children.sun, 0.00000339816 * v);
    this.children.saturnRing.rotateAround(this.children.saturn, 0.01 * v);
    this.children.neptune.rotateAround(this.children.sun, 0.000000610702 * v);
    this.children.uranus.rotateAround(this.children.sun, 0.00000119389 * v);
  }

  static lumièreSolaire(scene) {
    for (let i = -1; i < 2; i += 2) {
      for (let j = -1; j < 1.1; j += 0.1) {
        const light = new THREE.SpotLight(0xffffff, 5, 330, Math.PI / 50, 0, 0);
        light.target = this.children.sun.object3D;
        light.position.set(
          Math.round(200 * Math.cos(j * Math.PI)),
          250 * i,
          Math.round(200 * Math.sin(j * Math.PI))
        );
        // const helper = new THREE.SpotLightHelper(light);
        // scene.add(helper);
        scene.add(light);
        scene.add(light.target);
      }
    }
    const light = new THREE.PointLight(0xffffff, 4, 500, 0.2);
    light.position.set(0, 0, 0);
    scene.add(light);
    
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);
    
    const helper = new THREE.PointLightHelper(light);
    scene.add(helper);  
  }
}
