"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtPhoneInfoApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ExtPhoneInfo_1 = require("./ExtPhoneInfo");
const ExtPhoneInfoRequestBuilder_1 = require("./ExtPhoneInfoRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ExtPhoneInfoApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ExtPhoneInfo_1.ExtPhoneInfo;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PHONE_TYPE_NAV: new odata_v2_1.OneToOneLink('phoneTypeNav', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new ExtPhoneInfoRequestBuilder_1.ExtPhoneInfoRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ExtPhoneInfo_1.ExtPhoneInfo, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link areaCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AREA_CODE: fieldBuilder.buildEdmTypeField('areaCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link countryCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY_CODE: fieldBuilder.buildEdmTypeField('countryCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link extension} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTENSION: fieldBuilder.buildEdmTypeField('extension', 'Edm.String', true),
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
                /**
                 * Static representation of the {@link phoneInfoId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHONE_INFO_ID: fieldBuilder.buildEdmTypeField('phoneInfoId', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link phoneNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHONE_NUMBER: fieldBuilder.buildEdmTypeField('phoneNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link phoneType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHONE_TYPE: fieldBuilder.buildEdmTypeField('phoneType', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ExtPhoneInfo_1.ExtPhoneInfo)
            };
        }
        return this._schema;
    }
}
exports.ExtPhoneInfoApi = ExtPhoneInfoApi;
//# sourceMappingURL=ExtPhoneInfoApi.js.map