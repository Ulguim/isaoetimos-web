import * as Types from '../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type LoginMutationVariables = Types.Exact<{
  data: Types.AuthInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', token: string, user: { __typename?: 'User', id: string, name: string } } };

export type IsTokenValidQueryVariables = Types.Exact<{
  token: Types.Scalars['String'];
}>;


export type IsTokenValidQuery = { __typename?: 'Query', isTokenValid: { __typename?: 'TokenValidType', valid: boolean } };


export const LoginDocument = gql`
    mutation login($data: AuthInput!) {
  login(data: $data) {
    user {
      id
      name
    }
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const IsTokenValidDocument = gql`
    query isTokenValid($token: String!) {
  isTokenValid(token: $token) {
    valid
  }
}
    `;

/**
 * __useIsTokenValidQuery__
 *
 * To run a query within a React component, call `useIsTokenValidQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsTokenValidQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsTokenValidQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useIsTokenValidQuery(baseOptions: Apollo.QueryHookOptions<IsTokenValidQuery, IsTokenValidQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsTokenValidQuery, IsTokenValidQueryVariables>(IsTokenValidDocument, options);
      }
export function useIsTokenValidLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsTokenValidQuery, IsTokenValidQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsTokenValidQuery, IsTokenValidQueryVariables>(IsTokenValidDocument, options);
        }
export type IsTokenValidQueryHookResult = ReturnType<typeof useIsTokenValidQuery>;
export type IsTokenValidLazyQueryHookResult = ReturnType<typeof useIsTokenValidLazyQuery>;
export type IsTokenValidQueryResult = Apollo.QueryResult<IsTokenValidQuery, IsTokenValidQueryVariables>;