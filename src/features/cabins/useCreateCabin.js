import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { createEditCabin } from '../../services/apiCabins'

export default function useCreateCabin() {
  const queryClient = useQueryClient()

  const { mutate: createCabin, isLoading: isCreatingCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success('New cabin sucessfully created')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
    },
    onError: (err) => {
      toast.error(err.message)
    }
  })
  return { createCabin, isCreatingCabin }
}