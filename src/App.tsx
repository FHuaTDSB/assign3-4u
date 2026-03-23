import { CubicEquation } from "./components/CubicEquation";
import { CubicGraph } from "./components/CubicGraph";
import { CubicHistory } from "./components/CubicHistory";
import { CubicInput } from "./components/CubicInput";
import { CubicTable } from "./components/CubicTable";

export const App = () => {
  return (
    <>
      <CubicInput />
      <CubicEquation />
      <div className="flex justify-around">
        <CubicTable />
        <CubicGraph />
        <CubicHistory />
      </div>
    </>
  );
};
