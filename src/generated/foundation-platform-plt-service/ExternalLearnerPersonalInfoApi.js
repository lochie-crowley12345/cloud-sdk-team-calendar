"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalLearnerPersonalInfoApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ExternalLearnerPersonalInfo_1 = require("./ExternalLearnerPersonalInfo");
const ExternalLearnerPersonalInfoRequestBuilder_1 = require("./ExternalLearnerPersonalInfoRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ExternalLearnerPersonalInfoApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ExternalLearnerPersonalInfo_1.ExternalLearnerPersonalInfo;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new ExternalLearnerPersonalInfoRequestBuilder_1.ExternalLearnerPersonalInfoRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ExternalLearnerPersonalInfo_1.ExternalLearnerPersonalInfo, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link attachmentId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ATTACHMENT_ID: fieldBuilder.buildEdmTypeField('attachmentId', 'Edm.String', true),
                /**
                 * Static representation of the {@link birthName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BIRTH_NAME: fieldBuilder.buildEdmTypeField('birthName', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessFirstName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_FIRST_NAME: fieldBuilder.buildEdmTypeField('businessFirstName', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessLastName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_LAST_NAME: fieldBuilder.buildEdmTypeField('businessLastName', 'Edm.String', true),
                /**
                 * Static representation of the {@link certificateEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CERTIFICATE_END_DATE: fieldBuilder.buildEdmTypeField('certificateEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link certificateStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CERTIFICATE_START_DATE: fieldBuilder.buildEdmTypeField('certificateStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link challengeStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CHALLENGE_STATUS: fieldBuilder.buildEdmTypeField('challengeStatus', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link countryOfBirth} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY_OF_BIRTH: fieldBuilder.buildEdmTypeField('countryOfBirth', 'Edm.String', true),
                /**
                 * Static representation of the {@link dateOfBirth} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DATE_OF_BIRTH: fieldBuilder.buildEdmTypeField('dateOfBirth', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link dateOfDeath} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DATE_OF_DEATH: fieldBuilder.buildEdmTypeField('dateOfDeath', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link displayName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISPLAY_NAME: fieldBuilder.buildEdmTypeField('displayName', 'Edm.String', true),
                /**
                 * Static representation of the {@link displayNameAlt1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISPLAY_NAME_ALT_1: fieldBuilder.buildEdmTypeField('displayNameAlt1', 'Edm.String', true),
                /**
                 * Static representation of the {@link displayNameAlt2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISPLAY_NAME_ALT_2: fieldBuilder.buildEdmTypeField('displayNameAlt2', 'Edm.String', true),
                /**
                 * Static representation of the {@link firstName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FIRST_NAME: fieldBuilder.buildEdmTypeField('firstName', 'Edm.String', true),
                /**
                 * Static representation of the {@link firstNameAlt1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FIRST_NAME_ALT_1: fieldBuilder.buildEdmTypeField('firstNameAlt1', 'Edm.String', true),
                /**
                 * Static representation of the {@link firstNameAlt2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FIRST_NAME_ALT_2: fieldBuilder.buildEdmTypeField('firstNameAlt2', 'Edm.String', true),
                /**
                 * Static representation of the {@link formalName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FORMAL_NAME: fieldBuilder.buildEdmTypeField('formalName', 'Edm.String', true),
                /**
                 * Static representation of the {@link formalNameAlt1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FORMAL_NAME_ALT_1: fieldBuilder.buildEdmTypeField('formalNameAlt1', 'Edm.String', true),
                /**
                 * Static representation of the {@link formalNameAlt2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FORMAL_NAME_ALT_2: fieldBuilder.buildEdmTypeField('formalNameAlt2', 'Edm.String', true),
                /**
                 * Static representation of the {@link gender} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GENDER: fieldBuilder.buildEdmTypeField('gender', 'Edm.String', true),
                /**
                 * Static representation of the {@link initials} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INITIALS: fieldBuilder.buildEdmTypeField('initials', 'Edm.String', true),
                /**
                 * Static representation of the {@link isOverridden} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_OVERRIDDEN: fieldBuilder.buildEdmTypeField('isOverridden', 'Edm.Boolean', true),
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
                 * Static representation of the {@link lastName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_NAME: fieldBuilder.buildEdmTypeField('lastName', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastNameAlt1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_NAME_ALT_1: fieldBuilder.buildEdmTypeField('lastNameAlt1', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastNameAlt2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_NAME_ALT_2: fieldBuilder.buildEdmTypeField('lastNameAlt2', 'Edm.String', true),
                /**
                 * Static representation of the {@link maritalStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MARITAL_STATUS: fieldBuilder.buildEdmTypeField('maritalStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link middleName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MIDDLE_NAME: fieldBuilder.buildEdmTypeField('middleName', 'Edm.String', true),
                /**
                 * Static representation of the {@link middleNameAlt1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MIDDLE_NAME_ALT_1: fieldBuilder.buildEdmTypeField('middleNameAlt1', 'Edm.String', true),
                /**
                 * Static representation of the {@link middleNameAlt2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MIDDLE_NAME_ALT_2: fieldBuilder.buildEdmTypeField('middleNameAlt2', 'Edm.String', true),
                /**
                 * Static representation of the {@link namePrefix} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_PREFIX: fieldBuilder.buildEdmTypeField('namePrefix', 'Edm.String', true),
                /**
                 * Static representation of the {@link nationality} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NATIONALITY: fieldBuilder.buildEdmTypeField('nationality', 'Edm.String', true),
                /**
                 * Static representation of the {@link nativePreferredLang} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NATIVE_PREFERRED_LANG: fieldBuilder.buildEdmTypeField('nativePreferredLang', 'Edm.String', true),
                /**
                 * Static representation of the {@link preferredName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PREFERRED_NAME: fieldBuilder.buildEdmTypeField('preferredName', 'Edm.String', true),
                /**
                 * Static representation of the {@link salutation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALUTATION: fieldBuilder.buildEdmTypeField('salutation', 'Edm.String', true),
                /**
                 * Static representation of the {@link script} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCRIPT: fieldBuilder.buildEdmTypeField('script', 'Edm.String', true),
                /**
                 * Static representation of the {@link secondLastName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SECOND_LAST_NAME: fieldBuilder.buildEdmTypeField('secondLastName', 'Edm.String', true),
                /**
                 * Static representation of the {@link secondNationality} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SECOND_NATIONALITY: fieldBuilder.buildEdmTypeField('secondNationality', 'Edm.String', true),
                /**
                 * Static representation of the {@link secondTitle} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SECOND_TITLE: fieldBuilder.buildEdmTypeField('secondTitle', 'Edm.String', true),
                /**
                 * Static representation of the {@link since} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SINCE: fieldBuilder.buildEdmTypeField('since', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link suffix} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUFFIX: fieldBuilder.buildEdmTypeField('suffix', 'Edm.String', true),
                /**
                 * Static representation of the {@link thirdNationality} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                THIRD_NATIONALITY: fieldBuilder.buildEdmTypeField('thirdNationality', 'Edm.String', true),
                /**
                 * Static representation of the {@link title} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TITLE: fieldBuilder.buildEdmTypeField('title', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ExternalLearnerPersonalInfo_1.ExternalLearnerPersonalInfo)
            };
        }
        return this._schema;
    }
}
exports.ExternalLearnerPersonalInfoApi = ExternalLearnerPersonalInfoApi;
//# sourceMappingURL=ExternalLearnerPersonalInfoApi.js.map