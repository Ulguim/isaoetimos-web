import { useGetFinancesForDarshboardQuery } from '@app/features/finances/graphql/queries.generated'
import {
  FinancesSortFields,
  SortDirection,
} from '@app/generated/graphql'
import { Box, Grid } from '@chakra-ui/react'

import CashFlowGraph from '../CashFlowGraph'
import FinanceGraph from '../FinancesGraph'
import { handleFinanceData } from './utils/formatQuery'

const DashboardLayout = () => {
  const { data: financeGraphData, loading: isFinanceLoading } =
    useGetFinancesForDarshboardQuery({
      variables: {
        sorting: {
          field: FinancesSortFields?.Value,
          direction: SortDirection.Asc,
        },
      },
    })

  return (
    <Box>
      <Grid
        gap="20px"
        gridTemplateColumns={[
          '1fr',
          '1fr',
          '1fr',
          '1fr',
          '1fr 1fr',
          '1fr 1fr 1fr',
        ]}
      >
        <FinanceGraph
          isLoading={isFinanceLoading}
          queryData={handleFinanceData(financeGraphData)}
          title="Finanças por tipo"
        ></FinanceGraph>
        <CashFlowGraph></CashFlowGraph>
        <FinanceGraph></FinanceGraph>
      </Grid>
    </Box>
  )
}

export default DashboardLayout
