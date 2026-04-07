import type { Save } from "../core/types";

type HistoryProps = {
  onAChange: (a: number) => void;
  onBChange: (value: number) => void;
  onCChange: (value: number) => void;
  onDChange: (value: number) => void;
  saveList: Save[];
};

export const CubicHistory = ({ onAChange, onBChange, onCChange, onDChange, saveList }: HistoryProps) => {
  return (
    <div>
      <h2 className="justify-self-center text-yellow-700 text-2xl">History</h2>
      <table className="m-5 w-75">
        <thead>
          <tr>
            <th className="w-1/4 bg-yellow-500 text-center border-2 border-yellow-700">a</th>
            <th className="w-1/4 bg-yellow-500 text-center border-2 border-yellow-700">b</th>
            <th className="w-1/4 bg-yellow-500 text-center border-2 border-yellow-700">c</th>
            <th className="w-1/4 bg-yellow-500 text-center border-2 border-yellow-700">d</th>
          </tr>
        </thead>
        <tbody>
          {saveList &&
            saveList.map((saves) => (
              <tr
                className="bg-white transition hover:bg-gray-300"
                onClick={() => {
                  onAChange(saves.a);
                  onBChange(saves.b);
                  onCChange(saves.c);
                  onDChange(saves.d);
                }}
              >
                <td className="w-1/4 text-center border-2 border-yellow-700">{saves.a}</td>
                <td className="w-1/4 text-center border-2 border-yellow-700">{saves.b}</td>
                <td className="w-1/4 text-center border-2 border-yellow-700">{saves.c}</td>
                <td className="w-1/4 text-center border-2 border-yellow-700">{saves.d}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
