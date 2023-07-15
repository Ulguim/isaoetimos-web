import { CostTypeEnum, Finances } from '@app/generated/graphql'

export const formatCashFlowValues = (item: Finances) => {
  const formattedValue =
    item?.accountplan?.costType === CostTypeEnum.Income
      ? item?.value
      : -item?.value

  return formattedValue
}
