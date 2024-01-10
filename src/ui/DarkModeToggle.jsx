/* eslint-disable no-unused-vars */
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2'
import { useDarkMode } from '../context/DarkModeContext'
import { ButtonIcon } from './'

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  )
}
