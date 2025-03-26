"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimeCanApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const EmployeeTimeCan_1 = require("./EmployeeTimeCan");
const EmployeeTimeCanRequestBuilder_1 = require("./EmployeeTimeCanRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class EmployeeTimeCanApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = EmployeeTimeCan_1.EmployeeTimeCan;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new EmployeeTimeCanRequestBuilder_1.EmployeeTimeCanRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(EmployeeTimeCan_1.EmployeeTimeCan, this.deSerializers);
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
                 * Static representation of the {@link disabilityPeriodOneEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISABILITY_PERIOD_ONE_END_DATE: fieldBuilder.buildEdmTypeField('disabilityPeriodOneEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link disabilityPeriodThreeEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISABILITY_PERIOD_THREE_END_DATE: fieldBuilder.buildEdmTypeField('disabilityPeriodThreeEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link disabilityPeriodTwoEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISABILITY_PERIOD_TWO_END_DATE: fieldBuilder.buildEdmTypeField('disabilityPeriodTwoEndDate', 'Edm.DateTime', true),
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
                 * Static representation of the {@link policyDeviation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                POLICY_DEVIATION: fieldBuilder.buildEdmTypeField('policyDeviation', 'Edm.String', true),
                /**
                 * Static representation of the {@link refDisabilityPeriodOneEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REF_DISABILITY_PERIOD_ONE_END_DATE: fieldBuilder.buildEdmTypeField('refDisabilityPeriodOneEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link refDisabilityPeriodThreeEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REF_DISABILITY_PERIOD_THREE_END_DATE: fieldBuilder.buildEdmTypeField('refDisabilityPeriodThreeEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link refDisabilityPeriodTwoEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REF_DISABILITY_PERIOD_TWO_END_DATE: fieldBuilder.buildEdmTypeField('refDisabilityPeriodTwoEndDate', 'Edm.DateTime', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', EmployeeTimeCan_1.EmployeeTimeCan)
            };
        }
        return this._schema;
    }
}
exports.EmployeeTimeCanApi = EmployeeTimeCanApi;
//# sourceMappingURL=EmployeeTimeCanApi.js.map