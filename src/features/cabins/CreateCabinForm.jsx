/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import styled from 'styled-components'
import { createCabin } from '../../services/apiCabins'
import { Button, FileInput, Form, FormRow, Input, Textarea } from '../../ui'

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

const Label = styled.label`
  font-weight: 500;
`

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm()
  const { errors } = formState

  const queryClient = useQueryClient()

  const { mutate, isLoading: isCreatingCabin } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('New cabin sucessfully created')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
      reset()
    },
    onError: (err) => {
      toast.error(err.message)
    }
  })

  function onSubmit(data) {
    mutate(data)
  }

  function onError(errors) {
    // console.log(errors)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow
        label="Cabin Name"
        error={errors?.name?.message}
        disabled={isCreatingCabin}
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
        disabled={isCreatingCabin}
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
        disabled={isCreatingCabin}
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
        disabled={isCreatingCabin}
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

      <FormRow
        label="Description"
        error={errors?.description?.message}
        disabled={isCreatingCabin}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register('description', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label="Cabin Photo" disabled={isCreatingCabin}>
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <StyledFormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" disabled={isCreatingCabin}>
          Cancel
        </Button>
        <Button disabled={isCreatingCabin}>Edit cabin</Button>
      </StyledFormRow>
    </Form>
  )
}

export default CreateCabinForm
