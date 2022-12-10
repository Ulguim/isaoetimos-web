import { Box } from '@chakra-ui/react'

import LayoutTemplate from '../../../app/atomic/templates/LayoutTemplate'
import ListAccountPlan from '../../../app/features/account-plans/components/ListAccountPlans'

const AccountPlans = () => {
  return (
    <LayoutTemplate>
      <Box margin={10}>
        <ListAccountPlan />
      </Box>
    </LayoutTemplate>
  )
}

export default AccountPlans
