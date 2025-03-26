"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkOrderApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const WorkOrder_1 = require("./WorkOrder");
const WorkOrderRequestBuilder_1 = require("./WorkOrderRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class WorkOrderApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = WorkOrder_1.WorkOrder;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            CURRENCY_NAV: new odata_v2_1.OneToOneLink('currencyNav', this, linkedApis[0]),
            VENDOR_NAV: new odata_v2_1.OneToOneLink('vendorNav', this, linkedApis[1]),
            WORKER_TYPE_NAV: new odata_v2_1.OneToOneLink('workerTypeNav', this, linkedApis[2])
        };
        return this;
    }
    requestBuilder() {
        return new WorkOrderRequestBuilder_1.WorkOrderRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(WorkOrder_1.WorkOrder, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link billingAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_AMOUNT: fieldBuilder.buildEdmTypeField('billingAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link billingRate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_RATE: fieldBuilder.buildEdmTypeField('billingRate', 'Edm.String', true),
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
                 * Static representation of the {@link currency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CURRENCY: fieldBuilder.buildEdmTypeField('currency', 'Edm.String', true),
                /**
                 * Static representation of the {@link effectiveEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EFFECTIVE_END_DATE: fieldBuilder.buildEdmTypeField('effectiveEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link effectiveStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EFFECTIVE_START_DATE: fieldBuilder.buildEdmTypeField('effectiveStartDate', 'Edm.DateTime', false),
                /**
                 * Static representation of the {@link effectiveStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EFFECTIVE_STATUS: fieldBuilder.buildEdmTypeField('effectiveStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link endDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                END_DATE: fieldBuilder.buildEdmTypeField('endDate', 'Edm.DateTime', true),
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
                 * Static representation of the {@link startDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                START_DATE: fieldBuilder.buildEdmTypeField('startDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link userSysId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                USER_SYS_ID: fieldBuilder.buildEdmTypeField('userSysId', 'Edm.String', false),
                /**
                 * Static representation of the {@link vendor} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VENDOR: fieldBuilder.buildEdmTypeField('vendor', 'Edm.String', true),
                /**
                 * Static representation of the {@link workOrderId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORK_ORDER_ID: fieldBuilder.buildEdmTypeField('workOrderId', 'Edm.String', true),
                /**
                 * Static representation of the {@link workOrderName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORK_ORDER_NAME: fieldBuilder.buildEdmTypeField('workOrderName', 'Edm.String', true),
                /**
                 * Static representation of the {@link workOrderOwnerId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORK_ORDER_OWNER_ID: fieldBuilder.buildEdmTypeField('workOrderOwnerId', 'Edm.String', true),
                /**
                 * Static representation of the {@link workerType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORKER_TYPE: fieldBuilder.buildEdmTypeField('workerType', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', WorkOrder_1.WorkOrder)
            };
        }
        return this._schema;
    }
}
exports.WorkOrderApi = WorkOrderApi;
//# sourceMappingURL=WorkOrderApi.js.map