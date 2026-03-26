import { useEffect, useRef } from "react";

type graphProps = {
  a: number
  b: number
  c: number
  d: number
}

export const CubicGraph = ({a, b, c, d}: graphProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, 600, 600);
        ctx.beginPath();
        for (let i = 0; i < 30; i++) {
            ctx.moveTo(i * (50 / 3), 0);
            ctx.lineTo(i * (50 / 3), 600);
            ctx.moveTo(0, i * (50 / 3));
            ctx.lineTo(600, i * (50 / 3));
        }
        ctx.lineWidth = 1
        ctx.strokeStyle = "rgb(200, 200, 200)"
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(250, 0);
        ctx.lineTo(250, 500);
        ctx.moveTo(0, 250);
        ctx.lineTo(500, 250);
        ctx.strokeStyle = "black"
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, (a * (-15) ** 3 + b * (-15) ** 2 + c * (-15) + d + 15) * (50 / 3));
        for (let i = -15; i < 15; i += 0.1) {
            ctx.lineTo((i + 15) * (50 / 3), (a * i ** 3 + b * i ** 2 + c * i + d + 15) * (50 / 3));
        }
        ctx.strokeStyle = "red"
        ctx.lineWidth = 2
        ctx.stroke();
      }
    }
    
  }, []);

  return (
    <canvas
      className="border-2 border-yellow-700"
      width="500"
      height="500"
      ref={canvasRef}
    ></canvas>
  );
};
