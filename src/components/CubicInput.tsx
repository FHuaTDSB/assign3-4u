export const CubicInput = () => {

  return (
    <>
      <h1 className="justify-self-center text-yellow-700 m-6 bg-amber-200 w-full text-center text-3xl">
        Cubic Solver
      </h1>
      <form
        className="grid grid-cols-5 gap-x-5 justify-self-center"
        id="cubic"
      >
        <div className="flex flex-col items-center">
          <label className="text-yellow-800 mb-4">a value:</label>
          <input
            type="number"
            className="border-5 border-yellow-700 border-double"
            required
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="text-yellow-800 mb-4">b value:</label>
          <input
            type="number"
            className="border-5 border-yellow-700 border-double"
            required
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="text-yellow-800 mb-4">c value:</label>
          <input
            type="number"
            className="border-5 border-yellow-700 border-double"
            required
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="text-yellow-800 mb-4">d value:</label>
          <input
            type="number"
            className="border-5 border-yellow-700 border-double"
            required
          />
        </div>
        <input
          type="submit"
          value="Save!"
          className="text-yellow-700 bg-amber-300 transition hover:text-white hover:bg-amber-400 active:text-white active:bg-yellow-700"
        />
      </form>
    </>
  );
};
