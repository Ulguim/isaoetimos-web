import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client'

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  ssrMode: true,
})

export const CustomApolloProvider = ({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
  )
}
