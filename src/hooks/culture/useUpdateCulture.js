import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCulture } from "../../services/culture/culture.service";

export function useUpdateCulture() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => updateCulture(id, data),

    onSuccess: () => {
      toast.success("Budaya berhasil diperbarui");
      queryClient.invalidateQueries({
        queryKey: ["cultures"],
      });
    },

    onError: () => {
      toast.error("Gagal memperbarui budaya");
    },
  });
}
