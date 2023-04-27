import * as Types from '../../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateOneAccountPlanMutationVariables = Types.Exact<{
  input: Types.CreateOneAccountPlanInput;
}>;


export type CreateOneAccountPlanMutation = { __typename?: 'Mutation', createOneAccountPlan: { __typename?: 'AccountPlan', id: string, name: string, accountPlanType: Types.AccountPlanTypeEnum, costType: Types.CostTypeEnum } };

export type DeleteOneAccountPlanMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type DeleteOneAccountPlanMutation = { __typename?: 'Mutation', deleteOneAccountPlan: { __typename?: 'AccountPlanDeleteResponse', id?: string | null } };

export type UpdateOneAccountPlanMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  update: Types.UpdateAccountPlanInput;
}>;


export type UpdateOneAccountPlanMutation = { __typename?: 'Mutation', updateOneAccountPlan: { __typename?: 'AccountPlan', id: string, name: string, accountPlanType: Types.AccountPlanTypeEnum, costType: Types.CostTypeEnum } };


export const CreateOneAccountPlanDocument = gql`
    mutation createOneAccountPlan($input: CreateOneAccountPlanInput!) {
  createOneAccountPlan(input: $input) {
    id
    name
    accountPlanType
    costType
  }
}
    `;
export type CreateOneAccountPlanMutationFn = Apollo.MutationFunction<CreateOneAccountPlanMutation, CreateOneAccountPlanMutationVariables>;

/**
 * __useCreateOneAccountPlanMutation__
 *
 * To run a mutation, you first call `useCreateOneAccountPlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneAccountPlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneAccountPlanMutation, { data, loading, error }] = useCreateOneAccountPlanMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneAccountPlanMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneAccountPlanMutation, CreateOneAccountPlanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneAccountPlanMutation, CreateOneAccountPlanMutationVariables>(CreateOneAccountPlanDocument, options);
      }
export type CreateOneAccountPlanMutationHookResult = ReturnType<typeof useCreateOneAccountPlanMutation>;
export type CreateOneAccountPlanMutationResult = Apollo.MutationResult<CreateOneAccountPlanMutation>;
export type CreateOneAccountPlanMutationOptions = Apollo.BaseMutationOptions<CreateOneAccountPlanMutation, CreateOneAccountPlanMutationVariables>;
export const DeleteOneAccountPlanDocument = gql`
    mutation deleteOneAccountPlan($id: ID!) {
  deleteOneAccountPlan(input: {id: $id}) {
    id
  }
}
    `;
export type DeleteOneAccountPlanMutationFn = Apollo.MutationFunction<DeleteOneAccountPlanMutation, DeleteOneAccountPlanMutationVariables>;

/**
 * __useDeleteOneAccountPlanMutation__
 *
 * To run a mutation, you first call `useDeleteOneAccountPlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneAccountPlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneAccountPlanMutation, { data, loading, error }] = useDeleteOneAccountPlanMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOneAccountPlanMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneAccountPlanMutation, DeleteOneAccountPlanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneAccountPlanMutation, DeleteOneAccountPlanMutationVariables>(DeleteOneAccountPlanDocument, options);
      }
export type DeleteOneAccountPlanMutationHookResult = ReturnType<typeof useDeleteOneAccountPlanMutation>;
export type DeleteOneAccountPlanMutationResult = Apollo.MutationResult<DeleteOneAccountPlanMutation>;
export type DeleteOneAccountPlanMutationOptions = Apollo.BaseMutationOptions<DeleteOneAccountPlanMutation, DeleteOneAccountPlanMutationVariables>;
export const UpdateOneAccountPlanDocument = gql`
    mutation updateOneAccountPlan($id: ID!, $update: UpdateAccountPlanInput!) {
  updateOneAccountPlan(input: {id: $id, update: $update}) {
    id
    name
    accountPlanType
    costType
  }
}
    `;
export type UpdateOneAccountPlanMutationFn = Apollo.MutationFunction<UpdateOneAccountPlanMutation, UpdateOneAccountPlanMutationVariables>;

/**
 * __useUpdateOneAccountPlanMutation__
 *
 * To run a mutation, you first call `useUpdateOneAccountPlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneAccountPlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneAccountPlanMutation, { data, loading, error }] = useUpdateOneAccountPlanMutation({
 *   variables: {
 *      id: // value for 'id'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdateOneAccountPlanMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneAccountPlanMutation, UpdateOneAccountPlanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneAccountPlanMutation, UpdateOneAccountPlanMutationVariables>(UpdateOneAccountPlanDocument, options);
      }
export type UpdateOneAccountPlanMutationHookResult = ReturnType<typeof useUpdateOneAccountPlanMutation>;
export type UpdateOneAccountPlanMutationResult = Apollo.MutationResult<UpdateOneAccountPlanMutation>;
export type UpdateOneAccountPlanMutationOptions = Apollo.BaseMutationOptions<UpdateOneAccountPlanMutation, UpdateOneAccountPlanMutationVariables>;