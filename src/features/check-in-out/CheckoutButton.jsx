/* eslint-disable react/prop-types */
import Button from '../../ui/Button'
import useCheckout from './useCheckout'

function CheckoutButton({ bookingId }) {
  const { checkout } = useCheckout()

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
    >
      Check out
    </Button>
  )
}

export default CheckoutButton
