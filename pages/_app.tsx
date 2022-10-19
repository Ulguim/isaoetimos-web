import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { ProSidebarProvider } from 'react-pro-sidebar';
import { client } from '../src/apollo'

function MyApp({ Component, pageProps }:AppProps) {
return(

  <ApolloProvider client={client}>
    <ChakraProvider>
    <ProSidebarProvider>
      <Component {...pageProps} />
    </ProSidebarProvider>
    </ChakraProvider>
   </ApolloProvider>
   )
}

export default MyApp
