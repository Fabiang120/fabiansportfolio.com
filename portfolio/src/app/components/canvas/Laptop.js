

import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, useTexture } from '@react-three/drei'
import { useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three'

export function Model({ screenImage, ...props }) {
  const { nodes, materials } = useGLTF('/macbook-pro.glb')
  const screenTexture = useTexture(screenImage);
  screenTexture.flipY = false;
  materials.Frame.color.set('#1f2025')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Keyboard.geometry} material={materials.Frame}>
        <mesh geometry={nodes.Body.geometry} material={materials.Frame} />
        <mesh geometry={nodes.Touchbar.geometry} material={materials.Frame} />
      </mesh>
      <mesh geometry={nodes.Frame.geometry} material={materials.Frame} position={[0, -0.62, 0.047]}>
        <mesh geometry={nodes.Logo.geometry} material={materials.Logo} position={[0, 1.2, -0.106]} />
        <mesh geometry={nodes.Screen.geometry} position={[0, 1.2, -0.106]}>
          <meshBasicMaterial map={screenTexture} />
        </mesh>
      </mesh>
    </group>
  );
}

useGLTF.preload('/macbook-pro.glb')

function Lights() {
  const lightRef = useRef();
  useHelper(lightRef, DirectionalLightHelper, 1, 'red');
  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight ref={lightRef} position={[0.5, 0, 0.866]} intensity={1.1} />
      <directionalLight position={[-6, 2, 2]} intensity={0.8} />
    </>
  );
}

export default function Laptop({ screenImage }) {

  return (
    <div className="relative w-full aspect-[12/10]">
      {/* Canvas layer - in front */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 36 }}>
          {/* red is x, green is y, z is blue for axes helper */}
          <Lights />
          <Model position={[0, 0, 0]} screenImage={screenImage} />
        </Canvas>
      </div>
    </div >
  );
}

