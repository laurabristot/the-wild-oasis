import { SignupForm } from '../features/authentication'
import { Heading } from '../ui'

function NewUsers() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </>
  )
}

export default NewUsers
