"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./displacement-sphere.module.css";



import {
    AmbientLight,
    DirectionalLight,
    DirectionalLightHelper,
    LinearSRGBColorSpace,
    Mesh,
    MeshPhongMaterial,
    PerspectiveCamera,
    Scene,
    SphereGeometry,
    UniformsUtils,
    Vector2,
    WebGLRenderer,
} from "three";
import { fragmentShader, vertexShader } from "./shaders/shaders";

export function DisplacementSphere() {
    const canvasRef = useRef();
    const renderer = useRef();
    const camera = useRef();
    const scene = useRef();
    const sphere = useRef();
    const uniforms = useRef();
    const lastTime = useRef(performance.now());
    const start = useRef(Date.now());
    const [visible, setVisible] = useState(true);
    const isVisibleRef = useRef(true);

    // Sync ref when state changes
    useEffect(() => {
        isVisibleRef.current = visible;
    }, [visible]);

    // IntersectionObserver to watch canvas visibility
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            setVisible(entries[0].isIntersecting);
        });

        if (canvasRef.current) {
            observer.observe(canvasRef.current);
        }

        return () => observer.disconnect();
    }, []);
    const rafId = useRef(null);
    useEffect(() => {
        scene.current = new Scene();

        const width = window.innerWidth;
        const height = window.innerHeight
        const adjustedHeight = height + height * 0.3;
        // Remember to test the 100 hardclips anything the far value aka
        // Actual high neededed is 54
        camera.current = new PerspectiveCamera(54, width / adjustedHeight, 0.1, 100);
        camera.current.position.z = 52;

        renderer.current = new WebGLRenderer({
            canvas: canvasRef.current,
            // Not sure why alpha is here it doesnt seem to do anything
            alpha: true,
            powerPreference: "high-performance",
        });

        //Pixel Ratio is set to 1 to force 1 css pixel to 1 canvas pixel, makes less
        renderer.current.setPixelRatio(1);

        renderer.current.setSize(width, adjustedHeight);
        renderer.current.outputColorSpace = LinearSRGBColorSpace;

        const material = new MeshPhongMaterial();
        material.onBeforeCompile = shader => {
            uniforms.current = UniformsUtils.merge([
                shader.uniforms,
                { time: { type: 'f', value: 0 } },
            ]);
            shader.uniforms = uniforms.current;
            shader.vertexShader = vertexShader;
            shader.fragmentShader = fragmentShader;
        };

        const geometry = new SphereGeometry(32, 102, 102);
        sphere.current = new Mesh(geometry, material);
        scene.current.add(sphere.current);
        const light = new DirectionalLight(0xffffff, 2.0);
        const ambientLight = new AmbientLight(0xffffff, 1.4);
        scene.current.add(ambientLight);
        light.position.set(100, 100, 200);

        scene.current.add(light);
        const animate = () => {
            rafId.current = requestAnimationFrame(animate);
            if (!isVisibleRef.current) return;
            renderer.current.render(scene.current, camera.current);
            // Uses position += velocity x timepassed
            const now = performance.now();
            const delta = (now - lastTime.current) * 0.001;
            lastTime.current = now;

            sphere.current.rotation.z += delta * 0.15;

            if (uniforms.current?.time) {
                uniforms.current.time.value = 0.00005 * (Date.now() - start.current);
            }
            // Sphere rotating around y and camera is above in z axis
            renderer.current.render(scene.current, camera.current);
        };
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const adjustedHeight = height + height * 0.3;
            renderer.current.setSize(width, adjustedHeight);
            camera.current.aspect = width / adjustedHeight;
            camera.current.updateProjectionMatrix();
            if (width <= 640) {
                sphere.current.position.x = 14;
                sphere.current.position.y = 10;
            } else if (width <= 1024) {
                sphere.current.position.x = 18;
                sphere.current.position.y = 14;
            } else {
                sphere.current.position.x = 22;
                sphere.current.position.y = 16;
            }
        }
        handleResize();
        animate();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(rafId.current);
            renderer.current.dispose();
            sphere.current.geometry.dispose();
            sphere.current.material.dispose();
        }
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={styles.canvas}
            data-visible={visible}
        />
    );
}
