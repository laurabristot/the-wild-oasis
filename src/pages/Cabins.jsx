import { useEffect } from 'react'
import { getCabins } from '../services/apiCabins'
import { Heading, Row } from '../ui'

function Cabins() {
  useEffect(() => {
    getCabins().then((data) => console.log(data))
  }, [])
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img
        src="https://gncuupjmfadawyccyljg.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        alt=""
      />
    </Row>
  )
}

export default Cabins
