import React from "react";
import {
    Grid,
    GridItem,
    GridItemProps,
    GridProps,
  } from '@chakra-ui/react'

  export type ListRowItemProps = {
    actions: any
    marker?: any
    actionsProps?: GridItemProps
  } & GridProps
  

export const ListRowItem: React.FC<ListRowItemProps> = ({
    actions,
    marker,
    actionsProps,
    children,
    ...props
}) =>{
    return(
        <Grid    
        minH={75}
        w="100%"
        bgColor="red"
        rounded="lg"
        px={6}
        py={2}
        alignItems="center"
        templateColumns="repeat(12, 1fr)"
        {...props}>

      {children}
      {marker && marker}
      <GridItem {...actionsProps}>{actions}</GridItem>
            
        </Grid>
    )
}