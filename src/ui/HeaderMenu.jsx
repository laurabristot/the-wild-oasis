import { HiOutlineUser } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Logout } from '../features/authentication/'
import { ButtonIcon } from './'

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`

export default function HeaderMenu() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/account')
  }

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={handleClick}>
          <HiOutlineUser />
        </ButtonIcon>
        <Logout />
      </li>
    </StyledHeaderMenu>
  )
}
