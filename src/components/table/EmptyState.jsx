import { FiInbox } from "react-icons/fi";

export default function EmptyState() {
  return (
    <tr>
      <td colSpan={100}>
        <div className="flex flex-col items-center justify-center py-12 text-slate-400">
          <FiInbox size={50} />
          <p className="mt-3">Belum ada data.</p>
        </div>
      </td>
    </tr>
  );
}
