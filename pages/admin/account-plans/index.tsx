import { Box } from '@chakra-ui/react'

import LayoutTemplate from '../../../app/atomic/templates/LayoutTemplate'
import ListAccountPlan from '../../../app/features/account-plans/components/ListAccountPlans'

const AccountPlans = () => {
  return (
    <LayoutTemplate>
      <Box margin={5}>
        <Box fontSize="24px" fontWeight="bold" pb="6px">
          Plano de Contas
        </Box>
        <ListAccountPlan />
      </Box>
    </LayoutTemplate>
  )
}

export default AccountPlans
