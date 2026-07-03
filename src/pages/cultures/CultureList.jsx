import DashboardLayout from "../../layouts/DashboardLayout";
import PageHeader from "../../components/common/PageHeader";
import Button from "../../components/ui/Button";
import DataTable from "../../components/table/DataTable";
import ActionButton from "../../components/table/ActionButton";
import ConfirmDialog from "../../components/ui/ConfirmDialog";

import { useCultures } from "../../hooks/culture/useCultures";
import { useDeleteCulture } from "../../hooks/culture/useDeleteCulture";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CultureList() {
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState(false);
  const [cultureToDelete, setCultureToDelete] = useState(null);

  const { data: cultures = [], isLoading } = useCultures();
  const { mutate: deleteCulture, isPending } = useDeleteCulture();
  const columns = ["Nama Budaya", "Kategori", "Gambar", "Aksi"];

  const handleCreate = () => {
    navigate("/cultures/create");
  };

  const handleEdit = (culture) => {
    navigate(`/cultures/${culture.id}`);
  };

  const handleDelete = (culture) => {
    setCultureToDelete(culture);
    setDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (cultureToDelete) {
      deleteCulture(cultureToDelete.id, {
        onSuccess: () => {
          setDeleteModal(false);
          setCultureToDelete(null);
        },
      });
    }
  };

  const handleDetail = (culture) => {
    navigate(`/cultures/${culture.id}`);
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
      <PageHeader title="Daftar Budaya" subtitle="Kelola budaya Lamakera">
        <Button className="w-auto px-6" onClick={handleCreate}>
          + Tambah Budaya
        </Button>
      </PageHeader>

      <DataTable
        columns={columns}
        data={cultures}
        renderRow={(culture) => (
          <tr key={culture.id} className="border-b hover:bg-slate-50">
            <td className="px-6 py-4">{culture.namaBudaya}</td>

            <td className="px-6 py-4 capitalize">{culture.kategori}</td>

            <td className="px-6 py-4">
              {culture.gambar && (
                <img
                  src={culture.gambar}
                  alt={culture.namaBudaya}
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
                onEdit={() => handleEdit(culture)}
                onDelete={() => handleDelete(culture)}
                onDetail={() => handleDetail(culture)}
              />
            </td>
          </tr>
        )}
      />

      <ConfirmDialog
        isOpen={deleteModal}
        title="Hapus Budaya"
        message={`Apakah Anda yakin ingin menghapus budaya "${cultureToDelete?.namaBudaya}"? Tindakan ini tidak dapat dibatalkan.`}
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeleteModal(false)}
        loading={isPending}
      />
    </DashboardLayout>
  );
}
