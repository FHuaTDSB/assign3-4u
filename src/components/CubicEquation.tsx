type EquationProps = {
  a: number
  b: number
  c: number
  d: number
}

export const CubicEquation = ({a, b, c, d}: EquationProps) => {
  return (
    <h3 className="bg-amber-100 text-center text-yellow-700 my-10">
      <div className="inline">{a}</div>x<sup>3</sup>
      <div className="inline">
        <div className="inline"> + </div>
        <div className="inline">{b}</div>x<sup>2</sup>
      </div>
      <div className="inline">
        <div className="inline"> + </div>
        <div className="inline">{c}</div>x
      </div>
      <div className="inline">
        <div className="inline"> + </div>
        <div className="inline">{d}</div>
      </div>{" "}
      = 0
    </h3>
  );
};
