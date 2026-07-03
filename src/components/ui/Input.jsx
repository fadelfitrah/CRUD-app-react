export default function Input({ label, error, className = "", ...props }) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-semibold text-slate-700">
          {label}
        </label>
      )}

      <input
        className={`
          w-full rounded-xl border bg-white px-4 py-3
          outline-none transition-all duration-200
          ${
            error
              ? "border-red-500 focus:ring-red-200"
              : "border-slate-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
          }
          ${className}
        `}
        {...props}
      />

      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
