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

export type AccountPlan = {
  __typename?: 'AccountPlan';
  accountPlanType: AccountPlanTypeEnum;
  costType: CostTypeEnum;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  finances?: Maybe<AccountPlanFinancesConnection>;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type AccountPlanFinancesArgs = {
  filter?: InputMaybe<FinancesFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<FinancesSort>>;
};

export type AccountPlanAggregateGroupBy = {
  __typename?: 'AccountPlanAggregateGroupBy';
  accountPlanType?: Maybe<AccountPlanTypeEnum>;
  costType?: Maybe<CostTypeEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AccountPlanConnection = {
  __typename?: 'AccountPlanConnection';
  /** Array of nodes. */
  nodes: Array<AccountPlan>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type AccountPlanCountAggregate = {
  __typename?: 'AccountPlanCountAggregate';
  accountPlanType?: Maybe<Scalars['Int']>;
  costType?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type AccountPlanDeleteFilter = {
  accountPlanType?: InputMaybe<AccountPlanTypeEnumFilterComparison>;
  and?: InputMaybe<Array<AccountPlanDeleteFilter>>;
  costType?: InputMaybe<CostTypeEnumFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountPlanDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountPlanDeleteResponse = {
  __typename?: 'AccountPlanDeleteResponse';
  accountPlanType?: Maybe<AccountPlanTypeEnum>;
  costType?: Maybe<CostTypeEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AccountPlanFilter = {
  accountPlanType?: InputMaybe<AccountPlanTypeEnumFilterComparison>;
  and?: InputMaybe<Array<AccountPlanFilter>>;
  costType?: InputMaybe<CostTypeEnumFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  finances?: InputMaybe<AccountPlanFilterFinancesFilter>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountPlanFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AccountPlanFilterFinancesFilter = {
  and?: InputMaybe<Array<AccountPlanFilterFinancesFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dueDate?: InputMaybe<DateFieldComparison>;
  issuedate?: InputMaybe<DateFieldComparison>;
  or?: InputMaybe<Array<AccountPlanFilterFinancesFilter>>;
  payDay?: InputMaybe<DateFieldComparison>;
  paymentTerm?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<FinaceStatusTypeEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  value?: InputMaybe<NumberFieldComparison>;
};

export type AccountPlanFinancesConnection = {
  __typename?: 'AccountPlanFinancesConnection';
  /** Array of nodes. */
  nodes: Array<Finances>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type AccountPlanMaxAggregate = {
  __typename?: 'AccountPlanMaxAggregate';
  accountPlanType?: Maybe<AccountPlanTypeEnum>;
  costType?: Maybe<CostTypeEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AccountPlanMinAggregate = {
  __typename?: 'AccountPlanMinAggregate';
  accountPlanType?: Maybe<AccountPlanTypeEnum>;
  costType?: Maybe<CostTypeEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AccountPlanSort = {
  direction: SortDirection;
  field: AccountPlanSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AccountPlanSortFields {
  AccountPlanType = 'accountPlanType',
  CostType = 'costType',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type AccountPlanTypeEnumFilterComparison = {
  eq?: InputMaybe<AccountPlanTypeEnum>;
  gt?: InputMaybe<AccountPlanTypeEnum>;
  gte?: InputMaybe<AccountPlanTypeEnum>;
  iLike?: InputMaybe<AccountPlanTypeEnum>;
  in?: InputMaybe<Array<AccountPlanTypeEnum>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<AccountPlanTypeEnum>;
  lt?: InputMaybe<AccountPlanTypeEnum>;
  lte?: InputMaybe<AccountPlanTypeEnum>;
  neq?: InputMaybe<AccountPlanTypeEnum>;
  notILike?: InputMaybe<AccountPlanTypeEnum>;
  notIn?: InputMaybe<Array<AccountPlanTypeEnum>>;
  notLike?: InputMaybe<AccountPlanTypeEnum>;
};

export type AccountPlanUpdateFilter = {
  accountPlanType?: InputMaybe<AccountPlanTypeEnumFilterComparison>;
  and?: InputMaybe<Array<AccountPlanUpdateFilter>>;
  costType?: InputMaybe<CostTypeEnumFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AccountPlanUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AddFinancesToAccountPlanInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddFinancesToSuppliersAndCustomerInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type Auth = {
  __typename?: 'Auth';
  token: Scalars['String'];
  user: User;
};

export type AuthInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CostTypeEnumFilterComparison = {
  eq?: InputMaybe<CostTypeEnum>;
  gt?: InputMaybe<CostTypeEnum>;
  gte?: InputMaybe<CostTypeEnum>;
  iLike?: InputMaybe<CostTypeEnum>;
  in?: InputMaybe<Array<CostTypeEnum>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<CostTypeEnum>;
  lt?: InputMaybe<CostTypeEnum>;
  lte?: InputMaybe<CostTypeEnum>;
  neq?: InputMaybe<CostTypeEnum>;
  notILike?: InputMaybe<CostTypeEnum>;
  notIn?: InputMaybe<Array<CostTypeEnum>>;
  notLike?: InputMaybe<CostTypeEnum>;
};

export type CreateAccountPlan = {
  accountPlanType: AccountPlanTypeEnum;
  costType: CostTypeEnum;
  name: Scalars['String'];
};

export type CreateFinance = {
  accountplanId?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Scalars['String']>;
  dueDate: Scalars['DateTime'];
  issuedate: Scalars['DateTime'];
  payDay?: InputMaybe<Scalars['DateTime']>;
  paymentTerm: Scalars['DateTime'];
  status: FinaceStatusTypeEnum;
  supplierAndCustomerId?: InputMaybe<Scalars['String']>;
  value: Scalars['Float'];
};

export type CreateManyAccountPlansInput = {
  /** Array of records to create */
  accountPlans: Array<CreateAccountPlan>;
};

export type CreateManyFinancesInput = {
  /** Array of records to create */
  finances: Array<CreateFinance>;
};

export type CreateManySuppliersAndCustomersInput = {
  /** Array of records to create */
  suppliersAndCustomers: Array<CreateSuppliersAndCustomer>;
};

export type CreateManyUsersInput = {
  /** Array of records to create */
  users: Array<CreateUserInput>;
};

export type CreateOneAccountPlanInput = {
  /** The record to create */
  accountPlan: CreateAccountPlan;
};

export type CreateOneFinancesInput = {
  /** The record to create */
  finances: CreateFinance;
};

export type CreateOneSuppliersAndCustomerInput = {
  /** The record to create */
  suppliersAndCustomer: CreateSuppliersAndCustomer;
};

export type CreateOneUserInput = {
  /** The record to create */
  user: CreateUserInput;
};

export type CreateSuppliersAndCustomer = {
  address: Scalars['String'];
  cpf: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
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

export type DeleteManyAccountPlansInput = {
  /** Filter to find records to delete */
  filter: AccountPlanDeleteFilter;
};

export type DeleteManyFinancesInput = {
  /** Filter to find records to delete */
  filter: FinancesDeleteFilter;
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

export type DeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: UserDeleteFilter;
};

export type DeleteOneAccountPlanInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneFinancesInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneSuppliersAndCustomerInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneUserInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type FinaceStatusTypeEnumFilterComparison = {
  eq?: InputMaybe<FinaceStatusTypeEnum>;
  gt?: InputMaybe<FinaceStatusTypeEnum>;
  gte?: InputMaybe<FinaceStatusTypeEnum>;
  iLike?: InputMaybe<FinaceStatusTypeEnum>;
  in?: InputMaybe<Array<FinaceStatusTypeEnum>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<FinaceStatusTypeEnum>;
  lt?: InputMaybe<FinaceStatusTypeEnum>;
  lte?: InputMaybe<FinaceStatusTypeEnum>;
  neq?: InputMaybe<FinaceStatusTypeEnum>;
  notILike?: InputMaybe<FinaceStatusTypeEnum>;
  notIn?: InputMaybe<Array<FinaceStatusTypeEnum>>;
  notLike?: InputMaybe<FinaceStatusTypeEnum>;
};

export type Finances = {
  __typename?: 'Finances';
  accountplan?: Maybe<AccountPlan>;
  comments?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  dueDate: Scalars['DateTime'];
  id: Scalars['ID'];
  issuedate: Scalars['DateTime'];
  payDay?: Maybe<Scalars['DateTime']>;
  paymentTerm: Scalars['DateTime'];
  status: FinaceStatusTypeEnum;
  supplierAndCustomer?: Maybe<SuppliersAndCustomer>;
  updatedAt: Scalars['DateTime'];
  value: Scalars['Float'];
};

export type FinancesAggregateGroupBy = {
  __typename?: 'FinancesAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  issuedate?: Maybe<Scalars['DateTime']>;
  payDay?: Maybe<Scalars['DateTime']>;
  paymentTerm?: Maybe<Scalars['DateTime']>;
  status?: Maybe<FinaceStatusTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
};

export type FinancesAvgAggregate = {
  __typename?: 'FinancesAvgAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type FinancesConnection = {
  __typename?: 'FinancesConnection';
  /** Array of nodes. */
  nodes: Array<Finances>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type FinancesCountAggregate = {
  __typename?: 'FinancesCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  dueDate?: Maybe<Scalars['Int']>;
  issuedate?: Maybe<Scalars['Int']>;
  payDay?: Maybe<Scalars['Int']>;
  paymentTerm?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type FinancesDeleteFilter = {
  and?: InputMaybe<Array<FinancesDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dueDate?: InputMaybe<DateFieldComparison>;
  issuedate?: InputMaybe<DateFieldComparison>;
  or?: InputMaybe<Array<FinancesDeleteFilter>>;
  payDay?: InputMaybe<DateFieldComparison>;
  paymentTerm?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<FinaceStatusTypeEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  value?: InputMaybe<NumberFieldComparison>;
};

export type FinancesDeleteResponse = {
  __typename?: 'FinancesDeleteResponse';
  comments?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  issuedate?: Maybe<Scalars['DateTime']>;
  payDay?: Maybe<Scalars['DateTime']>;
  paymentTerm?: Maybe<Scalars['DateTime']>;
  status?: Maybe<FinaceStatusTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
};

export type FinancesFilter = {
  accountplan?: InputMaybe<FinancesFilterAccountPlanFilter>;
  and?: InputMaybe<Array<FinancesFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dueDate?: InputMaybe<DateFieldComparison>;
  issuedate?: InputMaybe<DateFieldComparison>;
  or?: InputMaybe<Array<FinancesFilter>>;
  payDay?: InputMaybe<DateFieldComparison>;
  paymentTerm?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<FinaceStatusTypeEnumFilterComparison>;
  supplierAndCustomer?: InputMaybe<FinancesFilterSuppliersAndCustomerFilter>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  value?: InputMaybe<NumberFieldComparison>;
};

export type FinancesFilterAccountPlanFilter = {
  accountPlanType?: InputMaybe<AccountPlanTypeEnumFilterComparison>;
  and?: InputMaybe<Array<FinancesFilterAccountPlanFilter>>;
  costType?: InputMaybe<CostTypeEnumFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FinancesFilterAccountPlanFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FinancesFilterSuppliersAndCustomerFilter = {
  address?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<FinancesFilterSuppliersAndCustomerFilter>>;
  cpf?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FinancesFilterSuppliersAndCustomerFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FinancesMaxAggregate = {
  __typename?: 'FinancesMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  issuedate?: Maybe<Scalars['DateTime']>;
  payDay?: Maybe<Scalars['DateTime']>;
  paymentTerm?: Maybe<Scalars['DateTime']>;
  status?: Maybe<FinaceStatusTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
};

export type FinancesMinAggregate = {
  __typename?: 'FinancesMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  issuedate?: Maybe<Scalars['DateTime']>;
  payDay?: Maybe<Scalars['DateTime']>;
  paymentTerm?: Maybe<Scalars['DateTime']>;
  status?: Maybe<FinaceStatusTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
};

export type FinancesSort = {
  direction: SortDirection;
  field: FinancesSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FinancesSortFields {
  CreatedAt = 'createdAt',
  DueDate = 'dueDate',
  Issuedate = 'issuedate',
  PayDay = 'payDay',
  PaymentTerm = 'paymentTerm',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  Value = 'value'
}

export type FinancesSumAggregate = {
  __typename?: 'FinancesSumAggregate';
  value?: Maybe<Scalars['Float']>;
};

export type FinancesUpdateFilter = {
  and?: InputMaybe<Array<FinancesUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dueDate?: InputMaybe<DateFieldComparison>;
  issuedate?: InputMaybe<DateFieldComparison>;
  or?: InputMaybe<Array<FinancesUpdateFilter>>;
  payDay?: InputMaybe<DateFieldComparison>;
  paymentTerm?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<FinaceStatusTypeEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  value?: InputMaybe<NumberFieldComparison>;
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
  addFinancesToAccountPlan: AccountPlan;
  addFinancesToSuppliersAndCustomer: SuppliersAndCustomer;
  createManyAccountPlans: Array<AccountPlan>;
  createManyFinances: Array<Finances>;
  createManySuppliersAndCustomers: Array<SuppliersAndCustomer>;
  createManyUsers: Array<User>;
  createOneAccountPlan: AccountPlan;
  createOneFinances: Finances;
  createOneSuppliersAndCustomer: SuppliersAndCustomer;
  createOneUser: User;
  deleteManyAccountPlans: DeleteManyResponse;
  deleteManyFinances: DeleteManyResponse;
  deleteManySuppliersAndCustomers: DeleteManyResponse;
  deleteManyUsers: DeleteManyResponse;
  deleteOneAccountPlan: AccountPlanDeleteResponse;
  deleteOneFinances: FinancesDeleteResponse;
  deleteOneSuppliersAndCustomer: SuppliersAndCustomerDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  login: Auth;
  removeAccountplanFromFinances: Finances;
  removeFinancesFromAccountPlan: AccountPlan;
  removeFinancesFromSuppliersAndCustomer: SuppliersAndCustomer;
  removeSupplierAndCustomerFromFinances: Finances;
  setAccountplanOnFinances: Finances;
  setFinancesOnAccountPlan: AccountPlan;
  setFinancesOnSuppliersAndCustomer: SuppliersAndCustomer;
  setSupplierAndCustomerOnFinances: Finances;
  updateManyAccountPlans: UpdateManyResponse;
  updateManyFinances: UpdateManyResponse;
  updateManySuppliersAndCustomers: UpdateManyResponse;
  updateManyUsers: UpdateManyResponse;
  updateOneAccountPlan: AccountPlan;
  updateOneFinances: Finances;
  updateOneSuppliersAndCustomer: SuppliersAndCustomer;
  updateOneUser: User;
};


export type MutationAddFinancesToAccountPlanArgs = {
  input: AddFinancesToAccountPlanInput;
};


export type MutationAddFinancesToSuppliersAndCustomerArgs = {
  input: AddFinancesToSuppliersAndCustomerInput;
};


export type MutationCreateManyAccountPlansArgs = {
  input: CreateManyAccountPlansInput;
};


export type MutationCreateManyFinancesArgs = {
  input: CreateManyFinancesInput;
};


export type MutationCreateManySuppliersAndCustomersArgs = {
  input: CreateManySuppliersAndCustomersInput;
};


export type MutationCreateManyUsersArgs = {
  input: CreateManyUsersInput;
};


export type MutationCreateOneAccountPlanArgs = {
  input: CreateOneAccountPlanInput;
};


export type MutationCreateOneFinancesArgs = {
  input: CreateOneFinancesInput;
};


export type MutationCreateOneSuppliersAndCustomerArgs = {
  input: CreateOneSuppliersAndCustomerInput;
};


export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};


export type MutationDeleteManyAccountPlansArgs = {
  input: DeleteManyAccountPlansInput;
};


export type MutationDeleteManyFinancesArgs = {
  input: DeleteManyFinancesInput;
};


export type MutationDeleteManySuppliersAndCustomersArgs = {
  input: DeleteManySuppliersAndCustomersInput;
};


export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};


export type MutationDeleteOneAccountPlanArgs = {
  input: DeleteOneAccountPlanInput;
};


export type MutationDeleteOneFinancesArgs = {
  input: DeleteOneFinancesInput;
};


export type MutationDeleteOneSuppliersAndCustomerArgs = {
  input: DeleteOneSuppliersAndCustomerInput;
};


export type MutationDeleteOneUserArgs = {
  input: DeleteOneUserInput;
};


export type MutationLoginArgs = {
  data: AuthInput;
};


export type MutationRemoveAccountplanFromFinancesArgs = {
  input: RemoveAccountplanFromFinancesInput;
};


export type MutationRemoveFinancesFromAccountPlanArgs = {
  input: RemoveFinancesFromAccountPlanInput;
};


export type MutationRemoveFinancesFromSuppliersAndCustomerArgs = {
  input: RemoveFinancesFromSuppliersAndCustomerInput;
};


export type MutationRemoveSupplierAndCustomerFromFinancesArgs = {
  input: RemoveSupplierAndCustomerFromFinancesInput;
};


export type MutationSetAccountplanOnFinancesArgs = {
  input: SetAccountplanOnFinancesInput;
};


export type MutationSetFinancesOnAccountPlanArgs = {
  input: SetFinancesOnAccountPlanInput;
};


export type MutationSetFinancesOnSuppliersAndCustomerArgs = {
  input: SetFinancesOnSuppliersAndCustomerInput;
};


export type MutationSetSupplierAndCustomerOnFinancesArgs = {
  input: SetSupplierAndCustomerOnFinancesInput;
};


export type MutationUpdateManyAccountPlansArgs = {
  input: UpdateManyAccountPlansInput;
};


export type MutationUpdateManyFinancesArgs = {
  input: UpdateManyFinancesInput;
};


export type MutationUpdateManySuppliersAndCustomersArgs = {
  input: UpdateManySuppliersAndCustomersInput;
};


export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUsersInput;
};


export type MutationUpdateOneAccountPlanArgs = {
  input: UpdateOneAccountPlanInput;
};


export type MutationUpdateOneFinancesArgs = {
  input: UpdateOneFinancesInput;
};


export type MutationUpdateOneSuppliersAndCustomerArgs = {
  input: UpdateOneSuppliersAndCustomerInput;
};


export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
};

export type NumberFieldComparison = {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float'];
  upper: Scalars['Float'];
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
  accountPlan?: Maybe<AccountPlan>;
  accountPlans: AccountPlanConnection;
  finances: FinancesConnection;
  isTokenValid: TokenValidType;
  suppliersAndCustomer?: Maybe<SuppliersAndCustomer>;
  suppliersAndCustomers: SuppliersAndCustomerConnection;
  user?: Maybe<User>;
  users: UserConnection;
};


export type QueryAccountPlanArgs = {
  id: Scalars['ID'];
};


export type QueryAccountPlansArgs = {
  filter?: InputMaybe<AccountPlanFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<AccountPlanSort>>;
};


export type QueryFinancesArgs = {
  filter?: InputMaybe<FinancesFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<FinancesSort>>;
};


export type QueryIsTokenValidArgs = {
  token: Scalars['String'];
};


export type QuerySuppliersAndCustomerArgs = {
  id: Scalars['ID'];
};


export type QuerySuppliersAndCustomersArgs = {
  filter?: InputMaybe<SuppliersAndCustomerFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SuppliersAndCustomerSort>>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<UserSort>>;
};

export type RemoveAccountplanFromFinancesInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RemoveFinancesFromAccountPlanInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveFinancesFromSuppliersAndCustomerInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveSupplierAndCustomerFromFinancesInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetAccountplanOnFinancesInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetFinancesOnAccountPlanInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetFinancesOnSuppliersAndCustomerInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetSupplierAndCustomerOnFinancesInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
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
  finances?: Maybe<SuppliersAndCustomerFinancesConnection>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type SuppliersAndCustomerFinancesArgs = {
  filter?: InputMaybe<FinancesFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<FinancesSort>>;
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
  finances?: InputMaybe<SuppliersAndCustomerFilterFinancesFilter>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SuppliersAndCustomerFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type SuppliersAndCustomerFilterFinancesFilter = {
  and?: InputMaybe<Array<SuppliersAndCustomerFilterFinancesFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  dueDate?: InputMaybe<DateFieldComparison>;
  issuedate?: InputMaybe<DateFieldComparison>;
  or?: InputMaybe<Array<SuppliersAndCustomerFilterFinancesFilter>>;
  payDay?: InputMaybe<DateFieldComparison>;
  paymentTerm?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<FinaceStatusTypeEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  value?: InputMaybe<NumberFieldComparison>;
};

export type SuppliersAndCustomerFinancesConnection = {
  __typename?: 'SuppliersAndCustomerFinancesConnection';
  /** Array of nodes. */
  nodes: Array<Finances>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
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

export type TokenValidType = {
  __typename?: 'TokenValidType';
  valid: Scalars['Boolean'];
};

export type UpdateAccountPlanInput = {
  accountPlanType?: InputMaybe<AccountPlanTypeEnum>;
  costType?: InputMaybe<CostTypeEnum>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateFinanceInput = {
  accountplanId?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  issuedate?: InputMaybe<Scalars['DateTime']>;
  payDay?: InputMaybe<Scalars['DateTime']>;
  paymentTerm?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<FinaceStatusTypeEnum>;
  supplierAndCustomerId?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type UpdateManyAccountPlansInput = {
  /** Filter used to find fields to update */
  filter: AccountPlanUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateAccountPlanInput;
};

export type UpdateManyFinancesInput = {
  /** Filter used to find fields to update */
  filter: FinancesUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateFinanceInput;
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

export type UpdateManyUsersInput = {
  /** Filter used to find fields to update */
  filter: UserUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateUserInput;
};

export type UpdateOneAccountPlanInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateAccountPlanInput;
};

export type UpdateOneFinancesInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateFinanceInput;
};

export type UpdateOneSuppliersAndCustomerInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateSuppliersAndCustomerInput;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateUserInput;
};

export type UpdateSuppliersAndCustomerInput = {
  address?: InputMaybe<Scalars['String']>;
  cpf?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  password: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserAggregateGroupBy = {
  __typename?: 'UserAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  /** Array of nodes. */
  nodes: Array<User>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type UserDeleteFilter = {
  and?: InputMaybe<Array<UserDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type UserUpdateFilter = {
  and?: InputMaybe<Array<UserUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export enum AccountPlanTypeEnum {
  Fixed = 'FIXED',
  Variable = 'VARIABLE'
}

export enum CostTypeEnum {
  Income = 'INCOME',
  Outcome = 'OUTCOME'
}

export enum FinaceStatusTypeEnum {
  Open = 'OPEN',
  Paid = 'PAID'
}
