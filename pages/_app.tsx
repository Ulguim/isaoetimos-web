import '../styles/globals.css'

import { ApolloProvider } from '@apollo/client'
import { getDataFromTree } from '@apollo/client/react/ssr'
import { apolloClient } from '@app/apollo'
import NoSsr from '@app/common/utils/no-ssr'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { ProSidebarProvider } from 'react-pro-sidebar'

import { client } from '../src/apollo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <ProSidebarProvider>
          <NoSsr>
            <Component {...pageProps} />
          </NoSsr>
        </ProSidebarProvider>
      </ChakraProvider>
    </ApolloProvider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {} as any
  const apolloState = { data: {} }
  const { AppTree } = ctx

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  if (typeof window === 'undefined') {
    if (ctx.res && (ctx.res.headersSent || ctx.res.finished)) {
      return pageProps
    }

    try {
      const props = {
        ...pageProps,
        apolloState,
        apollo: apolloClient,
      }
      const appTreeProps =
        'Component' in ctx ? props : { pageProps: props }
      await getDataFromTree(<AppTree {...appTreeProps} />)
    } catch (error) {
      console.error('GraphQL error occurred [getDataFromTree]', error)
    }

    apolloState.data = apolloClient.cache.extract()
  }

  return { pageProps }
}

export default MyApp
