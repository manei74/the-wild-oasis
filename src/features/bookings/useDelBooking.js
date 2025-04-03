import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDelBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteB, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBooking,

    onSuccess: () => {
      toast.success(`Booking successfully deleted`);
      queryClient.invalidateQueries(["bookings"]);
    },

    onError: () => toast.error("There was an error while deleting"),
  });

  return { deleteB, isDeleting };
}
