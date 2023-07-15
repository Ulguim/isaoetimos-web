import React from 'react'

import {
  Grid,
  GridItem,
  GridItemProps,
  GridProps,
} from '@chakra-ui/react'

export type ListRowItemProps = {
  actions?: any
  marker?: any
  actionsProps?: GridItemProps
  variant?: 'default' | 'dashboard'
} & GridProps

export const ListRowItem: React.FC<ListRowItemProps> = ({
  actions,
  marker,
  actionsProps,
  children,
  templateColumns,
  variant = 'default',
  ...props
}) => {
  const styles = {
    default: {
      minH: 75,
      px: 6,
      py: 2,
    },
    dashboard: {
      minH: 10,
      px: 2,
      py: 2,
    },
  }

  return (
    <Grid
      minH={styles[variant].minH}
      w="100%"
      rounded="lg"
      px={styles[variant].px}
      py={styles[variant].py}
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
      <GridItem {...actionsProps}>{actions && actions}</GridItem>
    </Grid>
  )
}
