import { CabinTable } from '../features'
import AddCabin from '../features/cabins/AddCabin'
import { Heading, Row } from '../ui'

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  )
}

export default Cabins
