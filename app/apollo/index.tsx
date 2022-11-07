import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
  } from '@apollo/client'
  import { setContext } from '@apollo/client/link/context'

  
  // declare module 'apollo-upload-client'
  
//   const setAuthorizationLink = setContext(() => {
//     const token = parseCookies()?.['@reference:authToken']
//     if (token) {
//       return {
//         headers: {
//           authorization:
//             'Bearer ' + parseCookies()?.['@reference:authToken'],
//         },
//       }
//     }
//     return {}
//   })
  
//   const uploadLink = createUploadLink({
//     uri: process.env.NEXT_PUBLIC_API_URL,
//     fetch: fetch,
//   })
  
  export const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    ssrMode: true,
    // link: setAuthorizationLink.concat(uploadLink),
  })
  
  export const CustomApolloProvider = ({ children }) => {
    return (
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    )
  }
  