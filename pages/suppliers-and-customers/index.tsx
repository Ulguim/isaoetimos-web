import { Box } from "@chakra-ui/react"
import { Fragment } from "react"
import LayoutTemplate from "../../app/atomic/templates/LayoutTemplate"
import ListSupplyAndCustomer from "../../app/features/suppliers-and-customers/components/ListSuppliersAndCustomers"
import { GetSuppliersAndCustomersQuery } from "../../app/generated/graphql"

const SuppliersAndCustomers = () =>{
   
    return (
<LayoutTemplate>
   <Box margin={10}>
    <ListSupplyAndCustomer></ListSupplyAndCustomer>
   </Box>
</LayoutTemplate>

    )}

export default SuppliersAndCustomers