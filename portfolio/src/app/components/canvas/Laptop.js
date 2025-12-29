"use client";
import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, useTexture } from '@react-three/drei';


function LaptopModel({ isOpen, screenImage }) {
    const { scene } = useGLTF('/Laptop.glb');
    const modelRef = useRef();
    const baseRotation = { x: 0.3, y: 29.8, z: 0 };
    const screenTexture = useTexture(screenImage);

    const clonedScene = useMemo(() => {
        const clone = scene.clone();
        clone.traverse((child) => {
            if (child.isMesh) {
                child.material = child.material.clone();
            }
        });
        return clone;
    }, [scene]);


    useEffect(() => {
        if (!screenTexture || !clonedScene) return;

        // Different approach: tile the texture to fill the UV space
        screenTexture.flipY = false;
        screenTexture.rotation = Math.PI / 2;  // 90 degrees (was -90, now +180)
        screenTexture.center.set(0.5, 0.5);

        // Zoom out to show the full image
        screenTexture.repeat.set(3, 3);
        screenTexture.offset.set(-0.62, -0.3);  // Center the image

        // Use RepeatWrapping
        screenTexture.wrapS = 1000;
        screenTexture.wrapT = 1000;
        screenTexture.needsUpdate = true;

        clonedScene.traverse((child) => {
            if (child.isMesh && child.material?.name === 'Screen') {
                child.material.map = screenTexture;
                child.material.emissiveMap = screenTexture;
                child.material.emissive.set('#ffffff');
                child.material.emissiveIntensity = 0.5;
                child.material.needsUpdate = true;
            }
        });
    }, [screenTexture, clonedScene]);

    useFrame((state) => {
        if (!modelRef.current) return;

        const time = state.clock.elapsedTime;

        // Floating up/down
        const floatY = Math.sin(time * 1.5) * 0.1;
        modelRef.current.position.y = -1 + floatY;

        // Mouse tracking (your existing code)
        const mouseX = state.pointer.x;
        const mouseY = state.pointer.y;
        const targetY = baseRotation.y + mouseX * 0.1;
        const targetX = baseRotation.x - mouseY * 0.5;
        modelRef.current.rotation.y += (targetY - modelRef.current.rotation.y) * 0.011;
        modelRef.current.rotation.x += (targetX - modelRef.current.rotation.x) * 0.01;
    });
    return (
        <primitive
            ref={modelRef}
            object={clonedScene}
            scale={4}
            position={[0, -1, 1]}
            rotation={[baseRotation.x, baseRotation.y, baseRotation.z]}
        />
    );
}

export default function Laptop({ screenImage }) {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} style={{ width: "100%", height: "400px" }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 30 }}>
                <ambientLight intensity={0.9} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <LaptopModel isOpen={isVisible} screenImage={screenImage} />
            </Canvas>
        </div>
    );
}