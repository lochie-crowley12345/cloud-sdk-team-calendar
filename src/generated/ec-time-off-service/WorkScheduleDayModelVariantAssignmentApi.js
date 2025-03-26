"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkScheduleDayModelVariantAssignmentApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const WorkScheduleDayModelVariantAssignment_1 = require("./WorkScheduleDayModelVariantAssignment");
const WorkScheduleDayModelVariantAssignmentRequestBuilder_1 = require("./WorkScheduleDayModelVariantAssignmentRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class WorkScheduleDayModelVariantAssignmentApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = WorkScheduleDayModelVariantAssignment_1.WorkScheduleDayModelVariantAssignment;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            VARIANT_DAY_MODEL_NAV: new odata_v2_1.OneToOneLink('variantDayModelNav', this, linkedApis[0]),
            VARIANT_IDENTIFIER_NAV: new odata_v2_1.OneToOneLink('variantIdentifierNav', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new WorkScheduleDayModelVariantAssignmentRequestBuilder_1.WorkScheduleDayModelVariantAssignmentRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(WorkScheduleDayModelVariantAssignment_1.WorkScheduleDayModelVariantAssignment, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link workScheduleDayModelExternalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORK_SCHEDULE_DAY_MODEL_EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('WorkScheduleDayModel_externalCode', 'Edm.String', false),
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
                 * Static representation of the {@link variantDayModel} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VARIANT_DAY_MODEL: fieldBuilder.buildEdmTypeField('variantDayModel', 'Edm.String', true),
                /**
                 * Static representation of the {@link variantIdentifier} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VARIANT_IDENTIFIER: fieldBuilder.buildEdmTypeField('variantIdentifier', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', WorkScheduleDayModelVariantAssignment_1.WorkScheduleDayModelVariantAssignment)
            };
        }
        return this._schema;
    }
}
exports.WorkScheduleDayModelVariantAssignmentApi = WorkScheduleDayModelVariantAssignmentApi;
//# sourceMappingURL=WorkScheduleDayModelVariantAssignmentApi.js.map