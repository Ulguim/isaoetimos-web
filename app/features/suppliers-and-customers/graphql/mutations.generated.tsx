import * as Types from '../../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateOneSuppliersAndCustomerMutationVariables = Types.Exact<{
  input: Types.CreateOneSuppliersAndCustomerInput;
}>;


export type CreateOneSuppliersAndCustomerMutation = { __typename?: 'Mutation', createOneSuppliersAndCustomer: { __typename?: 'SuppliersAndCustomer', id: string, address: string, cpf: string, email?: string | null, phone: string } };

export type DeleteOneSuppliersAndCustomerMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type DeleteOneSuppliersAndCustomerMutation = { __typename?: 'Mutation', deleteOneSuppliersAndCustomer: { __typename?: 'SuppliersAndCustomerDeleteResponse', id?: string | null } };

export type UpdateOneSuppliersAndCustomerMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  update: Types.UpdateSuppliersAndCustomerInput;
}>;


export type UpdateOneSuppliersAndCustomerMutation = { __typename?: 'Mutation', updateOneSuppliersAndCustomer: { __typename?: 'SuppliersAndCustomer', id: string, address: string, cpf: string, email?: string | null, phone: string } };


export const CreateOneSuppliersAndCustomerDocument = gql`
    mutation createOneSuppliersAndCustomer($input: CreateOneSuppliersAndCustomerInput!) {
  createOneSuppliersAndCustomer(input: $input) {
    id
    address
    cpf
    email
    phone
  }
}
    `;
export type CreateOneSuppliersAndCustomerMutationFn = Apollo.MutationFunction<CreateOneSuppliersAndCustomerMutation, CreateOneSuppliersAndCustomerMutationVariables>;

/**
 * __useCreateOneSuppliersAndCustomerMutation__
 *
 * To run a mutation, you first call `useCreateOneSuppliersAndCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneSuppliersAndCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneSuppliersAndCustomerMutation, { data, loading, error }] = useCreateOneSuppliersAndCustomerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneSuppliersAndCustomerMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneSuppliersAndCustomerMutation, CreateOneSuppliersAndCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneSuppliersAndCustomerMutation, CreateOneSuppliersAndCustomerMutationVariables>(CreateOneSuppliersAndCustomerDocument, options);
      }
export type CreateOneSuppliersAndCustomerMutationHookResult = ReturnType<typeof useCreateOneSuppliersAndCustomerMutation>;
export type CreateOneSuppliersAndCustomerMutationResult = Apollo.MutationResult<CreateOneSuppliersAndCustomerMutation>;
export type CreateOneSuppliersAndCustomerMutationOptions = Apollo.BaseMutationOptions<CreateOneSuppliersAndCustomerMutation, CreateOneSuppliersAndCustomerMutationVariables>;
export const DeleteOneSuppliersAndCustomerDocument = gql`
    mutation deleteOneSuppliersAndCustomer($id: ID!) {
  deleteOneSuppliersAndCustomer(input: {id: $id}) {
    id
  }
}
    `;
export type DeleteOneSuppliersAndCustomerMutationFn = Apollo.MutationFunction<DeleteOneSuppliersAndCustomerMutation, DeleteOneSuppliersAndCustomerMutationVariables>;

/**
 * __useDeleteOneSuppliersAndCustomerMutation__
 *
 * To run a mutation, you first call `useDeleteOneSuppliersAndCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneSuppliersAndCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneSuppliersAndCustomerMutation, { data, loading, error }] = useDeleteOneSuppliersAndCustomerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOneSuppliersAndCustomerMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneSuppliersAndCustomerMutation, DeleteOneSuppliersAndCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneSuppliersAndCustomerMutation, DeleteOneSuppliersAndCustomerMutationVariables>(DeleteOneSuppliersAndCustomerDocument, options);
      }
export type DeleteOneSuppliersAndCustomerMutationHookResult = ReturnType<typeof useDeleteOneSuppliersAndCustomerMutation>;
export type DeleteOneSuppliersAndCustomerMutationResult = Apollo.MutationResult<DeleteOneSuppliersAndCustomerMutation>;
export type DeleteOneSuppliersAndCustomerMutationOptions = Apollo.BaseMutationOptions<DeleteOneSuppliersAndCustomerMutation, DeleteOneSuppliersAndCustomerMutationVariables>;
export const UpdateOneSuppliersAndCustomerDocument = gql`
    mutation updateOneSuppliersAndCustomer($id: ID!, $update: UpdateSuppliersAndCustomerInput!) {
  updateOneSuppliersAndCustomer(input: {id: $id, update: $update}) {
    id
    address
    cpf
    email
    phone
  }
}
    `;
export type UpdateOneSuppliersAndCustomerMutationFn = Apollo.MutationFunction<UpdateOneSuppliersAndCustomerMutation, UpdateOneSuppliersAndCustomerMutationVariables>;

/**
 * __useUpdateOneSuppliersAndCustomerMutation__
 *
 * To run a mutation, you first call `useUpdateOneSuppliersAndCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneSuppliersAndCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneSuppliersAndCustomerMutation, { data, loading, error }] = useUpdateOneSuppliersAndCustomerMutation({
 *   variables: {
 *      id: // value for 'id'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdateOneSuppliersAndCustomerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneSuppliersAndCustomerMutation, UpdateOneSuppliersAndCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneSuppliersAndCustomerMutation, UpdateOneSuppliersAndCustomerMutationVariables>(UpdateOneSuppliersAndCustomerDocument, options);
      }
export type UpdateOneSuppliersAndCustomerMutationHookResult = ReturnType<typeof useUpdateOneSuppliersAndCustomerMutation>;
export type UpdateOneSuppliersAndCustomerMutationResult = Apollo.MutationResult<UpdateOneSuppliersAndCustomerMutation>;
export type UpdateOneSuppliersAndCustomerMutationOptions = Apollo.BaseMutationOptions<UpdateOneSuppliersAndCustomerMutation, UpdateOneSuppliersAndCustomerMutationVariables>;