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
import type { ExternalLearnerEmailInfoApi } from './ExternalLearnerEmailInfoApi';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
/**
 * This class represents the entity "ExternalLearnerEmailInfo" of service "FoundationPlatformPLT".
 */
export declare class ExternalLearnerEmailInfo<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExternalLearnerEmailInfoType<T>
{
  readonly _entityApi: ExternalLearnerEmailInfoApi<T>;
  /**
   * Technical entity name for ExternalLearnerEmailInfo.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the ExternalLearnerEmailInfo entity
   */
  static _keys: string[];
  /**
   * Email Address.
   * Maximum length: 100.
   * @nullable
   */
  emailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email Type.
   * Maximum length: 38.
   * @nullable
   */
  emailType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Primary.
   * @nullable
   */
  isPrimary?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * is_deleted.
   * @nullable
   */
  isDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * itemId.
   */
  itemId: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * One-to-one navigation property to the {@link PicklistOption} entity.
   */
  emailTypeNav?: PicklistOption<T> | null;
  constructor(_entityApi: ExternalLearnerEmailInfoApi<T>);
}
export interface ExternalLearnerEmailInfoType<
  T extends DeSerializers = DefaultDeSerializers
> {
  emailAddress?: DeserializedType<T, 'Edm.String'> | null;
  emailType?: DeserializedType<T, 'Edm.String'> | null;
  isPrimary?: DeserializedType<T, 'Edm.Boolean'> | null;
  isDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  itemId: DeserializedType<T, 'Edm.Decimal'>;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  emailTypeNav?: PicklistOptionType<T> | null;
}
//# sourceMappingURL=ExternalLearnerEmailInfo.d.ts.map
