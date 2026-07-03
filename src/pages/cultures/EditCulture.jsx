import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import CultureForm from "./components/CultureForm";
import { useCultures } from "../../hooks/culture/useCultures";

export default function EditCulture() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: cultures = [] } = useCultures();

  const culture = cultures.find((c) => c.id === id);

  const handleBack = () => {
    navigate("/cultures");
  };

  if (!culture) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <p className="text-lg text-slate-600">Budaya tidak ditemukan</p>
          <Button onClick={handleBack} className="mt-4">
            Kembali ke Daftar Budaya
          </Button>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <PageHeader title="Edit Budaya" subtitle="Perbarui data budaya">
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
              Form Pengubahan Data Budaya
            </p>
          </div>

          <CultureForm onClose={handleBack} culture={culture} />
        </Card>
      </div>
    </DashboardLayout>
  );
}
