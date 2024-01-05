/* eslint-disable no-unused-vars */
import { useSearchParams } from 'react-router-dom'
import { CabinRow } from '../'
import { Menus, Spinner, Table } from '../../ui'
import useCabins from './useCabins'

export default function CabinTable() {
  const { isLoading, cabins } = useCabins()

  const [searchParams] = useSearchParams()
  const filterValue = searchParams.get('discount') || 'all'

  let filteredCabins
  if (filterValue === 'all') filteredCabins = cabins
  if (filterValue === 'no-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0)
  if (filterValue === 'with-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount !== 0)

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>CAbin</div>
          <div>capacity</div>
          <div>price</div>
          <div>discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={filteredCabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  )
}
