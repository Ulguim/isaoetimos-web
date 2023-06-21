import DashboardLayout from '@app/atomic/organisms/DashboardLayout/DashboardLayout'
import LayoutTemplate from '@app/atomic/templates/LayoutTemplate'
import { Box } from '@chakra-ui/react'

const Dashboard = () => {
  return (
    <LayoutTemplate>
      <Box margin={10}>
        <Box fontSize="24px" fontWeight="bold" pb="6px">
          Dashboard
        </Box>
        <DashboardLayout />
      </Box>
    </LayoutTemplate>
  )
}

export default Dashboard
