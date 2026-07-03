import { useForm } from "react-hook-form";
import { useEffect } from "react";

import Input from "../../../components/ui/Input";
import TextArea from "../../../components/ui/TextArea";
import Button from "../../../components/ui/Button";

import { useCreateProduct } from "../../../hooks/product/useCreateProduct";
import { useUpdateProduct } from "../../../hooks/product/useUpdateProduct";

export default function ProductForm({ onClose, product }) {
  const { mutate: createProduct, isPending: isCreating } = useCreateProduct();
  const { mutate: updateProduct, isPending: isUpdating } = useUpdateProduct();
  const isEditing = !!product;
  const isPending = isCreating || isUpdating;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: product || {},
  });

  useEffect(() => {
    if (product) {
      setValue("name", product.name);
      setValue("category", product.category);
      setValue("bahan", product.bahan);
      setValue("stock", product.stock);
      setValue("description", product.description);
      setValue("image", product.image);
    }
  }, [product, setValue]);

  const onSubmit = (data) => {
    if (isEditing) {
      updateProduct(
        { id: product.id, data },
        {
          onSuccess: () => {
            reset();
            onClose();
          },
        },
      );
    } else {
      createProduct(data, {
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
        label="Nama Produk"
        error={errors.name}
        {...register("name", {
          required: "Nama produk wajib diisi",
        })}
      />

      <Input
        label="Kategori"
        error={errors.category}
        {...register("category", {
          required: "Kategori wajib diisi",
        })}
      />

      <Input label="Bahan" error={errors.bahan} {...register("bahan")} />

      <Input
        type="number"
        label="Stok"
        error={errors.stock}
        {...register("stock", {
          required: "Stok wajib diisi",
          valueAsNumber: true,
        })}
      />

      <TextArea label="Deskripsi" {...register("description")} />

      <Input
        label="URL Gambar Produk"
        type="url"
        placeholder="https://example.com/image.jpg"
        error={errors.image}
        {...register("image", {
          required: "URL gambar wajib diisi",
          pattern: {
            value: /^https?:\/\/.+/i,
            message: "URL harus dimulai dengan http:// atau https://",
          },
        })}
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
          {isEditing ? "Perbarui Produk" : "Simpan Produk"}
        </Button>
      </div>
    </form>
  );
}
