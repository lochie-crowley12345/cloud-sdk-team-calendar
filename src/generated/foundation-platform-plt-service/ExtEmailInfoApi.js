"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtEmailInfoApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ExtEmailInfo_1 = require("./ExtEmailInfo");
const ExtEmailInfoRequestBuilder_1 = require("./ExtEmailInfoRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ExtEmailInfoApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ExtEmailInfo_1.ExtEmailInfo;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            EMAIL_TYPE_NAV: new odata_v2_1.OneToOneLink('emailTypeNav', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new ExtEmailInfoRequestBuilder_1.ExtEmailInfoRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ExtEmailInfo_1.ExtEmailInfo, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link emailAddress} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField('emailAddress', 'Edm.String', false),
                /**
                 * Static representation of the {@link emailInfoId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EMAIL_INFO_ID: fieldBuilder.buildEdmTypeField('emailInfoId', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link emailType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EMAIL_TYPE: fieldBuilder.buildEdmTypeField('emailType', 'Edm.String', false),
                /**
                 * Static representation of the {@link isPrimary} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_PRIMARY: fieldBuilder.buildEdmTypeField('isPrimary', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastModifiedDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField('lastModifiedDateTime', 'Edm.DateTimeOffset', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ExtEmailInfo_1.ExtEmailInfo)
            };
        }
        return this._schema;
    }
}
exports.ExtEmailInfoApi = ExtEmailInfoApi;
//# sourceMappingURL=ExtEmailInfoApi.js.map