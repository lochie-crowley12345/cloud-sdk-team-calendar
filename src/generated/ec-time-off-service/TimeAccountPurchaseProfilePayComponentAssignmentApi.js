"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeAccountPurchaseProfilePayComponentAssignmentApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TimeAccountPurchaseProfilePayComponentAssignment_1 = require("./TimeAccountPurchaseProfilePayComponentAssignment");
const TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder_1 = require("./TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class TimeAccountPurchaseProfilePayComponentAssignmentApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = TimeAccountPurchaseProfilePayComponentAssignment_1.TimeAccountPurchaseProfilePayComponentAssignment;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder_1.TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(TimeAccountPurchaseProfilePayComponentAssignment_1.TimeAccountPurchaseProfilePayComponentAssignment, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link timeAccountPurchaseProfileExternalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_ACCOUNT_PURCHASE_PROFILE_EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('TimeAccountPurchaseProfile_externalCode', 'Edm.String', false),
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
                 * Static representation of the {@link payComponent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAY_COMPONENT: fieldBuilder.buildEdmTypeField('payComponent', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', TimeAccountPurchaseProfilePayComponentAssignment_1.TimeAccountPurchaseProfilePayComponentAssignment)
            };
        }
        return this._schema;
    }
}
exports.TimeAccountPurchaseProfilePayComponentAssignmentApi = TimeAccountPurchaseProfilePayComponentAssignmentApi;
//# sourceMappingURL=TimeAccountPurchaseProfilePayComponentAssignmentApi.js.map