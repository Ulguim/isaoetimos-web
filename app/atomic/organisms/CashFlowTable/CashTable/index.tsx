import { useEffect } from 'react'

import { Box, Divider, Flex, Grid, Text } from '@chakra-ui/react'

import { useGetCashFlowLazyQuery } from '../../../../features/cash-flow/queries.generated'
import { CashFlowData } from '../../../../generated/graphql'
import { CashFlowTypeRow } from '../CashFlowTypeRow'

export const CashTable = () => {
  const [load, { data, called }] = useGetCashFlowLazyQuery()

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
              gridTemplateColumns={[
                '1fr',
                '1fr 1fr 1fr 1fr ',
                '1fr 1fr 1fr 1fr 1fr 1fr',
                '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
                '2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
                '2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
              ]}
              display={['none', 'none', 'none', 'grid']}
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
              <Text fontWeight="bold" fontSize="md" color="#404040">
                JAN
              </Text>
              <Text fontWeight="bold" fontSize="md" color="#404040">
                FEV
              </Text>
              <Text fontWeight="bold" fontSize="md" color="#404040">
                MAR
              </Text>
              <Text fontWeight="bold" fontSize="md" color="#404040">
                ABR
              </Text>
              <Text fontWeight="bold" fontSize="md" color="#404040">
                MAI
              </Text>
              <Text fontWeight="bold" fontSize="md" color="#404040">
                JUN
              </Text>
              <Text fontWeight="bold" fontSize="md" color="#404040">
                JUL
              </Text>
              <Text fontWeight="bold" fontSize="md" color="#404040">
                AGO
              </Text>
              <Text fontWeight="bold" fontSize="md" color="#404040">
                SET
              </Text>
              <Text fontWeight="bold" fontSize="md" color="#404040">
                OUT
              </Text>
              <Text fontWeight="bold" fontSize="md" color="#404040">
                NOV
              </Text>
              <Text fontWeight="bold" fontSize="md" color="#404040">
                DEC
              </Text>
              <Text
                fontWeight="bold"
                fontSize="md"
                color="#404040"
                textAlign={['center', 'end']}
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
