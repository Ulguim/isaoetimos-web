import { CashFlowData } from '@app/generated/graphql'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Divider,
  Flex,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react'
import { getMonth } from 'date-fns'
import { sum } from 'lodash'

import { AccountPlanRow } from '../AccountPlanRow'
import { formatCashFlowValues } from '../utils/formatCashFlowValues'

type CashFlowTypeRowProps = {
  cashFlow?: CashFlowData
}

export const CashFlowTypeRow: React.FC<CashFlowTypeRowProps> = ({
  cashFlow,
}) => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const Type = cashFlow?.cashFlows
  const name = cashFlow?.type

  const values = []
  cashFlow?.cashFlows?.map(item => {
    item?.finances?.nodes?.map(item => {
      values.push({
        month: getMonth(new Date(item?.issuedate)) + 1,
        value: formatCashFlowValues(item),
      })
    })
  })
  const totalValue = sum(values?.map(item => item.value))

  const groupedValues = values.reduce((acc, cur) => {
    cur.month in acc
      ? (acc[cur.month] += cur.value)
      : (acc[cur.month] = cur.value)
    return acc
  }, {})

  const formatValue = value => {
    return value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
  }
  return (
    <Flex
      w="100%"
      flexDirection="column"
      borderBottom="1px solid"
      borderColor="#8484845a"
    >
      <Flex
        justifyContent="flex-start"
        alignItems="center"
        flexDirection="column"
        position="relative"
        w="100%"
      >
        <Flex
          w="100%"
          justifyContent="space-between"
          verticalAlign="center"
          flexDir="column"
        >
          <Accordion allowToggle w="100%">
            <AccordionItem border="none">
              <h2>
                <AccordionButton
                  display="flex"
                  justifyContent="center"
                  width="100%"
                  bgColor={'#fff'}
                >
                  <Grid
                    gridTemplateColumns={'2fr repeat(13, 1fr)'}
                    w="100%"
                    gridGap="5px"
                  >
                    <GridItem display="flex" alignItems="center">
                      <AccordionIcon mt={1} />
                      <b>{name}</b>
                    </GridItem>
                    {months?.map(item => (
                      <GridItem key={item}>
                        <Text
                          fontWeight={'400'}
                          fontSize="14px"
                          textAlign={'start'}
                        >
                          {groupedValues[item]
                            ? formatValue(groupedValues[item])
                            : '-'}
                        </Text>
                      </GridItem>
                    ))}
                    <GridItem>
                      <Text
                        fontWeight={'400'}
                        fontSize="14px"
                        textAlign={'end'}
                      >
                        {totalValue ? formatValue(totalValue) : '-'}
                      </Text>
                    </GridItem>
                  </Grid>
                </AccordionButton>
                <Divider />
                <AccordionPanel
                  backgroundColor="#fff"
                  paddingLeft={0}
                  paddingRight={0}
                  pt="0"
                  pb="0"
                >
                  {Type?.map(accountPlan => {
                    return (
                      <AccountPlanRow
                        key={accountPlan?.id}
                        accountPlan={accountPlan}
                      />
                    )
                  })}
                </AccordionPanel>
              </h2>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Flex>
    </Flex>
  )
}
