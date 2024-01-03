import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { deleteCabin as deleteCabinAPI } from '../../services/apiCabins'

export function useDeleteCabin() {
  const queryClient = useQueryClient()

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinAPI(id),
    onSuccess: () => {
      toast.success('Cabin sucessfully deleted')
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      })
    },
    onError: (err) => toast.error(err.message)
  })

  return { isDeleting, deleteCabin }
}
