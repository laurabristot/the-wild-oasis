import { DashboardFilter, DashboardLayout } from '../features/dashboard'
import { Heading, Row } from '../ui'

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  )
}

export default Dashboard
