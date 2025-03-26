"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeManagementTerminationEndHandlingConfigurationApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TimeManagementTerminationEndHandlingConfiguration_1 = require("./TimeManagementTerminationEndHandlingConfiguration");
const TimeManagementTerminationEndHandlingConfigurationRequestBuilder_1 = require("./TimeManagementTerminationEndHandlingConfigurationRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class TimeManagementTerminationEndHandlingConfigurationApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = TimeManagementTerminationEndHandlingConfiguration_1.TimeManagementTerminationEndHandlingConfiguration;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            COUNTRY_CONFIGURATION: new odata_v2_1.Link('countryConfiguration', this, linkedApis[0]),
            EXCLUDES_NAV: new odata_v2_1.OneToOneLink('excludesNav', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new TimeManagementTerminationEndHandlingConfigurationRequestBuilder_1.TimeManagementTerminationEndHandlingConfigurationRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(TimeManagementTerminationEndHandlingConfiguration_1.TimeManagementTerminationEndHandlingConfiguration, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link activationStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACTIVATION_STATUS: fieldBuilder.buildEdmTypeField('activationStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link automationLevelOfEmployeeTimeProcessing} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AUTOMATION_LEVEL_OF_EMPLOYEE_TIME_PROCESSING: fieldBuilder.buildEdmTypeField('automationLevelOfEmployeeTimeProcessing', 'Edm.String', true),
                /**
                 * Static representation of the {@link automationLevelOfTimeAccountClosing} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AUTOMATION_LEVEL_OF_TIME_ACCOUNT_CLOSING: fieldBuilder.buildEdmTypeField('automationLevelOfTimeAccountClosing', 'Edm.String', true),
                /**
                 * Static representation of the {@link createdBy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_BY: fieldBuilder.buildEdmTypeField('createdBy', 'Edm.String', true),
                /**
                 * Static representation of the {@link createdDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField('createdDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link entityUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENTITY_UUID: fieldBuilder.buildEdmTypeField('entityUUID', 'Edm.String', true),
                /**
                 * Static representation of the {@link excludes} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXCLUDES: fieldBuilder.buildEdmTypeField('excludes', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('externalCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link lastModifiedBy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_MODIFIED_BY: fieldBuilder.buildEdmTypeField('lastModifiedBy', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastModifiedDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField('lastModifiedDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link mdfSystemRecordStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MDF_SYSTEM_RECORD_STATUS: fieldBuilder.buildEdmTypeField('mdfSystemRecordStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link offsetInDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OFFSET_IN_DAYS: fieldBuilder.buildEdmTypeField('offsetInDays', 'Edm.Int64', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', TimeManagementTerminationEndHandlingConfiguration_1.TimeManagementTerminationEndHandlingConfiguration)
            };
        }
        return this._schema;
    }
}
exports.TimeManagementTerminationEndHandlingConfigurationApi = TimeManagementTerminationEndHandlingConfigurationApi;
//# sourceMappingURL=TimeManagementTerminationEndHandlingConfigurationApi.js.map