import styled from 'styled-components'
import { Spinner } from '../../ui'
import useRecentBookings from './useRecentBookings'
import useRecentStays from './useRecentStays'

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`

export default function DashboardLayout() {
  const { bookings, isLoading } = useRecentBookings()
  const { stays, confirmedStays, isLoading: isLoadingStays } = useRecentStays()

  if (isLoading || isLoadingStays) return <Spinner />

  console.log(bookings)
  console.log(confirmedStays)
  console.log(stays)

  return (
    <StyledDashboardLayout>
      <div>stats</div>
      <div>todays activity</div>
      <div>chart stay durations</div>
      <div>chart sales</div>
    </StyledDashboardLayout>
  )
}
