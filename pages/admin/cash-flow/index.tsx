import 'react-datepicker/dist/react-datepicker.css'

import React from 'react'

import { DatePicker } from '@app/atomic/molecules/DatePicker'
import { CashTable } from '@app/atomic/organisms/CashFlowTable/CashTable'
import LayoutTemplate from '@app/atomic/templates/LayoutTemplate'
import { Box } from '@chakra-ui/react'

const CashFlow = () => {
  const [year, setYear] = React.useState(new Date())

  return (
    <LayoutTemplate>
      <Box margin={5}>
        <Box
          pb="6px"
          display={'flex'}
          gap={3}
          w={'100%'}
          alignItems={'center'}
        >
          <Box fontSize="24px" fontWeight="bold" w={'200px'}>
            Fluxo de Caixa
          </Box>
          <DatePicker
            selected={year}
            onChange={date => setYear(date)}
            showYearPicker
            dateFormat="yyyy"
            inputProps={{
              bg: 'white',
              width: 'min-content',
            }}
          />
        </Box>
        <CashTable year={year} />
      </Box>
    </LayoutTemplate>
  )
}

export default CashFlow
