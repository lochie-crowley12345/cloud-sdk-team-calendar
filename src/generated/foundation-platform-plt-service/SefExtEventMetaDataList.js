"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SefExtEventMetaDataList = exports.SefExtEventMetaDataListField = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SefExtEventMetaData_1 = require("./SefExtEventMetaData");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * SefExtEventMetaDataListField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class SefExtEventMetaDataListField extends odata_v2_1.ComplexTypeField {
    /**
     * Creates an instance of SefExtEventMetaDataListField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, SefExtEventMetaDataList, fieldOptions);
        this._fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
        /**
         * Representation of the {@link SefExtEventMetaDataList.data} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.data = this._fieldBuilder.buildComplexTypeField('data', SefExtEventMetaData_1.SefExtEventMetaDataField, true);
        /**
         * Representation of the {@link SefExtEventMetaDataList.status} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.status = this._fieldBuilder.buildEdmTypeField('status', 'Edm.String', true);
        /**
         * Representation of the {@link SefExtEventMetaDataList.statusMsg} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.statusMsg = this._fieldBuilder.buildEdmTypeField('statusMsg', 'Edm.String', true);
    }
}
exports.SefExtEventMetaDataListField = SefExtEventMetaDataListField;
var SefExtEventMetaDataList;
(function (SefExtEventMetaDataList) {
    /**
     * Metadata information on all properties of the `SefExtEventMetaDataList` complex type.
     */
    SefExtEventMetaDataList._propertyMetadata = [
        {
            originalName: 'data',
            name: 'data',
            type: SefExtEventMetaData_1.SefExtEventMetaData,
            isCollection: false
        },
        {
            originalName: 'status',
            name: 'status',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'statusMsg',
            name: 'statusMsg',
            type: 'Edm.String',
            isCollection: false
        }
    ];
})(SefExtEventMetaDataList = exports.SefExtEventMetaDataList || (exports.SefExtEventMetaDataList = {}));
//# sourceMappingURL=SefExtEventMetaDataList.js.map