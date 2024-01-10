import styled from 'styled-components'

import {
  Button,
  ButtonGroup,
  ButtonText,
  ConfirmDelete,
  Empty,
  Heading,
  Modal,
  Row,
  Spinner,
  Tag
} from '../../ui'
import BookingDataBox from './BookingDataBox'

import { useNavigate } from 'react-router-dom'
import { useMoveBack } from '../../hooks/useMoveBack'
import useCheckout from '../check-in-out/useCheckout'
import useBooking from './useBooking'
import { useDeleteBooking } from './useDeleteBooking'

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`

function BookingDetail() {
  const { booking, isLoading } = useBooking()
  const { isDeleting, deleteBooking } = useDeleteBooking()

  const { checkout } = useCheckout()

  const { status, id: bookingId } = booking || {}

  const navigate = useNavigate()

  const moveBack = useMoveBack()

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver'
  }
  if (isLoading) return <Spinner />
  if (!booking) return <Empty resource="booking" />

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        <Modal>
          <Modal.Open opens="delete">
            <Button variation="danger">Delete</Button>
          </Modal.Open>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="booking"
              disabled={isDeleting}
              onConfirm={() =>
                deleteBooking(bookingId, {
                  onSettled: () => {
                    navigate(-1)
                  }
                })
              }
            />
          </Modal.Window>
        </Modal>
        {status === 'unconfirmed' && (
          <Button
            variation="primary"
            onClick={() => navigate(`/checkin/${bookingId}`)}
          >
            Check in
          </Button>
        )}
        {status === 'checked-in' && (
          <Button onClick={() => checkout(bookingId)}>Check out</Button>
        )}
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  )
}

export default BookingDetail
