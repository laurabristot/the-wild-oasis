import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { signup as signupAPI } from '../../services/apiAuth'

export default function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupAPI,
    onSuccess: () => {
      toast.success(
        'Account successfully created. Please verify the new account from the users email address'
      )
    }
  })

  return { signup, isLoading }
}
