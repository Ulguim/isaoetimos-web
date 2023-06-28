import { useGetFinancesForDarshboardQuery } from '@app/features/finances/graphql/queries.generated'
import {
  FinaceStatusTypeEnum,
  FinancesSortFields,
  SortDirection,
} from '@app/generated/graphql'
import { Box, GridItem } from '@chakra-ui/react'
import { faCalendarXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addDays, format } from 'date-fns'

import { ListRowItem } from '../../../../atomic/organisms/ListRowItem'

const DashboardListRows: React.FC = () => {
  const today = format(new Date(), 'yyyy/MM/dd')
  const { data } = useGetFinancesForDarshboardQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      filter: {
        and: [
          { dueDate: { gte: today } },
          { status: { eq: FinaceStatusTypeEnum.Open } },
        ],
      },
      sorting: {
        field: FinancesSortFields.DueDate,
        direction: SortDirection.Asc,
      },
      paging: { limit: 6 },
    },
  })

  return (
    <>
      {data?.finances?.nodes.map(finance => {
        const borderLeftColor = '#00B247'

        const dueDate = format(
          addDays(new Date(finance?.dueDate), 1),
          'dd/MM/yyyy',
        )

        return (
          <ListRowItem
            key={finance.id}
            boxShadow={'lg'}
            bgColor={'#FFFFFF'}
            borderLeft="8px"
            borderLeftColor={borderLeftColor}
            templateColumns={['1fr 1fr 1fr 1fr min-content']}
            variant="dashboard"
            my={2}
          >
            <GridItem display="flex" alignItems="center">
              <FontAwesomeIcon icon={faCalendarXmark} size="lg" />
              <Box
                ml={3}
                mr={3}
                fontWeight={'semibold'}
              >{`Vencimento: ${dueDate}`}</Box>
            </GridItem>
            <GridItem
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>{`R$: ${finance?.value?.toFixed(2)}`}</Box>
            </GridItem>
            <GridItem>{finance?.supplierAndCustomer?.name}</GridItem>
            <GridItem>{finance?.accountplan?.name}</GridItem>
          </ListRowItem>
        )
      })}
    </>
  )
}

export default DashboardListRows
