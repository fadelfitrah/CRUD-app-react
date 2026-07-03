import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteEvent } from "../../services/event/event.service";

export function useDeleteEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteEvent,

    onSuccess: () => {
      toast.success("Event berhasil dihapus");
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
    },

    onError: () => {
      toast.error("Gagal menghapus event");
    },
  });
}
