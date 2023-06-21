import * as Types from '../../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetFinancesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetFinancesQuery = { __typename?: 'Query', finances: { __typename?: 'FinancesConnection', nodes: Array<{ __typename?: 'Finances', id: string, comments?: string | null, dueDate: any, issuedate: any, payDay?: any | null, paymentTerm: any, status: Types.FinaceStatusTypeEnum, value: number, createdAt?: any | null, updatedAt?: any | null, accountplan?: { __typename?: 'AccountPlan', id: string, accountPlanType: Types.AccountPlanTypeEnum, costType: Types.CostTypeEnum, name: string } | null, supplierAndCustomer?: { __typename?: 'SuppliersAndCustomer', id: string, name?: string | null, address: string, cpf: string, email?: string | null, phone: string } | null }> } };

export type GetFinancesForDarshboardQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.FinancesFilter>;
  sorting?: Types.InputMaybe<Array<Types.FinancesSort> | Types.FinancesSort>;
}>;


export type GetFinancesForDarshboardQuery = { __typename?: 'Query', finances: { __typename?: 'FinancesConnection', nodes: Array<{ __typename?: 'Finances', id: string, comments?: string | null, dueDate: any, issuedate: any, payDay?: any | null, paymentTerm: any, status: Types.FinaceStatusTypeEnum, value: number, createdAt?: any | null, updatedAt?: any | null, accountplan?: { __typename?: 'AccountPlan', id: string, accountPlanType: Types.AccountPlanTypeEnum, costType: Types.CostTypeEnum, name: string } | null, supplierAndCustomer?: { __typename?: 'SuppliersAndCustomer', id: string, name?: string | null, address: string, cpf: string, email?: string | null, phone: string } | null }> } };


export const GetFinancesDocument = gql`
    query getFinances {
  finances {
    nodes {
      id
      comments
      dueDate
      issuedate
      payDay
      paymentTerm
      status
      value
      createdAt
      updatedAt
      accountplan {
        id
        accountPlanType
        costType
        name
      }
      supplierAndCustomer {
        id
        name
        address
        cpf
        email
        phone
      }
    }
  }
}
    `;

/**
 * __useGetFinancesQuery__
 *
 * To run a query within a React component, call `useGetFinancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFinancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFinancesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFinancesQuery(baseOptions?: Apollo.QueryHookOptions<GetFinancesQuery, GetFinancesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFinancesQuery, GetFinancesQueryVariables>(GetFinancesDocument, options);
      }
export function useGetFinancesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFinancesQuery, GetFinancesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFinancesQuery, GetFinancesQueryVariables>(GetFinancesDocument, options);
        }
export type GetFinancesQueryHookResult = ReturnType<typeof useGetFinancesQuery>;
export type GetFinancesLazyQueryHookResult = ReturnType<typeof useGetFinancesLazyQuery>;
export type GetFinancesQueryResult = Apollo.QueryResult<GetFinancesQuery, GetFinancesQueryVariables>;
export const GetFinancesForDarshboardDocument = gql`
    query getFinancesForDarshboard($filter: FinancesFilter, $sorting: [FinancesSort!]) {
  finances(filter: $filter, sorting: $sorting) {
    nodes {
      id
      comments
      dueDate
      issuedate
      payDay
      paymentTerm
      status
      value
      createdAt
      updatedAt
      accountplan {
        id
        accountPlanType
        costType
        name
      }
      supplierAndCustomer {
        id
        name
        address
        cpf
        email
        phone
      }
    }
  }
}
    `;

/**
 * __useGetFinancesForDarshboardQuery__
 *
 * To run a query within a React component, call `useGetFinancesForDarshboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFinancesForDarshboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFinancesForDarshboardQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetFinancesForDarshboardQuery(baseOptions?: Apollo.QueryHookOptions<GetFinancesForDarshboardQuery, GetFinancesForDarshboardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFinancesForDarshboardQuery, GetFinancesForDarshboardQueryVariables>(GetFinancesForDarshboardDocument, options);
      }
export function useGetFinancesForDarshboardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFinancesForDarshboardQuery, GetFinancesForDarshboardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFinancesForDarshboardQuery, GetFinancesForDarshboardQueryVariables>(GetFinancesForDarshboardDocument, options);
        }
export type GetFinancesForDarshboardQueryHookResult = ReturnType<typeof useGetFinancesForDarshboardQuery>;
export type GetFinancesForDarshboardLazyQueryHookResult = ReturnType<typeof useGetFinancesForDarshboardLazyQuery>;
export type GetFinancesForDarshboardQueryResult = Apollo.QueryResult<GetFinancesForDarshboardQuery, GetFinancesForDarshboardQueryVariables>;