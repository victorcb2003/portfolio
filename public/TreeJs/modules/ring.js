import * as THREE from "three";
import { Entity } from "./entity.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export class Ring extends Entity {
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
    texture = null,
    rotation = null,
    scale = null,
    scene,
    camera,
    canvas,
  }) {
    
    super({ position, rotation, texture, scene, camera, canvas , scale });
    

  }
}
