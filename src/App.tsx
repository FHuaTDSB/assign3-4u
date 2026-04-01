import { CubicEquation } from "./components/CubicEquation";
import { CubicGraph } from "./components/CubicGraph";
import { CubicHistory } from "./components/CubicHistory";
import { CubicInput } from "./components/CubicInput";
import { CubicTable } from "./components/CubicTable";
import { useState } from "react";

type Solutions = {
  x1: number;
  x2: number | string;
  x3: number | string;
};

type Save = {
  a: number;
  b: number;
  c: number;
  d: number;
};

type Point = {
  x: number;
  y: number;
};

type Extrema = {
  max: Point | null;
  min: Point | null;
};

export const App = () => {
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [d, setD] = useState<number>(0);
  const [saveList, setSaveList] = useState<Save[]>([]);

  const fixDecimal = (value: number, fix: number): number => {
    return parseFloat(value.toFixed(fix));
  };

  const p: number = (3 * a * c - b ** 2) / (3 * a ** 2);
  const q: number =
    (27 * a ** 2 * d - 9 * a * b * c + 2 * b ** 3) / (27 * a ** 3);
  const discriminant: number = Number(
    fixDecimal((q / 2) ** 2 + (p / 3) ** 3, 12)
  );

  const trigSolve = (a: number, b: number, p: number, q: number): Solutions => {
    const theta: number = Math.acos(-q / (2 * Math.sqrt(-((p / 3) ** 3)))) / 3;
    const x1: number = 2 * Math.sqrt(-p / 3) * Math.cos(theta) - b / (3 * a);
    const x2: number =
      2 * Math.sqrt(-p / 3) * Math.cos(theta + (2 * Math.PI) / 3) - b / (3 * a);
    const x3: number =
      2 * Math.sqrt(-p / 3) * Math.cos(theta + (4 * Math.PI) / 3) - b / (3 * a);
    return {
      x1: fixDecimal(x1, 2),
      x2: fixDecimal(x2, 2),
      x3: fixDecimal(x3, 2),
    };
  };

  const cardano = (
    a: number,
    b: number,
    q: number,
    discriminant: number
  ): number => {
    const x: number =
      Math.cbrt(-q / 2 + Math.sqrt(discriminant)) +
      Math.cbrt(-q / 2 - Math.sqrt(discriminant)) -
      b / (3 * a);
    return fixDecimal(x, 2);
  };

  let solutions: Solutions = { x1: 0, x2: 0, x3: 0 };
  if (discriminant == 0) {
    if (p == 0 && q == 0) {
      solutions = {
        x1: cardano(a, b, q, discriminant),
        x2: cardano(a, b, q, discriminant),
        x3: cardano(a, b, q, discriminant),
      };
    } else {
      solutions = {
        x1: Math.cbrt(q / 2) - b / (3 * a),
        x2: Math.cbrt(q / 2) - b / (3 * a),
        x3: cardano(a, b, q, discriminant),
      };
    }
  } else {
    solutions =
      discriminant < 0
        ? trigSolve(a, b, p, q)
        : { x1: cardano(a, b, q, discriminant), x2: "Complex", x3: "Complex" };
  }
  // 3ax^2 + 2bx + c = discriminant
  // quadratic formula = (-b +/- sqrt(b^2 - 4*a*c))/2a
  // derivative solutions = (-2b +/- sqrt(4b^2 - 12*a*c))/6*a
  const dSolution1: number =
    ((-2 * b + Math.sqrt(4 * b ** 2 - 12 * a * c)) / 6) * a;
  const dSolution2: number =
    ((-2 * b - Math.sqrt(4 * b ** 2 - 12 * a * c)) / 6) * a;
  const extrema1: Point = {
    x: dSolution1,
    y: a * dSolution1 ** 3 + b * dSolution1 ** 2 + c * dSolution1 + d,
  };
  const extrema2: Point = {
    x: dSolution2,
    y: a * dSolution2 ** 3,
  };
  // const extrema: Extrema =
  //   extrema1 > extrema2
  //     ? { max: extrema1, min: extrema2 }
  //     : { max: extrema2, min: extrema1 };

  console.log(extrema1, extrema2);

  return (
    <>
      <CubicInput
        onAChange={setA}
        onBChange={setB}
        onCChange={setC}
        onDChange={setD}
        a={a}
        b={b}
        c={c}
        d={d}
        saveList={saveList}
        onSubmit={setSaveList}
      />
      <CubicEquation a={a} b={b} c={c} d={d} />
      <div className="flex justify-around">
        <CubicTable
          pValue={fixDecimal(p, 3)}
          qValue={fixDecimal(q, 3)}
          discriminant={fixDecimal(discriminant, 3)}
          solutions={solutions}
        />
        <CubicGraph a={a} b={b} c={c} d={d} solutions={solutions} />
        <CubicHistory
          onAChange={setA}
          onBChange={setB}
          onCChange={setC}
          onDChange={setD}
          saveList={saveList}
        />
      </div>
    </>
  );
};
