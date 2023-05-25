import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react'
import { getMonth } from 'date-fns'
import { sum } from 'lodash'

import { Finances } from '../../../../generated/graphql'

type SupplerAndCustomerRowProps = {
  finances?: Finances[]
}

export const SupplerAndCustomerRow: React.FC<
  SupplerAndCustomerRowProps
> = ({ finances }) => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const name = finances?.[0]?.supplierAndCustomer?.name
  const values = []
  const total = sum(finances?.map(item => item.value))

  finances?.map(item => {
    values.push({
      month: getMonth(new Date(item?.issuedate)) + 1,
      value: item?.value,
    })
  })

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
          <h2>
            <Box
              display="flex"
              justifyContent="center"
              width="100%"
              bgColor={'#fff'}
              px={'16px'}
              py={'8px'}
              _hover={{ bgColor: 'rgba(0, 0, 0, 0.04)' }}
            >
              <Grid
                gridTemplateColumns={'2fr repeat(13, 1fr)'}
                w="100%"
                gridGap="5px"
              >
                <GridItem
                  display="flex"
                  alignItems="center"
                  pl="52px"
                >
                  {name}
                </GridItem>
                {months.map(item => (
                  <GridItem
                    key={item}
                    display="flex"
                    alignItems="center"
                  >
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
                <GridItem
                  display="flex"
                  alignItems="center"
                  justifyContent={'flex-end'}
                >
                  <Text
                    fontWeight={'400'}
                    fontSize="14px"
                    textAlign={'end'}
                  >
                    {total ? formatValue(total) : '-'}
                  </Text>
                </GridItem>
              </Grid>
            </Box>
            <Divider />
          </h2>
        </Flex>
      </Flex>
    </Flex>
  )
}
