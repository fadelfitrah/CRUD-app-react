import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateEvent } from "../../services/event/event.service";

export function useUpdateEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => updateEvent(id, data),

    onSuccess: () => {
      toast.success("Event berhasil diperbarui");
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
    },

    onError: () => {
      toast.error("Gagal memperbarui event");
    },
  });
}
