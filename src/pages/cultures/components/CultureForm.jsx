import { useForm } from "react-hook-form";
import { useEffect } from "react";

import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import TextArea from "../../../components/ui/TextArea";
import Button from "../../../components/ui/Button";

import { useCreateCulture } from "../../../hooks/culture/useCreateCulture";
import { useUpdateCulture } from "../../../hooks/culture/useUpdateCulture";
import {
  cultureValidationRules,
  cultureCategoryOptions,
} from "../../../services/culture/culture.validation";

export default function CultureForm({ onClose, culture }) {
  const { mutate: createCulture, isPending: isCreating } = useCreateCulture();
  const { mutate: updateCulture, isPending: isUpdating } = useUpdateCulture();
  const isEditing = !!culture;
  const isPending = isCreating || isUpdating;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: culture || {},
  });

  useEffect(() => {
    if (culture) {
      setValue("namaBudaya", culture.namaBudaya);
      setValue("kategori", culture.kategori);
      setValue("deskripsi", culture.deskripsi);
      setValue("gambar", culture.gambar);
    }
  }, [culture, setValue]);

  const onSubmit = (data) => {
    if (isEditing) {
      updateCulture(
        { id: culture.id, data },
        {
          onSuccess: () => {
            reset();
            onClose();
          },
        },
      );
    } else {
      createCulture(data, {
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
        label="Nama Budaya"
        placeholder="Masukkan nama budaya"
        error={errors.namaBudaya}
        {...register("namaBudaya", cultureValidationRules.namaBudaya)}
      />

      <Select
        label="Kategori Budaya"
        options={cultureCategoryOptions}
        error={errors.kategori}
        {...register("kategori", cultureValidationRules.kategori)}
      />

      <TextArea
        label="Deskripsi Budaya"
        placeholder="Jelaskan detail budaya"
        error={errors.deskripsi}
        {...register("deskripsi", cultureValidationRules.deskripsi)}
      />

      <Input
        label="URL Gambar Budaya"
        type="url"
        placeholder="https://example.com/image.jpg"
        error={errors.gambar}
        {...register("gambar", cultureValidationRules.gambar)}
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
          {isEditing ? "Perbarui Budaya" : "Simpan Budaya"}
        </Button>
      </div>
    </form>
  );
}
