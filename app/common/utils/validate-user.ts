import { useIsTokenValidLazyQuery } from '@app/features/auth/mutation.generated'

export const useValidateToken = async (ctx, token: string) => {
  const [load, { data, called }] = useIsTokenValidLazyQuery({
    variables: {
      token,
    },
  })

  if (!token) {
    ctx.res?.writeHead(302, { Location: '/auth/login' })
    ctx.res?.end()
    return
  }

  if (!called) {
    await load()
  }

  const res = data.isTokenValid.valid
  return !!res
}
