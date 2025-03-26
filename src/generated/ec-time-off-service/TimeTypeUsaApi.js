"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTypeUsaApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TimeTypeUsa_1 = require("./TimeTypeUsa");
const TimeTypeUsaRequestBuilder_1 = require("./TimeTypeUsaRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class TimeTypeUsaApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = TimeTypeUsa_1.TimeTypeUsa;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new TimeTypeUsaRequestBuilder_1.TimeTypeUsaRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(TimeTypeUsa_1.TimeTypeUsa, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link timeTypeExternalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_TYPE_EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('TimeType_externalCode', 'Edm.String', false),
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
                 * Static representation of the {@link durationOfDisabilityPeriodOne} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DURATION_OF_DISABILITY_PERIOD_ONE: fieldBuilder.buildEdmTypeField('durationOfDisabilityPeriodOne', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link durationOfDisabilityPeriodThree} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DURATION_OF_DISABILITY_PERIOD_THREE: fieldBuilder.buildEdmTypeField('durationOfDisabilityPeriodThree', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link durationOfDisabilityPeriodTwo} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DURATION_OF_DISABILITY_PERIOD_TWO: fieldBuilder.buildEdmTypeField('durationOfDisabilityPeriodTwo', 'Edm.Int64', true),
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
                 * Static representation of the {@link sicknessVariant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SICKNESS_VARIANT: fieldBuilder.buildEdmTypeField('sicknessVariant', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', TimeTypeUsa_1.TimeTypeUsa)
            };
        }
        return this._schema;
    }
}
exports.TimeTypeUsaApi = TimeTypeUsaApi;
//# sourceMappingURL=TimeTypeUsaApi.js.map