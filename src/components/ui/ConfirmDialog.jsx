export default function ConfirmDialog({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  loading = false,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="text-xl font-bold text-slate-800">{title}</h2>
        <p className="mt-2 text-slate-600">{message}</p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onCancel}
            disabled={loading}
            className="flex-1 rounded-lg bg-slate-200 py-2 font-semibold text-slate-800 hover:bg-slate-300 disabled:opacity-50"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 rounded-lg bg-red-500 py-2 font-semibold text-white hover:bg-red-600 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Hapus"}
          </button>
        </div>
      </div>
    </div>
  );
}
