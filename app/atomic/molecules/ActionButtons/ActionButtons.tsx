import {
  Box,
  Button,
  ButtonProps,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

export const menuItemStyle: ButtonProps = {
  bg: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '10px',
  px: '15px',
  colorScheme: 'none',
  w: '100%',
  borderRadius: '0px',
}
const ActionButtons = ({
  onEdit,
  hasRemoveOption,
  hasEditOption,
  children,
}: {
  hasRemoveOption: boolean
  hasEditOption: boolean
  isAdminTable?: boolean
  onEdit?: () => void | Promise<void>
  onRemove?: () => void | Promise<void>
  children?: React.ReactNode
  isPlanOption?: boolean
}) => {
  const {
    isOpen: isOpenMenu,
    onClose: onCloseMenu,
    onOpen: onOpenMenu,
  } = useDisclosure()
  const { onClose, onOpen } = useDisclosure()

  return (
    <>
      <Box pos="relative">
        <Button px="0" colorScheme="none" onClick={onOpenMenu}>
          ...
        </Button>
        {isOpenMenu && (
          <Menu
            closeOnBlur={true}
            placement="bottom-end"
            isOpen={isOpenMenu}
            onClose={onCloseMenu}
          >
            <MenuButton
              left="15px"
              pos="absolute"
              w="10px"
              h="10px"
              top="15px"
            />
            <MenuList
              py="0px"
              borderRadius="2px"
              boxShadow="0px 0px 4px rgba(0, 0, 0, 0.25)"
              border="none"
              minW="150px"
              maxW="200px"
              overflow="hidden"
            >
              {children}
              {hasEditOption && (
                <Button
                  {...menuItemStyle}
                  _hover={{ bg: 'gray.200' }}
                  onClick={() => {
                    onEdit()
                    onClose()
                    onCloseMenu()
                  }}
                >
                  <Text fontSize={'14px'} lineHeight={'16px'}>
                    Editar
                  </Text>
                </Button>
              )}
              {hasRemoveOption && (
                <Button
                  {...menuItemStyle}
                  onClick={onOpen}
                  _hover={{ bg: 'gray.200' }}
                >
                  <Text fontSize={'14px'} lineHeight={'16px'}>
                    Remover
                  </Text>
                </Button>
              )}
            </MenuList>
          </Menu>
        )}
      </Box>
    </>
  )
}

export default ActionButtons
