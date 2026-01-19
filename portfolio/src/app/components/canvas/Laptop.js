

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, useTexture } from '@react-three/drei'
import { Color } from 'three'
import { AxesHelper } from 'three'
import { throttle } from 'lodash-es'

export function Model({ screenImage, isVisible, ...props }) {
  const { nodes, materials } = useGLTF('/macbook-pro.glb')
  const { invalidate } = useThree();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const groupRef = useRef();
  const lidRef = useRef();

  const screenTexture = useTexture(screenImage);
  screenTexture.anisotropy = 16;
  screenTexture.flipY = false;
  materials.Frame.color = new Color(0x1f2025);


  useEffect(() => {
    invalidate();
    if (!isVisible) return;

    const handleMouseMove = throttle((event) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX - innerWidth / 2) / innerWidth;
      const y = (event.clientY - innerHeight / 2) / innerHeight;
      setMousePosition({ x, y });
      invalidate();
    }, 10);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isVisible, invalidate]);


  useEffect(() => {
    return () => {
      screenTexture.dispose();
    };
  }, [])

  useFrame(() => {
    if (!isVisible) return;
    if (groupRef.current) {
      groupRef.current.rotation.y = mousePosition.x / 10;
      groupRef.current.rotation.x = mousePosition.y / 10;
    }
    if (lidRef.current) {
      lidRef.current.rotation.x += (0 - lidRef.current.rotation.x) * 0.02;
      if (Math.abs(lidRef.current.rotation.x) > 0.01) {
        invalidate();
      }
    }
  });

  const screenMaterial = materials.Screen.clone();
  screenMaterial.map = screenTexture;
  screenMaterial.color = new Color(0xffffff);
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
          flat
          frameloop="demand"
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

