"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PicklistApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Picklist_1 = require("./Picklist");
const PicklistRequestBuilder_1 = require("./PicklistRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class PicklistApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Picklist_1.Picklist;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PICKLIST_OPTIONS: new odata_v2_1.Link('picklistOptions', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new PicklistRequestBuilder_1.PicklistRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Picklist_1.Picklist, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link picklistId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PICKLIST_ID: fieldBuilder.buildEdmTypeField('picklistId', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Picklist_1.Picklist)
            };
        }
        return this._schema;
    }
}
exports.PicklistApi = PicklistApi;
//# sourceMappingURL=PicklistApi.js.map