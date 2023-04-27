import React from 'react'

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps as CKDrawerProps,
} from '@chakra-ui/react'

export type DrawerProps = {
  title?: any
  footer?: React.ReactNode
  onClick?: () => void
} & CKDrawerProps

export const DrawerTemplate: React.FC<DrawerProps> = ({
  title,
  children,
  footer,
  ...props
}) => {
  return (
    <Drawer size={'md'} placement="right" {...props}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        {title && (
          <DrawerHeader textAlign="center">{title}</DrawerHeader>
        )}

        <DrawerBody>{children}</DrawerBody>

        {footer && (
          <DrawerFooter borderTopWidth="1px">{footer}</DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  )
}
