import { useAuth } from "../../hooks/useAuth";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <header className="flex h-20 items-center justify-between rounded-xl bg-white px-8 shadow">
      <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>

        <p className="text-slate-500">Selamat datang kembali 👋</p>
      </div>

      <div className="text-right">
        <p className="font-semibold">{user?.email}</p>

        <p className="text-sm text-slate-500">Administrator</p>
      </div>
    </header>
  );
}
