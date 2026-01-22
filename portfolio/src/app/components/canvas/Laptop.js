import { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture } from '@react-three/drei';
import { Color } from 'three';
import { throttle } from 'lodash-es';
import { useSpring } from 'framer-motion';


const rotationSpringConfig = {
  stiffness: 60,
  damping: 20,
  mass: 1.0,
  restSpeed: 0.001,
};



export function Model({ screenImage, isVisible, ...props }) {
  const { nodes, materials } = useGLTF('/macbook-pro.glb');

  const groupRef = useRef();
  const lidRef = useRef();

  // Direct rotation values for mouse tracking
  const targetRotationX = useRef(0);
  const targetRotationY = useRef(0);

  // Spring only for lid opening animation
  const lidRotation = useSpring(1.58, rotationSpringConfig);

  const screenTexture = useTexture(screenImage);
  screenTexture.anisotropy = 16;
  screenTexture.flipY = false;
  materials.Frame.color = new Color(0x1f2025);



  // Mouse move handler
  useEffect(() => {
    if (!isVisible) return;

    const handleMouseMove = throttle((event) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX - innerWidth / 2) / innerWidth;
      const y = (event.clientY - innerHeight / 2) / innerHeight;
      targetRotationX.current = y / 10;
      targetRotationY.current = x / 10;
    }, 16);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isVisible]);

  useEffect(() => {
    return () => {
      screenTexture.dispose();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      lidRotation.set(0);
    }
  }, [isVisible, lidRotation]);

  useFrame(() => {
    if (!isVisible) return;

    if (groupRef.current) {
      groupRef.current.rotation.x = targetRotationX.current;
      groupRef.current.rotation.y = targetRotationY.current;
    }

    if (lidRef.current) {
      lidRef.current.rotation.x = lidRotation.get();
    }
  });

  const screenMaterial = useMemo(() => {
    const mat = materials.Screen.clone();
    mat.map = screenTexture;
    mat.color = new Color(0xffffff);
    return mat;
  }, [materials.Screen, screenTexture]);

  return (
    <group {...props} ref={groupRef} dispose={null}>
      <mesh geometry={nodes.Keyboard.geometry} material={materials.Frame}>
        <mesh geometry={nodes.Body.geometry} material={materials.Frame} />
        <mesh geometry={nodes.Touchbar.geometry} material={materials.Frame} />
      </mesh>
      <group position={[0, -0.58, 0]} ref={lidRef} rotation={[1.58, 0, 0]}>
        <mesh geometry={nodes.Frame.geometry} material={materials.Frame} position={[0, -0.04, 0.047]}>
          <mesh geometry={nodes.Logo.geometry} material={materials.Logo} position={[0, 1.2, -0.106]} />
          <mesh geometry={nodes.Screen.geometry} material={screenMaterial} position={[0, 1.2, -0.106]} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload('/macbook-pro.glb');

function Lights() {
  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[0.5, 0, 0.866]} intensity={1.1} />
      <directionalLight position={[-6, 2, 2]} intensity={0.8} />
    </>
  );
}

export default function Laptop({ screenImage, isVisible }) {

  return (
    <div className="w-full h-full">
      <Canvas
        flat
        camera={{ position: [0, 0, 8], fov: 30 }}
        dpr={2}
        onCreated={({ gl }) => {
          gl.outputColorSpace = 'srgb';
        }}
      >
        <Lights />
        <Model position={[0, 0, 0]} screenImage={screenImage} isVisible={isVisible} />
      </Canvas>
    </div>
  );
}
