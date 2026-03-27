type EquationProps = {
  a: number
  b: number
  c: number
  d: number
}

export const CubicEquation = ({a, b, c, d}: EquationProps) => {
  return (
    <h3 className="bg-amber-100 text-center text-yellow-700 my-10">
      {a}x<sup>3</sup> + {b}x<sup>2</sup> + {c}x + {d} = 0
    </h3>
  );
};
