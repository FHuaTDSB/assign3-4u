export const CubicTable = () => {
  return (
    <div>
      <table className="bg-yellow-700 m-5 w-75">
        <tr>
          <td className="w-1/2 bg-white text-center">p</td>
          <td className=" bg-white text-center">0</td>
        </tr>
        <tr>
          <td className=" bg-white text-center">q</td>
          <td className=" bg-white text-center">0</td>
        </tr>
        <tr>
          <td className=" bg-white text-center">Discriminant</td>
          <td className=" bg-white text-center">0</td>
        </tr>
      </table>
      <table className="bg-yellow-700 m-5 w-75">
        <tr>
          <th className="table-subtitle"></th>
          <th>Roots</th>
        </tr>
        <tr>
          <td className="table-subtitle">Root 1</td>
          <td className="table-value">(0, 0)</td>
        </tr>
        <tr>
          <td className="table-subtitle">Root 2</td>
          <td className="table-value">(0, 0)</td>
        </tr>
        <tr>
          <td className="table-subtitle">Root 3</td>
          <td className="table-value">(0, 0)</td>
        </tr>
      </table>
    </div>
  );
};
