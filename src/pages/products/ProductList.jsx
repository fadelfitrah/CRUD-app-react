import DashboardLayout from "../../layouts/DashboardLayout";

import PageHeader from "../../components/common/PageHeader";
import Button from "../../components/ui/Button";
import DataTable from "../../components/table/DataTable";
import ActionButton from "../../components/table/ActionButton";
import ConfirmDialog from "../../components/ui/ConfirmDialog";

import { useProducts } from "../../hooks/product/useProducts";
import { useDeleteProduct } from "../../hooks/product/useDeleteProduct";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const { data: products = [], isLoading } = useProducts();
  const { mutate: deleteProduct, isPending } = useDeleteProduct();
  const columns = ["Nama", "Kategori", "Bahan", "Stok", "Gambar", "Aksi"];

  const handleCreate = () => {
    navigate("/products/create");
  };

  const handleEdit = (product) => {
    navigate(`/products/${product.id}`);
  };

  const handleDelete = (product) => {
    setProductToDelete(product);
    setDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (productToDelete) {
      deleteProduct(productToDelete.id, {
        onSuccess: () => {
          setDeleteModal(false);
          setProductToDelete(null);
        },
      });
    }
  };

  const handleDetail = (product) => {
    navigate(`/products/${product.id}`);
  };

  if (isLoading) {
    return (
      <DashboardLayout>
        <p>Loading...</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <PageHeader title="Daftar Produk" subtitle="Kelola produk khas Lamakera">
        <Button className="w-auto px-6" onClick={handleCreate}>
          + Tambah Produk
        </Button>
      </PageHeader>

      <DataTable
        columns={columns}
        data={products}
        renderRow={(product) => (
          <tr key={product.id} className="border-b hover:bg-slate-50">
            <td className="px-6 py-4">{product.name}</td>

            <td className="px-6 py-4">{product.category}</td>

            <td className="px-6 py-4">{product.bahan}</td>

            <td className="px-6 py-4">{product.stock}</td>

            <td className="px-6 py-4">
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-12 w-12 rounded-lg object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/50?text=No+Image";
                  }}
                />
              )}
            </td>

            <td className="px-6 py-4">
              <ActionButton
                onEdit={() => handleEdit(product)}
                onDelete={() => handleDelete(product)}
                onDetail={() => handleDetail(product)}
              />
            </td>
          </tr>
        )}
      />

      <ConfirmDialog
        isOpen={deleteModal}
        title="Hapus Produk"
        message={`Apakah Anda yakin ingin menghapus produk "${productToDelete?.name}"? Tindakan ini tidak dapat dibatalkan.`}
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeleteModal(false)}
        loading={isPending}
      />
    </DashboardLayout>
  );
}
