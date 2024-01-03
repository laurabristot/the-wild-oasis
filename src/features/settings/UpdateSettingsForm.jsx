/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Form, FormRow, Input, Spinner } from '../../ui'
import useSettings from './useSettings'
import useUpdateSettings from './useUpdateSettings'

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      breakfastPrice,
      maxGuestPerBooking
    } = {}
  } = useSettings()

  const { updateSetting, isUpdatingSetting } = useUpdateSettings()

  function handleUpdate(e, field) {
    const { value } = e.target

    if (!value) return
    updateSetting({ [field]: value })
  }

  if (isLoading) return <Spinner />

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isUpdatingSetting}
          onBlur={(e) => handleUpdate(e, 'minBookingLength')}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isUpdatingSetting}
          onBlur={(e) => handleUpdate(e, 'maxBookingLength')}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestPerBooking}
          disabled={isUpdatingSetting}
          onBlur={(e) => handleUpdate(e, 'maxGuestPerBooking')}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isUpdatingSetting}
          onBlur={(e) => handleUpdate(e, 'breakfastPrice')}
        />
      </FormRow>
    </Form>
  )
}

export default UpdateSettingsForm
