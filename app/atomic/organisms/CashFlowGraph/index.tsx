import React, { FC, useEffect } from 'react'

import { useGetCashFlowLazyQuery } from '@app/features/cash-flow/queries.generated'
import { Box, Flex, Spinner, Text } from '@chakra-ui/react'
import { getMonth } from 'date-fns'
import dynamic from 'next/dynamic'

import { formatCashFlowValues } from '../CashFlowTable/utils/formatCashFlowValues'

const Column = dynamic(
  () => import('@ant-design/charts').then(mod => mod.Column as any),
  { ssr: false },
) as any

type CashFlowGraphProps = {
  title?: string
}

const CashFlowGraph: FC<CashFlowGraphProps> = ({ title }) => {
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

  const year = new Date().getFullYear().toString()
  const [load, { data, called, loading }] = useGetCashFlowLazyQuery({
    fetchPolicy: 'network-only',
    variables: {
      year,
    },
  })

  const mokedData = [
    { type: 'FIXO', cashFlow: [] },
    { type: 'VARIÁVEL', cashFlow: [] },
  ]

  const cashFlows =
    data?.gerenateCashFlowByAccount.length > 0
      ? data?.gerenateCashFlowByAccount
      : mokedData

  const cashFlowTypes = cashFlows?.flatMap(cashFlow => {
    const type = cashFlow?.type

    const values = []
    cashFlow?.cashFlows?.map(item => {
      item?.finances?.nodes?.map(item => {
        values.push({
          month: getMonth(new Date(item?.issuedate)),
          value: formatCashFlowValues(item),
        })
      })
    })

    const groupedValues = values.reduce((acc, cur) => {
      const month = cur.month
      const value = cur.value
      if (acc[month]) {
        acc[month] += value
      } else {
        acc[month] = value
      }

      return acc
    }, {})

    const result = Object.entries(groupedValues).map(
      ([month, totalValue]) => ({
        type,
        month: months[parseInt(month)],
        totalValue,
      }),
    )

    return result
  })

  const DemoColumn = () => {
    const config = {
      data: cashFlowTypes || [],
      isGroup: true,
      xField: 'month',
      yField: 'totalValue',
      width: 600,
      seriesField: 'type',
      dodgePadding: 2,

      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
        },
      },
    }
    return <Column {...config} />
  }

  useEffect(() => {
    if (!called) load()
  }, [called, load])

  return (
    <Box backgroundColor="white" borderRadius="5px">
      <Text fontSize="24px" pl="20px" pt="5px" fontWeight="bold">
        {title}
      </Text>
      {loading ? (
        <Flex
          width="100%"
          height="100%"
          justify="center"
          alignItems="center"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      ) : (
        <Box width={'min-content'} padding={'20px'}>
          <DemoColumn />
        </Box>
      )}
    </Box>
  )
}

export default CashFlowGraph
