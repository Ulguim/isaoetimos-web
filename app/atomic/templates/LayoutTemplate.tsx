import React from 'react'

import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import router from 'next/router'
import {
  Menu,
  MenuItem,
  Sidebar,
  useProSidebar,
} from 'react-pro-sidebar'

import { menuItems } from '../organisms/MenuItem'

const LayoutTemplate: React.FC<any> = ({ children }) => {
  const { collapseSidebar } = useProSidebar()

  return (
    <Box bgColor={'#DEDEDE'}>
      <Box height={16} width={'100vw'} bgColor="#008836">
        <Box>
          <Image pt="5px" pl="10px" maxHeight={14} src="/Logo.svg" />
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
        >
          <Sidebar backgroundColor="#031C30">
            <Menu>
              {
                menuItems.map(itens => (
                  // eslint-disable-next-line react/jsx-key
                  <MenuItem
                    onClick={() => router.push(itens?.href)}
                    icon={itens.icon}
                  >
                    {' '}
                    {itens.label}
                  </MenuItem>
                )) // eslint-disable-next-line react/jsx-indent-props
              }
            </Menu>
            <Box
              display={'flex'}
              width={'100%'}
              justifyContent="center"
            >
              <main style={{ bottom: '5px', position: 'fixed' }}>
                <button onClick={() => collapseSidebar()}>
                  <FontAwesomeIcon icon={faArrowCircleLeft} />
                </button>
              </main>
            </Box>
          </Sidebar>
        </Box>
        <Box width={'100%'}>{children}</Box>
      </Box>
    </Box>
  )
}

export default LayoutTemplate
