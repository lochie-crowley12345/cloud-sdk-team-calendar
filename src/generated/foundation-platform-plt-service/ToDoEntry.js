"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoEntry = exports.ToDoEntryField = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * ToDoEntryField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class ToDoEntryField extends odata_v2_1.ComplexTypeField {
    /**
     * Creates an instance of ToDoEntryField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, ToDoEntry, fieldOptions);
        this._fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
        /**
         * Representation of the {@link ToDoEntry.completedDate} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.completedDate = this._fieldBuilder.buildEdmTypeField('completedDate', 'Edm.DateTime', true);
        /**
         * Representation of the {@link ToDoEntry.formDataId} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.formDataId = this._fieldBuilder.buildEdmTypeField('formDataId', 'Edm.Int64', true);
        /**
         * Representation of the {@link ToDoEntry.status} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.status = this._fieldBuilder.buildEdmTypeField('status', 'Edm.Int32', true);
        /**
         * Representation of the {@link ToDoEntry.statusLabel} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.statusLabel = this._fieldBuilder.buildEdmTypeField('statusLabel', 'Edm.String', true);
        /**
         * Representation of the {@link ToDoEntry.subjectFullName} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.subjectFullName = this._fieldBuilder.buildEdmTypeField('subjectFullName', 'Edm.String', true);
        /**
         * Representation of the {@link ToDoEntry.subjectId} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.subjectId = this._fieldBuilder.buildEdmTypeField('subjectId', 'Edm.String', true);
        /**
         * Representation of the {@link ToDoEntry.url} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.url = this._fieldBuilder.buildEdmTypeField('url', 'Edm.String', true);
    }
}
exports.ToDoEntryField = ToDoEntryField;
var ToDoEntry;
(function (ToDoEntry) {
    /**
     * Metadata information on all properties of the `ToDoEntry` complex type.
     */
    ToDoEntry._propertyMetadata = [
        {
            originalName: 'completedDate',
            name: 'completedDate',
            type: 'Edm.DateTime',
            isCollection: false
        },
        {
            originalName: 'formDataId',
            name: 'formDataId',
            type: 'Edm.Int64',
            isCollection: false
        },
        {
            originalName: 'status',
            name: 'status',
            type: 'Edm.Int32',
            isCollection: false
        },
        {
            originalName: 'statusLabel',
            name: 'statusLabel',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'subjectFullName',
            name: 'subjectFullName',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'subjectId',
            name: 'subjectId',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'url',
            name: 'url',
            type: 'Edm.String',
            isCollection: false
        }
    ];
})(ToDoEntry = exports.ToDoEntry || (exports.ToDoEntry = {}));
//# sourceMappingURL=ToDoEntry.js.map