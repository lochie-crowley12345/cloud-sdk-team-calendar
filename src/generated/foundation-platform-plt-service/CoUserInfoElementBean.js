"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoUserInfoElementBean = exports.CoUserInfoElementBeanField = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * CoUserInfoElementBeanField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class CoUserInfoElementBeanField extends odata_v2_1.ComplexTypeField {
    /**
     * Creates an instance of CoUserInfoElementBeanField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, CoUserInfoElementBean, fieldOptions);
        this._fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
        /**
         * Representation of the {@link CoUserInfoElementBean.id} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.id = this._fieldBuilder.buildEdmTypeField('id', 'Edm.String', true);
        /**
         * Representation of the {@link CoUserInfoElementBean.label} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.label = this._fieldBuilder.buildEdmTypeField('label', 'Edm.String', true);
        /**
         * Representation of the {@link CoUserInfoElementBean.type} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.type = this._fieldBuilder.buildEdmTypeField('type', 'Edm.String', true);
        /**
         * Representation of the {@link CoUserInfoElementBean.value} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.value = this._fieldBuilder.buildEdmTypeField('value', 'Edm.String', true);
    }
}
exports.CoUserInfoElementBeanField = CoUserInfoElementBeanField;
var CoUserInfoElementBean;
(function (CoUserInfoElementBean) {
    /**
     * Metadata information on all properties of the `CoUserInfoElementBean` complex type.
     */
    CoUserInfoElementBean._propertyMetadata = [
        {
            originalName: 'id',
            name: 'id',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'label',
            name: 'label',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'type',
            name: 'type',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'value',
            name: 'value',
            type: 'Edm.String',
            isCollection: false
        }
    ];
})(CoUserInfoElementBean = exports.CoUserInfoElementBean || (exports.CoUserInfoElementBean = {}));
//# sourceMappingURL=CoUserInfoElementBean.js.map