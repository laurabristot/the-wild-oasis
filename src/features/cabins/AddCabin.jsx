import { Button, Modal } from '../../ui'
import CreateCabinForm from './CreateCabinForm'

// eslint-disable-next-line react/prop-types
export default function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  )
}
