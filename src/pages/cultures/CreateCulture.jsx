import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import CultureForm from "./components/CultureForm";

export default function CreateCulture() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/cultures");
  };

  return (
    <DashboardLayout>
      <PageHeader
        title="Tambah Budaya Baru"
        subtitle="Tambahkan budaya baru ke dalam sistem"
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
              Form Penambahan Budaya Baru
            </p>
          </div>

          <CultureForm onClose={handleBack} />
        </Card>

        {/* Info Section */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-200 text-blue-600">
                🎭
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">
                  Nama & Kategori
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Berikan nama dan kategori budaya yang jelas
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-green-50 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-200 text-green-600">
                📖
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Deskripsi</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Jelaskan detail dan cerita budaya
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
                <h3 className="font-semibold text-slate-800">Gambar Budaya</h3>
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
