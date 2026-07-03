import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEvent } from "../../services/event/event.service";

export function useCreateEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createEvent,

    onSuccess: () => {
      toast.success("Event berhasil dibuat");
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
    },

    onError: () => {
      toast.error("Gagal membuat event");
    },
  });
}
