type TableProps = {
  pValue: number;
  qValue: number;
  discriminant: number;
  x1: number;
  x2: number | string;
  x3: number | string;
};

export const CubicTable = ({ pValue, qValue, discriminant, x1, x2, x3 }: TableProps) => {
  return (
    <div>
      <table className="m-5 w-100">
        <tbody>
          <tr>
            <td className="w-1/2 bg-white text-center border-2 border-yellow-700">
              p
            </td>
            <td className="bg-white text-center border-2 border-yellow-700">
              {pValue}
            </td>
          </tr>
          <tr>
            <td className="bg-white text-center border-2 border-yellow-700">
              q
            </td>
            <td className="bg-white text-center border-2 border-yellow-700">
              {qValue}
            </td>
          </tr>
          <tr>
            <td className="bg-white text-center border-2 border-yellow-700">
              Discriminant
            </td>
            <td className="bg-white text-center border-2 border-yellow-700">
            {discriminant}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="m-5 w-100">
        <tbody>
          <tr>
            <th className="w-1/2 bg-yellow-500 text-center border-2 border-yellow-700"></th>
            <th className="w-1/4 bg-yellow-500 border-2 border-yellow-700">x</th>
            <th className="w-1/4 bg-yellow-500 border-2 border-yellow-700">y</th>
          </tr>
          <tr>
            <td className="bg-white text-center border-2 border-yellow-700">
              Root 1
            </td>
            <td className="bg-white text-center border-2 border-yellow-700">
              {x1}
            </td>
            <td className="bg-white text-center border-2 border-yellow-700">
              0
            </td>
          </tr>
          <tr>
            <td className="bg-white text-center border-2 border-yellow-700">
              Root 2
            </td>
            <td className="bg-white text-center border-2 border-yellow-700">
              {x2}
            </td>
            <td className="bg-white text-center border-2 border-yellow-700">
              0
            </td>
          </tr>
          <tr>
            <td className="bg-white text-center border-2 border-yellow-700">
              Root 3
            </td>
            <td className="bg-white text-center border-2 border-yellow-700">
              {x3}
            </td>
            <td className="bg-white text-center border-2 border-yellow-700">
              0
            </td>
          </tr>
        </tbody>
      </table>
      <table className="m-5 w-100">
        <tbody>
          <tr>
            <th className="w-1/2 bg-yellow-500 text-center border-2 border-yellow-700"></th>
            <th className="w-1/4 bg-yellow-500 border-2 border-yellow-700">x</th>
            <th className="w-1/4 bg-yellow-500 border-2 border-yellow-700">y</th>
          </tr>
          <tr>
            <td className="bg-white text-center border-2 border-yellow-700">
              Minimum
            </td>
            <td className="bg-white text-center border-2 border-yellow-700">
              0
            </td>
            <td className="bg-white text-center border-2 border-yellow-700">
              0
            </td>
          </tr>
          <tr>
            <td className="bg-white text-center border-2 border-yellow-700">
              Maximum
            </td>
            <td className="bg-white text-center border-2 border-yellow-700">
              0
            </td>
            <td className="bg-white text-center border-2 border-yellow-700">
              0
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
