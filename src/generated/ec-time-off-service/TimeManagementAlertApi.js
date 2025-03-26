"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeManagementAlertApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TimeManagementAlert_1 = require("./TimeManagementAlert");
const TimeManagementAlertRequestBuilder_1 = require("./TimeManagementAlertRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class TimeManagementAlertApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = TimeManagementAlert_1.TimeManagementAlert;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TIME_MANAGEMENT_ALERT_MESSAGE: new odata_v2_1.Link('timeManagementAlertMessage', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new TimeManagementAlertRequestBuilder_1.TimeManagementAlertRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(TimeManagementAlert_1.TimeManagementAlert, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link adminAlertStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADMIN_ALERT_STATUS: fieldBuilder.buildEdmTypeField('adminAlertStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link assigneeUserId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ASSIGNEE_USER_ID: fieldBuilder.buildEdmTypeField('assigneeUserId', 'Edm.String', true),
                /**
                 * Static representation of the {@link category} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CATEGORY: fieldBuilder.buildEdmTypeField('category', 'Edm.String', true),
                /**
                 * Static representation of the {@link concatenatedMessage} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONCATENATED_MESSAGE: fieldBuilder.buildEdmTypeField('concatenatedMessage', 'Edm.String', true),
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
                 * Static representation of the {@link encodedUserId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENCODED_USER_ID: fieldBuilder.buildEdmTypeField('encodedUserId', 'Edm.String', true),
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
                 * Static representation of the {@link severity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SEVERITY: fieldBuilder.buildEdmTypeField('severity', 'Edm.String', true),
                /**
                 * Static representation of the {@link severityName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SEVERITY_NAME: fieldBuilder.buildEdmTypeField('severityName', 'Edm.String', true),
                /**
                 * Static representation of the {@link status} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATUS: fieldBuilder.buildEdmTypeField('status', 'Edm.String', true),
                /**
                 * Static representation of the {@link targetId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TARGET_ID: fieldBuilder.buildEdmTypeField('targetId', 'Edm.String', true),
                /**
                 * Static representation of the {@link targetType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TARGET_TYPE: fieldBuilder.buildEdmTypeField('targetType', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', TimeManagementAlert_1.TimeManagementAlert)
            };
        }
        return this._schema;
    }
}
exports.TimeManagementAlertApi = TimeManagementAlertApi;
//# sourceMappingURL=TimeManagementAlertApi.js.map