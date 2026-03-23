export const CubicInput = () => {
  return (
    <>
      <h1 className="justify-self-center text-yellow-700 m-6 bg-amber-200 w-full text-center text-3xl">
        Cubic Solver
      </h1>
      <form className="form-container" id="cubic">
        <div className="form-child">
          <label className="text-yellow-800 mb-4">a value:</label>
          <input
            type="number"
            className="form-field"
            required
          />
        </div>
        <div className="form-child">
          <label className="text-yellow-800 mb-4">b value:</label>
          <input type="number" className="form-field" required />
        </div>
        <div className="form-child">
          <label className="text-yellow-800 mb-4">c value:</label>
          <input type="number" className="form-field" required />
        </div>
        <div className="form-child">
          <label className="text-yellow-800 mb-4">d value:</label>
          <input type="number" className="form-field" required />
        </div>
        <input type="submit" value="Save!" className="form-submit" />
      </form>
    </>
  );
};
