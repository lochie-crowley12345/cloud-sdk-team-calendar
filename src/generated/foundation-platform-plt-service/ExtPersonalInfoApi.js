"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtPersonalInfoApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ExtPersonalInfo_1 = require("./ExtPersonalInfo");
const ExtPersonalInfoRequestBuilder_1 = require("./ExtPersonalInfoRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ExtPersonalInfoApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ExtPersonalInfo_1.ExtPersonalInfo;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new ExtPersonalInfoRequestBuilder_1.ExtPersonalInfoRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ExtPersonalInfo_1.ExtPersonalInfo, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link firstName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FIRST_NAME: fieldBuilder.buildEdmTypeField('firstName', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastModifiedDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField('lastModifiedDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link lastName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_NAME: fieldBuilder.buildEdmTypeField('lastName', 'Edm.String', true),
                /**
                 * Static representation of the {@link middleName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MIDDLE_NAME: fieldBuilder.buildEdmTypeField('middleName', 'Edm.String', true),
                /**
                 * Static representation of the {@link personalInfoId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSONAL_INFO_ID: fieldBuilder.buildEdmTypeField('personalInfoId', 'Edm.Int64', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ExtPersonalInfo_1.ExtPersonalInfo)
            };
        }
        return this._schema;
    }
}
exports.ExtPersonalInfoApi = ExtPersonalInfoApi;
//# sourceMappingURL=ExtPersonalInfoApi.js.map