"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoBean = exports.ToDoBeanField = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ToDoEntry_1 = require("./ToDoEntry");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * ToDoBeanField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class ToDoBeanField extends odata_v2_1.ComplexTypeField {
    /**
     * Creates an instance of ToDoBeanField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, ToDoBean, fieldOptions);
        this._fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
        /**
         * Representation of the {@link ToDoBean.categoryId} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.categoryId = this._fieldBuilder.buildEdmTypeField('categoryId', 'Edm.String', true);
        /**
         * Representation of the {@link ToDoBean.completedDate} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.completedDate = this._fieldBuilder.buildEdmTypeField('completedDate', 'Edm.DateTime', true);
        /**
         * Representation of the {@link ToDoBean.dueDate} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.dueDate = this._fieldBuilder.buildEdmTypeField('dueDate', 'Edm.DateTime', true);
        /**
         * Representation of the {@link ToDoBean.dueDateOffSet} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.dueDateOffSet = this._fieldBuilder.buildEdmTypeField('dueDateOffSet', 'Edm.Int32', true);
        /**
         * Representation of the {@link ToDoBean.entries} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.entries = this._fieldBuilder.buildComplexTypeField('entries', ToDoEntry_1.ToDoEntryField, true);
        /**
         * Representation of the {@link ToDoBean.entryId} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.entryId = this._fieldBuilder.buildEdmTypeField('entryId', 'Edm.Int32', false);
        /**
         * Representation of the {@link ToDoBean.name} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.name = this._fieldBuilder.buildEdmTypeField('name', 'Edm.String', true);
        /**
         * Representation of the {@link ToDoBean.status} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.status = this._fieldBuilder.buildEdmTypeField('status', 'Edm.Int32', true);
        /**
         * Representation of the {@link ToDoBean.statusLabel} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.statusLabel = this._fieldBuilder.buildEdmTypeField('statusLabel', 'Edm.String', true);
        /**
         * Representation of the {@link ToDoBean.stepDescAlt} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.stepDescAlt = this._fieldBuilder.buildEdmTypeField('stepDescAlt', 'Edm.String', true);
        /**
         * Representation of the {@link ToDoBean.todoItemId} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.todoItemId = this._fieldBuilder.buildEdmTypeField('todoItemId', 'Edm.String', true);
        /**
         * Representation of the {@link ToDoBean.url} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.url = this._fieldBuilder.buildEdmTypeField('url', 'Edm.String', true);
    }
}
exports.ToDoBeanField = ToDoBeanField;
var ToDoBean;
(function (ToDoBean) {
    /**
     * Metadata information on all properties of the `ToDoBean` complex type.
     */
    ToDoBean._propertyMetadata = [
        {
            originalName: 'categoryId',
            name: 'categoryId',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'completedDate',
            name: 'completedDate',
            type: 'Edm.DateTime',
            isCollection: false
        },
        {
            originalName: 'dueDate',
            name: 'dueDate',
            type: 'Edm.DateTime',
            isCollection: false
        },
        {
            originalName: 'dueDateOffSet',
            name: 'dueDateOffSet',
            type: 'Edm.Int32',
            isCollection: false
        },
        {
            originalName: 'entries',
            name: 'entries',
            type: ToDoEntry_1.ToDoEntry,
            isCollection: false
        },
        {
            originalName: 'entryId',
            name: 'entryId',
            type: 'Edm.Int32',
            isCollection: false
        },
        {
            originalName: 'name',
            name: 'name',
            type: 'Edm.String',
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
            originalName: 'stepDescAlt',
            name: 'stepDescAlt',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'todoItemId',
            name: 'todoItemId',
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
})(ToDoBean = exports.ToDoBean || (exports.ToDoBean = {}));
//# sourceMappingURL=ToDoBean.js.map