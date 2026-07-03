export default function Button({
  children,
  loading = false,
  className = "",
  ...props
}) {
  return (
    <button
      disabled={loading}
      className={`
        rounded-xl
        bg-sky-500
        px-5
        py-3
        font-semibold
        text-white
        transition
        hover:bg-sky-600
        disabled:cursor-not-allowed
        disabled:opacity-70
        ${className}
      `}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
