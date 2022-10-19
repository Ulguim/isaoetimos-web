import { Box } from "@chakra-ui/react"
import LayoutTemplate from "../../app/atomic/templates/LayoutTemplate"
import ListSupplyAndCustomer from "../../app/features/suppliers-and-customers/components/ListSuppliersAndCustomers"

const SuppliersAndCustomers = () =>{

    return (
<LayoutTemplate>
   <Box margin={10} >
    <ListSupplyAndCustomer />
   </Box>
</LayoutTemplate>

    )}

export default SuppliersAndCustomers
