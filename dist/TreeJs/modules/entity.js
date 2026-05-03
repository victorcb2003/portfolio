import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { makeClickable } from "./clickable.js";

export class Entity {
  /**
   * @param {Object} options
   *   - position: THREE.Vector3
   *   - geometry: THREE.Geometry
   *   - rotation: THREE.Euler|THREE.Vector3|null
   *   - scale: THREE.Vector3|number|null
   *   - scene: THREE.Scene
   *   - camera: THREE.Camera
   *   - canvas: HTMLCanvasElement
   */
  constructor({
    position = new THREE.Vector3(),
    geometry = null,
    texture = null,
    rotation = null,
    scale = null,
    scene,
    camera,
    canvas,
  }) {
    this.geometry = geometry;
    this.position = position;
    this.rotation = rotation === null ? new THREE.Vector3(0, 0, 0) : rotation;
    this.scale = scale;
    this.mesh = null;
    this.object3D = null;
    this.scene = scene;
    this.camera = camera;
    this.canvas = canvas;
    this.isLoaded = false;
    
    // Initialisation des propriétés pour rotateAround
    this.distance = null;
    this.angle = 0;

    if (geometry === null) {
      this._loadGLTF(texture);
    } else {
      this._createMeshFromGeometry(geometry, texture);
    }
  }

  // Méthode pour créer l'entité avec Promise
  static async create(options) {
    const entity = new Entity(options);
    if (options.geometry === null) {
      await entity._waitForLoad();
    }
    return entity;
  }

  // Méthode privée pour charger le GLTF
  _loadGLTF(texturePath) {
    const loader = new GLTFLoader();
    
    return new Promise((resolve, reject) => {
      loader.load(
        texturePath,
        (gltf) => {
          this.scene.add(gltf.scene);
          this.mesh = gltf.scene;
          this.object3D = gltf.scene;
          this.mesh.position.copy(this.position);
          this.mesh.receiveShadow = true;
          this.mesh.castShadow = false;

          this.setScale(this.scale);
          this.doRotation(this.rotation.x, this.rotation.y, this.rotation.z);
          
          this.isLoaded = true;
          resolve(this);
        },
        undefined,
        (error) => {
          console.error("Erreur de chargement GLB:", error);
          reject(error);
        }
      );
    });
  }

  // Méthode privée pour créer un mesh à partir d'une géométrie
  _createMeshFromGeometry(geometry, texture) {
    let material;
    if (texture) {
      const tex = new THREE.TextureLoader().load(texture);
      material = new THREE.MeshStandardMaterial({ map: tex });
    } else {
      material = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
    }
    const mesh = new THREE.Mesh(geometry, material);

    this.scene.add(mesh);

    this.mesh = mesh;
    this.object3D = mesh;
    this.mesh.position.copy(this.position);
    this.mesh.receiveShadow = true;
    this.mesh.castShadow = false;
    
    this.setScale(this.scale);
    this.doRotation(this.rotation.x, this.rotation.y, this.rotation.z);
    this.isLoaded = true;
  }

  // Méthode pour attendre que le chargement soit terminé
  async _waitForLoad() {
    return new Promise((resolve) => {
      const checkLoaded = () => {
        if (this.isLoaded) {
          resolve(this);
        } else {
          setTimeout(checkLoaded, 10);
        }
      };
      checkLoaded();
    });
  }

  doRotation(x = 0, y = 0, z = 0) {
    if (this.object3D && this.object3D.rotation) {
      this.rotation.x += x;
      this.rotation.y += y;
      this.rotation.z += z;
      this.object3D.rotation.setFromVector3(this.rotation);
    }
  }

  setPosition(position) {
    this.position = position;
    if (this.object3D) {
      this.object3D.position.copy(position);
    }
  }

  setScale(scale) {
    if (scale !== null) {
      this.scale = scale;
      if (this.object3D) {
        if (scale instanceof THREE.Vector3) {
          this.object3D.scale.copy(scale);
        } else if (typeof scale === 'number') {
          this.object3D.scale.set(scale, scale, scale);
        }
      }
    }
  }

  rotateAround(planet, vitesse) {
    if (!this.isLoaded) return; // Ne pas exécuter si pas encore chargé
    
    if (this.distance === null) {
      const distance = {
        x: this.position.x - planet.position.x,
        z: this.position.z - planet.position.z,
      };

      this.distance = Math.sqrt(
        distance.x * distance.x + distance.z * distance.z
      );
    }

    const finalPosition = new THREE.Vector3(
      planet.position.x + this.distance * Math.cos(this.angle),
      planet.position.y,
      planet.position.z + this.distance * Math.sin(this.angle)
    );

    this.angle += vitesse;

    this.setPosition(finalPosition);
  }
}