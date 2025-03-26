/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * CoUserInfoElementBean
 */
export interface CoUserInfoElementBean<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * id.
   * @nullable
   */
  id?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * label.
   * @nullable
   */
  label?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * type.
   * @nullable
   */
  type?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * value.
   * @nullable
   */
  value?: DeserializedType<DeSerializersT, 'Edm.String'>;
}
/**
 * CoUserInfoElementBeanField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CoUserInfoElementBeanField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CoUserInfoElementBean,
  NullableT,
  SelectableT
> {
  private _fieldBuilder;
  /**
   * Representation of the {@link CoUserInfoElementBean.id} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.String', true, false>;
  /**
   * Representation of the {@link CoUserInfoElementBean.label} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  label: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link CoUserInfoElementBean.type} property for query construction.
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
   * Representation of the {@link CoUserInfoElementBean.value} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Creates an instance of CoUserInfoElementBeanField.
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
export declare namespace CoUserInfoElementBean {
  /**
   * Metadata information on all properties of the `CoUserInfoElementBean` complex type.
   */
  const _propertyMetadata: PropertyMetadata<CoUserInfoElementBean>[];
}
//# sourceMappingURL=CoUserInfoElementBean.d.ts.map
