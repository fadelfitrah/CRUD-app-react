import DashboardLayout from "../../layouts/DashboardLayout";
import PageHeader from "../../components/common/PageHeader";
import Button from "../../components/ui/Button";
import DataTable from "../../components/table/DataTable";
import ActionButton from "../../components/table/ActionButton";
import ConfirmDialog from "../../components/ui/ConfirmDialog";

import { useEvents } from "../../hooks/event/useEvents";
import { useDeleteEvent } from "../../hooks/event/useDeleteEvent";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getEventStatus,
  getStatusColor,
} from "../../services/event/event.helper";

export default function EventList() {
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  const { data: events = [], isLoading } = useEvents();
  const { mutate: deleteEvent, isPending } = useDeleteEvent();
  const columns = [
    "Nama Event",
    "Kategori",
    "Tanggal",
    "Gambar",
    "Status",
    "Aksi",
  ];

  const handleCreate = () => {
    navigate("/events/create");
  };

  const handleEdit = (event) => {
    navigate(`/events/${event.id}`);
  };

  const handleDelete = (event) => {
    setEventToDelete(event);
    setDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (eventToDelete) {
      deleteEvent(eventToDelete.id, {
        onSuccess: () => {
          setDeleteModal(false);
          setEventToDelete(null);
        },
      });
    }
  };

  const handleDetail = (event) => {
    navigate(`/events/${event.id}`);
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
      <PageHeader title="Daftar Event" subtitle="Kelola event dan kegiatan">
        <Button className="w-auto px-6" onClick={handleCreate}>
          + Buat Event Baru
        </Button>
      </PageHeader>

      <DataTable
        columns={columns}
        data={events}
        renderRow={(event) => {
          const status = getEventStatus(event.tanggalPelaksanaan);
          return (
            <tr key={event.id} className="border-b hover:bg-slate-50">
              <td className="px-6 py-4">{event.namaEvent}</td>

              <td className="px-6 py-4 capitalize">{event.kategori}</td>

              <td className="px-6 py-4">
                {new Date(event.tanggalPelaksanaan).toLocaleDateString(
                  "id-ID",
                  {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  },
                )}
              </td>

              <td className="px-6 py-4">
                {event.gambar && (
                  <img
                    src={event.gambar}
                    alt={event.namaEvent}
                    className="h-12 w-12 rounded-lg object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/50?text=No+Image";
                    }}
                  />
                )}
              </td>

              <td className="px-6 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                    status,
                  )}`}
                >
                  {status}
                </span>
              </td>

              <td className="px-6 py-4">
                <ActionButton
                  onEdit={() => handleEdit(event)}
                  onDelete={() => handleDelete(event)}
                  onDetail={() => handleDetail(event)}
                />
              </td>
            </tr>
          );
        }}
      />

      <ConfirmDialog
        isOpen={deleteModal}
        title="Hapus Event"
        message={`Apakah Anda yakin ingin menghapus event "${eventToDelete?.namaEvent}"? Tindakan ini tidak dapat dibatalkan.`}
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeleteModal(false)}
        loading={isPending}
      />
    </DashboardLayout>
  );
}
