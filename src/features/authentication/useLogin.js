import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { login as loginAPI } from '../../services/apiAuth'

export default function useLogin() {
  const navigate = useNavigate()

  const { isLoading, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: () => {
      navigate('/dashboard')
    },
    onError: (err) => {
      console.log('error', err)
      toast.error('Provided email or password are incorrect')
    }
  })

  return { login, isLoading }
}
