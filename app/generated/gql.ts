/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "query getSuppliersAndCustomers {\n  suppliersAndCustomers {\n    nodes {\n      id\n      address\n      cpf\n      createdAt\n      updatedAt\n      email\n      name\n      phone\n    }\n  }\n}": types.GetSuppliersAndCustomersDocument,
};

export function graphql(source: "query getSuppliersAndCustomers {\n  suppliersAndCustomers {\n    nodes {\n      id\n      address\n      cpf\n      createdAt\n      updatedAt\n      email\n      name\n      phone\n    }\n  }\n}"): (typeof documents)["query getSuppliersAndCustomers {\n  suppliersAndCustomers {\n    nodes {\n      id\n      address\n      cpf\n      createdAt\n      updatedAt\n      email\n      name\n      phone\n    }\n  }\n}"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;