import { useToast } from '@chakra-ui/react'

import { useCreateOneFinanceMutation } from '../graphql/mutations.generated'

export interface CreateOneFinanceProps {
  accountplanId: string
  supplierAndCustomerId: string
  comments?: string
  dueDate: string
  issuedate: string
  payDay?: string
  paymentTerm: string
  status: 'OPEN' | 'PAID'
  value: number
}

export default function useCreateOneFinance() {
  const toast = useToast()
  const [CreateOneFinanceMutation, { data: createdFinance }] =
    useCreateOneFinanceMutation({
      refetchQueries: ['getFinances'],
    })

  async function CreateOneFinance(values: CreateOneFinanceProps) {
    try {
      const {
        accountplanId,
        dueDate,
        issuedate,
        paymentTerm,
        status,
        supplierAndCustomerId,
        value,
        comments,
        payDay,
      } = values

      const [dueDay, dueMonth, dueYear] = dueDate.split('/')
      const [issueDay, issueMonth, issueYear] = issuedate.split('/')
      const [paymentTermDay, paymentTermMonth, paymentTermYear] =
        paymentTerm.split('/')

      const formatedDueDate = `${dueYear}-${dueMonth}-${dueDay}`
      const formatedIssueDate = `${issueYear}-${issueMonth}-${issueDay}`

      const formatedPaymentTerm = `${paymentTermYear}-${paymentTermMonth}-${paymentTermDay}`
      let formatedPayDay = null
      if (payDay) {
        const [payday, payMonth, payYear] = payDay.split('/')
        formatedPayDay = `${payYear}-${payMonth}-${payday}`
      }

      const { data: createdFinance } = await CreateOneFinanceMutation(
        {
          variables: {
            input: {
              finances: {
                accountplanId,
                dueDate: formatedDueDate,
                issuedate: formatedIssueDate,
                paymentTerm: formatedPaymentTerm,
                // @ts-ignore
                status,
                supplierAndCustomerId,
                value: Number(value),
                payDay: formatedPayDay,
                comments: comments || '',
              },
            },
          },
        },
      )
      toast({
        title: 'Sucesso!',
        description: 'Cadastrado com Sucesso',
        status: 'success',
        position: 'top-right',
        variant: 'top-accent',
        isClosable: true,
      })

      return createdFinance
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
  return { CreateOneFinance, createdFinance }
}
