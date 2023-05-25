import * as Types from '../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetCashFlowQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCashFlowQuery = { __typename?: 'Query', gerenateCashFlowByAccount: Array<{ __typename?: 'CashFlowData', type: string, cashFlows: Array<{ __typename?: 'AccountPlan', id: string, name: string, accountPlanType: Types.AccountPlanTypeEnum, costType: Types.CostTypeEnum, createdAt?: any | null, deletedAt?: any | null, updatedAt?: any | null, finances?: { __typename?: 'AccountPlanFinancesConnection', nodes: Array<{ __typename?: 'Finances', id: string, value: number, issuedate: any, supplierAndCustomer?: { __typename?: 'SuppliersAndCustomer', id: string, name?: string | null } | null }> } | null }> }> };


export const GetCashFlowDocument = gql`
    query getCashFlow {
  gerenateCashFlowByAccount {
    type
    cashFlows {
      id
      name
      accountPlanType
      costType
      createdAt
      deletedAt
      updatedAt
      finances {
        nodes {
          id
          value
          issuedate
          supplierAndCustomer {
            id
            name
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetCashFlowQuery__
 *
 * To run a query within a React component, call `useGetCashFlowQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCashFlowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCashFlowQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCashFlowQuery(baseOptions?: Apollo.QueryHookOptions<GetCashFlowQuery, GetCashFlowQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCashFlowQuery, GetCashFlowQueryVariables>(GetCashFlowDocument, options);
      }
export function useGetCashFlowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCashFlowQuery, GetCashFlowQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCashFlowQuery, GetCashFlowQueryVariables>(GetCashFlowDocument, options);
        }
export type GetCashFlowQueryHookResult = ReturnType<typeof useGetCashFlowQuery>;
export type GetCashFlowLazyQueryHookResult = ReturnType<typeof useGetCashFlowLazyQuery>;
export type GetCashFlowQueryResult = Apollo.QueryResult<GetCashFlowQuery, GetCashFlowQueryVariables>;