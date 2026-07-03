import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";

export default function ActionButton({ onEdit, onDelete, onDetail }) {
  return (
    <div className="flex gap-2">
      <button
        onClick={onDetail}
        className="rounded-lg bg-sky-500 p-2 text-white hover:bg-sky-600"
      >
        <FiEye />
      </button>

      <button
        onClick={onEdit}
        className="rounded-lg bg-yellow-500 p-2 text-white hover:bg-yellow-600"
      >
        <FiEdit />
      </button>

      <button
        onClick={onDelete}
        className="rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
      >
        <FiTrash2 />
      </button>
    </div>
  );
}
