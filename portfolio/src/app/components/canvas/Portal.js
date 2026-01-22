
"use client";
import { useRef, useState, useEffect, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, useTexture } from '@react-three/drei'
import { DoubleSide } from 'three'
import { vertexShader, fragmentShader } from './shaders/PortalS'
import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/navigation';

export function Model({ isVisible, ...props }) {
  const { nodes } = useGLTF('/Portal.glb')
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
  const uniforms = useMemo(() => ({
    uTime: { value: 0 }
  }), []);
  const shaders = useMemo(() => ({
    vertex: vertexShader,
    fragment: fragmentShader
  }), []);
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} position={[-1.079, 0.476, 1.563]}
        scale={[0.831, 1.093, 1.019]}>
        <meshStandardMaterial {...textures} />
      </mesh>
      <mesh onClick={handlePortal} geometry={nodes.Circle.geometry} position={[3.185, 3.369, 1.96]}>
        <shaderMaterial ref={shaderRef} vertexShader={shaders.vertex} fragmentShader={shaders.fragment} uniforms={uniforms}
        />
      </mesh>
    </group >
  )
}

useGLTF.preload('/Portal.glb')

export default function Portal() {
  const canvasRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setVisible(entries[0].isIntersecting);
    }, {
      threshold: 0.40
    });

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="relative w-full" style={{ minHeight: "150vh" }} ref={canvasRef}>
      {/* Canvas layer - in front */}
      <div className="absolute inset-0 z-10" style={{ pointerEvents: "none" }}>
        <Canvas frameloop={visible ? "always" : "never"} camera={{ position: [0, 2, 15], fov: 45 }} style={{ background: "transparent" }} gl={{ alpha: true }}>
          <ambientLight intensity={0.9} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Model position={[-1.7, -5.6, 0]} scale={1.7} isVisible={visible} />
        </Canvas>
      </div>
    </div>
  );
}
