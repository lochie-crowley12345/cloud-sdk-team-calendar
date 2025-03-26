"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimeDeuApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const EmployeeTimeDeu_1 = require("./EmployeeTimeDeu");
const EmployeeTimeDeuRequestBuilder_1 = require("./EmployeeTimeDeuRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class EmployeeTimeDeuApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = EmployeeTimeDeu_1.EmployeeTimeDeu;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            ELECTRONIC_SICKNESS_CERTIFICATE_EXCLUSION_REASON_NAV: new odata_v2_1.OneToOneLink('electronicSicknessCertificateExclusionReasonNav', this, linkedApis[0]),
            IDENTICAL_SICKNESS_GROUP_NAV: new odata_v2_1.OneToOneLink('identicalSicknessGroupNav', this, linkedApis[1]),
            OVERLAPPING_SICKNESS_GROUP_NAV: new odata_v2_1.OneToOneLink('overlappingSicknessGroupNav', this, linkedApis[2])
        };
        return this;
    }
    requestBuilder() {
        return new EmployeeTimeDeuRequestBuilder_1.EmployeeTimeDeuRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(EmployeeTimeDeu_1.EmployeeTimeDeu, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link employeeTimeExternalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EMPLOYEE_TIME_EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('EmployeeTime_externalCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link continuedPayCreditedDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONTINUED_PAY_CREDITED_DAYS: fieldBuilder.buildEdmTypeField('continuedPayCreditedDays', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link continuedPayEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONTINUED_PAY_END_DATE: fieldBuilder.buildEdmTypeField('continuedPayEndDate', 'Edm.DateTime', true),
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
                 * Static representation of the {@link custMandatTestString} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUST_MANDAT_TEST_STRING: fieldBuilder.buildEdmTypeField('cust_mandat_test_string', 'Edm.String', true),
                /**
                 * Static representation of the {@link deviationFromSickPayPeriods} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DEVIATION_FROM_SICK_PAY_PERIODS: fieldBuilder.buildEdmTypeField('deviationFromSickPayPeriods', 'Edm.String', true),
                /**
                 * Static representation of the {@link electronicSicknessCertificateExclusionReason} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ELECTRONIC_SICKNESS_CERTIFICATE_EXCLUSION_REASON: fieldBuilder.buildEdmTypeField('electronicSicknessCertificateExclusionReason', 'Edm.String', true),
                /**
                 * Static representation of the {@link entityUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENTITY_UUID: fieldBuilder.buildEdmTypeField('entityUUID', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('externalCode', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link identicalSicknessGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IDENTICAL_SICKNESS_GROUP: fieldBuilder.buildEdmTypeField('identicalSicknessGroup', 'Edm.String', true),
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
                 * Static representation of the {@link overlappingSicknessGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OVERLAPPING_SICKNESS_GROUP: fieldBuilder.buildEdmTypeField('overlappingSicknessGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link paySupplementEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAY_SUPPLEMENT_END_DATE: fieldBuilder.buildEdmTypeField('paySupplementEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link paySupplementStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAY_SUPPLEMENT_START_DATE: fieldBuilder.buildEdmTypeField('paySupplementStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link refContinuedPayEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REF_CONTINUED_PAY_END_DATE: fieldBuilder.buildEdmTypeField('refContinuedPayEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link refPaySupplementEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REF_PAY_SUPPLEMENT_END_DATE: fieldBuilder.buildEdmTypeField('refPaySupplementEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link refPaySupplementStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REF_PAY_SUPPLEMENT_START_DATE: fieldBuilder.buildEdmTypeField('refPaySupplementStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link sicknessCertificateStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SICKNESS_CERTIFICATE_START_DATE: fieldBuilder.buildEdmTypeField('sicknessCertificateStartDate', 'Edm.DateTime', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', EmployeeTimeDeu_1.EmployeeTimeDeu)
            };
        }
        return this._schema;
    }
}
exports.EmployeeTimeDeuApi = EmployeeTimeDeuApi;
//# sourceMappingURL=EmployeeTimeDeuApi.js.map