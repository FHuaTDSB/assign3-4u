type EquationProps = {
  aValue: number | string
  bValue: number | string
  cValue: number | string
  dValue: number
}

export const CubicEquation = ({aValue, bValue, cValue, dValue}: EquationProps) => {
  return (
    <h3 className="bg-amber-100 text-center text-yellow-700 my-10">
      <div className="inline">{aValue}</div>x<sup>3</sup>
      <div className="inline">
        <div className="inline"> + </div>
        <div className="inline">{bValue}</div>x<sup>2</sup>
      </div>
      <div className="inline">
        <div className="inline"> + </div>
        <div className="inline">{cValue}</div>x
      </div>
      <div className="inline">
        <div className="inline"> + </div>
        <div className="inline">{dValue}</div>
      </div>{" "}
      = 0
    </h3>
  );
};
