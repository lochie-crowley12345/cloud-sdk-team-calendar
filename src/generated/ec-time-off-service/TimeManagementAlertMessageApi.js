"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeManagementAlertMessageApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TimeManagementAlertMessage_1 = require("./TimeManagementAlertMessage");
const TimeManagementAlertMessageRequestBuilder_1 = require("./TimeManagementAlertMessageRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class TimeManagementAlertMessageApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = TimeManagementAlertMessage_1.TimeManagementAlertMessage;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            EMPLOYEE_TIME_NAV: new odata_v2_1.OneToOneLink('employeeTimeNav', this, linkedApis[0]),
            TIME_ACCOUNT_NAV: new odata_v2_1.OneToOneLink('timeAccountNav', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new TimeManagementAlertMessageRequestBuilder_1.TimeManagementAlertMessageRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(TimeManagementAlertMessage_1.TimeManagementAlertMessage, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link timeManagementAlertExternalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_MANAGEMENT_ALERT_EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('TimeManagementAlert_externalCode', 'Edm.String', false),
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
                 * Static representation of the {@link date} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DATE: fieldBuilder.buildEdmTypeField('date', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link defaultMessageText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DEFAULT_MESSAGE_TEXT: fieldBuilder.buildEdmTypeField('defaultMessageText', 'Edm.String', true),
                /**
                 * Static representation of the {@link employeeTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EMPLOYEE_TIME: fieldBuilder.buildEdmTypeField('employeeTime', 'Edm.String', true),
                /**
                 * Static representation of the {@link employeeTimeSheet} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EMPLOYEE_TIME_SHEET: fieldBuilder.buildEdmTypeField('employeeTimeSheet', 'Edm.String', true),
                /**
                 * Static representation of the {@link entityUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENTITY_UUID: fieldBuilder.buildEdmTypeField('entityUUID', 'Edm.String', true),
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
                 * Static representation of the {@link messageKey} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MESSAGE_KEY: fieldBuilder.buildEdmTypeField('messageKey', 'Edm.String', true),
                /**
                 * Static representation of the {@link messageParameter1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MESSAGE_PARAMETER_1: fieldBuilder.buildEdmTypeField('messageParameter1', 'Edm.String', true),
                /**
                 * Static representation of the {@link messageParameter2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MESSAGE_PARAMETER_2: fieldBuilder.buildEdmTypeField('messageParameter2', 'Edm.String', true),
                /**
                 * Static representation of the {@link messageParameter3} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MESSAGE_PARAMETER_3: fieldBuilder.buildEdmTypeField('messageParameter3', 'Edm.String', true),
                /**
                 * Static representation of the {@link messageParameter4} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MESSAGE_PARAMETER_4: fieldBuilder.buildEdmTypeField('messageParameter4', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeAccount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_ACCOUNT: fieldBuilder.buildEdmTypeField('timeAccount', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeAccountTypeAccrualTransfer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_ACCOUNT_TYPE_ACCRUAL_TRANSFER: fieldBuilder.buildEdmTypeField('timeAccountTypeAccrualTransfer', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', TimeManagementAlertMessage_1.TimeManagementAlertMessage)
            };
        }
        return this._schema;
    }
}
exports.TimeManagementAlertMessageApi = TimeManagementAlertMessageApi;
//# sourceMappingURL=TimeManagementAlertMessageApi.js.map