import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCulture } from "../../services/culture/culture.service";

export function useCreateCulture() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCulture,

    onSuccess: () => {
      toast.success("Budaya berhasil dibuat");
      queryClient.invalidateQueries({
        queryKey: ["cultures"],
      });
    },

    onError: () => {
      toast.error("Gagal membuat budaya");
    },
  });
}
