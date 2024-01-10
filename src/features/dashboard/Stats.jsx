/* eslint-disable react/prop-types */

import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar
} from 'react-icons/hi2'
import { formatCurrency } from '../../utils/helpers'
import { Stat } from './'

/* eslint-disable no-unused-vars */
export default function Stats({
  bookings,
  confirmedStays,
  numDays,
  cabinCount
}) {
  const nrOfBookings = bookings.length
  const sales = formatCurrency(
    bookings.reduce((acc, cur) => acc + cur.totalPrice, 0)
  )
  const checkins = confirmedStays.length

  const occupation =
    Math.round(
      (confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
        (numDays * cabinCount)) *
        100
    ) + '%'

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={nrOfBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={sales}
      />
      <Stat
        title="Checkins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy Rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={occupation}
      />
    </>
  )
}
