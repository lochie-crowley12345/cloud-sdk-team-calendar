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
import type { TimeAccountPurchaseProfilePayComponentAssignmentApi } from './TimeAccountPurchaseProfilePayComponentAssignmentApi';
/**
 * This class represents the entity "TimeAccountPurchaseProfilePayComponentAssignment" of service "ECTimeOff".
 */
export declare class TimeAccountPurchaseProfilePayComponentAssignment<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TimeAccountPurchaseProfilePayComponentAssignmentType<T>
{
  readonly _entityApi: TimeAccountPurchaseProfilePayComponentAssignmentApi<T>;
  /**
   * Technical entity name for TimeAccountPurchaseProfilePayComponentAssignment.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the TimeAccountPurchaseProfilePayComponentAssignment entity
   */
  static _keys: string[];
  /**
   * Time Account Purchase Profile_External Code.
   * Maximum length: 128.
   */
  timeAccountPurchaseProfileExternalCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   * @nullable
   */
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Modified Date.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deduction Pay Component Assignment.
   * Maximum length: 32.
   */
  payComponent: DeserializedType<T, 'Edm.String'>;
  constructor(
    _entityApi: TimeAccountPurchaseProfilePayComponentAssignmentApi<T>
  );
}
export interface TimeAccountPurchaseProfilePayComponentAssignmentType<
  T extends DeSerializers = DefaultDeSerializers
> {
  timeAccountPurchaseProfileExternalCode: DeserializedType<T, 'Edm.String'>;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  payComponent: DeserializedType<T, 'Edm.String'>;
}
//# sourceMappingURL=TimeAccountPurchaseProfilePayComponentAssignment.d.ts.map
