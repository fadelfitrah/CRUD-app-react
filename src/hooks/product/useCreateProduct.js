import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProduct } from "../../services/product/product.service";
import { useAuth } from "../useAuth";

export function useCreateProduct() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: (data) => createProduct(data, user.uid),

    onSuccess: () => {
      toast.success("Produk berhasil ditambahkan");
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },

    onError: () => {
      toast.error("Gagal menambahkan produk");
    },
  });
}
