/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { EmpTimeAccountBalanceApi } from './EmpTimeAccountBalanceApi';
/**
 * This class represents the entity "EmpTimeAccountBalance" of service "ECTimeOff".
 */
export declare class EmpTimeAccountBalance<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EmpTimeAccountBalanceType<T>
{
  readonly _entityApi: EmpTimeAccountBalanceApi<T>;
  /**
   * Technical entity name for EmpTimeAccountBalance.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the EmpTimeAccountBalance entity
   */
  static _keys: string[];
  /**
   * Account Closed.
   * @nullable
   */
  accountClosed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Balance.
   * @nullable
   */
  balance?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Time Account.
   */
  timeAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Time Account Type.
   * @nullable
   */
  timeAccountType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Unit.
   * @nullable
   */
  timeUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Id.
   * @nullable
   */
  userId?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: EmpTimeAccountBalanceApi<T>);
}
export interface EmpTimeAccountBalanceType<
  T extends DeSerializers = DefaultDeSerializers
> {
  accountClosed?: DeserializedType<T, 'Edm.Boolean'> | null;
  balance?: DeserializedType<T, 'Edm.Decimal'> | null;
  timeAccount: DeserializedType<T, 'Edm.String'>;
  timeAccountType?: DeserializedType<T, 'Edm.String'> | null;
  timeUnit?: DeserializedType<T, 'Edm.String'> | null;
  userId?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=EmpTimeAccountBalance.d.ts.map
