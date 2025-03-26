"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SefExtEventMetaData = exports.SefExtEventMetaDataField = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SefEventEntityKey_1 = require("./SefEventEntityKey");
const SefEventEntityParam_1 = require("./SefEventEntityParam");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * SefExtEventMetaDataField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class SefExtEventMetaDataField extends odata_v2_1.ComplexTypeField {
    /**
     * Creates an instance of SefExtEventMetaDataField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, SefExtEventMetaData, fieldOptions);
        this._fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
        /**
         * Representation of the {@link SefExtEventMetaData.description} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.description = this._fieldBuilder.buildEdmTypeField('description', 'Edm.String', true);
        /**
         * Representation of the {@link SefExtEventMetaData.effectiveDated} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.effectiveDated = this._fieldBuilder.buildEdmTypeField('effectiveDated', 'Edm.Boolean', true);
        /**
         * Representation of the {@link SefExtEventMetaData.entity} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.entity = this._fieldBuilder.buildEdmTypeField('entity', 'Edm.String', true);
        /**
         * Representation of the {@link SefExtEventMetaData.entityKeys} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.entityKeys = this._fieldBuilder.buildComplexTypeField('entityKeys', SefEventEntityKey_1.SefEventEntityKeyField, true);
        /**
         * Representation of the {@link SefExtEventMetaData.name} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.name = this._fieldBuilder.buildEdmTypeField('name', 'Edm.String', true);
        /**
         * Representation of the {@link SefExtEventMetaData.params} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.params = this._fieldBuilder.buildComplexTypeField('params', SefEventEntityParam_1.SefEventEntityParamField, true);
        /**
         * Representation of the {@link SefExtEventMetaData.publisher} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.publisher = this._fieldBuilder.buildEdmTypeField('publisher', 'Edm.String', true);
        /**
         * Representation of the {@link SefExtEventMetaData.topic} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.topic = this._fieldBuilder.buildEdmTypeField('topic', 'Edm.String', true);
        /**
         * Representation of the {@link SefExtEventMetaData.type} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.type = this._fieldBuilder.buildEdmTypeField('type', 'Edm.String', true);
    }
}
exports.SefExtEventMetaDataField = SefExtEventMetaDataField;
var SefExtEventMetaData;
(function (SefExtEventMetaData) {
    /**
     * Metadata information on all properties of the `SefExtEventMetaData` complex type.
     */
    SefExtEventMetaData._propertyMetadata = [
        {
            originalName: 'description',
            name: 'description',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'effectiveDated',
            name: 'effectiveDated',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'entity',
            name: 'entity',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'entityKeys',
            name: 'entityKeys',
            type: SefEventEntityKey_1.SefEventEntityKey,
            isCollection: false
        },
        {
            originalName: 'name',
            name: 'name',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'params',
            name: 'params',
            type: SefEventEntityParam_1.SefEventEntityParam,
            isCollection: false
        },
        {
            originalName: 'publisher',
            name: 'publisher',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'topic',
            name: 'topic',
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
})(SefExtEventMetaData = exports.SefExtEventMetaData || (exports.SefExtEventMetaData = {}));
//# sourceMappingURL=SefExtEventMetaData.js.map