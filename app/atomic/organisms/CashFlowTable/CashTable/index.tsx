import { FC, useEffect } from 'react'

import { useGetCashFlowLazyQuery } from '@app/features/cash-flow/queries.generated'
import { CashFlowData } from '@app/generated/graphql'
import {
  Box,
  Divider,
  Flex,
  Grid,
  Spinner,
  Text,
} from '@chakra-ui/react'

import { CashFlowTypeRow } from '../CashFlowTypeRow'

type CashTableProps = {
  year: Date
}

export const CashTable: FC<CashTableProps> = ({ year }) => {
  const formatedYear = year?.getFullYear().toString()

  const [load, { data, called, loading }] = useGetCashFlowLazyQuery({
    fetchPolicy: 'network-only',
    variables: {
      year: formatedYear,
    },
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

  useEffect(() => {
    if (year) load()
  }, [load, year])

  return (
    <>
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <Box w="100%" h="100%" mt={2}>
          {cashFlows?.length > 0 ? (
            <Box width="100%">
              <Flex direction="column" w="100%">
                <Flex
                  direction="column"
                  w="100%"
                  backgroundColor="#ffffff"
                >
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
          ) : (
            <Box mt={10}>Não há lançamentos no período.</Box>
          )}
        </Box>
      )}
    </>
  )
}
