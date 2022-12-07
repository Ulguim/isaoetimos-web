import { useToast } from '@chakra-ui/react'

import { useCreateOneAccountPlanMutation } from '../graphql/mutations.generated'

export default function useCreateOneAccountPlan() {
  const toast = useToast()
  const [CreateOneAccountPlanMutation, { data: createdAccount }] =
    useCreateOneAccountPlanMutation({
      refetchQueries: ['getAccountPlans'],
    })

  interface CreateOneAccountPlanProps {
    name?: string
    costType?: string
    accountPlanType?: string
  }

  async function CreateOneAccountPlan(
    values: CreateOneAccountPlanProps,
  ) {
    try {
      const { name, accountPlanType, costType } = values
      const { data: createdAccount } =
        await CreateOneAccountPlanMutation({
          variables: {
            input: {
              accountPlan: {
                name,
                accountPlanType,
                costType,
              },
            },
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

      return createdAccount
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
  return { CreateOneAccountPlan, createdAccount }
}
