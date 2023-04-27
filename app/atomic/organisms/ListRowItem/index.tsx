import React from 'react'

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
  templateColumns,
  ...props
}) => {
  return (
    <Grid
      minH={75}
      w="100%"
      rounded="lg"
      px={6}
      py={2}
      alignItems="center"
      templateColumns={
        templateColumns || [
          '1fr',
          '1fr 1fr 1fr 0.2fr',
          '1fr 1fr 1fr 0.2fr',
          '1fr 1fr 1fr 0.2fr',
        ]
      }
      gap={3}
      {...props}
    >
      {children}
      {marker && marker}
      <GridItem {...actionsProps}>{actions}</GridItem>
    </Grid>
  )
}
