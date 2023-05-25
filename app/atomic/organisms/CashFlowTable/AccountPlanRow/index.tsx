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
import { groupBy } from 'lodash'

import { AccountPlan } from '../../../../generated/graphql'
import { SupplerAndCustomerRow } from '../SupplerAndCustomerRow'

type AccountPlanRowProps = {
  accountPlan?: AccountPlan
}

export const AccountPlanRow: React.FC<AccountPlanRowProps> = ({
  accountPlan,
}) => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const name = accountPlan?.name
  const finances = accountPlan?.finances?.nodes
  const groupedFinances = groupBy(finances, 'supplierAndCustomer.id')
  const objectKey = Object.keys(groupedFinances)

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
                  disabled
                >
                  <Grid
                    gridTemplateColumns={'2fr repeat(13, 1fr)'}
                    w="100%"
                    gridGap="5px"
                  >
                    <GridItem
                      display="flex"
                      alignItems="center"
                      pl={objectKey?.length > 0 ? '16px' : '36px'}
                    >
                      {objectKey?.length > 0 && (
                        <AccordionIcon mt={1} />
                      )}
                      {name}
                    </GridItem>
                    {months.map(month => (
                      <GridItem key={month}>
                        <Text
                          fontWeight={'400'}
                          fontSize="14px"
                          textAlign={'start'}
                        >
                          -
                        </Text>
                      </GridItem>
                    ))}
                    <GridItem>
                      <Text
                        fontWeight={'400'}
                        fontSize="14px"
                        textAlign={'end'}
                      >
                        -
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
                  {objectKey?.map(key => {
                    const groupedFinances = finances?.filter(
                      item => item.supplierAndCustomer.id === key,
                    )

                    return (
                      <SupplerAndCustomerRow
                        key={key}
                        finances={groupedFinances}
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
