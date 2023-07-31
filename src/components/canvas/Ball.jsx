import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  const ballRef = useRef();

  // useFrame hook to update the floating animation
  useFrame((state, delta) => {
    // You can adjust the floating speed here
    ballRef.current.position.y = Math.sin(state.clock.elapsedTime * props.speed) * props.floatIntensity;
  });

  return (
    <Float speed={1.75} rotationIntensity={1}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow ref={ballRef} scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          flatShading={false} // Disable flat shading to make it smooth
          roughness={0} // Adjust the roughness for smoother appearance (values between 0 and 1)
          metalness={0.1}
        />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} flatShading />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} speed={1} floatIntensity={0.1} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
