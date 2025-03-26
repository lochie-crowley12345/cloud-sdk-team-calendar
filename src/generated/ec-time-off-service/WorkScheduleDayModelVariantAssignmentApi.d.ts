/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkScheduleDayModelVariantAssignment } from './WorkScheduleDayModelVariantAssignment';
import { WorkScheduleDayModelVariantAssignmentRequestBuilder } from './WorkScheduleDayModelVariantAssignmentRequestBuilder';
import { WorkScheduleDayModelApi } from './WorkScheduleDayModelApi';
import { WorkScheduleDayModelVariantIdentifierApi } from './WorkScheduleDayModelVariantIdentifierApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class WorkScheduleDayModelVariantAssignmentApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      WorkScheduleDayModelVariantAssignment<DeSerializersT>,
      DeSerializersT
    >
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      WorkScheduleDayModelApi<DeSerializersT>,
      WorkScheduleDayModelVariantIdentifierApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof WorkScheduleDayModelVariantAssignment;
  requestBuilder(): WorkScheduleDayModelVariantAssignmentRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    WorkScheduleDayModelVariantAssignment<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    WorkScheduleDayModelVariantAssignment<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof WorkScheduleDayModelVariantAssignment,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    WORK_SCHEDULE_DAY_MODEL_EXTERNAL_CODE: OrderableEdmTypeField<
      WorkScheduleDayModelVariantAssignment<
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
    CREATED_BY: OrderableEdmTypeField<
      WorkScheduleDayModelVariantAssignment<
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
      WorkScheduleDayModelVariantAssignment<
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
      WorkScheduleDayModelVariantAssignment<
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
      WorkScheduleDayModelVariantAssignment<
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
      WorkScheduleDayModelVariantAssignment<
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
      WorkScheduleDayModelVariantAssignment<
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
      WorkScheduleDayModelVariantAssignment<
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
    VARIANT_DAY_MODEL: OrderableEdmTypeField<
      WorkScheduleDayModelVariantAssignment<
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
    VARIANT_IDENTIFIER: OrderableEdmTypeField<
      WorkScheduleDayModelVariantAssignment<
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
     * Static representation of the one-to-one navigation property {@link variantDayModelNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VARIANT_DAY_MODEL_NAV: OneToOneLink<
      WorkScheduleDayModelVariantAssignment<DeSerializersT>,
      DeSerializersT,
      WorkScheduleDayModelApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link variantIdentifierNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VARIANT_IDENTIFIER_NAV: OneToOneLink<
      WorkScheduleDayModelVariantAssignment<DeSerializersT>,
      DeSerializersT,
      WorkScheduleDayModelVariantIdentifierApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      WorkScheduleDayModelVariantAssignment<
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
//# sourceMappingURL=WorkScheduleDayModelVariantAssignmentApi.d.ts.map
