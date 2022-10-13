import * as Types from '../../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetSuppliersAndCustomersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetSuppliersAndCustomersQuery = { __typename?: 'Query', suppliersAndCustomers: { __typename?: 'SuppliersAndCustomerConnection', nodes: Array<{ __typename?: 'SuppliersAndCustomer', id: string, address: string, cpf: string, createdAt?: any | null, updatedAt?: any | null, email?: string | null, name?: string | null, phone: string }> } };


export const GetSuppliersAndCustomersDocument = gql`
    query getSuppliersAndCustomers {
  suppliersAndCustomers {
    nodes {
      id
      address
      cpf
      createdAt
      updatedAt
      email
      name
      phone
    }
  }
}
    `;

/**
 * __useGetSuppliersAndCustomersQuery__
 *
 * To run a query within a React component, call `useGetSuppliersAndCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSuppliersAndCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSuppliersAndCustomersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSuppliersAndCustomersQuery(baseOptions?: Apollo.QueryHookOptions<GetSuppliersAndCustomersQuery, GetSuppliersAndCustomersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSuppliersAndCustomersQuery, GetSuppliersAndCustomersQueryVariables>(GetSuppliersAndCustomersDocument, options);
      }
export function useGetSuppliersAndCustomersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSuppliersAndCustomersQuery, GetSuppliersAndCustomersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSuppliersAndCustomersQuery, GetSuppliersAndCustomersQueryVariables>(GetSuppliersAndCustomersDocument, options);
        }
export type GetSuppliersAndCustomersQueryHookResult = ReturnType<typeof useGetSuppliersAndCustomersQuery>;
export type GetSuppliersAndCustomersLazyQueryHookResult = ReturnType<typeof useGetSuppliersAndCustomersLazyQuery>;
export type GetSuppliersAndCustomersQueryResult = Apollo.QueryResult<GetSuppliersAndCustomersQuery, GetSuppliersAndCustomersQueryVariables>;