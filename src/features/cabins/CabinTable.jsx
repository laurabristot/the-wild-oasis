/* eslint-disable no-unused-vars */
import { CabinRow } from '../'
import { Menus, Spinner, Table } from '../../ui'
import useCabins from './useCabins'

export default function CabinTable() {
  const { isLoading, cabins } = useCabins()

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
          data={cabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  )
}
