/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import BookingDataBox from '../../features/bookings/BookingDataBox'

import {
  Button,
  ButtonGroup,
  ButtonText,
  Checkbox,
  Heading,
  Row,
  Spinner
} from '../../ui'

import { useEffect, useState } from 'react'
import { useMoveBack } from '../../hooks/useMoveBack'
import { formatCurrency } from '../../utils/helpers'
import useBooking from '../bookings/useBooking'
import useCheckin from './useCheckin'

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`

function CheckinBooking() {
  const { booking, isLoading } = useBooking()
  const { checkin, isCheckinIn } = useCheckin()
  const [confirmPaid, setConfirmPaid] = useState(false)

  const moveBack = useMoveBack()

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights
  } = booking || {}

  const confirmPayment = () => {
    const confirmation = confirm(
      'Are you sure you want to confirm the payment? this action cant be undone'
    )
    if (confirmation) {
      setConfirmPaid((confirmPaid) => !confirmPaid)
    }
  }

  useEffect(() => {
    setConfirmPaid(booking?.isPaid || false)
  }, [booking?.isPaid])

  if (isLoading) return <Spinner />

  function handleCheckin() {
    if (!confirmPaid) return

    checkin(bookingId)
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={confirmPayment}
          disabled={confirmPaid || isCheckinIn}
          id="confirm"
        >
          I confirm that {guests.fullName} have paid the total amount of{' '}
          {formatCurrency(totalPrice)}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button disabled={!confirmPaid || isCheckinIn} onClick={handleCheckin}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  )
}

export default CheckinBooking
