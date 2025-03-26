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
 * AccessibilityPreferences
 */
export interface AccessibilityPreferences<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * blindnessSupport.
   * @nullable
   */
  blindnessSupport?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * colorVisionType.
   * @nullable
   */
  colorVisionType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * keyboardOnlyNavigation.
   * @nullable
   */
  keyboardOnlyNavigation?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * lowVisionType.
   * @nullable
   */
  lowVisionType?: DeserializedType<DeSerializersT, 'Edm.String'>;
}
/**
 * AccessibilityPreferencesField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AccessibilityPreferencesField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  AccessibilityPreferences,
  NullableT,
  SelectableT
> {
  private _fieldBuilder;
  /**
   * Representation of the {@link AccessibilityPreferences.blindnessSupport} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  blindnessSupport: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  >;
  /**
   * Representation of the {@link AccessibilityPreferences.colorVisionType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  colorVisionType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link AccessibilityPreferences.keyboardOnlyNavigation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyboardOnlyNavigation: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  >;
  /**
   * Representation of the {@link AccessibilityPreferences.lowVisionType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lowVisionType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Creates an instance of AccessibilityPreferencesField.
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
export declare namespace AccessibilityPreferences {
  /**
   * Metadata information on all properties of the `AccessibilityPreferences` complex type.
   */
  const _propertyMetadata: PropertyMetadata<AccessibilityPreferences>[];
}
//# sourceMappingURL=AccessibilityPreferences.d.ts.map
