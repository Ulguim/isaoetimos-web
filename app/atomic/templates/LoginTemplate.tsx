import React from 'react'

import { Box, Center, Flex, Img } from '@chakra-ui/react'

import { LoginForm } from '../organisms/LoginForm'

export const LoginTemplate = () => {
  return (
    <Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        padding={20}
        w="100%"
        bgSize={['100% 100%']}
        height="100vh"
        overflow="hidden"
        flex={1}
        display={['none', 'none', 'flex']}
      >
        <Flex alignItems="center" justifyContent="center" w="100%">
          <Box width={['100%', '75%', '75%']}>
            <Img src="/LoginPage.jpg" />
          </Box>
        </Flex>
      </Flex>
      <Center
        width={['100%', '', '']}
        minH="100vh"
        flexDir="column"
        flex={[1, 1, 0.7]}
        bg="#031C30"
      >
        <Img px={[0, 0, 20]} mb={8} src="/Logo.svg" />
        <LoginForm />
      </Center>
    </Flex>
  )
}
