import { useState } from "react";
import { Stage, Layer, Rect, Group, Image } from "react-konva";
import useImage from "use-image";
import cakeImg from "../assets/cake.png";
import candleImg from "../assets/candle.png";
import Cake3DViewer from "./Cake3DViewer";
import { useGLTF } from "@react-three/drei";
const cakePresets = [
  { label: "Chocolate cake", color: "#8B4513", top: "#5a3023" },
  { label: "Vanilla cake", color: "#fff1c1", top: "#f7d78a" },
  { label: "Strawberry cake", color: "#ffb6c1", top: "#f48ca6" },
];

const creamPresets = [
  { label: "Pink cream", color: "#ffb6c1" },
  { label: "White cream", color: "#ffffff" },
  { label: "Blue cream", color: "#9fd3ff" },
];

function map2DTo3D(x, y) {
  const canvasWidth = 500;
  const canvasHeight = 360;

  const cakeRadius3D = 1.8;

  const nx = (x - canvasWidth / 2) / (canvasWidth / 2);
  const nz = (y - canvasHeight / 2) / (canvasHeight / 2);

  return [
    nx * cakeRadius3D,
    1.25,
    nz * cakeRadius3D,
  ];
}

export default function CakeStudio() {
  const [cakeColor, setCakeColor] = useState("#8B4513");
  const [topColor, setTopColor] = useState("#ffb6c1");
  const [creamColor, setCreamColor] = useState("#ffffff");
  const [candles, setCandles] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [cakeRotation, setCakeRotation] = useState(0);
  const [cakeImage] = useImage(cakeImg);
  const [candleImage] = useImage(candleImg);

  const cakeCenter = { x: 300, y: 250 };
  const cakeRadius = 160;

  const addCandle = () => {
    setCandles([
      ...candles,
      {
        id: Date.now(),
        x: -50,
        y: -80,
      },
    ]);
  };

  const deleteSelected = () => {
    if (!selectedId) return;

    setCandles(candles.filter((candle) => candle.id !== selectedId));
    setSelectedId(null);
  };

  const rotateCake = () => {
    setCakeRotation(cakeRotation + 15);
  };

  const keepInsideCake = (pos) => {
    const dx = pos.x - cakeCenter.x;
    const dy = pos.y - cakeCenter.y;

    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = cakeRadius - 30;

    if (distance <= maxDistance) {
      return pos;
    }

    const angle = Math.atan2(dy, dx);

    return {
      x: cakeCenter.x + Math.cos(angle) * maxDistance,
      y: cakeCenter.y + Math.sin(angle) * maxDistance,
    };
  };

  const applyCakePreset = (preset) => {
    setCakeColor(preset.color);
    setTopColor(preset.top);
  };

  return (
    <div className="min-h-screen bg-[#fff7ed] px-4 py-6 text-[#3b2118] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        <header className="mb-6 flex flex-col justify-between gap-4 rounded-[2rem] border border-[#5a3023]/10 bg-white/75 p-6 shadow-xl shadow-[#5a3023]/10 backdrop-blur md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#d99a3f]">
              Bakery design suite
            </p>
            <h1 className="mt-2 text-4xl font-black text-[#23120d] md:text-5xl">
              Cake Studio
            </h1>
            <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-[#5a3023]/70 md:text-base">
              Customize the cake color, cream, candles, and rotation while previewing the same design in 2D and 3D.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 rounded-2xl bg-[#fff7ed] p-3 text-center shadow-inner">
            <div>
              <p className="text-2xl font-black text-[#23120d]">{candles.length}</p>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#5a3023]/55">
                Candles
              </p>
            </div>
            <div>
              <p className="text-2xl font-black text-[#23120d]">{cakeRotation}deg</p>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#5a3023]/55">
                Rotation
              </p>
            </div>
            <div>
              <p className="text-2xl font-black text-[#23120d]">{selectedId ? "Yes" : "No"}</p>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#5a3023]/55">
                Selected
              </p>
            </div>
          </div>
        </header>

        <div className="grid gap-6 xl:grid-cols-[280px_minmax(640px,1fr)_360px]">
          <aside className="rounded-[1.5rem] border border-[#5a3023]/10 bg-white p-5 shadow-xl shadow-[#5a3023]/10">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d99a3f]">
                Tools
              </p>
              <h2 className="mt-1 text-2xl font-black text-[#23120d]">Decorate</h2>
            </div>

            <div className="mt-6 grid gap-3">
              <button
                onClick={addCandle}
                className="rounded-2xl bg-[#f7b8c8] px-4 py-3 text-left font-black text-[#23120d] shadow-md shadow-[#f7b8c8]/40 transition hover:-translate-y-0.5 hover:bg-[#ffe3ea]"
              >
                Add candle
              </button>

              <button
                onClick={deleteSelected}
                disabled={!selectedId}
                className="rounded-2xl bg-[#5a3023] px-4 py-3 text-left font-black text-white shadow-md shadow-[#5a3023]/20 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:bg-[#5a3023]/30 disabled:shadow-none"
              >
                Delete selected candle
              </button>

              <button
                onClick={rotateCake}
                className="rounded-2xl border border-[#5a3023]/15 bg-[#fff7ed] px-4 py-3 text-left font-black text-[#5a3023] transition hover:-translate-y-0.5 hover:bg-[#f7ead7]"
              >
                Rotate cake 15deg
              </button>
            </div>

            <div className="mt-8 rounded-2xl bg-[#fff7ed] p-4">
              <p className="text-sm font-black text-[#23120d]">Editor hints</p>
              <ul className="mt-3 space-y-2 text-sm font-semibold leading-6 text-[#5a3023]/70">
                <li>Select a candle to show its outline.</li>
                <li>Drag candles around the cake top.</li>
                <li>Click empty canvas space to clear selection.</li>
              </ul>
            </div>

            <div className="mt-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d99a3f]">
                JSON preview
              </p>
              <pre className="mt-3 max-h-72 overflow-auto rounded-2xl bg-[#23120d] p-4 text-xs leading-5 text-[#fff7ed] shadow-inner">
                {JSON.stringify({ cakeRotation, candles }, null, 2)}
              </pre>
            </div>
          </aside>

          <main className="rounded-[1.5rem] border border-[#5a3023]/10 bg-white p-4 shadow-xl shadow-[#5a3023]/10 sm:p-6">
            <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d99a3f]">
                  2D canvas
                </p>
                <h2 className="mt-1 text-2xl font-black text-[#23120d]">Cake editor</h2>
              </div>
              <p className="rounded-full bg-[#ffe3ea] px-4 py-2 text-sm font-black text-[#5a3023]">
                Drag-safe cake area
              </p>
            </div>

            <div className="overflow-x-auto rounded-[1.25rem] bg-[#fff7ed] p-3 shadow-inner">
              <Stage
                width={600}
                height={500}
                className="rounded-2xl bg-white shadow-lg shadow-[#5a3023]/10"
                onMouseDown={(e) => {
                  if (e.target === e.target.getStage()) {
                    setSelectedId(null);
                  }
                }}
              >
                <Layer>
                  <Group x={cakeCenter.x} y={cakeCenter.y} rotation={cakeRotation}>
                    <Image
                      image={cakeImage}
                      x={-170}
                      y={-170}
                      width={340}
                      height={340}
                    />

                    {candles.map((candle) => (
                      <Group
                        key={candle.id}
                        x={candle.x}
                        y={candle.y}
                        draggable
                        onClick={() => setSelectedId(candle.id)}
                        onTap={() => setSelectedId(candle.id)}
                        dragBoundFunc={keepInsideCake}
                        onDragEnd={(e) => {
                          const cakeGroup = e.target.getParent();

                          const relativePosition = cakeGroup
                            .getAbsoluteTransform()
                            .copy()
                            .invert()
                            .point(e.target.getAbsolutePosition());

                          setCandles(
                            candles.map((item) =>
                              item.id === candle.id
                                ? {
                                    ...item,
                                    x: relativePosition.x,
                                    y: relativePosition.y,
                                  }
                                : item
                            )
                          );
                        }}
                      >
                        {selectedId === candle.id && (
                          <Rect
                            x={-8}
                            y={-35}
                            width={36}
                            height={95}
                            stroke="#2563eb"
                            strokeWidth={2}
                            dash={[5, 5]}
                          />
                        )}

                        <Image
                          image={candleImage}
                          x={-170}
                          y={-170}
                          width={340}
                          height={340}
                        />

                        <Rect
                          x={0}
                          y={0}
                          width={20}
                          height={60}
                          fill="red"
                          cornerRadius={4}
                        />

                        <Rect x={0} y={15} width={20} height={6} fill="white" />
                        <Rect x={0} y={35} width={20} height={6} fill="white" />
                      </Group>
                    ))}
                  </Group>
                </Layer>
              </Stage>
            </div>
          </main>

          <aside className="space-y-6">
            <section className="rounded-[1.5rem] border border-[#5a3023]/10 bg-white p-5 shadow-xl shadow-[#5a3023]/10">
              <div className="mb-4">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d99a3f]">
                  3D preview
                </p>
                <h2 className="mt-1 text-2xl font-black text-[#23120d]">Live cake model</h2>
                {candles?.map((candle) => (
                  <mesh
                    key={candle.id}
                    position={[
                      candle.x / 100,
                      1.2,
                      candle.y / 100,
                    ]}
                  >
                    <cylinderGeometry args={[0.05, 0.05, 0.5, 16]} />
                    <meshStandardMaterial color="red" />
                  </mesh>
                ))}
              </div>

              <Cake3DViewer
                cakeColor={cakeColor}
                topColor={topColor}
                creamColor={creamColor}
                candles={candles}

              />
            </section>

            <section className="rounded-[1.5rem] border border-[#5a3023]/10 bg-white p-5 shadow-xl shadow-[#5a3023]/10">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d99a3f]">
                Cake flavor
              </p>
              <div className="mt-4 grid gap-3">
                {cakePresets.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => applyCakePreset(preset)}
                    className="flex items-center justify-between rounded-2xl border border-[#5a3023]/10 bg-[#fff7ed] px-4 py-3 text-left font-black text-[#5a3023] transition hover:-translate-y-0.5 hover:bg-[#f7ead7]"
                  >
                    <span>{preset.label}</span>
                    <span
                      className="h-7 w-7 rounded-full border border-[#5a3023]/20 shadow-inner"
                      style={{ backgroundColor: preset.color }}
                    />
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-[1.5rem] border border-[#5a3023]/10 bg-white p-5 shadow-xl shadow-[#5a3023]/10">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d99a3f]">
                Cream color
              </p>
              <div className="mt-4 grid gap-3">
                {creamPresets.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => setCreamColor(preset.color)}
                    className="flex items-center justify-between rounded-2xl border border-[#5a3023]/10 bg-[#fff7ed] px-4 py-3 text-left font-black text-[#5a3023] transition hover:-translate-y-0.5 hover:bg-[#ffe3ea]"
                  >
                    <span>{preset.label}</span>
                    <span
                      className="h-7 w-7 rounded-full border border-[#5a3023]/20 shadow-inner"
                      style={{ backgroundColor: preset.color }}
                    />
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-[1.5rem] border border-[#5a3023]/10 bg-white p-5 shadow-xl shadow-[#5a3023]/10">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d99a3f]">
                Fine tuning
              </p>
              <div className="mt-4 grid gap-4">
                <label className="grid gap-2 text-sm font-black text-[#5a3023]">
                  Cake color
                  <input
                    type="color"
                    value={cakeColor}
                    onChange={(e) => setCakeColor(e.target.value)}
                    className="h-12 w-full cursor-pointer rounded-xl border border-[#5a3023]/10 bg-[#fff7ed] p-1"
                  />
                </label>
                <label className="grid gap-2 text-sm font-black text-[#5a3023]">
                  Top color
                  <input
                    type="color"
                    value={topColor}
                    onChange={(e) => setTopColor(e.target.value)}
                    className="h-12 w-full cursor-pointer rounded-xl border border-[#5a3023]/10 bg-[#fff7ed] p-1"
                  />
                </label>
                <label className="grid gap-2 text-sm font-black text-[#5a3023]">
                  Cream color
                  <input
                    type="color"
                    value={creamColor}
                    onChange={(e) => setCreamColor(e.target.value)}
                    className="h-12 w-full cursor-pointer rounded-xl border border-[#5a3023]/10 bg-[#fff7ed] p-1"
                  />
                </label>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
