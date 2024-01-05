import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { deleteBooking as deleteBookingAPI } from '../../services/apiBookings'

export function useDeleteBooking() {
  const queryClient = useQueryClient()

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBookingAPI(id),
    onSuccess: () => {
      toast.success('Booking sucessfully deleted')
      queryClient.invalidateQueries({
        queryKey: ['bookings']
      })
    },
    onError: (err) => toast.error(err.message)
  })

  return { isDeleting, deleteBooking }
}
