import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import ProductForm from "./components/ProductForm";
import { useProducts } from "../../hooks/product/useProducts";

export default function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: products = [] } = useProducts();

  const product = products.find((p) => p.id === id);

  const handleBack = () => {
    navigate("/products");
  };

  if (!product) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <p className="text-lg text-slate-600">Produk tidak ditemukan</p>
          <Button onClick={handleBack} className="mt-4">
            Kembali ke Daftar Produk
          </Button>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <PageHeader title="Edit Produk" subtitle="Perbarui data produk">
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
              Form Pengubahan Data Produk
            </p>
          </div>

          <ProductForm onClose={handleBack} product={product} />
        </Card>
      </div>
    </DashboardLayout>
  );
}
