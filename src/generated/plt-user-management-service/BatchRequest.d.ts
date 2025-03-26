/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  FunctionImportRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import {
  User,
  UserPermissions,
  GetUserNameFormatParameters,
  GetPasswordPolicyParameters
} from './index';
/**
 * Batch builder for operations supported on the Plt User Management Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export declare function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadPltUserManagementServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export declare function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadPltUserManagementServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
/**
 * Change set constructor consists of write operations supported on the Plt User Management Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export declare function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    WritePltUserManagementServiceRequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export declare function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WritePltUserManagementServiceRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare const defaultPltUserManagementServicePath = '/odata/v2';
export type ReadPltUserManagementServiceRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<User<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<UserPermissions<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<User<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<UserPermissions<DeSerializersT>, DeSerializersT>
  | FunctionImportRequestBuilder<
      DeSerializersT,
      GetUserNameFormatParameters<DeSerializersT>,
      string
    >
  | FunctionImportRequestBuilder<
      DeSerializersT,
      GetPasswordPolicyParameters<DeSerializersT>,
      string
    >;
export type WritePltUserManagementServiceRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<User<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<User<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<User<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<UserPermissions<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<UserPermissions<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<UserPermissions<DeSerializersT>, DeSerializersT>;
//# sourceMappingURL=BatchRequest.d.ts.map
