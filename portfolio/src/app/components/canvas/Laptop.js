

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useTexture } from '@react-three/drei'
import { Color } from 'three'


export function Model({ screenImage, isVisible, ...props }) {
  const { nodes, materials } = useGLTF('/macbook-pro.glb')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const groupRef = useRef();
  const screenTexture = useTexture(screenImage);
  screenTexture.flipY = false;
  materials.Frame.color = new Color(0x1f2025);


  useEffect(() => {
    if (!isVisible) return;
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX - innerWidth / 2) / innerWidth;
      const y = (event.clientY - innerHeight / 2) / innerHeight;
      setMousePosition({ x, y });
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isVisible]);
  useFrame(() => {
    if (!isVisible) return;
    if (groupRef.current) {
      groupRef.current.rotation.y = mousePosition.x / 4;
      groupRef.current.rotation.x = mousePosition.y / 4;
    }
  })
  const screenMaterial = materials.Screen.clone();
  screenMaterial.map = screenTexture;
  screenMaterial.color = new Color(0xffffff);
  return (
    <group {...props} ref={groupRef} dispose={null}>
      <mesh geometry={nodes.Keyboard.geometry} material={materials.Frame}>
        <mesh geometry={nodes.Body.geometry} material={materials.Frame} />
        <mesh geometry={nodes.Touchbar.geometry} material={materials.Frame} />
      </mesh>
      <mesh geometry={nodes.Frame.geometry} material={materials.Frame} position={[0, -0.62, 0.047]}>
        <mesh geometry={nodes.Logo.geometry} material={materials.Logo} position={[0, 1.2, -0.106]} />
        <mesh geometry={nodes.Screen.geometry} material={screenMaterial} position={[0, 1.2, -0.106]} />
      </mesh>
    </group>
  );
}

useGLTF.preload('/macbook-pro.glb')

function Lights() {

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[0.5, 0, 0.866]} intensity={1.1} />
      <directionalLight position={[-6, 2, 2]} intensity={0.8} />
    </>
  );
}

export default function Laptop({ screenImage }) {
  const canvasRef = useRef();
  const [visible, setVisible] = useState(false);

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

  return (
    <div className="relative w-full aspect-[12/10]">
      {/* Canvas layer - in front */}
      <div className="absolute inset-0" ref={canvasRef}>
        <Canvas
          frameloop="demand"
          flat
          camera={{ position: [0, 0, 8], fov: 36 }}
          dpr={2}
          onCreated={({ gl }) => {
            gl.outputColorSpace = 'srgb';
          }}
        >
          {/* red is x, green is y, z is blue for axes helper */}
          <Lights />
          <Model position={[0, 0, 0]} screenImage={screenImage} isVisible={visible} />
        </Canvas>
      </div>
    </div >
  );
}

