import { Box } from '@chakra-ui/react'

import { CashTable } from '../../../app/atomic/organisms/CashFlowTable/CashTable'
import LayoutTemplate from '../../../app/atomic/templates/LayoutTemplate'

const CashFlow = () => {
  return (
    <LayoutTemplate>
      <Box margin={10}>
        <Box fontSize="24px" fontWeight="bold" pb="6px">
          Fluxo de Caixa {2023}
        </Box>
        <CashTable />
      </Box>
    </LayoutTemplate>
  )
}

export default CashFlow
