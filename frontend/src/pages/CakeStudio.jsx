import { Stage, Layer, Circle, Rect, Text, Group } from "react-konva";
import { useState } from "react";
import useImage from "use-image";
import { Image } from "react-konva";
import cakeImg from "../assets/cake.png";
import candleImg from "../assets/candle.png";
import Cake3DViewer from "./Cake3DViewer";
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
    // pos is absolute stage position
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

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <h1 className="text-3xl font-bold mb-4">Cake Studio</h1>

      <div className="flex gap-3 mb-4">
        <button
          onClick={addCandle}
          className="px-4 py-2 bg-pink-500 text-white rounded-lg"
        >
          Add Candle
        </button>

        <button
          onClick={deleteSelected}
          className="px-4 py-2 bg-red-600 text-white rounded-lg"
        >
          Delete Selected
        </button>

        <button
          onClick={rotateCake}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg"
        >
          Rotate Cake
        </button>
      </div>

      <Stage
        width={600}
        height={500}
        className="bg-white rounded-xl shadow"
        onMouseDown={(e) => {
          if (e.target === e.target.getStage()) {
            setSelectedId(null);
          }
        }}
      >
        <Layer>
          {/* Full cake group */}
          <Group
            x={cakeCenter.x}
            y={cakeCenter.y}
            rotation={cakeRotation}
          >
            {/* Cake base */}
            <Image
              image={cakeImage}
              x={-170}
              y={-170}
              width={340}
              height={340}
            />

            {/* Candles */}
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
                    stroke="blue"
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

      <pre className="mt-4 bg-white p-3 rounded">
        {JSON.stringify({ cakeRotation, candles }, null, 2)}
      </pre>
      <Cake3DViewer
        cakeColor={cakeColor}
        topColor={topColor}
        creamColor={creamColor}
      />
      <button onClick={() => setCakeColor("#8B4513")}>Chocolate</button>
      <button onClick={() => setCakeColor("#ffb6c1")}>Strawberry</button>
      <button onClick={() => setCakeColor("#fff1c1")}>Vanilla</button>
    </div>
  );
}