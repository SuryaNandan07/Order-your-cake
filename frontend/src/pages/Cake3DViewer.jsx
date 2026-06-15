import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";


function CandleModel({ position }) {
  const { scene } = useGLTF("/models/candle.glb");

  return (
    <primitive
      object={scene.clone()}
      position={position}
      scale={0.25}
    />
  );
}
function CakeModel({
  cakeColor,
  topColor = "#ffb6c1",
  creamColor = "#ffffff",
}) {
  const { scene } = useGLTF("/models/cake.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#ffffff",
          roughness: 0.6,
          metalness: 0,
        });

        if (child.name === "cake_base") {
          child.material.color.set(cakeColor);
        }

        if (child.name === "top_layer") {
          child.material.color.set(topColor);
        }

        if (child.name === "cream") {
          child.material.color.set(creamColor);
        }

        child.material.needsUpdate = true;
      }
    });
  }, [scene, cakeColor, topColor, creamColor]);

  return <primitive object={scene} scale={2} />;
}

export default function Cake3DViewer({
  cakeColor,
  topColor,
  creamColor,
  candles = [],

}) {
  return (
    <div className="h-[360px] w-full overflow-hidden rounded-2xl bg-[#fff7ed] shadow-inner">
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <directionalLight position={[-5, 5, -5]} intensity={1.5} />
        console.log("3D candles:", candles);
        <CakeModel
          cakeColor={cakeColor}
          topColor={topColor}
          creamColor={creamColor}
        />
        {candles.map((candle) => (
          <CandleModel
            key={candle.id}
            position={[
              candle.x / 100,
              1.6,
              candle.y / 100,
            ]}
          />
        ))}

        <OrbitControls />
      </Canvas>
    </div>
  );
}
