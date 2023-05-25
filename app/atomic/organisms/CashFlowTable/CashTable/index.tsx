import { useEffect } from 'react'

import { Box, Divider, Flex, Grid, Text } from '@chakra-ui/react'

import { useGetCashFlowLazyQuery } from '../../../../features/cash-flow/queries.generated'
import { CashFlowData } from '../../../../generated/graphql'
import { CashFlowTypeRow } from '../CashFlowTypeRow'

export const CashTable = () => {
  const [load, { data, called }] = useGetCashFlowLazyQuery({
    fetchPolicy: 'cache-and-network',
  })

  const months = [
    'JAN',
    'FEV',
    'MAR',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET',
    'OUT',
    'NOV',
    'DEZ',
  ]

  const cashFlows = data?.gerenateCashFlowByAccount

  useEffect(() => {
    if (!called) load()
  }, [called, load])
  return (
    <Box w="100%" h="100%" mt={2}>
      <Box width="100%">
        <Flex direction="column" w="100%">
          <Flex direction="column" w="100%" backgroundColor="#ffffff">
            <Grid
              gridTemplateColumns={'2fr repeat(13, 1fr)'}
              display={'grid'}
              w="100%"
              gridGap="5px"
              py={2}
              px={4}
            >
              <Text
                fontWeight="bold"
                fontSize="md"
                color="#404040"
              ></Text>
              {months.map(item => (
                <Text
                  key={item}
                  fontWeight="bold"
                  fontSize="md"
                  color="#404040"
                >
                  {item}
                </Text>
              ))}
              <Text
                fontWeight="bold"
                fontSize="md"
                color="#404040"
                textAlign={'end'}
              >
                Total
              </Text>
            </Grid>
          </Flex>
          <Divider />
          {cashFlows?.map(item => {
            return (
              <CashFlowTypeRow
                key={item?.type}
                cashFlow={item as CashFlowData}
              />
            )
          })}
        </Flex>
      </Box>
    </Box>
  )
}
