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
import type { ExtAddressInfoApi } from './ExtAddressInfoApi';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
/**
 * This class represents the entity "ExtAddressInfo" of service "FoundationPlatformPLT".
 */
export declare class ExtAddressInfo<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExtAddressInfoType<T>
{
  readonly _entityApi: ExtAddressInfoApi<T>;
  /**
   * Technical entity name for ExtAddressInfo.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the ExtAddressInfo entity
   */
  static _keys: string[];
  /**
   * address1.
   * Maximum length: 1536.
   * @nullable
   */
  address1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * address2.
   * Maximum length: 1536.
   * @nullable
   */
  address2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * addressId.
   */
  addressId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * addressType.
   * Maximum length: 30.
   * @nullable
   */
  addressType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * city.
   * Maximum length: 1536.
   * @nullable
   */
  city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * country.
   * Maximum length: 256.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * province.
   * Maximum length: 1536.
   * @nullable
   */
  province?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * state.
   * Maximum length: 1536.
   * @nullable
   */
  state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * zipCode.
   * Maximum length: 1536.
   * @nullable
   */
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link PicklistOption} entity.
   */
  addressTypeNav?: PicklistOption<T> | null;
  constructor(_entityApi: ExtAddressInfoApi<T>);
}
export interface ExtAddressInfoType<
  T extends DeSerializers = DefaultDeSerializers
> {
  address1?: DeserializedType<T, 'Edm.String'> | null;
  address2?: DeserializedType<T, 'Edm.String'> | null;
  addressId: DeserializedType<T, 'Edm.Int64'>;
  addressType?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  province?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  addressTypeNav?: PicklistOptionType<T> | null;
}
//# sourceMappingURL=ExtAddressInfo.d.ts.map
