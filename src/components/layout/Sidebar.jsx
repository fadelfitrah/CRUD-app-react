import { FiHome, FiBox, FiCalendar, FiLogOut } from "react-icons/fi";

import { NavLink } from "react-router-dom";
import { logout } from "../../services/auth/authService";

export default function Sidebar() {
  const menus = [
    {
      title: "Dashboard",
      icon: <FiHome />,
      path: "/dashboard",
    },
    {
      title: "Products",
      icon: <FiBox />,
      path: "/products",
    },
    {
      title: "Events",
      icon: <FiCalendar />,
      path: "/events",
    },
    {
      title: "Cultures",
      icon: <FiBox />,
      path: "/cultures",
    },
  ];

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">
      <div className="border-b p-6">
        <h1 className="text-2xl font-bold text-sky-500">Data</h1>
      </div>

      <nav className="flex-1 p-4">
        {menus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            className={({ isActive }) =>
              `mb-2 flex items-center gap-3 rounded-xl p-3 transition ${
                isActive ? "bg-sky-500 text-white" : "hover:bg-slate-100"
              }`
            }
          >
            {menu.icon}
            {menu.title}
          </NavLink>
        ))}
      </nav>

      <div className="border-t p-4">
        <button
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-xl bg-red-500 p-3 text-white transition hover:bg-red-600"
        >
          <FiLogOut />
          Logout
        </button>
      </div>
    </aside>
  );
}
