/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PicklistOption } from './PicklistOption';
import { PicklistOptionRequestBuilder } from './PicklistOptionRequestBuilder';
import { PicklistApi } from './PicklistApi';
import { PicklistLabelApi } from './PicklistLabelApi';
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
export declare class PicklistOptionApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PicklistOption<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      PicklistOptionApi<DeSerializersT>,
      PicklistOptionApi<DeSerializersT>,
      PicklistApi<DeSerializersT>,
      PicklistLabelApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof PicklistOption;
  requestBuilder(): PicklistOptionRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    PicklistOption<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<PicklistOption<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof PicklistOption, DeSerializersT>;
  private _schema?;
  get schema(): {
    EXTERNAL_CODE: OrderableEdmTypeField<
      PicklistOption<
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
    ID: OrderableEdmTypeField<
      PicklistOption<
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
      false,
      true
    >;
    MAX_VALUE: OrderableEdmTypeField<
      PicklistOption<
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
      'Edm.Double',
      true,
      true
    >;
    MIN_VALUE: OrderableEdmTypeField<
      PicklistOption<
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
      'Edm.Double',
      true,
      true
    >;
    OPTION_VALUE: OrderableEdmTypeField<
      PicklistOption<
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
      'Edm.Double',
      true,
      true
    >;
    SORT_ORDER: OrderableEdmTypeField<
      PicklistOption<
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
      'Edm.Int32',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      PicklistOption<
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
     * Static representation of the one-to-many navigation property {@link childPicklistOptions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHILD_PICKLIST_OPTIONS: Link<
      PicklistOption<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentPicklistOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_PICKLIST_OPTION: OneToOneLink<
      PicklistOption<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link picklist} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PICKLIST: OneToOneLink<
      PicklistOption<DeSerializersT>,
      DeSerializersT,
      PicklistApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link picklistLabels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PICKLIST_LABELS: Link<
      PicklistOption<DeSerializersT>,
      DeSerializersT,
      PicklistLabelApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      PicklistOption<
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
//# sourceMappingURL=PicklistOptionApi.d.ts.map
