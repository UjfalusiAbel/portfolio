import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { degToRad } from "three/src/math/MathUtils";

const Computer = ({ isMobile }) => {
  const computer = useGLTF('./computer/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.25} position={[15, 2, -10]} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={computer.scene} scale={isMobile ? 1.65 : 2.25} position={isMobile ? [0, -2.5, 1.25] : [0, -2.3, 1.5]} />
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas frameloop="demand" shadows camera={{ position: [10, 2, 0], rotation: [degToRad(-20), 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          maxAzimuthAngle={2.6}
          minAzimuthAngle={1.2} />
        <Computer isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;