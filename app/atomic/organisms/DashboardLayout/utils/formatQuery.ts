import { GetFinancesForDarshboardQuery } from '@app/features/finances/graphql/queries.generated'

export const handleFinanceData = (
  queryData: GetFinancesForDarshboardQuery,
) => {
  const queryResults = queryData?.finances?.nodes

  const PieData = queryResults?.map(item => {
    const totalValue =
      queryResults?.reduce((acc, item) => {
        return acc + item?.value
      }, 0) || 0

    const percentage = (item?.value / totalValue) * 100
    return {
      type: item?.accountplan?.name,
      value: Math.round(percentage),
    }
  })
  return PieData
}
