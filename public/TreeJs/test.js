import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.150.1/build/three.module.js';

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 100);
        camera.position.set(0, 0, 5);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Charger deux textures
        const loader = new THREE.TextureLoader();
        const faceTex = loader.load('https://threejs.org/examples/textures/stone.jpg');
        const sideTex = loader.load('https://threejs.org/examples/textures/brick_diffuse.jpg');

        // Répétition et wrapping
        [faceTex, sideTex].forEach(tex => {
            tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
            tex.repeat.set(1, 1);
            tex.colorSpace = THREE.SRGBColorSpace;
        });

        const materials = [
            new THREE.MeshStandardMaterial({ map: faceTex, metalness: 0.2, roughness: 0.7 }),
            new THREE.MeshStandardMaterial({ map: sideTex, metalness: 0.2, roughness: 0.8 })
        ];

        // Construction du shape (anneau)
        const outer = 1.2, inner = 0.8, height = 0.3;
        const shape = new THREE.Shape().absarc(0, 0, outer, 0, Math.PI*2, false);
        const hole = new THREE.Path().absarc(0, 0, inner, 0, Math.PI*2, true);
        shape.holes.push(hole);

        // Générateur UV personnalisé
        const UVGenerator = {
            generateTopUV: (geom, a, b, c) => {
                const pos = geom.attributes.position;
                const vA = new THREE.Vector2(pos.getX(a), pos.getY(a));
                const vB = new THREE.Vector2(pos.getX(b), pos.getY(b));
                const vC = new THREE.Vector2(pos.getX(c), pos.getY(c));
                
                // Compute bounding box if not already computed
                if (!geom.boundingBox) {
                    geom.computeBoundingBox();
                }
                
                const { min, max } = geom.boundingBox;
                const size = max.clone().sub(min);
                
                return [
                    new THREE.Vector2((vA.x - min.x) / size.x, (vA.y - min.y) / size.y),
                    new THREE.Vector2((vB.x - min.x) / size.x, (vB.y - min.y) / size.y),
                    new THREE.Vector2((vC.x - min.x) / size.x, (vC.y - min.y) / size.y)
                ];
            },
            generateSideWallUV: (geom, a, b, c, d) => {
                const pos = geom.attributes.position;
                const vs = [a, b, c, d].map(i => new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i)));
                const uvs = vs.map(v => new THREE.Vector2(v.z / height, (v.y + outer) / (outer * 2)));
                return [uvs[0], uvs[1], uvs[2], uvs[3]];
            }
        };

        const extrudeSettings = {
            depth: height,
            bevelEnabled: false,
            curveSegments: 64,
            steps: 1,
            UVGenerator
        };

        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

        const mesh = new THREE.Mesh(geometry, materials);
        mesh.rotation.x = Math.PI / 2;
        scene.add(mesh);

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(2, 3, 5);
        scene.add(light);

        // Add ambient light for better visibility
        const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
        scene.add(ambientLight);

        // Handle window resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        function animate() {
            mesh.rotation.z += 0.01;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }

        animate();