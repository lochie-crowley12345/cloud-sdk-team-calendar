"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessibilityPreferences = exports.AccessibilityPreferencesField = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * AccessibilityPreferencesField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class AccessibilityPreferencesField extends odata_v2_1.ComplexTypeField {
    /**
     * Creates an instance of AccessibilityPreferencesField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, AccessibilityPreferences, fieldOptions);
        this._fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
        /**
         * Representation of the {@link AccessibilityPreferences.blindnessSupport} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.blindnessSupport = this._fieldBuilder.buildEdmTypeField('blindnessSupport', 'Edm.Boolean', true);
        /**
         * Representation of the {@link AccessibilityPreferences.colorVisionType} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.colorVisionType = this._fieldBuilder.buildEdmTypeField('colorVisionType', 'Edm.String', true);
        /**
         * Representation of the {@link AccessibilityPreferences.keyboardOnlyNavigation} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.keyboardOnlyNavigation = this._fieldBuilder.buildEdmTypeField('keyboardOnlyNavigation', 'Edm.Boolean', true);
        /**
         * Representation of the {@link AccessibilityPreferences.lowVisionType} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.lowVisionType = this._fieldBuilder.buildEdmTypeField('lowVisionType', 'Edm.String', true);
    }
}
exports.AccessibilityPreferencesField = AccessibilityPreferencesField;
var AccessibilityPreferences;
(function (AccessibilityPreferences) {
    /**
     * Metadata information on all properties of the `AccessibilityPreferences` complex type.
     */
    AccessibilityPreferences._propertyMetadata = [
        {
            originalName: 'blindnessSupport',
            name: 'blindnessSupport',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'colorVisionType',
            name: 'colorVisionType',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'keyboardOnlyNavigation',
            name: 'keyboardOnlyNavigation',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'lowVisionType',
            name: 'lowVisionType',
            type: 'Edm.String',
            isCollection: false
        }
    ];
})(AccessibilityPreferences = exports.AccessibilityPreferences || (exports.AccessibilityPreferences = {}));
//# sourceMappingURL=AccessibilityPreferences.js.map