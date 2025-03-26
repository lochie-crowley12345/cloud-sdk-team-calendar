/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SefEventEntityKeyField } from './SefEventEntityKey';
import { SefEventEntityParamField } from './SefEventEntityParam';
import {
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  Entity,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v2';
/**
 * SefExtEventMetaData
 */
export interface SefExtEventMetaData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * description.
   * @nullable
   */
  description?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * effectiveDated.
   * @nullable
   */
  effectiveDated?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * entity.
   * @nullable
   */
  entity?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * entityKeys.
   * @nullable
   */
  entityKeys?: DeserializedType<DeSerializersT, 'SFOData.SEFEventEntityKey'>;
  /**
   * name.
   * @nullable
   */
  name?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * params.
   * @nullable
   */
  params?: DeserializedType<DeSerializersT, 'SFOData.SEFEventEntityParam'>;
  /**
   * publisher.
   * @nullable
   */
  publisher?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * topic.
   * @nullable
   */
  topic?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * type.
   * @nullable
   */
  type?: DeserializedType<DeSerializersT, 'Edm.String'>;
}
/**
 * SefExtEventMetaDataField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SefExtEventMetaDataField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SefExtEventMetaData,
  NullableT,
  SelectableT
> {
  private _fieldBuilder;
  /**
   * Representation of the {@link SefExtEventMetaData.description} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link SefExtEventMetaData.effectiveDated} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveDated: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  >;
  /**
   * Representation of the {@link SefExtEventMetaData.entity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  entity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link SefExtEventMetaData.entityKeys} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  entityKeys: SefEventEntityKeyField<EntityT, DeSerializersT, true, false>;
  /**
   * Representation of the {@link SefExtEventMetaData.name} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link SefExtEventMetaData.params} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  params: SefEventEntityParamField<EntityT, DeSerializersT, true, false>;
  /**
   * Representation of the {@link SefExtEventMetaData.publisher} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  publisher: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link SefExtEventMetaData.topic} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  topic: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link SefExtEventMetaData.type} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Creates an instance of SefExtEventMetaDataField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  );
}
export declare namespace SefExtEventMetaData {
  /**
   * Metadata information on all properties of the `SefExtEventMetaData` complex type.
   */
  const _propertyMetadata: PropertyMetadata<SefExtEventMetaData>[];
}
//# sourceMappingURL=SefExtEventMetaData.d.ts.map
