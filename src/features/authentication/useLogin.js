import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { login as loginAPI } from '../../services/apiAuth'

export default function useLogin() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { isLoading, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user)
      navigate('/dashboard', { replace: true })
    },
    onError: () => {
      toast.error('Provided email or password are incorrect')
    }
  })

  return { login, isLoading }
}
