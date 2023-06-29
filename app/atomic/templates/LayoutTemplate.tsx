/* eslint-disable react-hooks/rules-of-hooks */
import React, { useMemo, useState } from 'react'

import { useAuthHook } from '@app/features/auth/hooks/useAuthHook'
import { Avatar, Box, Flex, Link, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import {
  Menu as ChakraMenu,
  MenuButton,
  MenuGroup as ChakraMenuGroup,
  MenuItem as ChakraMenuItem,
  MenuList,
} from '@chakra-ui/react'
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import {
  Menu,
  MenuItem,
  Sidebar,
  useProSidebar,
} from 'react-pro-sidebar'

import { menuItems } from '../organisms/MenuItem'

const LayoutTemplate: React.FC<any> = ({ children }) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)
  const { collapseSidebar } = useProSidebar()
  const arrowIcon = isOpen ? faArrowCircleLeft : faArrowCircleRight

  const handleCollapseSidebar = () => {
    setIsOpen(!isOpen)
    collapseSidebar()
  }
  const { logout } = useAuthHook()
  return (
    <Box bgColor={'#DEDEDE'}>
      <Box height={16} width={'100vw'} bgColor="#008836">
        <Box display="flex" flexDirection="row">
          <Image
            alt="Logo"
            pt="5px"
            pl="10px"
            maxHeight={14}
            src="/LogoWhite.svg"
          />
          <Box
            h={16}
            w="200px"
            display="flex"
            flexDirection="row"
            marginLeft="auto"
            backgroundColor="#031C30"
            justifyContent="center"
            alignContent="center"
          >
            <Flex width="100%" flexDirection="row">
              <ChakraMenu closeOnSelect={false}>
                <MenuButton
                  as={Box}
                  colorScheme="blue"
                  width="100%"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                >
                  <Flex
                    width="100%"
                    flexDirection="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                  >
                    <Avatar
                      name="Dan Abrahmov"
                      src="https://bit.ly/dan-abramov"
                    />
                    <Text color="white">UserName</Text>
                  </Flex>
                </MenuButton>
                <MenuList minWidth="240px">
                  <ChakraMenuGroup
                    display={['none', 'none', 'flex', 'flex']}
                    title="Menu"
                  >
                    {menuItems.map(item => (
                      <Link
                        display={['none', 'none', '']}
                        key={item.href}
                        href={item.href}
                      >
                        <ChakraMenuItem> {item.label}</ChakraMenuItem>
                      </Link>
                    ))}
                  </ChakraMenuGroup>
                  <ChakraMenuItem onClick={logout}>
                    Sair
                  </ChakraMenuItem>
                </MenuList>
              </ChakraMenu>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box
        width={'100vw'}
        display="flex"
        height={'calc(100vh - 64px)'}
      >
        <Box
          color={'white'}
          display="flex"
          height={'calc(100vh - 64px)'}
          position="relative"
        >
          <Flex display={['none', 'none', 'flex', 'flex']}>
            <Sidebar backgroundColor="#031C30">
              <Menu style={{ marginTop: '24px' }}>
                {menuItems.map((item, index) => {
                  const isActive = useMemo(
                    () => router.pathname.includes(item.href),
                    [item.href],
                  )

                  return (
                    <MenuItem
                      key={`${item.label}-${index}`}
                      onClick={() => {
                        if (item?.href) router.push(item.href)
                      }}
                      icon={item.icon}
                      style={{
                        background: isActive ? '#04345c' : 'unset',
                      }}
                    >
                      {' '}
                      {item.label}
                    </MenuItem>
                  )
                })}
              </Menu>
              <Image
                alt="Logo"
                pt="5px"
                maxHeight={14}
                marginInline="auto"
                src="/LogoWhite.svg"
              />
              <Box
                display={'flex'}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                cursor="pointer"
                bottom="0"
                w="100%"
                h="50px"
                onClick={() => handleCollapseSidebar()}
              >
                <FontAwesomeIcon icon={arrowIcon} />
              </Box>
            </Sidebar>
          </Flex>
        </Box>
        <Box
          id="scrollableDiv"
          width={'100%'}
          height="100%"
          overflow="auto"
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default LayoutTemplate
