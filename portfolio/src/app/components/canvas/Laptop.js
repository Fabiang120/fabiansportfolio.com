"use client";
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function LaptopModel() {
    const hinge = useRef();  // The pivot point (hinge)

    useFrame((state) => {
        const openAngle = -0.2;
        const closedAngle = 1.4;
        const speed = 0.5;

        const t = (Math.sin(state.clock.elapsedTime * speed) + 1) / 2;
        hinge.current.rotation.x = closedAngle + (openAngle - closedAngle) * t;
    });

    return (
        <>
            {/* Base (keyboard) */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[3, 0.1, 2]} />
                <meshStandardMaterial color="grey" />
            </mesh>

            <group ref={hinge} position={[0, 0, -1]}>
                {/* RED SPHERE - shows where the hinge pivot point is! */}
                <mesh>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshBasicMaterial color="red" wireframe />
                </mesh>

                {/* Screen - offset upward from hinge */}
                <mesh position={[0, 1, 0]}>
                    <boxGeometry args={[3, 2, 0.1]} />
                    <meshStandardMaterial color="grey" />
                </mesh>
            </group>
        </>
    );
}

export default function Laptop() {
    return (
        <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <LaptopModel />
        </Canvas>
    );
}