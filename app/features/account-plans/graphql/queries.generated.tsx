import * as Types from '../../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetAccountPlansQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAccountPlansQuery = { __typename?: 'Query', accountPlans: { __typename?: 'AccountPlanConnection', nodes: Array<{ __typename?: 'AccountPlan', id: string, name: string, accountPlanType: Types.AccountPlanTypeEnum, costType: Types.CostTypeEnum }> } };


export const GetAccountPlansDocument = gql`
    query getAccountPlans {
  accountPlans {
    nodes {
      id
      name
      accountPlanType
      costType
    }
  }
}
    `;

/**
 * __useGetAccountPlansQuery__
 *
 * To run a query within a React component, call `useGetAccountPlansQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountPlansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountPlansQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAccountPlansQuery(baseOptions?: Apollo.QueryHookOptions<GetAccountPlansQuery, GetAccountPlansQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAccountPlansQuery, GetAccountPlansQueryVariables>(GetAccountPlansDocument, options);
      }
export function useGetAccountPlansLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAccountPlansQuery, GetAccountPlansQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAccountPlansQuery, GetAccountPlansQueryVariables>(GetAccountPlansDocument, options);
        }
export type GetAccountPlansQueryHookResult = ReturnType<typeof useGetAccountPlansQuery>;
export type GetAccountPlansLazyQueryHookResult = ReturnType<typeof useGetAccountPlansLazyQuery>;
export type GetAccountPlansQueryResult = Apollo.QueryResult<GetAccountPlansQuery, GetAccountPlansQueryVariables>;