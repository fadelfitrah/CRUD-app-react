import { useForm } from "react-hook-form";
import { useEffect } from "react";

import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import TextArea from "../../../components/ui/TextArea";
import Button from "../../../components/ui/Button";

import { useCreateEvent } from "../../../hooks/event/useCreateEvent";
import { useUpdateEvent } from "../../../hooks/event/useUpdateEvent";
import {
  eventValidationRules,
  eventCategoryOptions,
} from "../../../services/event/event.validation";
import { formatDate } from "../../../services/event/event.helper";

export default function EventForm({ onClose, event }) {
  const { mutate: createEvent, isPending: isCreating } = useCreateEvent();
  const { mutate: updateEvent, isPending: isUpdating } = useUpdateEvent();
  const isEditing = !!event;
  const isPending = isCreating || isUpdating;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: event || {},
  });

  useEffect(() => {
    if (event) {
      setValue("namaEvent", event.namaEvent);
      setValue("kategori", event.kategori);
      setValue("deskripsi", event.deskripsi);
      setValue("tanggalPelaksanaan", formatDate(event.tanggalPelaksanaan));
      setValue("gambar", event.gambar);
    }
  }, [event, setValue]);

  const onSubmit = (data) => {
    if (isEditing) {
      updateEvent(
        { id: event.id, data },
        {
          onSuccess: () => {
            reset();
            onClose();
          },
        },
      );
    } else {
      createEvent(data, {
        onSuccess: () => {
          reset();
          onClose();
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Nama Event"
        placeholder="Masukkan nama event"
        error={errors.namaEvent}
        {...register("namaEvent", eventValidationRules.namaEvent)}
      />

      <Select
        label="Kategori Event"
        options={eventCategoryOptions}
        error={errors.kategori}
        {...register("kategori", eventValidationRules.kategori)}
      />

      <TextArea
        label="Deskripsi Event"
        placeholder="Jelaskan detail event"
        error={errors.deskripsi}
        {...register("deskripsi", eventValidationRules.deskripsi)}
      />

      <Input
        label="Tanggal Pelaksanaan"
        type="date"
        error={errors.tanggalPelaksanaan}
        {...register(
          "tanggalPelaksanaan",
          eventValidationRules.tanggalPelaksanaan,
        )}
      />

      <Input
        label="URL Gambar Event"
        type="url"
        placeholder="https://example.com/image.jpg"
        error={errors.gambar}
        {...register("gambar", eventValidationRules.gambar)}
      />

      <div className="flex justify-end gap-3">
        <Button
          type="button"
          onClick={onClose}
          className="!bg-slate-300 hover:!bg-slate-400 !text-slate-800"
        >
          Batal
        </Button>

        <Button loading={isPending}>
          {isEditing ? "Perbarui Event" : "Simpan Event"}
        </Button>
      </div>
    </form>
  );
}
