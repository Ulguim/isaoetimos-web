import { Box } from '@chakra-ui/react'

import LayoutTemplate from '../../app/atomic/templates/LayoutTemplate'
import ListFinances from '../../app/features/finances/components/ListFinances'

const Finances = () => {
  return (
    <LayoutTemplate>
      <Box margin={10}>
        <ListFinances />
      </Box>
    </LayoutTemplate>
  )
}

export default Finances
