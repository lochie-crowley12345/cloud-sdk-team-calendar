/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserApi } from './UserApi';
import { UserPermissionsApi } from './UserPermissionsApi';
import {
  GetUserNameFormatParameters,
  GetPasswordPolicyParameters
} from './function-imports';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  DeSerializers,
  DefaultDeSerializers,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';
export declare function pltUserManagementService<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers?: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  >
): PltUserManagementService<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
>;
declare class PltUserManagementService<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis;
  private deSerializers;
  constructor(deSerializers: DeSerializersT);
  private initApi;
  get userApi(): UserApi<DeSerializersT>;
  get userPermissionsApi(): UserPermissionsApi<DeSerializersT>;
  /**
   * @deprecated Since v2.13.0. Use {@link operations} instead.
   */
  get functionImports(): {
    getUserNameFormat: (
      parameter: GetUserNameFormatParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
      DeSerializersT,
      GetUserNameFormatParameters<DeSerializersT>,
      string
    >;
    getPasswordPolicy: (
      parameter: GetPasswordPolicyParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
      DeSerializersT,
      GetPasswordPolicyParameters<DeSerializersT>,
      string
    >;
  };
  /**
   * Get unbound functions and actions.
   */
  get operations(): {
    getUserNameFormat: (
      parameter: GetUserNameFormatParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
      DeSerializersT,
      GetUserNameFormatParameters<DeSerializersT>,
      string
    >;
    getPasswordPolicy: (
      parameter: GetPasswordPolicyParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
      DeSerializersT,
      GetPasswordPolicyParameters<DeSerializersT>,
      string
    >;
  };
  get batch(): typeof batch;
  get changeset(): typeof changeset;
}
export {};
//# sourceMappingURL=service.d.ts.map
