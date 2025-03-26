"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeAccountSnapshotApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TimeAccountSnapshot_1 = require("./TimeAccountSnapshot");
const TimeAccountSnapshotRequestBuilder_1 = require("./TimeAccountSnapshotRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class TimeAccountSnapshotApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = TimeAccountSnapshot_1.TimeAccountSnapshot;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            ACCOUNT_TYPE_NAV: new odata_v2_1.OneToOneLink('accountTypeNav', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new TimeAccountSnapshotRequestBuilder_1.TimeAccountSnapshotRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(TimeAccountSnapshot_1.TimeAccountSnapshot, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link accountType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNT_TYPE: fieldBuilder.buildEdmTypeField('accountType', 'Edm.String', true),
                /**
                 * Static representation of the {@link approvedAbsenceBalance} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                APPROVED_ABSENCE_BALANCE: fieldBuilder.buildEdmTypeField('approvedAbsenceBalance', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link approvedAbsenceBalanceAccrualSeparated} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                APPROVED_ABSENCE_BALANCE_ACCRUAL_SEPARATED: fieldBuilder.buildEdmTypeField('approvedAbsenceBalanceAccrualSeparated', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link asOfAccountingPeriodEnd} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AS_OF_ACCOUNTING_PERIOD_END: fieldBuilder.buildEdmTypeField('asOfAccountingPeriodEnd', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link asOfPayPeriodEnd} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AS_OF_PAY_PERIOD_END: fieldBuilder.buildEdmTypeField('asOfPayPeriodEnd', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link balance} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BALANCE: fieldBuilder.buildEdmTypeField('balance', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link balanceAccrualSeparated} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BALANCE_ACCRUAL_SEPARATED: fieldBuilder.buildEdmTypeField('balanceAccrualSeparated', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link balanceEffectiveDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BALANCE_EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField('balanceEffectiveDate', 'Edm.DateTime', true),
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
                 * Static representation of the {@link entityId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENTITY_ID: fieldBuilder.buildEdmTypeField('entityId', 'Edm.String', true),
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
                 * Static representation of the {@link outdated} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OUTDATED: fieldBuilder.buildEdmTypeField('outdated', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link unit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNIT: fieldBuilder.buildEdmTypeField('unit', 'Edm.String', true),
                /**
                 * Static representation of the {@link userId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                USER_ID: fieldBuilder.buildEdmTypeField('userId', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', TimeAccountSnapshot_1.TimeAccountSnapshot)
            };
        }
        return this._schema;
    }
}
exports.TimeAccountSnapshotApi = TimeAccountSnapshotApi;
//# sourceMappingURL=TimeAccountSnapshotApi.js.map