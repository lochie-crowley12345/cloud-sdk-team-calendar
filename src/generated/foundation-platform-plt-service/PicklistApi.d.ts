/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Picklist } from './Picklist';
import { PicklistRequestBuilder } from './PicklistRequestBuilder';
import { PicklistOptionApi } from './PicklistOptionApi';
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
export declare class PicklistApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Picklist<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [PicklistOptionApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof Picklist;
  requestBuilder(): PicklistRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<Picklist<DeSerializersT>, DeSerializersT>;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<Picklist<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Picklist, DeSerializersT>;
  private _schema?;
  get schema(): {
    PICKLIST_ID: OrderableEdmTypeField<
      Picklist<
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
    /**
     * Static representation of the one-to-many navigation property {@link picklistOptions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PICKLIST_OPTIONS: Link<
      Picklist<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      Picklist<
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
//# sourceMappingURL=PicklistApi.d.ts.map
