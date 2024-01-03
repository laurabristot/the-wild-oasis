import { UpdateSettingsForm } from '../features/index'
import { Heading, Row } from '../ui'

function Settings() {
  return (
    <Row>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm />
    </Row>
  )
}

export default Settings
