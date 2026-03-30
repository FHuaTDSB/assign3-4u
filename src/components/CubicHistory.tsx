type Save = {
  a: number;
  b: number;
  c: number;
  d: number;
};

type HistoryProps = {
  saveList: Save[];
};

export const CubicHistory = ({ saveList }: HistoryProps) => {
  return (
    <div>
      <h2 className="justify-self-center text-yellow-700 text-2xl">History</h2>
      <table className="m-5 w-75">
        <thead>
          <tr>
            <th className="w-1/4 bg-yellow-500 text-center border-2 border-yellow-700">
              a
            </th>
            <th className="w-1/4 bg-yellow-500 text-center border-2 border-yellow-700">
              b
            </th>
            <th className="w-1/4 bg-yellow-500 text-center border-2 border-yellow-700">
              c
            </th>
            <th className="w-1/4 bg-yellow-500 text-center border-2 border-yellow-700">
              d
            </th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
};
