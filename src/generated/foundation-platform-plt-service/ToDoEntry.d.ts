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
 * ToDoEntry
 */
export interface ToDoEntry<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * completedDate.
   * @nullable
   */
  completedDate?: DeserializedType<DeSerializersT, 'Edm.DateTime'>;
  /**
   * formDataId.
   * @nullable
   */
  formDataId?: DeserializedType<DeSerializersT, 'Edm.Int64'>;
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
   * subjectFullName.
   * @nullable
   */
  subjectFullName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * subjectId.
   * @nullable
   */
  subjectId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * url.
   * @nullable
   */
  url?: DeserializedType<DeSerializersT, 'Edm.String'>;
}
/**
 * ToDoEntryField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ToDoEntryField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ToDoEntry,
  NullableT,
  SelectableT
> {
  private _fieldBuilder;
  /**
   * Representation of the {@link ToDoEntry.completedDate} property for query construction.
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
   * Representation of the {@link ToDoEntry.formDataId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formDataId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int64',
    true,
    false
  >;
  /**
   * Representation of the {@link ToDoEntry.status} property for query construction.
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
   * Representation of the {@link ToDoEntry.statusLabel} property for query construction.
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
   * Representation of the {@link ToDoEntry.subjectFullName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subjectFullName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link ToDoEntry.subjectId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subjectId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link ToDoEntry.url} property for query construction.
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
   * Creates an instance of ToDoEntryField.
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
export declare namespace ToDoEntry {
  /**
   * Metadata information on all properties of the `ToDoEntry` complex type.
   */
  const _propertyMetadata: PropertyMetadata<ToDoEntry>[];
}
//# sourceMappingURL=ToDoEntry.d.ts.map
