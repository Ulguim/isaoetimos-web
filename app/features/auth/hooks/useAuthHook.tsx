import { useCallback } from 'react'

import { handleGraphQLError } from '@app/common/errors'
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { destroyCookie, setCookie } from 'nookies'

import {
  LoginMutationVariables,
  useLoginMutation,
} from '../mutation.generated'

export function useAuthHook() {
  const toast = useToast()

  const [login] = useLoginMutation({
    onError: error => {
      toast({
        title: 'Erro!',
        description: 'Usuário ou senha inválidos',
        status: 'error',
        position: 'top-right',
        id: error?.message,
        variant: 'left-accent',
        isClosable: true,
      })
    },
  })

  const router = useRouter()

  const authenticate = useCallback(
    async (variables: LoginMutationVariables) => {
      try {
        const { data } = await login({ variables })

        setCookie(null, '@easyRp:authToken', data.login.token, {
          maxAge: 31536000,
          path: '/',
        })

        return data
      } catch (error) {
        const message = handleGraphQLError(error)
        if (message) {
          toast({
            title: 'Erro!',
            description: message,
            status: 'error',
            position: 'top-right',
            id: message,
            variant: 'left-accent',
          })
        }
      }
    },
    [login, toast],
  )

  const logout = useCallback(() => {
    destroyCookie(null, '@easyRp:authToken')
    router.replace('/auth/login')
  }, [router])

  return {
    authenticate,
    logout,
  }
}
