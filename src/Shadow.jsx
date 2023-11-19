import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const ShadowCanvas = () => {
  const shadow = useGLTF("./hand_monster/scene.gltf");

  return (
    <mesh>
       <hemisphereLight intensity={0.5} groundColor="black" />
      <spotLight
        position={[-20, 100, 20]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
    <primitive object={shadow.scene} scale={2.5} position-y={-1.1} rotation-y={0} />
    </mesh>
  );
};

const Shadow = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // autoRotate
          // autoRotateSpeed={-2}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ShadowCanvas />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default Shadow;
