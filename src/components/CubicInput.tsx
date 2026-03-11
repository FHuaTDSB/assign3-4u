export const CubicInput = () => {
  return (
    <>
      <h1 className="justify-self-center text-yellow-700 m-25px bg-amber-200 w-full text-center">
        Cubic Solver
      </h1>
      <form className="form-container" id="cubic">
        <div className="form-child">
          <label>a value:</label>
          <input
            type="number"
            className="form-field width-150px h-full rounded-none border-amber-200"
            required
          />
        </div>
        <div className="form-child">
          <label>b value:</label>
          <input type="number" className="form-field" required />
        </div>
        <div className="form-child">
          <label>c value:</label>
          <input type="number" className="form-field" required />
        </div>
        <div className="form-child">
          <label>d value:</label>
          <input type="number" className="form-field" required />
        </div>
        <input type="submit" value="Solve!" className="form-submit" />
      </form>
    </>
  );
};
