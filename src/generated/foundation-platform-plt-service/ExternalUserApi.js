"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalUserApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ExternalUser_1 = require("./ExternalUser");
const ExternalUserRequestBuilder_1 = require("./ExternalUserRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ExternalUserApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ExternalUser_1.ExternalUser;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            EXT_ADDRESS_INFO: new odata_v2_1.Link('extAddressInfo', this, linkedApis[0]),
            EXT_EMAIL_INFO: new odata_v2_1.Link('extEmailInfo', this, linkedApis[1]),
            EXT_PERSONAL_INFO: new odata_v2_1.OneToOneLink('extPersonalInfo', this, linkedApis[2]),
            EXT_PHONE_INFO: new odata_v2_1.Link('extPhoneInfo', this, linkedApis[3])
        };
        return this;
    }
    requestBuilder() {
        return new ExternalUserRequestBuilder_1.ExternalUserRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ExternalUser_1.ExternalUser, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link defaultLocale} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DEFAULT_LOCALE: fieldBuilder.buildEdmTypeField('defaultLocale', 'Edm.String', true),
                /**
                 * Static representation of the {@link isDeleted} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_DELETED: fieldBuilder.buildEdmTypeField('is_deleted', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link lastModifiedDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField('lastModifiedDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link loginMethod} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOGIN_METHOD: fieldBuilder.buildEdmTypeField('loginMethod', 'Edm.String', true),
                /**
                 * Static representation of the {@link password} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PASSWORD: fieldBuilder.buildEdmTypeField('password', 'Edm.String', true),
                /**
                 * Static representation of the {@link personGuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_GUID: fieldBuilder.buildEdmTypeField('personGUID', 'Edm.String', true),
                /**
                 * Static representation of the {@link personId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_ID: fieldBuilder.buildEdmTypeField('personId', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link personIdExternal} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSON_ID_EXTERNAL: fieldBuilder.buildEdmTypeField('personIdExternal', 'Edm.String', true),
                /**
                 * Static representation of the {@link productName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_NAME: fieldBuilder.buildEdmTypeField('productName', 'Edm.String', true),
                /**
                 * Static representation of the {@link status} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATUS: fieldBuilder.buildEdmTypeField('status', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeZone} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_ZONE: fieldBuilder.buildEdmTypeField('timeZone', 'Edm.String', true),
                /**
                 * Static representation of the {@link userId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                USER_ID: fieldBuilder.buildEdmTypeField('userId', 'Edm.String', false),
                /**
                 * Static representation of the {@link userName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                USER_NAME: fieldBuilder.buildEdmTypeField('userName', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ExternalUser_1.ExternalUser)
            };
        }
        return this._schema;
    }
}
exports.ExternalUserApi = ExternalUserApi;
//# sourceMappingURL=ExternalUserApi.js.map