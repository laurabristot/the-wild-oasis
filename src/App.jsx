import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import { Button, Heading, Input } from './ui'

const StyledApp = styled.div`
  background-color: orange;
  padding: 20px;
`

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check in and out</Heading>
        <Button onClick={() => alert('hi')}>Check In</Button>
        <Button onClick={() => alert('hi')}>Check Out</Button>

        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of guests"></Input>
      </StyledApp>
    </>
  )
}

export default App
