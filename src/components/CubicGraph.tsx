import { useRef } from "react";

export const CubicGraph = () => {
  const ctx = useRef<CanvasRenderingContext2D | null>(null)

  return (
    <canvas
      className="border-2 border-yellow-700"
      width="500"
      height="500"
    ></canvas>
  );
};
