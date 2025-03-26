"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SefEventEntityParam = exports.SefEventEntityParamField = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * SefEventEntityParamField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class SefEventEntityParamField extends odata_v2_1.ComplexTypeField {
    /**
     * Creates an instance of SefEventEntityParamField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, SefEventEntityParam, fieldOptions);
        this._fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
        /**
         * Representation of the {@link SefEventEntityParam.description} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.description = this._fieldBuilder.buildEdmTypeField('description', 'Edm.String', false);
        /**
         * Representation of the {@link SefEventEntityParam.descriptionMessageKey} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.descriptionMessageKey = this._fieldBuilder.buildEdmTypeField('descriptionMessageKey', 'Edm.String', false);
        /**
         * Representation of the {@link SefEventEntityParam.hasValueAlways} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.hasValueAlways = this._fieldBuilder.buildEdmTypeField('hasValueAlways', 'Edm.Boolean', true);
        /**
         * Representation of the {@link SefEventEntityParam.name} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.name = this._fieldBuilder.buildEdmTypeField('name', 'Edm.String', false);
        /**
         * Representation of the {@link SefEventEntityParam.type} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.type = this._fieldBuilder.buildEdmTypeField('type', 'Edm.String', false);
    }
}
exports.SefEventEntityParamField = SefEventEntityParamField;
var SefEventEntityParam;
(function (SefEventEntityParam) {
    /**
     * Metadata information on all properties of the `SefEventEntityParam` complex type.
     */
    SefEventEntityParam._propertyMetadata = [
        {
            originalName: 'description',
            name: 'description',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'descriptionMessageKey',
            name: 'descriptionMessageKey',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'hasValueAlways',
            name: 'hasValueAlways',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'name',
            name: 'name',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'type',
            name: 'type',
            type: 'Edm.String',
            isCollection: false
        }
    ];
})(SefEventEntityParam = exports.SefEventEntityParam || (exports.SefEventEntityParam = {}));
//# sourceMappingURL=SefEventEntityParam.js.map