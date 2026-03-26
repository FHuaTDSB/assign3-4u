import type { ReactNode } from "react"

type InputProps = {
  aField: ReactNode
  bField: ReactNode
  cField: ReactNode
  dField: ReactNode
  submit: ReactNode
}

export const CubicInput = ({aField, bField, cField, dField, submit}: InputProps) => {

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
          {aField}
        </div>
        <div className="flex flex-col items-center">
          <label className="text-yellow-800 mb-4">b value:</label>
          {bField}
        </div>
        <div className="flex flex-col items-center">
          <label className="text-yellow-800 mb-4">c value:</label>
          {cField}
        </div>
        <div className="flex flex-col items-center">
          <label className="text-yellow-800 mb-4">d value:</label>
          {dField}
        </div>
        {submit}
      </form>
    </>
  );
};
