import React from 'react'

import { Box, Center, Flex, Img } from '@chakra-ui/react'

import { LoginForm } from '../organisms/LoginForm'

export const LoginTemplate = () => {
  return (
    <Flex>
      <Flex height="100vh" overflow="hidden" flex={1}>
        <Flex
          alignItems="center"
          justifyContent="center"
          padding={20}
          w="100%"
          bgSize={['100% 100%']}
        >
          <Box width="75%">
            <Img src="/LoginPage.jpg" />
          </Box>
        </Flex>
      </Flex>
      <Center minH="100vh" flexDir="column" flex={0.7} bg="#031C30">
        <Img px={20} mb={8} src="/Logo.svg" />
        <LoginForm />
      </Center>
    </Flex>
  )
}
