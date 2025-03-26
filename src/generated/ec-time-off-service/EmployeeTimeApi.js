"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimeApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const EmployeeTime_1 = require("./EmployeeTime");
const EmployeeTimeRequestBuilder_1 = require("./EmployeeTimeRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class EmployeeTimeApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = EmployeeTime_1.EmployeeTime;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            COUNTRY_EXTENSION_AUS: new odata_v2_1.OneToOneLink('countryExtensionAUS', this, linkedApis[0]),
            COUNTRY_EXTENSION_CAN: new odata_v2_1.OneToOneLink('countryExtensionCAN', this, linkedApis[1]),
            COUNTRY_EXTENSION_COL: new odata_v2_1.OneToOneLink('countryExtensionCOL', this, linkedApis[2]),
            COUNTRY_EXTENSION_DEU: new odata_v2_1.OneToOneLink('countryExtensionDEU', this, linkedApis[3]),
            COUNTRY_EXTENSION_ESP: new odata_v2_1.OneToOneLink('countryExtensionESP', this, linkedApis[4]),
            COUNTRY_EXTENSION_MEX: new odata_v2_1.OneToOneLink('countryExtensionMEX', this, linkedApis[5]),
            COUNTRY_EXTENSION_NLD: new odata_v2_1.OneToOneLink('countryExtensionNLD', this, linkedApis[6]),
            COUNTRY_EXTENSION_POL: new odata_v2_1.OneToOneLink('countryExtensionPOL', this, linkedApis[7]),
            COUNTRY_EXTENSION_USA: new odata_v2_1.OneToOneLink('countryExtensionUSA', this, linkedApis[8]),
            RECURRENCE_GROUP_NAV: new odata_v2_1.OneToOneLink('recurrenceGroupNav', this, linkedApis[9]),
            TIME_CALENDAR: new odata_v2_1.Link('timeCalendar', this, linkedApis[10]),
            TIME_TYPE_NAV: new odata_v2_1.OneToOneLink('timeTypeNav', this, linkedApis[11])
        };
        return this;
    }
    requestBuilder() {
        return new EmployeeTimeRequestBuilder_1.EmployeeTimeRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(EmployeeTime_1.EmployeeTime, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link absenceDurationCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ABSENCE_DURATION_CATEGORY: fieldBuilder.buildEdmTypeField('absenceDurationCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link approvalStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                APPROVAL_STATUS: fieldBuilder.buildEdmTypeField('approvalStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link cancellationWorkflowRequestId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CANCELLATION_WORKFLOW_REQUEST_ID: fieldBuilder.buildEdmTypeField('cancellationWorkflowRequestId', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link comment} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMMENT: fieldBuilder.buildEdmTypeField('comment', 'Edm.String', true),
                /**
                 * Static representation of the {@link createdBy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_BY: fieldBuilder.buildEdmTypeField('createdBy', 'Edm.String', true),
                /**
                 * Static representation of the {@link createdDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_DATE: fieldBuilder.buildEdmTypeField('createdDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link createdDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField('createdDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link deductionQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DEDUCTION_QUANTITY: fieldBuilder.buildEdmTypeField('deductionQuantity', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link displayQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISPLAY_QUANTITY: fieldBuilder.buildEdmTypeField('displayQuantity', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link editable} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EDITABLE: fieldBuilder.buildEdmTypeField('editable', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link endDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                END_DATE: fieldBuilder.buildEdmTypeField('endDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link endTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                END_TIME: fieldBuilder.buildEdmTypeField('endTime', 'Edm.Time', true),
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
                 * Static representation of the {@link flexibleRequesting} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FLEXIBLE_REQUESTING: fieldBuilder.buildEdmTypeField('flexibleRequesting', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link fractionQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FRACTION_QUANTITY: fieldBuilder.buildEdmTypeField('fractionQuantity', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link lastModifiedBy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_MODIFIED_BY: fieldBuilder.buildEdmTypeField('lastModifiedBy', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastModifiedDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_MODIFIED_DATE: fieldBuilder.buildEdmTypeField('lastModifiedDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link lastModifiedDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField('lastModifiedDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link lastModifiedDateWithTz} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_MODIFIED_DATE_WITH_TZ: fieldBuilder.buildEdmTypeField('lastModifiedDateWithTZ', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link loaActualReturnDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOA_ACTUAL_RETURN_DATE: fieldBuilder.buildEdmTypeField('loaActualReturnDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link loaEndJobInfoId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOA_END_JOB_INFO_ID: fieldBuilder.buildEdmTypeField('loaEndJobInfoId', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link loaExpectedReturnDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOA_EXPECTED_RETURN_DATE: fieldBuilder.buildEdmTypeField('loaExpectedReturnDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link loaStartJobInfoId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOA_START_JOB_INFO_ID: fieldBuilder.buildEdmTypeField('loaStartJobInfoId', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link mdfSystemEffectiveEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MDF_SYSTEM_EFFECTIVE_END_DATE: fieldBuilder.buildEdmTypeField('mdfSystemEffectiveEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link mdfSystemEffectiveStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MDF_SYSTEM_EFFECTIVE_START_DATE: fieldBuilder.buildEdmTypeField('mdfSystemEffectiveStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link mdfSystemEntityId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MDF_SYSTEM_ENTITY_ID: fieldBuilder.buildEdmTypeField('mdfSystemEntityId', 'Edm.String', true),
                /**
                 * Static representation of the {@link mdfSystemObjectType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MDF_SYSTEM_OBJECT_TYPE: fieldBuilder.buildEdmTypeField('mdfSystemObjectType', 'Edm.String', true),
                /**
                 * Static representation of the {@link mdfSystemRecordId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MDF_SYSTEM_RECORD_ID: fieldBuilder.buildEdmTypeField('mdfSystemRecordId', 'Edm.String', true),
                /**
                 * Static representation of the {@link mdfSystemRecordStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MDF_SYSTEM_RECORD_STATUS: fieldBuilder.buildEdmTypeField('mdfSystemRecordStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link mdfSystemStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MDF_SYSTEM_STATUS: fieldBuilder.buildEdmTypeField('mdfSystemStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link mdfSystemTransactionSequence} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MDF_SYSTEM_TRANSACTION_SEQUENCE: fieldBuilder.buildEdmTypeField('mdfSystemTransactionSequence', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link mdfSystemVersionId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MDF_SYSTEM_VERSION_ID: fieldBuilder.buildEdmTypeField('mdfSystemVersionId', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link originalQuantityInDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORIGINAL_QUANTITY_IN_DAYS: fieldBuilder.buildEdmTypeField('originalQuantityInDays', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link physicalEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHYSICAL_END_DATE: fieldBuilder.buildEdmTypeField('physicalEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link physicalStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHYSICAL_START_DATE: fieldBuilder.buildEdmTypeField('physicalStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link quantityInDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUANTITY_IN_DAYS: fieldBuilder.buildEdmTypeField('quantityInDays', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link quantityInHours} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUANTITY_IN_HOURS: fieldBuilder.buildEdmTypeField('quantityInHours', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link recurrenceGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RECURRENCE_GROUP: fieldBuilder.buildEdmTypeField('recurrenceGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link startDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                START_DATE: fieldBuilder.buildEdmTypeField('startDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link startTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                START_TIME: fieldBuilder.buildEdmTypeField('startTime', 'Edm.Time', true),
                /**
                 * Static representation of the {@link timeRecordOrigin} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_RECORD_ORIGIN: fieldBuilder.buildEdmTypeField('timeRecordOrigin', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_TYPE: fieldBuilder.buildEdmTypeField('timeType', 'Edm.String', true),
                /**
                 * Static representation of the {@link undeterminedEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNDETERMINED_END_DATE: fieldBuilder.buildEdmTypeField('undeterminedEndDate', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link userId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                USER_ID: fieldBuilder.buildEdmTypeField('userId', 'Edm.String', true),
                /**
                 * Static representation of the {@link workflowInitiatedByAdmin} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORKFLOW_INITIATED_BY_ADMIN: fieldBuilder.buildEdmTypeField('workflowInitiatedByAdmin', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link workflowRequestId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORKFLOW_REQUEST_ID: fieldBuilder.buildEdmTypeField('workflowRequestId', 'Edm.Int64', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', EmployeeTime_1.EmployeeTime)
            };
        }
        return this._schema;
    }
}
exports.EmployeeTimeApi = EmployeeTimeApi;
//# sourceMappingURL=EmployeeTimeApi.js.map