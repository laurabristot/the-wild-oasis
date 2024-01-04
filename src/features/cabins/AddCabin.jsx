import { useState } from 'react'
import { Button, Modal } from '../../ui'
import CreateCabinForm from './CreateCabinForm'

export default function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  )
}
