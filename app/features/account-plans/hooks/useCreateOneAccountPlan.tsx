import { useToast } from '@chakra-ui/react'

import { useCreateOneSuppliersAndCustomerMutation } from '../graphql/mutations.generated'

export default function useCreateOneSupplierAndCustomer() {
  const toast = useToast()
  const [
    CreateOneSupplierAndCustomerMutation,
    { data: createdSupplier },
  ] = useCreateOneSuppliersAndCustomerMutation({
    refetchQueries: ['getSuppliersAndCustomers'],
  })

  interface CreateOneSupplierAndCustomerProps {
    name?: string
    address?: string
    cpf?: string
    email?: string
    phone?: string
  }

  async function createOneSupplierAndCustomer(
    values: CreateOneSupplierAndCustomerProps,
  ) {
    try {
      const { name, address, cpf, email, phone } = values
      console.log(values)
      const { data: createdSupplier } =
        await CreateOneSupplierAndCustomerMutation({
          variables: {
            input: {
              suppliersAndCustomer: {
                name,
                address,
                cpf,
                email,
                phone,
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

      return createdSupplier
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
  return { createOneSupplierAndCustomer, createdSupplier }
}
