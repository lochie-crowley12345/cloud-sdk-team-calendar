/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeManagementTerminationEndHandlingConfiguration } from './TimeManagementTerminationEndHandlingConfiguration';
import { TimeManagementTerminationEndHandlingConfigurationRequestBuilder } from './TimeManagementTerminationEndHandlingConfigurationRequestBuilder';
import { TimeManagementTerminationEndHandlingLegalEntityConfigurationApi } from './TimeManagementTerminationEndHandlingLegalEntityConfigurationApi';
import { TimeManagementTerminationEndHandlingExclusionApi } from './TimeManagementTerminationEndHandlingExclusionApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class TimeManagementTerminationEndHandlingConfigurationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializersT>,
      DeSerializersT
    >
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      TimeManagementTerminationEndHandlingLegalEntityConfigurationApi<DeSerializersT>,
      TimeManagementTerminationEndHandlingExclusionApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof TimeManagementTerminationEndHandlingConfiguration;
  requestBuilder(): TimeManagementTerminationEndHandlingConfigurationRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    TimeManagementTerminationEndHandlingConfiguration<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    TimeManagementTerminationEndHandlingConfiguration<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof TimeManagementTerminationEndHandlingConfiguration,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    ACTIVATION_STATUS: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingConfiguration<
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
    AUTOMATION_LEVEL_OF_EMPLOYEE_TIME_PROCESSING: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingConfiguration<
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
    AUTOMATION_LEVEL_OF_TIME_ACCOUNT_CLOSING: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingConfiguration<
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
    CREATED_BY: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingConfiguration<
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
      TimeManagementTerminationEndHandlingConfiguration<
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
      TimeManagementTerminationEndHandlingConfiguration<
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
    EXCLUDES: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingConfiguration<
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
      TimeManagementTerminationEndHandlingConfiguration<
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
      TimeManagementTerminationEndHandlingConfiguration<
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
      TimeManagementTerminationEndHandlingConfiguration<
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
      TimeManagementTerminationEndHandlingConfiguration<
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
    OFFSET_IN_DAYS: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingConfiguration<
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
      'Edm.Int64',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link countryConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_CONFIGURATION: Link<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializersT>,
      DeSerializersT,
      TimeManagementTerminationEndHandlingLegalEntityConfigurationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link excludesNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCLUDES_NAV: OneToOneLink<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializersT>,
      DeSerializersT,
      TimeManagementTerminationEndHandlingExclusionApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      TimeManagementTerminationEndHandlingConfiguration<
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
//# sourceMappingURL=TimeManagementTerminationEndHandlingConfigurationApi.d.ts.map
