import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import EventForm from "./components/EventForm";
import { useEvents } from "../../hooks/event/useEvents";

export default function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: events = [] } = useEvents();

  const event = events.find((e) => e.id === id);

  const handleBack = () => {
    navigate("/events");
  };

  if (!event) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <p className="text-lg text-slate-600">Event tidak ditemukan</p>
          <Button onClick={handleBack} className="mt-4">
            Kembali ke Daftar Event
          </Button>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <PageHeader title="Edit Event" subtitle="Perbarui data event">
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
              Form Pengubahan Data Event
            </p>
          </div>

          <EventForm onClose={handleBack} event={event} />
        </Card>
      </div>
    </DashboardLayout>
  );
}
