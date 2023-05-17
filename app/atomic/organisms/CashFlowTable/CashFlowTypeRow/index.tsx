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

import { CashFlowData } from '../../../../generated/graphql'
import { AccountPlanRow } from '../AccountPlanRow'

type CashFlowTypeRowProps = {
  cashFlow?: CashFlowData
}

export const CashFlowTypeRow: React.FC<CashFlowTypeRowProps> = ({
  cashFlow,
}) => {
  const Type = cashFlow?.cashFlows
  const name = cashFlow?.type

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
                    <GridItem display="flex" alignItems="center">
                      <AccordionIcon mt={1} />
                      {name}
                    </GridItem>
                    <GridItem>
                      <Text
                        fontWeight={['bold', 'bold', 'bold', '400']}
                        fontSize="14px"
                        textAlign={['center', 'start']}
                      >
                        {formatValue(2500)}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Text
                        fontWeight={['bold', 'bold', 'bold', '400']}
                        fontSize="14px"
                        textAlign={['center', 'start']}
                      >
                        {formatValue(2500)}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Text
                        fontWeight={['bold', 'bold', 'bold', '400']}
                        fontSize="14px"
                        textAlign={['center', 'start']}
                      >
                        {formatValue(2500)}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Text
                        fontWeight={['bold', 'bold', 'bold', '400']}
                        fontSize="14px"
                        textAlign={['center', 'start']}
                      >
                        {formatValue(2500)}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Text
                        fontWeight={['bold', 'bold', 'bold', '400']}
                        fontSize="14px"
                        textAlign={['center', 'start']}
                      >
                        {formatValue(2500)}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Text
                        fontWeight={['bold', 'bold', 'bold', '400']}
                        fontSize="14px"
                        textAlign={['center', 'start']}
                      >
                        {formatValue(2500)}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Text
                        fontWeight={['bold', 'bold', 'bold', '400']}
                        fontSize="14px"
                        textAlign={['center', 'start']}
                      >
                        {formatValue(2500)}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Text
                        fontWeight={['bold', 'bold', 'bold', '400']}
                        fontSize="14px"
                        textAlign={['center', 'start']}
                      >
                        {formatValue(2500)}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Text
                        fontWeight={['bold', 'bold', 'bold', '400']}
                        fontSize="14px"
                        textAlign={['center', 'start']}
                      >
                        {formatValue(2500)}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Text
                        fontWeight={['bold', 'bold', 'bold', '400']}
                        fontSize="14px"
                        textAlign={['center', 'start']}
                      >
                        {formatValue(2500)}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Text
                        fontWeight={['bold', 'bold', 'bold', '400']}
                        fontSize="14px"
                        textAlign={['center', 'start']}
                      >
                        {formatValue(2500)}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Text
                        fontWeight={['bold', 'bold', 'bold', '400']}
                        fontSize="14px"
                        textAlign={['center', 'start']}
                      >
                        {formatValue(2500)}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Text
                        fontWeight={['bold', 'bold', 'bold', '400']}
                        fontSize="14px"
                        textAlign={['center', 'end']}
                      >
                        {formatValue(2500)}
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
