"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PicklistOptionApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const PicklistOption_1 = require("./PicklistOption");
const PicklistOptionRequestBuilder_1 = require("./PicklistOptionRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class PicklistOptionApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = PicklistOption_1.PicklistOption;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            CHILD_PICKLIST_OPTIONS: new odata_v2_1.Link('childPicklistOptions', this, linkedApis[0]),
            PARENT_PICKLIST_OPTION: new odata_v2_1.OneToOneLink('parentPicklistOption', this, linkedApis[1]),
            PICKLIST: new odata_v2_1.OneToOneLink('picklist', this, linkedApis[2]),
            PICKLIST_LABELS: new odata_v2_1.Link('picklistLabels', this, linkedApis[3])
        };
        return this;
    }
    requestBuilder() {
        return new PicklistOptionRequestBuilder_1.PicklistOptionRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(PicklistOption_1.PicklistOption, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link externalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('externalCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('id', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link maxValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAX_VALUE: fieldBuilder.buildEdmTypeField('maxValue', 'Edm.Double', true),
                /**
                 * Static representation of the {@link minValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MIN_VALUE: fieldBuilder.buildEdmTypeField('minValue', 'Edm.Double', true),
                /**
                 * Static representation of the {@link optionValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OPTION_VALUE: fieldBuilder.buildEdmTypeField('optionValue', 'Edm.Double', true),
                /**
                 * Static representation of the {@link sortOrder} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SORT_ORDER: fieldBuilder.buildEdmTypeField('sortOrder', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link status} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATUS: fieldBuilder.buildEdmTypeField('status', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', PicklistOption_1.PicklistOption)
            };
        }
        return this._schema;
    }
}
exports.PicklistOptionApi = PicklistOptionApi;
//# sourceMappingURL=PicklistOptionApi.js.map