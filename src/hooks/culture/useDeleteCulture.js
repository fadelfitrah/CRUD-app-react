import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCulture } from "../../services/culture/culture.service";

export function useDeleteCulture() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCulture,

    onSuccess: () => {
      toast.success("Budaya berhasil dihapus");
      queryClient.invalidateQueries({
        queryKey: ["cultures"],
      });
    },

    onError: () => {
      toast.error("Gagal menghapus budaya");
    },
  });
}
