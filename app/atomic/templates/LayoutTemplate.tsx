import React, { useState } from 'react'

import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import {
  faArrowCircleLeft,
  faArrowCircleRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import router from 'next/router'
import { Menu, MenuItem, Sidebar, useProSidebar } from 'react-pro-sidebar'

import { menuItems } from '../organisms/MenuItem'

const LayoutTemplate: React.FC<any> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)
  const { collapseSidebar } = useProSidebar()
  const arrowIcon = isOpen ? faArrowCircleLeft : faArrowCircleRight

  const handleCollapseSidebar = () => {
    setIsOpen(!isOpen)
    collapseSidebar()
  }

  return (
    <Box bgColor={'#DEDEDE'}>
      <Box height={16} width={'100vw'} bgColor="#008836">
        <Box>
          <Image pt="5px" pl="10px" maxHeight={14} src="/Logo.svg" />
        </Box>
      </Box>
      <Box width={'100vw'} display="flex" height={'calc(100vh - 64px)'}>
        <Box
          color={'white'}
          display="flex"
          height={'calc(100vh - 64px)'}
          position="relative"
        >
          <Sidebar backgroundColor="#031C30">
            <Menu>
              {menuItems.map((item, index) => (
                <MenuItem
                  key={`${item.label}-${index}`}
                  onClick={() => router.push(item?.href)}
                  icon={item.icon}
                >
                  {' '}
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
            <Box
              display={'flex'}
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
        </Box>
        <Box width={'100%'}>{children}</Box>
      </Box>
    </Box>
  )
}

export default LayoutTemplate
