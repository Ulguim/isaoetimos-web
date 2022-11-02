export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CreateManySuppliersAndCustomersInput = {
  /** Array of records to create */
  suppliersAndCustomers: Array<CreateSuppliersAndCustomer>;
};

export type CreateOneSuppliersAndCustomerInput = {
  /** The record to create */
  suppliersAndCustomer: CreateSuppliersAndCustomer;
};

export type CreateSuppliersAndCustomer = {
  address: Scalars['String'];
  cpf: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime'];
  upper: Scalars['DateTime'];
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int'];
};

export type DeleteManySuppliersAndCustomersInput = {
  /** Filter to find records to delete */
  filter: SuppliersAndCustomerDeleteFilter;
};

export type DeleteOneSuppliersAndCustomerInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  iLike?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  neq?: InputMaybe<Scalars['ID']>;
  notILike?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  notLike?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManySuppliersAndCustomers: Array<SuppliersAndCustomer>;
  createOneSuppliersAndCustomer: SuppliersAndCustomer;
  deleteManySuppliersAndCustomers: DeleteManyResponse;
  deleteOneSuppliersAndCustomer: SuppliersAndCustomerDeleteResponse;
  updateManySuppliersAndCustomers: UpdateManyResponse;
  updateOneSuppliersAndCustomer: SuppliersAndCustomer;
};


export type MutationCreateManySuppliersAndCustomersArgs = {
  input: CreateManySuppliersAndCustomersInput;
};


export type MutationCreateOneSuppliersAndCustomerArgs = {
  input: CreateOneSuppliersAndCustomerInput;
};


export type MutationDeleteManySuppliersAndCustomersArgs = {
  input: DeleteManySuppliersAndCustomersInput;
};


export type MutationDeleteOneSuppliersAndCustomerArgs = {
  input: DeleteOneSuppliersAndCustomerInput;
};


export type MutationUpdateManySuppliersAndCustomersArgs = {
  input: UpdateManySuppliersAndCustomersInput;
};


export type MutationUpdateOneSuppliersAndCustomerArgs = {
  input: UpdateOneSuppliersAndCustomerInput;
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  suppliersAndCustomer?: Maybe<SuppliersAndCustomer>;
  suppliersAndCustomers: SuppliersAndCustomerConnection;
};


export type QuerySuppliersAndCustomerArgs = {
  id: Scalars['ID'];
};


export type QuerySuppliersAndCustomersArgs = {
  filter?: InputMaybe<SuppliersAndCustomerFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SuppliersAndCustomerSort>>;
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  iLike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  notILike?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  notLike?: InputMaybe<Scalars['String']>;
};

export type SuppliersAndCustomer = {
  __typename?: 'SuppliersAndCustomer';
  address: Scalars['String'];
  cpf: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SuppliersAndCustomerAggregateGroupBy = {
  __typename?: 'SuppliersAndCustomerAggregateGroupBy';
  address?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SuppliersAndCustomerConnection = {
  __typename?: 'SuppliersAndCustomerConnection';
  /** Array of nodes. */
  nodes: Array<SuppliersAndCustomer>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type SuppliersAndCustomerCountAggregate = {
  __typename?: 'SuppliersAndCustomerCountAggregate';
  address?: Maybe<Scalars['Int']>;
  cpf?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type SuppliersAndCustomerDeleteFilter = {
  address?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<SuppliersAndCustomerDeleteFilter>>;
  cpf?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SuppliersAndCustomerDeleteFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type SuppliersAndCustomerDeleteResponse = {
  __typename?: 'SuppliersAndCustomerDeleteResponse';
  address?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SuppliersAndCustomerFilter = {
  address?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<SuppliersAndCustomerFilter>>;
  cpf?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SuppliersAndCustomerFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type SuppliersAndCustomerMaxAggregate = {
  __typename?: 'SuppliersAndCustomerMaxAggregate';
  address?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SuppliersAndCustomerMinAggregate = {
  __typename?: 'SuppliersAndCustomerMinAggregate';
  address?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SuppliersAndCustomerSort = {
  direction: SortDirection;
  field: SuppliersAndCustomerSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SuppliersAndCustomerSortFields {
  Address = 'address',
  Cpf = 'cpf',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Phone = 'phone',
  UpdatedAt = 'updatedAt'
}

export type SuppliersAndCustomerUpdateFilter = {
  address?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<SuppliersAndCustomerUpdateFilter>>;
  cpf?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SuppliersAndCustomerUpdateFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
};

export type UpdateManySuppliersAndCustomersInput = {
  /** Filter used to find fields to update */
  filter: SuppliersAndCustomerUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateSuppliersAndCustomerInput;
};

export type UpdateOneSuppliersAndCustomerInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateSuppliersAndCustomerInput;
};

export type UpdateSuppliersAndCustomerInput = {
  address?: InputMaybe<Scalars['String']>;
  cpf?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};
