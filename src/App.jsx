import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import { Button, Heading, Input, Row } from './ui'

const StyledApp = styled.div`
  padding: 20px;
`

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button
                variation="primary"
                size="medium"
                onClick={() => alert('hi')}
              >
                Check In
              </Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert('hi')}
              >
                Check Out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">Form</Heading>
            <form action="">
              <Input type="number" placeholder="Number of guests"></Input>
              <Input type="number" placeholder="Number of guests"></Input>
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  )
}

export default App
