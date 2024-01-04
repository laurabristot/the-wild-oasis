/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2'
import styled from 'styled-components'
import { ConfirmDelete, Menus, Modal, Table } from '../../ui'
import { formatCurrency } from '../../utils/helpers'
import { CreateCabinForm } from '../index'
import useCreateCabin from './useCreateCabin'
import { useDeleteCabin } from './useDeleteCabin'

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`

export default function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin()
  const { isCreatingCabin, createCabin } = useCreateCabin()
  const isWorking = isDeleting || isCreatingCabin

  const {
    image,
    name,
    maxCapacity,
    discount,
    regularPrice,
    id: cabinId,
    description
  } = cabin

  function handleDuplicateCabin() {
    createCabin({
      name: `Copy of ${name}`,
      image,
      maxCapacity,
      discount,
      regularPrice,
      description
    })
  }

  return (
    <Table.Row>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}

      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabin.id} />
            <Menus.List id={cabin.id}>
              <Menus.Button
                onClick={handleDuplicateCabin}
                icon={<HiSquare2Stack />}
              >
                Duplicate
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>
          </Menus.Menu>

          <Modal.Window name="edit">
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="cabins"
              disabled={isDeleting}
              onConfirm={() => deleteCabin(cabinId)}
            />
          </Modal.Window>
        </Modal>
      </div>
    </Table.Row>
  )
}
