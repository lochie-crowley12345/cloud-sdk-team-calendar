"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalLearnerPhoneInfoApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ExternalLearnerPhoneInfo_1 = require("./ExternalLearnerPhoneInfo");
const ExternalLearnerPhoneInfoRequestBuilder_1 = require("./ExternalLearnerPhoneInfoRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ExternalLearnerPhoneInfoApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ExternalLearnerPhoneInfo_1.ExternalLearnerPhoneInfo;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PHONE_TYPE_NAV: new odata_v2_1.OneToOneLink('phoneTypeNav', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new ExternalLearnerPhoneInfoRequestBuilder_1.ExternalLearnerPhoneInfoRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ExternalLearnerPhoneInfo_1.ExternalLearnerPhoneInfo, this.deSerializers);
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
                IS_PRIMARY: fieldBuilder.buildEdmTypeField('isPrimary', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isDeleted} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_DELETED: fieldBuilder.buildEdmTypeField('is_deleted', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link itemId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_ID: fieldBuilder.buildEdmTypeField('itemId', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link lastModifiedDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField('lastModifiedDateTime', 'Edm.DateTimeOffset', true),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', ExternalLearnerPhoneInfo_1.ExternalLearnerPhoneInfo)
            };
        }
        return this._schema;
    }
}
exports.ExternalLearnerPhoneInfoApi = ExternalLearnerPhoneInfoApi;
//# sourceMappingURL=ExternalLearnerPhoneInfoApi.js.map