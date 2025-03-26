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
import type { ExtPersonalInfoApi } from './ExtPersonalInfoApi';
/**
 * This class represents the entity "ExtPersonalInfo" of service "FoundationPlatformPLT".
 */
export declare class ExtPersonalInfo<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExtPersonalInfoType<T>
{
  readonly _entityApi: ExtPersonalInfoApi<T>;
  /**
   * Technical entity name for ExtPersonalInfo.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the ExtPersonalInfo entity
   */
  static _keys: string[];
  /**
   * First Name.
   * Maximum length: 128.
   * @nullable
   */
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Last Name.
   * Maximum length: 128.
   * @nullable
   */
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Middle Name.
   * Maximum length: 128.
   * @nullable
   */
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * personalInfoId.
   */
  personalInfoId: DeserializedType<T, 'Edm.Int64'>;
  constructor(_entityApi: ExtPersonalInfoApi<T>);
}
export interface ExtPersonalInfoType<
  T extends DeSerializers = DefaultDeSerializers
> {
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  personalInfoId: DeserializedType<T, 'Edm.Int64'>;
}
//# sourceMappingURL=ExtPersonalInfo.d.ts.map
