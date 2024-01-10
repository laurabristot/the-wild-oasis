/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import { Spinner } from '../../ui'
import useCabins from '../cabins/useCabins'
import { DurationChart, SalesChart, Stats } from './'
import useRecentBookings from './useRecentBookings'
import useRecentStays from './useRecentStays'

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`

export default function DashboardLayout() {
  const { bookings, isLoading, numDays } = useRecentBookings()
  const { cabins, isLoading: isLoadingCabins } = useCabins()
  const { stays, confirmedStays, isLoading: isLoadingStays } = useRecentStays()

  if (isLoading || isLoadingStays || isLoadingCabins) return <Spinner />

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <div>todays activity</div>
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  )
}
