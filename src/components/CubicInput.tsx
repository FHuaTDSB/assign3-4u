import { useEffect, type ChangeEvent } from "react";
type Save = {
  a: number;
  b: number;
  c: number;
  d: number;
};

type InputProps = {
  onAChange: (a: number) => void;
  onBChange: (value: number) => void;
  onCChange: (value: number) => void;
  onDChange: (value: number) => void;
  onSubmit: (value: Save[]) => void;
};

export const CubicInput = ({
  onAChange,
  onBChange,
  onCChange,
  onDChange,
  onSubmit,
}: InputProps) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const a: number = 1;
  const b: number = 0;
  const c: number = 0;
  const d: number = 0;

  return (
    <>
      <h1 className="justify-self-center text-yellow-700 m-6 bg-amber-200 w-full text-center text-3xl">
        Cubic Solver
      </h1>
      <form
        className="grid grid-cols-5 gap-x-5 justify-self-center"
        id="cubic"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center">
          <label className="text-yellow-800 mb-4">a value:</label>
          <input
            type="number"
            className="border-5 border-yellow-700 border-double"
            required
            value={a}
            // onChange={() => {
            //   onAChange(a);
            // }}
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="text-yellow-800 mb-4">b value:</label>
        </div>
        <div className="flex flex-col items-center">
          <label className="text-yellow-800 mb-4">c value:</label>
        </div>
        <div className="flex flex-col items-center">
          <label className="text-yellow-800 mb-4">d value:</label>
        </div>
        <input
          type="submit"
          value="Save!"
          className="text-yellow-700 bg-amber-300 transition hover:text-white hover:bg-amber-400 active:text-white active:bg-yellow-700"
          // onClick={() => {
          //   setSaveList([...saveList, { a: a, b: b, c: c, d: d }]);
          // }}
        />
      </form>
    </>
  );
};
