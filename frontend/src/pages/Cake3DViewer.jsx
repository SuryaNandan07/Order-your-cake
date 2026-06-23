import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useMemo, useEffect } from "react";
import * as THREE from "three";
function LayerModel({ position, scale, color }) {
  return (
    <mesh position={position} scale={scale}>
      <cylinderGeometry args={[1, 1, 0.45, 64]} />
      <meshStandardMaterial color={color} roughness={0.6} metalness={0} />
    </mesh>
  );
}

function CandleModel({ position }) {
    
  const { scene } = useGLTF("/models/candle.glb");

  const clonedScene = useMemo(() => scene.clone(), [scene]);

  return (
    <primitive
      object={clonedScene}
      position={position}
      scale={[0.25, 0.25, 0.25]}
    />
  );
}

function CakeModel({ cakeColor, topColor = "#ffb6c1", creamColor = "#ffffff" }) {
  const { scene } = useGLTF("/models/cake.glb");
  
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#ffffff",
          roughness: 0.6,
          metalness: 0,
        });

        if (child.name === "cake_base") child.material.color.set(cakeColor);
        if (child.name === "top_layer") child.material.color.set(topColor);
        if (child.name === "cream") child.material.color.set(creamColor);

        child.material.needsUpdate = true;
      }
    });
  }, [scene, cakeColor, topColor, creamColor]);

  return <primitive object={scene} scale={[2, 2, 2]} />;
}

export default function Cake3DViewer({
  cakeColor,
  topColor,
  creamColor,
  candles = [],
  layers = [],
}) {
  console.log("3D candles:", candles);
  const demoLayers = layers.length
  ? layers
  : [{ id: "base", y: 0, scale: [1.5, 1.5, 1.5], color: cakeColor }];
const mapTo3D = (candle) => {
  const yByLevel = {
  top: 1.05,
  base: 0.75,
};

  return [
    candle.x / 90,
    yByLevel[candle.level || "top"],
    candle.y / 90,
  ];
};
return (
    <div className="h-[360px] w-full overflow-hidden rounded-2xl bg-[#fff7ed] shadow-inner">
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <directionalLight position={[-5, 5, -5]} intensity={1.5} />

        {demoLayers.map((layer) => (
          <LayerModel
            key={layer.id}
            position={[0, layer.y, 0]}
            scale={layer.scale}
            color={layer.color}
          />
        ))}

        {candles.map((candle) => (
          <CandleModel
            key={candle.id}
            position={mapTo3D(candle)}
          />
        ))}

        <OrbitControls />
      </Canvas>
    </div>
  );
}