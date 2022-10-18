import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";

import { ListRowItem } from "../../../../atomic/organisms/ListRowItem"
import { GetSuppliersAndCustomersDocument, useGetSuppliersAndCustomersQuery } from "../../graphql/suppliers-and-customers.generated";


const ListSupplyAndCustomer:React.FC =()=>{
    const {data} = useGetSuppliersAndCustomersQuery()
    return(
        <>
        { data?.suppliersAndCustomers?.nodes.map((suply)=>(
<ListRowItem boxShadow={'initial'}  bgColor={'#FFFFFF'} actions={ <GridItem colSpan={1}>
   Menu </GridItem> }>
     <GridItem >
        {suply?.name}
    </GridItem> 
    <GridItem >{suply?.email}
    </GridItem> 
    <GridItem > {suply?.phone}
    </GridItem> 
</ListRowItem>
))
}</>
        
    )
}

export default ListSupplyAndCustomer;