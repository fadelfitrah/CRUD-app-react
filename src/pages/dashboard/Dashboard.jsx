import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { useProducts } from "../../hooks/product/useProducts";
import { useEvents } from "../../hooks/event/useEvents";
import {
  getEventStatus,
  getStatusColor,
} from "../../services/event/event.helper";

export default function Dashboard() {
  const navigate = useNavigate();
  const { data: products = [] } = useProducts();
  const { data: events = [] } = useEvents();

  const recentProducts = products.slice(0, 5);
  const recentEvents = events.slice(0, 5);

  return (
    <DashboardLayout>
      {/* Stat Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mb-8">
        <StatCard title="Total Produk" value={products.length} />
        <StatCard title="Total Event" value={events.length} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Produk Table */}
        <Card>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800">
                Produk Terbaru
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                {products.length} produk terdaftar
              </p>
            </div>
            <Button
              onClick={() => navigate("/products")}
              className="!px-4 !py-2 !text-sm"
            >
              Lihat Semua →
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-600">
                    Nama
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-600">
                    Kategori
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-600">
                    Stok
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentProducts.length > 0 ? (
                  recentProducts.map((product) => (
                    <tr
                      key={product.id}
                      className="border-b hover:bg-slate-50 cursor-pointer"
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
                      <td className="px-4 py-3 font-medium text-slate-800">
                        {product.name}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {product.category}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-semibold ${
                            product.stock > 0
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {product.stock}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="3"
                      className="px-4 py-8 text-center text-slate-500"
                    >
                      Belum ada produk
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Event Table */}
        <Card>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800">
                Event Terbaru
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                {events.length} event terdaftar
              </p>
            </div>
            <Button
              onClick={() => navigate("/events")}
              className="!px-4 !py-2 !text-sm"
            >
              Lihat Semua →
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-600">
                    Nama Event
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-600">
                    Tanggal
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-600">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentEvents.length > 0 ? (
                  recentEvents.map((event) => {
                    const status = getEventStatus(event.tanggalPelaksanaan);
                    return (
                      <tr
                        key={event.id}
                        className="border-b hover:bg-slate-50 cursor-pointer"
                        onClick={() => navigate(`/events/${event.id}`)}
                      >
                        <td className="px-4 py-3 font-medium text-slate-800">
                          {event.namaEvent}
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          {new Date(
                            event.tanggalPelaksanaan,
                          ).toLocaleDateString("id-ID", {
                            month: "short",
                            day: "numeric",
                          })}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(
                              status,
                            )}`}
                          >
                            {status}
                          </span>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan="3"
                      className="px-4 py-8 text-center text-slate-500"
                    >
                      Belum ada event
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
