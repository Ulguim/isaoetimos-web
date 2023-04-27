import { useToast } from '@chakra-ui/react'

import { useUpdateOneAccountPlanMutation } from '../graphql/mutations.generated'

export default function useUpdateOneAccountPlan() {
  const toast = useToast()
  const [UpdateOneAccountPlanMutation, { data: updatedAccount }] =
    useUpdateOneAccountPlanMutation({
      refetchQueries: ['getAccountPlans'],
    })

  interface UpdateOneAccountPlanProps {
    id?: string
    name?: string
    accountPlanType?: string
    costType?: string
  }

  async function updateOneAccountPlan(
    values: UpdateOneAccountPlanProps,
  ) {
    try {
      const id = values.id
      delete values.id
      const { data: updatedAccount } =
        await UpdateOneAccountPlanMutation({
          variables: {
            id,
            // @ts-ignore
            update: values,
          },
        })
      toast({
        title: 'Sucesso!',
        description: 'Cadastrado com Sucesso',
        status: 'success',
        position: 'top-right',
        variant: 'top-accent',
        isClosable: true,
      })

      return updatedAccount
    } catch (error) {
      toast({
        title: 'Erro!',
        description: error,
        status: 'error',
        position: 'top-right',
        variant: 'top-accent',
        isClosable: true,
      })
    }
  }
  return { updateOneAccountPlan, updatedAccount }
}
