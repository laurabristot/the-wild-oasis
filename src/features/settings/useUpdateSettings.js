import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { updateSetting as updateSettingAPI } from '../../services/apiSettings'

export default function useUpdateSettings() {
  const queryClient = useQueryClient()

  const { mutate: updateSetting, isLoading: isUpdatingSetting } = useMutation({
    mutationFn: updateSettingAPI,
    onSuccess: () => {
      toast.success('Settings sucessfully edited')
      queryClient.invalidateQueries({ queryKey: ['settings'] })
    },
    onError: (err) => {
      toast.error(err.message)
    }
  })
  return { updateSetting, isUpdatingSetting }
}
