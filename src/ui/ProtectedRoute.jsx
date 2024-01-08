/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import useUser from '../features/authentication/useUser'
import Spinner from './Spinner'

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function ProtectedRoute({ children }) {
  //1. load the authenticated user
  const { isLoading, isAuthenticated } = useUser()

  //2. if theres no authenticade user redirect to the login page
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/login')
  }, [children, isAuthenticated, isLoading, navigate])

  //3. while loading, show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    )

  //4. if there is a user, render the app
  if (isAuthenticated) return children
}
