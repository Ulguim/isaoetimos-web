import DashboardLayout from '@app/atomic/organisms/DashboardLayout/DashboardLayout'
import DashboardList from '@app/atomic/organisms/DashboardList'
import LayoutTemplate from '@app/atomic/templates/LayoutTemplate'
import { Box } from '@chakra-ui/react'

const Dashboard = () => {
  return (
    <LayoutTemplate>
      <Box margin={5}>
        <Box fontSize="24px" fontWeight="bold" pb="6px">
          Dashboard
        </Box>
        <DashboardLayout />
        <DashboardList />
      </Box>
    </LayoutTemplate>
  )
}

export default Dashboard
