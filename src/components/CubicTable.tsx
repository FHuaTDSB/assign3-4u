export const CubicTable = () => {
  return (
    <div>
      <table className="m-5 w-75">
        <tr>
          <td className="w-1/2 bg-white text-center border-2 border-yellow-700">
            p
          </td>
          <td className="bg-white text-center border-2 border-yellow-700">0</td>
        </tr>
        <tr>
          <td className="bg-white text-center border-2 border-yellow-700">q</td>
          <td className="bg-white text-center border-2 border-yellow-700">0</td>
        </tr>
        <tr>
          <td className="bg-white text-center border-2 border-yellow-700">
            Discriminant
          </td>
          <td className="bg-white text-center border-2 border-yellow-700">0</td>
        </tr>
      </table>
      <table className="m-5 w-75">
        <tr>
          <th className="w-1/2 bg-yellow-500 text-center border-2 border-yellow-700"></th>
          <th className="bg-yellow-500 border-2 border-yellow-700">Roots</th>
        </tr>
        <tr>
          <td className="bg-white text-center border-2 border-yellow-700">
            Root 1
          </td>
          <td className="bg-white text-center border-2 border-yellow-700">
            (0, 0)
          </td>
        </tr>
        <tr>
          <td className="bg-white text-center border-2 border-yellow-700">
            Root 2
          </td>
          <td className="bg-white text-center border-2 border-yellow-700">
            (0, 0)
          </td>
        </tr>
        <tr>
          <td className="bg-white text-center border-2 border-yellow-700">
            Root 3
          </td>
          <td className="bg-white text-center border-2 border-yellow-700">
            (0, 0)
          </td>
        </tr>
      </table>
    </div>
  );
};
