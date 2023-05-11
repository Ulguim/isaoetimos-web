import * as Types from '../../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateOneFinanceMutationVariables = Types.Exact<{
  input: Types.CreateOneFinancesInput;
}>;


export type CreateOneFinanceMutation = { __typename?: 'Mutation', createOneFinances: { __typename?: 'Finances', id: string, comments?: string | null, dueDate: any, issuedate: any, payDay?: any | null, paymentTerm: any, status: Types.FinaceStatusTypeEnum, value: number } };

export type DeleteOneFinanceMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type DeleteOneFinanceMutation = { __typename?: 'Mutation', deleteOneFinances: { __typename?: 'FinancesDeleteResponse', id?: string | null } };

export type UpdateOneFinanceMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  update: Types.UpdateFinanceInput;
}>;


export type UpdateOneFinanceMutation = { __typename?: 'Mutation', updateOneFinances: { __typename?: 'Finances', id: string, comments?: string | null, dueDate: any, issuedate: any, payDay?: any | null, paymentTerm: any, status: Types.FinaceStatusTypeEnum, value: number } };


export const CreateOneFinanceDocument = gql`
    mutation createOneFinance($input: CreateOneFinancesInput!) {
  createOneFinances(input: $input) {
    id
    comments
    dueDate
    issuedate
    payDay
    paymentTerm
    status
    value
  }
}
    `;
export type CreateOneFinanceMutationFn = Apollo.MutationFunction<CreateOneFinanceMutation, CreateOneFinanceMutationVariables>;

/**
 * __useCreateOneFinanceMutation__
 *
 * To run a mutation, you first call `useCreateOneFinanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneFinanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneFinanceMutation, { data, loading, error }] = useCreateOneFinanceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneFinanceMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneFinanceMutation, CreateOneFinanceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneFinanceMutation, CreateOneFinanceMutationVariables>(CreateOneFinanceDocument, options);
      }
export type CreateOneFinanceMutationHookResult = ReturnType<typeof useCreateOneFinanceMutation>;
export type CreateOneFinanceMutationResult = Apollo.MutationResult<CreateOneFinanceMutation>;
export type CreateOneFinanceMutationOptions = Apollo.BaseMutationOptions<CreateOneFinanceMutation, CreateOneFinanceMutationVariables>;
export const DeleteOneFinanceDocument = gql`
    mutation deleteOneFinance($id: ID!) {
  deleteOneFinances(input: {id: $id}) {
    id
  }
}
    `;
export type DeleteOneFinanceMutationFn = Apollo.MutationFunction<DeleteOneFinanceMutation, DeleteOneFinanceMutationVariables>;

/**
 * __useDeleteOneFinanceMutation__
 *
 * To run a mutation, you first call `useDeleteOneFinanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneFinanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneFinanceMutation, { data, loading, error }] = useDeleteOneFinanceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOneFinanceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneFinanceMutation, DeleteOneFinanceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneFinanceMutation, DeleteOneFinanceMutationVariables>(DeleteOneFinanceDocument, options);
      }
export type DeleteOneFinanceMutationHookResult = ReturnType<typeof useDeleteOneFinanceMutation>;
export type DeleteOneFinanceMutationResult = Apollo.MutationResult<DeleteOneFinanceMutation>;
export type DeleteOneFinanceMutationOptions = Apollo.BaseMutationOptions<DeleteOneFinanceMutation, DeleteOneFinanceMutationVariables>;
export const UpdateOneFinanceDocument = gql`
    mutation updateOneFinance($id: ID!, $update: UpdateFinanceInput!) {
  updateOneFinances(input: {id: $id, update: $update}) {
    id
    comments
    dueDate
    issuedate
    payDay
    paymentTerm
    status
    value
  }
}
    `;
export type UpdateOneFinanceMutationFn = Apollo.MutationFunction<UpdateOneFinanceMutation, UpdateOneFinanceMutationVariables>;

/**
 * __useUpdateOneFinanceMutation__
 *
 * To run a mutation, you first call `useUpdateOneFinanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneFinanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneFinanceMutation, { data, loading, error }] = useUpdateOneFinanceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdateOneFinanceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneFinanceMutation, UpdateOneFinanceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneFinanceMutation, UpdateOneFinanceMutationVariables>(UpdateOneFinanceDocument, options);
      }
export type UpdateOneFinanceMutationHookResult = ReturnType<typeof useUpdateOneFinanceMutation>;
export type UpdateOneFinanceMutationResult = Apollo.MutationResult<UpdateOneFinanceMutation>;
export type UpdateOneFinanceMutationOptions = Apollo.BaseMutationOptions<UpdateOneFinanceMutation, UpdateOneFinanceMutationVariables>;