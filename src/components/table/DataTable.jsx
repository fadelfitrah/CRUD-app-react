import EmptyState from "./EmptyState";

export default function DataTable({ columns, data, renderRow }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">
      <table className="w-full">
        <thead className="bg-sky-500 text-white">
          <tr>
            {columns.map((column) => (
              <th key={column} className="px-6 py-4 text-left">
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? <EmptyState /> : data.map(renderRow)}
        </tbody>
      </table>
    </div>
  );
}
