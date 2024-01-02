import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import { Button, Input } from './ui'

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`
const StyledApp = styled.div`
  background-color: orange;
  padding: 20px;
`

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>hello world</H1>
        <Button onClick={() => alert('hi')}>Check In</Button>
        <Button onClick={() => alert('hi')}>Check Out</Button>
        <Input type="number" placeholder="Number of guests"></Input>
      </StyledApp>
    </>
  )
}

export default App
