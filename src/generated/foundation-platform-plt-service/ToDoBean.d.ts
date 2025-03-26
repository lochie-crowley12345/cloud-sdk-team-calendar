/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ToDoEntryField } from './ToDoEntry';
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
 * ToDoBean
 */
export interface ToDoBean<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * categoryId.
   * @nullable
   */
  categoryId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * completedDate.
   * @nullable
   */
  completedDate?: DeserializedType<DeSerializersT, 'Edm.DateTime'>;
  /**
   * dueDate.
   * @nullable
   */
  dueDate?: DeserializedType<DeSerializersT, 'Edm.DateTime'>;
  /**
   * dueDateOffSet.
   * @nullable
   */
  dueDateOffSet?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * entries.
   * @nullable
   */
  entries?: DeserializedType<DeSerializersT, 'SFOData.ToDoEntry'>;
  /**
   * entryId.
   */
  entryId: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * name.
   * @nullable
   */
  name?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * status.
   * @nullable
   */
  status?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * statusLabel.
   * @nullable
   */
  statusLabel?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * stepDescAlt.
   * @nullable
   */
  stepDescAlt?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * todoItemId.
   * @nullable
   */
  todoItemId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * url.
   * @nullable
   */
  url?: DeserializedType<DeSerializersT, 'Edm.String'>;
}
/**
 * ToDoBeanField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ToDoBeanField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ToDoBean,
  NullableT,
  SelectableT
> {
  private _fieldBuilder;
  /**
   * Representation of the {@link ToDoBean.categoryId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  categoryId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link ToDoBean.completedDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  completedDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTime',
    true,
    false
  >;
  /**
   * Representation of the {@link ToDoBean.dueDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTime',
    true,
    false
  >;
  /**
   * Representation of the {@link ToDoBean.dueDateOffSet} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDateOffSet: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  >;
  /**
   * Representation of the {@link ToDoBean.entries} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  entries: ToDoEntryField<EntityT, DeSerializersT, true, false>;
  /**
   * Representation of the {@link ToDoBean.entryId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  entryId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    false,
    false
  >;
  /**
   * Representation of the {@link ToDoBean.name} property for query construction.
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
   * Representation of the {@link ToDoBean.status} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  >;
  /**
   * Representation of the {@link ToDoBean.statusLabel} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statusLabel: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link ToDoBean.stepDescAlt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stepDescAlt: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link ToDoBean.todoItemId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  todoItemId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link ToDoBean.url} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  url: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Creates an instance of ToDoBeanField.
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
export declare namespace ToDoBean {
  /**
   * Metadata information on all properties of the `ToDoBean` complex type.
   */
  const _propertyMetadata: PropertyMetadata<ToDoBean>[];
}
//# sourceMappingURL=ToDoBean.d.ts.map
