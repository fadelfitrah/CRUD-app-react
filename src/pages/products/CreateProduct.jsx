import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import ProductForm from "./components/ProductForm";

export default function CreateProduct() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/products");
  };

  return (
    <DashboardLayout>
      <PageHeader
        title="Tambah Produk Baru"
        subtitle="Lengkapi data produk untuk ditambahkan ke sistem"
      >
        <Button
          onClick={handleBack}
          className="!bg-slate-300 hover:!bg-slate-400 !text-slate-800"
        >
          ← Kembali
        </Button>
      </PageHeader>

      <div className="mx-auto max-w-2xl">
        <Card>
          <div className="mb-6">
            <p className="text-sm font-medium text-slate-600">
              Form Pengisian Data Produk
            </p>
          </div>

          <ProductForm onClose={handleBack} />
        </Card>

        {/* Info Section */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-200 text-blue-600">
                📋
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">
                  Nama & Kategori
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Isi nama produk dan kategori dengan jelas
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-green-50 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-200 text-green-600">
                📦
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Stok & Bahan</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Tentukan jumlah stok dan material produk
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-purple-50 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-200 text-purple-600">
                🖼️
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Gambar Produk</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Masukkan URL gambar dari website lain
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
