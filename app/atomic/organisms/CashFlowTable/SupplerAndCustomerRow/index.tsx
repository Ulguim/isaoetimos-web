import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react'
import { sum as soma } from 'lodash'

import { Finances } from '../../../../generated/graphql'

type SupplerAndCustomerRowProps = {
  finances?: Finances[]
}

export const SupplerAndCustomerRow: React.FC<
  SupplerAndCustomerRowProps
> = ({ finances }) => {
  const name = finances?.[0]?.supplierAndCustomer?.name

  const sum = soma(finances?.map(item => item.value))
  console.log(sum)

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
                gridTemplateColumns={[
                  '1fr',
                  '1fr 1fr 1fr 1fr ',
                  '1fr 1fr 1fr 1fr 1fr 1fr',
                  '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
                  '2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
                  '2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
                ]}
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
                <GridItem>
                  <Text
                    fontWeight={['bold', 'bold', 'bold', '400']}
                    fontSize="14px"
                    textAlign={['center', 'start']}
                  >
                    {formatValue(sum)}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text
                    fontWeight={['bold', 'bold', 'bold', '400']}
                    fontSize="14px"
                    textAlign={['center', 'start']}
                  >
                    {formatValue(sum)}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text
                    fontWeight={['bold', 'bold', 'bold', '400']}
                    fontSize="14px"
                    textAlign={['center', 'start']}
                  >
                    {formatValue(sum)}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text
                    fontWeight={['bold', 'bold', 'bold', '400']}
                    fontSize="14px"
                    textAlign={['center', 'start']}
                  >
                    {formatValue(sum)}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text
                    fontWeight={['bold', 'bold', 'bold', '400']}
                    fontSize="14px"
                    textAlign={['center', 'start']}
                  >
                    {formatValue(sum)}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text
                    fontWeight={['bold', 'bold', 'bold', '400']}
                    fontSize="14px"
                    textAlign={['center', 'start']}
                  >
                    {formatValue(sum)}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text
                    fontWeight={['bold', 'bold', 'bold', '400']}
                    fontSize="14px"
                    textAlign={['center', 'start']}
                  >
                    {formatValue(sum)}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text
                    fontWeight={['bold', 'bold', 'bold', '400']}
                    fontSize="14px"
                    textAlign={['center', 'start']}
                  >
                    {formatValue(sum)}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text
                    fontWeight={['bold', 'bold', 'bold', '400']}
                    fontSize="14px"
                    textAlign={['center', 'start']}
                  >
                    {formatValue(sum)}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text
                    fontWeight={['bold', 'bold', 'bold', '400']}
                    fontSize="14px"
                    textAlign={['center', 'start']}
                  >
                    {formatValue(sum)}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text
                    fontWeight={['bold', 'bold', 'bold', '400']}
                    fontSize="14px"
                    textAlign={['center', 'start']}
                  >
                    {formatValue(sum)}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text
                    fontWeight={['bold', 'bold', 'bold', '400']}
                    fontSize="14px"
                    textAlign={['center', 'start']}
                  >
                    {formatValue(sum)}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text
                    fontWeight={['bold', 'bold', 'bold', '400']}
                    fontSize="14px"
                    textAlign={['center', 'end']}
                  >
                    {formatValue(sum)}
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
