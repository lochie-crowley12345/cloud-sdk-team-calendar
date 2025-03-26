"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeAccountTypeAusApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TimeAccountTypeAus_1 = require("./TimeAccountTypeAus");
const TimeAccountTypeAusRequestBuilder_1 = require("./TimeAccountTypeAusRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class TimeAccountTypeAusApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = TimeAccountTypeAus_1.TimeAccountTypeAus;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new TimeAccountTypeAusRequestBuilder_1.TimeAccountTypeAusRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(TimeAccountTypeAus_1.TimeAccountTypeAus, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link timeAccountTypeExternalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_ACCOUNT_TYPE_EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('TimeAccountType_externalCode', 'Edm.String', false),
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
                 * Static representation of the {@link externalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('externalCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link includeInLeaveLoadingCalculations} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCLUDE_IN_LEAVE_LOADING_CALCULATIONS: fieldBuilder.buildEdmTypeField('includeInLeaveLoadingCalculations', 'Edm.Boolean', true),
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
                 * Static representation of the {@link priorServiceAccountDistinction} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRIOR_SERVICE_ACCOUNT_DISTINCTION: fieldBuilder.buildEdmTypeField('priorServiceAccountDistinction', 'Edm.String', true),
                /**
                 * Static representation of the {@link priorServiceUseCase} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRIOR_SERVICE_USE_CASE: fieldBuilder.buildEdmTypeField('priorServiceUseCase', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', TimeAccountTypeAus_1.TimeAccountTypeAus)
            };
        }
        return this._schema;
    }
}
exports.TimeAccountTypeAusApi = TimeAccountTypeAusApi;
//# sourceMappingURL=TimeAccountTypeAusApi.js.map