import LayoutTemplate from '@app/atomic/templates/LayoutTemplate'
import ListSupplyAndCustomer from '@app/features/suppliers-and-customers/components/ListSuppliersAndCustomers'
import { Box } from '@chakra-ui/react'

const SuppliersAndCustomers = () => {
  return (
    <LayoutTemplate>
      <Box margin={5}>
        <Box fontSize="24px" fontWeight="bold" pb="6px">
          Fornecedores e Clientes
        </Box>
        <ListSupplyAndCustomer />
      </Box>
    </LayoutTemplate>
  )
}

export default SuppliersAndCustomers
