"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalLearnerApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ExternalLearner_1 = require("./ExternalLearner");
const ExternalLearnerRequestBuilder_1 = require("./ExternalLearnerRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ExternalLearnerApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ExternalLearner_1.ExternalLearner;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            EMAIL_INFO: new odata_v2_1.Link('emailInfo', this, linkedApis[0]),
            HOME_ADDRESS: new odata_v2_1.Link('homeAddress', this, linkedApis[1]),
            PERSONAL_INFO: new odata_v2_1.OneToOneLink('personalInfo', this, linkedApis[2]),
            PHONE_INFO: new odata_v2_1.Link('phoneInfo', this, linkedApis[3]),
            SOURCE_CHANNEL_NAV: new odata_v2_1.OneToOneLink('sourceChannelNav', this, linkedApis[4])
        };
        return this;
    }
    requestBuilder() {
        return new ExternalLearnerRequestBuilder_1.ExternalLearnerRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ExternalLearner_1.ExternalLearner, this.deSerializers);
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
                 * Static representation of the {@link sourceChannel} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SOURCE_CHANNEL: fieldBuilder.buildEdmTypeField('sourceChannel', 'Edm.String', true),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', ExternalLearner_1.ExternalLearner)
            };
        }
        return this._schema;
    }
}
exports.ExternalLearnerApi = ExternalLearnerApi;
//# sourceMappingURL=ExternalLearnerApi.js.map