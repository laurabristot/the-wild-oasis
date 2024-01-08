import { HiArrowRightOnRectangle } from 'react-icons/hi2'
import { ButtonIcon, SpinnerMini } from '../../ui'
import useLogout from './useLogout'

export default function Logout() {
  const { logout, isLoading } = useLogout()

  const handleLogout = () => {
    logout()
  }

  return (
    <ButtonIcon onClick={handleLogout} disabled={isLoading}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  )
}
