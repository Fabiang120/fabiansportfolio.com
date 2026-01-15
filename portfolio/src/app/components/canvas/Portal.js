
"use client";
import { useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, useTexture } from '@react-three/drei'
import { DoubleSide } from 'three'
import { vertexShader, fragmentShader } from './shaders/PortalS'
import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/navigation';

export function Model({ isVisible, ...props }) {
  const { nodes, materials } = useGLTF('/Portal.glb')
  const shaderRef = useRef();
  const textures = useTexture({
    map: '/Marble015_1K-JPG/Marble015_1K-JPG_Color.jpg',
    normalMap: '/Marble015_1K-JPG/Marble015_1K-JPG_NormalGL.jpg',
    roughnessMap: '/Marble015_1K-JPG/Marble015_1K-JPG_Roughness.jpg',
  })
  useFrame((state) => {
    if (!isVisible) return;
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = state.clock.elapsedTime
    }
  })
  const router = useRouter();
  const handlePortal = (event) => {
    router.push("/works");
  }
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} position={[-1.079, 0.476, 1.563]} scale={[0.831, 1.093, 1.019]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube001.geometry} position={[3.099, 0.476, 1.563]} scale={[0.831, 1.093, 1.019]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube003.geometry} position={[3.104, 1.144, 1.597]} scale={[0.808, 1, 1.529]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube004.geometry} position={[-1.102, 1.144, 1.597]} scale={[0.792, 0.98, 1.414]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube005.geometry} position={[-1.091, 1.72, 1.597]} rotation={[0, 0, -0.023]} scale={[0.865, 2.246, 1.047]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube006.geometry} position={[3.102, 1.758, 1.597]} scale={[0.828, 2.149, 1.047]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube002.geometry} position={[-1.053, 2.35, 1.607]} rotation={[0, 0, -0.023]} scale={[0.819, 0.958, 1]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube007.geometry} position={[3.132, 2.35, 1.607]} rotation={[0, 0, -0.023]} scale={[0.819, 0.958, 1]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube009.geometry} position={[-1.031, 2.814, 1.58]} rotation={[0, 0, -0.023]} scale={[0.715, 1.522, 1.528]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube010.geometry} position={[3.149, 2.819, 1.607]} rotation={[0, 0, -0.023]} scale={[0.722, 1.522, 1.241]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube008.geometry} position={[-1.031, 3.381, 1.58]} rotation={[-0.004, -0.015, -0.196]} scale={[0.715, 1.63, 1.127]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube011.geometry} position={[3.131, 3.413, 1.58]} rotation={[0.001, 0.013, 0.181]} scale={[0.715, 1.63, 0.994]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube012.geometry} rotation={[-0.003, -0.016, -0.088]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube013.geometry} position={[-0.972, 3.872, 1.713]} rotation={[-0.018, 0.029, 2.82]} scale={[-1.019, -0.907, -1.423]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube014.geometry} position={[3.085, 3.908, 1.713]} rotation={[0.036, -0.073, -2.833]} scale={[-1.025, -1.184, -1.423]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube015.geometry} position={[-0.802, 4.28, 1.713]} rotation={[-0.015, 0.034, 2.742]} scale={[-1.218, -0.929, -1.771]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube016.geometry} position={[2.952, 4.28, 1.713]} rotation={[-0.066, -0.106, -2.816]} scale={[-1.563, -1.417, -1.703]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube017.geometry} position={[-2.151, 0.617, 1.679]} rotation={[0.008, 0.034, -0.346]} scale={[1.738, 1.931, 1.442]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube018.geometry} position={[4.739, 1.192, 1.052]} rotation={[0.152, -0.016, 0.502]} scale={[1.708, 1.822, 1.432]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube019.geometry} position={[-0.5, 5.039, 1.654]} rotation={[-0.042, -0.017, -0.503]} scale={[1.026, 1, 1.351]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube020.geometry} position={[2.461, 5.312, 1.521]} rotation={[0, -0.002, 0.575]} scale={[-0.955, -0.695, -0.674]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube021.geometry} position={[2.595, 5.098, 1.521]} rotation={[0, 0, 0.475]} scale={[1.026, 1, 1.351]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube025.geometry} position={[1.094, 5.98, 1.59]} rotation={[0, 0.007, 1.549]} scale={[1.476, 1.525, 1.351]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube026.geometry} position={[1.538, 5.929, 1.521]} rotation={[0, 0, 1.421]} scale={[1.133, 1.446, 1.27]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube027.geometry} position={[0.638, 5.929, 1.596]} rotation={[0, 0, 1.689]} scale={[1.268, 1.223, 1.351]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube028.geometry} position={[2.325, 5.461, 1.456]} rotation={[0.003, 0.01, 0.686]} scale={[1.093, 0.705, 1.849]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube030.geometry} position={[2.212, 5.623, 1.491]} rotation={[-0.003, 0.058, 0.906]} scale={[1.074, 0.693, 1.817]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube023.geometry} position={[1.961, 5.8, 1.526]} rotation={[0, 0, 1.119]} scale={[1.168, 1.191, 1.318]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube024.geometry} position={[0.292, 5.836, 1.612]} rotation={[-0.017, 0.003, 1.9]} scale={[-0.942, -0.992, -1.377]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube029.geometry} position={[-0.135, 5.666, 1.67]} rotation={[0.058, -0.005, -0.797]} scale={[1.243, 0.803, 2.103]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube022.geometry} position={[-0.225, 5.462, 1.615]} rotation={[0.012, 0.047, -0.64]} scale={[0.992, 0.64, 1.678]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube031.geometry} position={[-0.354, 5.312, 1.619]} rotation={[-0.001, -0.001, -0.408]} scale={[-0.955, -0.695, -0.674]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Plane.geometry} position={[6.793, 2.801, 1.581]} rotation={[1.589, 0, -0.033]} scale={[-1.754, -1.638, -2.679]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh geometry={nodes.Cube032.geometry} position={[0.041, 5.789, 1.612]} rotation={[-0.017, -0.001, 2.124]} scale={[-0.876, -0.603, -1.377]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh onClick={handlePortal} geometry={nodes.Circle.geometry} position={[3.185, 3.369, 1.96]}>
        <shaderMaterial ref={shaderRef} vertexShader={vertexShader} fragmentShader={fragmentShader} uniforms={{
          uTime: { value: 0 }
        }}
          side={DoubleSide}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/Portal.glb')

export default function Portal() {
  const canvasRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setVisible(entries[0].isIntersecting);
    });

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="relative w-full" style={{ minHeight: "1000px" }} ref={canvasRef}>
      {/* Canvas layer - in front */}
      <div className="absolute inset-0 z-10" style={{ pointerEvents: "none" }}>
        <Canvas camera={{ position: [0, 2, 15], fov: 45 }}>
          <ambientLight intensity={0.9} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Model position={[-1.7, -5.6, 0]} scale={1.7} isVisible={visible} />
        </Canvas>
      </div>
    </div>
  );
}
