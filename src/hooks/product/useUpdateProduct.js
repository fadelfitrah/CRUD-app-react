import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateProduct } from "../../services/product/product.service";

export function useUpdateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => updateProduct(id, data),

    onSuccess: () => {
      toast.success("Produk berhasil diperbarui");
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },

    onError: () => {
      toast.error("Gagal memperbarui produk");
    },
  });
}
