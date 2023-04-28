import { useToast } from '@chakra-ui/react'

import { useUpdateOneFinanceMutation } from '../graphql/mutations.generated'

export type UpdateOneFinanceProps = {
  id?: string
  accountplanId: string
  supplierAndCustomerId: string
  comments: string
  dueDate: string
  issuedate: string
  payDay: string
  paymentTerm: string
  status: 'OPEN' | 'PAID'
  value: number
}

export default function useUpdateOneFinance() {
  const toast = useToast()
  const [UpdateOneFinanceMutation, { data: updatedFinance }] =
    useUpdateOneFinanceMutation({
      refetchQueries: ['getFinances'],
    })

  async function updateOneFiance(values: UpdateOneFinanceProps) {
    try {
      const id = values.id
      const {
        accountplanId,
        comments,
        dueDate,
        issuedate,
        payDay,
        paymentTerm,
        status,
        supplierAndCustomerId,
        value,
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

      const { data: updatedFinance } = await UpdateOneFinanceMutation(
        {
          variables: {
            id,
            update: {
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
      )
      toast({
        title: 'Sucesso!',
        description: 'Cadastrado com Sucesso',
        status: 'success',
        position: 'top-right',
        variant: 'top-accent',
        isClosable: true,
      })

      return updatedFinance
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
  return { updateOneFiance, updatedFinance }
}
