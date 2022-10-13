import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";

import { ListRowItem } from "../../../../atomic/organisms/ListRowItem"
import { GetSuppliersAndCustomersDocument, useGetSuppliersAndCustomersQuery } from "../../graphql/suppliers-and-customers.generated";


const ListSupplyAndCustomer:React.FC =()=>{
    const {data} = useGetSuppliersAndCustomersQuery()
    return(
        <>
        { data?.suppliersAndCustomers?.nodes.map((suply)=>(
<ListRowItem bgColor={'gray'} actions={ <GridItem colSpan={1}>
   Menu </GridItem> }>
     <GridItem colSpan={4}>
        {suply?.name}
    </GridItem> 
    <GridItem colSpan={4}>{suply?.email}
    </GridItem> 
    <GridItem colSpan={3}> {suply?.phone}
    </GridItem> 
</ListRowItem>
))
}</>
        
    )
}

export default ListSupplyAndCustomer;