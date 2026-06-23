import { useState } from "react";
import { Stage, Layer, Rect, Group, Image } from "react-konva";
import useImage from "use-image";
import cakeImg from "../assets/cake.png";
import candleImg from "../assets/candle.png";
import Cake3DViewer from "./Cake3DViewer";

const cakePresets = [
  { label: "Chocolate cake", color: "#8B4513", top: "#5a3023" },
  { label: "Vanilla cake", color: "#fff1c1", top: "#f7d78a" },
  { label: "Strawberry cake", color: "#ffb6c1", top: "#f48ca6" },
];

export default function CakeStudio() {
  const [cakeColor, setCakeColor] = useState("#8B4513");
  const [topColor, setTopColor] = useState("#ffb6c1");
  const [creamColor, setCreamColor] = useState("#ffffff");

  const [candles, setCandles] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [cakeRotation, setCakeRotation] = useState(0);

  const [layers, setLayers] = useState([
    {
      id: "layer-1",
      label: "Layer 1",
      y: 0,
      scale: [1.8, 1, 1.8],
      color: "#8B4513",
    },
  ]);

  const [selectedLayerId, setSelectedLayerId] = useState("layer-1");

  const [cakeImage] = useImage(cakeImg);
  const [candleImage] = useImage(candleImg);

  const cakeCenter = { x: 300, y: 250 };
  const cakeRadius = 160;

  const addLayer = () => {
    setLayers((prev) => {
      if (prev.length >= 4) return prev;

      const layerNumber = prev.length + 1;
      const size = 1.8 - prev.length * 0.25;

      return [
        ...prev,
        {
          id: `layer-${layerNumber}`,
          label: `Layer ${layerNumber}`,
          y: prev.length * 0.45,
          scale: [size, 1, size],
          color: topColor,
        },
      ];
    });
  };

  const addCandle = () => {
    setCandles([
      ...candles,
      {
        id: Date.now(),
        x: -50,
        y: -80,
        layerId: selectedLayerId,
      },
    ]);
  };

  const deleteSelected = () => {
    if (!selectedId) return;
    setCandles(candles.filter((candle) => candle.id !== selectedId));
    setSelectedId(null);
  };

  const keepInsideCake = (pos) => {
    const dx = pos.x - cakeCenter.x;
    const dy = pos.y - cakeCenter.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = cakeRadius - 30;

    if (distance <= maxDistance) return pos;

    const angle = Math.atan2(dy, dx);

    return {
      x: cakeCenter.x + Math.cos(angle) * maxDistance,
      y: cakeCenter.y + Math.sin(angle) * maxDistance,
    };
  };

  const applyCakePreset = (preset) => {
    setCakeColor(preset.color);
    setTopColor(preset.top);

    setLayers((prev) =>
      prev.map((layer, index) => ({
        ...layer,
        color: index === 0 ? preset.color : preset.top,
      }))
    );
  };

  const changeWholeCakeColor = (color) => {
    setCakeColor(color);
    setLayers((prev) => prev.map((layer) => ({ ...layer, color })));
  };

  return (
    <div className="min-h-screen bg-[#fff7ed] px-4 py-6 text-[#3b2118]">
      <div className="mx-auto max-w-[1500px]">
        <header className="mb-6 rounded-[2rem] bg-white/75 p-6 shadow-xl">
          <h1 className="text-4xl font-black text-[#23120d]">Cake Studio</h1>
          <p className="mt-2 font-semibold text-[#5a3023]/70">
            Add layers, select a layer, add candles, and preview in 3D.
          </p>
        </header>

        <div className="grid gap-6 xl:grid-cols-[280px_minmax(640px,1fr)_360px]">
          <aside className="rounded-[1.5rem] bg-white p-5 shadow-xl">
            <div className="grid gap-3">
              <button
                onClick={addCandle}
                className="rounded-2xl bg-[#f7b8c8] px-4 py-3 text-left font-black text-[#23120d]"
              >
                Add candle
              </button>

              <button
                onClick={deleteSelected}
                disabled={!selectedId}
                className="rounded-2xl bg-[#5a3023] px-4 py-3 text-left font-black text-white disabled:bg-[#5a3023]/30"
              >
                Delete selected candle
              </button>

              <button
                onClick={addLayer}
                className="rounded-2xl bg-[#fff7ed] px-4 py-3 text-left font-black text-[#5a3023]"
              >
                Add cake layer
              </button>

              {layers.map((layer) => (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`rounded-2xl px-4 py-3 text-left font-black ${
                    selectedLayerId === layer.id
                      ? "bg-[#f7b8c8] text-[#23120d]"
                      : "bg-[#fff7ed] text-[#5a3023]"
                  }`}
                >
                  Editing {layer.label}
                </button>
              ))}

              <button
                onClick={() => setCakeRotation(cakeRotation + 15)}
                className="rounded-2xl bg-[#fff7ed] px-4 py-3 text-left font-black text-[#5a3023]"
              >
                Rotate cake 15deg
              </button>
            </div>

            <pre className="mt-6 max-h-72 overflow-auto rounded-2xl bg-[#23120d] p-4 text-xs text-[#fff7ed]">
              {JSON.stringify({ selectedLayerId, layers, candles }, null, 2)}
            </pre>
          </aside>

          <main className="rounded-[1.5rem] bg-white p-6 shadow-xl">
            <Stage
              width={600}
              height={500}
              className="rounded-2xl bg-white shadow-lg"
              onMouseDown={(e) => {
                if (e.target === e.target.getStage()) setSelectedId(null);
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
                      onMouseDown={() => setSelectedId(candle.id)}
                      onTouchStart={() => setSelectedId(candle.id)}
                      onClick={() => setSelectedId(candle.id)}
                      onTap={() => setSelectedId(candle.id)}
                      dragBoundFunc={(pos) => keepInsideCake(pos)}
                      onDragEnd={(e) => {
                        const cakeGroup = e.target.getParent();
                        const relativePosition = cakeGroup
                          .getAbsoluteTransform()
                          .copy()
                          .invert()
                          .point(e.target.getAbsolutePosition());

                        setCandles((prev) =>
                          prev.map((item) =>
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
                        x={-18}
                        y={-80}
                        width={45}
                        height={95}
                      />
                    </Group>
                  ))}
                </Group>
              </Layer>
            </Stage>
          </main>

          <aside className="space-y-6">
            <section className="rounded-[1.5rem] bg-white p-5 shadow-xl">
              <h2 className="mb-4 text-2xl font-black">3D Preview</h2>
              <Cake3DViewer
                cakeColor={cakeColor}
                topColor={topColor}
                creamColor={creamColor}
                candles={candles}
                layers={layers}
              />
            </section>

            <section className="rounded-[1.5rem] bg-white p-5 shadow-xl">
              <p className="font-black">Cake flavor</p>
              <div className="mt-4 grid gap-3">
                {cakePresets.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => applyCakePreset(preset)}
                    className="rounded-2xl bg-[#fff7ed] px-4 py-3 text-left font-black text-[#5a3023]"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-[1.5rem] bg-white p-5 shadow-xl">
              <label className="grid gap-2 text-sm font-black text-[#5a3023]">
                Whole cake color
                <input
                  type="color"
                  value={cakeColor}
                  onChange={(e) => changeWholeCakeColor(e.target.value)}
                  className="h-12 w-full cursor-pointer rounded-xl"
                />
              </label>

              <label className="mt-4 grid gap-2 text-sm font-black text-[#5a3023]">
                Top/new layer color
                <input
                  type="color"
                  value={topColor}
                  onChange={(e) => setTopColor(e.target.value)}
                  className="h-12 w-full cursor-pointer rounded-xl"
                />
              </label>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}