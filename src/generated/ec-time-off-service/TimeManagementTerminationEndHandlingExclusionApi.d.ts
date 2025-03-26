/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeManagementTerminationEndHandlingExclusion } from './TimeManagementTerminationEndHandlingExclusion';
import { TimeManagementTerminationEndHandlingExclusionRequestBuilder } from './TimeManagementTerminationEndHandlingExclusionRequestBuilder';
import { TimeManagementTerminationEndHandlingExcludedEventReasonApi } from './TimeManagementTerminationEndHandlingExcludedEventReasonApi';
import { TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi } from './TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export declare class TimeManagementTerminationEndHandlingExclusionApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TimeManagementTerminationEndHandlingExclusion<DeSerializersT>,
      DeSerializersT
    >
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      TimeManagementTerminationEndHandlingExcludedEventReasonApi<DeSerializersT>,
      TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof TimeManagementTerminationEndHandlingExclusion;
  requestBuilder(): TimeManagementTerminationEndHandlingExclusionRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    TimeManagementTerminationEndHandlingExclusion<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    TimeManagementTerminationEndHandlingExclusion<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof TimeManagementTerminationEndHandlingExclusion,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    CREATED_BY: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExclusion<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExclusion<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ENTITY_UUID: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExclusion<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExclusion<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExclusion<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExclusion<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExclusion<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link excludedEventReasons} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCLUDED_EVENT_REASONS: Link<
      TimeManagementTerminationEndHandlingExclusion<DeSerializersT>,
      DeSerializersT,
      TimeManagementTerminationEndHandlingExcludedEventReasonApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link excludedTimeAccountTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCLUDED_TIME_ACCOUNT_TYPES: Link<
      TimeManagementTerminationEndHandlingExclusion<DeSerializersT>,
      DeSerializersT,
      TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      TimeManagementTerminationEndHandlingExclusion<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >
    >;
  };
}
//# sourceMappingURL=TimeManagementTerminationEndHandlingExclusionApi.d.ts.map
