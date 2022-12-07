import { useToast } from '@chakra-ui/react'

import { useUpdateOneSuppliersAndCustomerMutation } from '../graphql/mutations.generated'

export default function useUpdateOneSupplierAndCustomer() {
  const toast = useToast()
  const [
    UpdateOneSupplierAndCustomerMutation,
    { data: updatedSupplier },
  ] = useUpdateOneSuppliersAndCustomerMutation({
    refetchQueries: ['getSuppliersAndCustomers'],
  })

  interface UpdateOneSupplierAndCustomerProps {
    id?: string
    name?: string
    address?: string
    cpf?: string
    email?: string
    phone?: string
  }

  async function updateOneSupplierAndCustomer(
    values: UpdateOneSupplierAndCustomerProps,
  ) {
    try {
      const id = values.id
      delete values.id
      const { data: updatedSupplier } =
        await UpdateOneSupplierAndCustomerMutation({
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

      return updatedSupplier
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
  return { updateOneSupplierAndCustomer, updatedSupplier }
}
