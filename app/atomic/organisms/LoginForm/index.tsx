import React from 'react'

import { TextField } from '@app/atomic/molecules/TextField'
import { Button, Flex } from '@chakra-ui/react'

import { useFormContextSelector } from '../FormProvider'

export const LoginForm = React.memo(() => {
  const handleSubmit: () => void = useFormContextSelector(
    s => s.handleSubmit,
  )
  return (
    <Flex
      flexDir="column"
      width={['80%', '80%', '60%']}
      padding={10}
      bg="white"
      borderRadius={10}
      alignItems="flex-end"
    >
      <TextField
        validate="email"
        label="Usuário"
        mb={6}
        name="email"
        type="email"
        labelProps={{ fontSize: 'md', fontWeight: 'bold' }}
        inputProps={{ size: 'lg' }}
      />
      <TextField
        validate="string"
        label="Senha"
        mb={6}
        name="password"
        type="password"
        labelProps={{ fontSize: 'md', fontWeight: 'bold' }}
        inputProps={{ size: 'lg' }}
        onKeyDown={e => {
          e.key === 'Enter' && handleSubmit()
        }}
      />
      {/* <CheckboxField name="rememberMe" label="Lembrar meu usuário" /> */}

      <Button
        onClick={handleSubmit}
        size="lg"
        bg="#008836"
        color="white"
        width="50%"
      >
        Entrar
      </Button>
    </Flex>
  )
})
