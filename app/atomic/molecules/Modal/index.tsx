import {
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps as CKDModalProps,
} from '@chakra-ui/react'

export type ModalProps = {
  title?: any
  closable?: boolean
  footer?: React.ReactNode
  onClick?: () => void
} & CKDModalProps

const ModalTemplate: React.FC<ModalProps> = ({
  title,
  children,
  footer,
  ...props
}) => {
  return (
    <ChakraModal {...props}>
      <ModalOverlay />
      <ModalContent>
        {title && (
          <ModalHeader textAlign="center">{title}</ModalHeader>
        )}
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        {footer && (
          <ModalFooter borderTopWidth="1px">{footer}</ModalFooter>
        )}
      </ModalContent>
    </ChakraModal>
  )
}

export default ModalTemplate
