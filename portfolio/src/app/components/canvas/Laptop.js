"use client";
import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, useTexture, Html } from '@react-three/drei';

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
        screenTexture.flipY = false;
        screenTexture.rotation = Math.PI / 2;
        screenTexture.center.set(0.5, 0.5);
        screenTexture.repeat.set(3, 3);
        screenTexture.offset.set(-0.62, -0.3);
        screenTexture.wrapS = 1000;
        screenTexture.wrapT = 1000;
        screenTexture.needsUpdate = true;

        clonedScene.traverse((child) => {
            if (child.isMesh) {
                if (child.material?.name === 'DarkGray' ||
                    child.material?.name === 'lighterGray') {
                    child.material.color.set('#484848');
                    child.material.needsUpdate = true;
                }

                if (child.material?.name === 'Screen') {
                    child.material.map = screenTexture;
                    child.material.emissiveMap = screenTexture;
                    child.material.emissive.set('#ffffff');
                    child.material.emissiveIntensity = 0.5;
                    child.material.needsUpdate = true;
                }
            }
        });
    }, [screenTexture, clonedScene]);

    useFrame((state) => {
        if (!modelRef.current) return;

        const time = state.clock.elapsedTime;
        const baseY = -2;
        const floatY = Math.sin(time * 1.5) * 0.1;
        modelRef.current.position.y = baseY + floatY;

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
            scale={7.5}
            position={[0, 0, 1]}
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
        <div ref={containerRef} className="relative w-full h-full">
            {/* Text layer - behind */}
            <div className="absolute inset-0 flex items-end justify-center p-8 z-0">
            </div>
            {/* Canvas layer - in front */}
            <div className="absolute inset-0 z-10" style={{ pointerEvents: "none" }}>
                <Canvas camera={{ position: [0, 2, 14], fov: 45 }}>
                    <ambientLight intensity={0.9} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <LaptopModel isOpen={isVisible} screenImage={screenImage} />
                </Canvas>
            </div>
        </div>
    );
}