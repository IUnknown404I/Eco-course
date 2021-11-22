import * as THREE from "three";
import {Float32BufferAttribute} from "three";
import gsap from 'gsap';
// import vertexShader from './vertex.glsl';
// import fragmentShader from './fragment.glsl';

export function earth(opacity, height) {
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color('#fff');
    const camera = new THREE.PerspectiveCamera(
        height ? 30 : 60,
        height ? height / height : window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    const renderer = new THREE.WebGLRenderer({
        alpha: !!opacity,
        antialias: true,
        canvas: document.querySelector('.canvas_Earth'),
    });
    if (opacity) {
        renderer.setClearColor(0xffffff, 0);
    }
    height ? renderer.setSize(height, height) : renderer.setSize(window.innerWidth, window.innerHeight - 54);
    // renderer.setSize(window.innerWidth, window.innerHeight - 54);
    renderer.setPixelRatio(window.devicePixelRatio);

    const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(
            5,
            50,
            50
        ),
        new THREE.ShaderMaterial({
            vertexShader: document.querySelector('#vertexShader').innerHTML,
            fragmentShader: document.querySelector('#fragmentShader').innerHTML,
            uniforms: {
                globeTexture: {
                    value: new THREE.TextureLoader().load('/1.jpg'),
                    // value: new THREE.TextureLoader().load('/earth_uv_map.jpg'),
                }
            }
        }),
    );
    height ? sphere.position.set(0,0,0) : sphere.position.set(5,0,0);
    // sphere.position.set(5,0,0)
    // scene.add(sphere);

    const group = new THREE.Group();
    group.add(sphere);

    if(!opacity) {
        const atmosphere = new THREE.Mesh(
            new THREE.SphereGeometry(
                5,
                50,
                50
            ),
            new THREE.ShaderMaterial({
                vertexShader: document.querySelector('#atmosphereVertex').innerHTML,
                fragmentShader: document.querySelector('#atmosphereFragment').innerHTML,
                blending: THREE.AdditiveBlending,
                side: THREE.BackSide,
            }),
        );
        atmosphere.position.set(5.9,0,0)
        atmosphere.scale.set(1.15, 1.15, 1.15);
        // scene.add(atmosphere);

        group.add(atmosphere);

        const starsGeometry = new THREE.BufferGeometry();
        const starsMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
        });
        const starVertices = [];
        for (let i=0; i < 1250; i++) {
            const x = (Math.random() - 0.5) * 1000;
            const y = (Math.random() - 0.5) * 2000;
            const z = -Math.random() * 1500;
            starVertices.push(x, y, z);
        }
        starsGeometry.setAttribute(
            'position',
            new Float32BufferAttribute(starVertices, 3));
        const stars = new THREE.Points(starsGeometry, starsMaterial);

        scene.add(stars);
    }

    scene.add(group);
    camera.position.z = 20;

    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        if(height) {
            sphere.rotation.y -= 0.002;
        } else {
            sphere.rotation.y -= 0.0015;
            sphere.rotation.x += 0.001;
            sphere.rotation.z -= 0.001;
        }

        gsap.to(group.rotation, {
            y: pointer.y * 0.55,
            x: -pointer.x * 0.55,
            duration: 6,
        });
    }
    animate();

    if(!opacity) {
        document.addEventListener('pointermove', (event) => {pointerMove(event)});
    }
}

const pointer = {
    x: null,
    y: null,
}
export const pointerMove = (event) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
}