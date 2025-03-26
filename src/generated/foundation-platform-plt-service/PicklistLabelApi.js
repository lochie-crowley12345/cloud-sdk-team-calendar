"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PicklistLabelApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const PicklistLabel_1 = require("./PicklistLabel");
const PicklistLabelRequestBuilder_1 = require("./PicklistLabelRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class PicklistLabelApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = PicklistLabel_1.PicklistLabel;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PICKLIST_OPTION: new odata_v2_1.OneToOneLink('picklistOption', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new PicklistLabelRequestBuilder_1.PicklistLabelRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(PicklistLabel_1.PicklistLabel, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('id', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link label} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LABEL: fieldBuilder.buildEdmTypeField('label', 'Edm.String', true),
                /**
                 * Static representation of the {@link locale} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOCALE: fieldBuilder.buildEdmTypeField('locale', 'Edm.String', false),
                /**
                 * Static representation of the {@link optionId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OPTION_ID: fieldBuilder.buildEdmTypeField('optionId', 'Edm.Int64', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', PicklistLabel_1.PicklistLabel)
            };
        }
        return this._schema;
    }
}
exports.PicklistLabelApi = PicklistLabelApi;
//# sourceMappingURL=PicklistLabelApi.js.map