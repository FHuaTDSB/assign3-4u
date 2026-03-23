export const CubicEquation = () => {
  return (
    <h3 className="bg-amber-100 text-center text-yellow-700 my-10">
      <div className="coefficient inline">1</div>x<sup>3</sup>
      <div className="term inline">
        <div className="operator inline"> + </div>
        <div className="coefficient inline">1</div>x<sup>2</sup>
      </div>
      <div className="term inline">
        <div className="operator inline"> + </div>
        <div className="coefficient inline">1</div>x
      </div>
      <div className="term inline">
        <div className="operator inline"> + </div>
        <div className="coefficient inline">1</div>
      </div>{" "}
      = 0
    </h3>
  );
};
