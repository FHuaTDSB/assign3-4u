export const CubicTable = () => {
  return (
    <>
      <table id="data">
        <tr>
          <td className="table-subtitle">p</td>
          <td className="table-value">0</td>
        </tr>
        <tr>
          <td className="table-subtitle">q</td>
          <td className="table-value">0</td>
        </tr>
        <tr>
          <td className="table-subtitle">Discriminant</td>
          <td className="table-value">0</td>
        </tr>
      </table>
      <table id="solutions">
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
    </>
  );
};
