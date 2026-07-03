export default function PageHeader({ title, subtitle, children }) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">{title}</h1>

        <p className="mt-2 text-slate-500">{subtitle}</p>
      </div>

      {children && <div>{children}</div>}
    </div>
  );
}
