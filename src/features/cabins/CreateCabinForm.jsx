/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { Button, FileInput, Form, FormRow, Input, Textarea } from '../../ui'
import useCreateCabin from './useCreateCabin'
import useEditCabin from './useEditCabin'

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { createCabin, isCreatingCabin } = useCreateCabin()
  const { editCabin, isEditingCabin } = useEditCabin()
  const { id: editId, ...editValues } = cabinToEdit
  const isEditSession = Boolean(editId)

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {}
  })
  const { errors } = formState

  const isWorking = isCreatingCabin || isEditingCabin

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0]
    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset()
            onCloseModal?.()
          }
        }
      )
    else
      createCabin(
        { ...data, image },
        {
          onSuccess: (data) => {
            reset()
            onCloseModal?.()
          }
        }
      )
  }

  function onError(errors) {
    // console.log(errors)
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? 'modal' : 'regular'}
    >
      <FormRow
        label="Cabin Name"
        error={errors?.name?.message}
        disabled={isWorking}
      >
        <Input
          type="text"
          id="name"
          {...register('name', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow
        label="Maximum capacity"
        error={errors?.maxCapacity?.message}
        disabled={isWorking}
      >
        <Input
          type="number"
          id="maxCapacity"
          {...register('maxCapacity', {
            required: 'This field is required',
            min: { value: 1, message: 'Capacity should be at least 1' }
          })}
        />
      </FormRow>

      <FormRow
        label="Regular price"
        error={errors?.regularPrice?.message}
        disabled={isWorking}
      >
        <Input
          type="number"
          id="regularPrice"
          {...register('regularPrice', {
            required: 'This field is required',
            min: { value: 1, message: 'Price should be more than 0' }
          })}
        />
      </FormRow>

      <FormRow
        label="Discount"
        error={errors?.discount?.message}
        disabled={isWorking}
      >
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register('discount', {
            required: 'This field is required',
            validate: (value) =>
              Number(value) <= Number(getValues().regularPrice) ||
              'Discount should be less than regular price'
          })}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register('description', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label="Cabin Photo" disabled={isWorking}>
        <FileInput
          id="image"
          accept="image/*"
          {...register('image', {
            required: isEditSession ? false : 'This field is required'
          })}
        />
      </FormRow>

      <StyledFormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          disabled={isWorking}
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? 'Edit Cabin' : 'Create New cabin'}
        </Button>
      </StyledFormRow>
    </Form>
  )
}

export default CreateCabinForm
