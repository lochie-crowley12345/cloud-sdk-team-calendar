"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamGoalOwnerApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TeamGoalOwner_1 = require("./TeamGoalOwner");
const TeamGoalOwnerRequestBuilder_1 = require("./TeamGoalOwnerRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class TeamGoalOwnerApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = TeamGoalOwner_1.TeamGoalOwner;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new TeamGoalOwnerRequestBuilder_1.TeamGoalOwnerRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(TeamGoalOwner_1.TeamGoalOwner, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
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
                 * Static representation of the {@link mdfSystemCreatedBy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MDF_SYSTEM_CREATED_BY: fieldBuilder.buildEdmTypeField('mdfSystemCreatedBy', 'Edm.String', true),
                /**
                 * Static representation of the {@link mdfSystemCreatedDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MDF_SYSTEM_CREATED_DATE: fieldBuilder.buildEdmTypeField('mdfSystemCreatedDate', 'Edm.DateTime', true),
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
                 * Static representation of the {@link mdfSystemLastModifiedBy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MDF_SYSTEM_LAST_MODIFIED_BY: fieldBuilder.buildEdmTypeField('mdfSystemLastModifiedBy', 'Edm.String', true),
                /**
                 * Static representation of the {@link mdfSystemLastModifiedDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MDF_SYSTEM_LAST_MODIFIED_DATE: fieldBuilder.buildEdmTypeField('mdfSystemLastModifiedDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link mdfSystemLastModifiedDateWithTz} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MDF_SYSTEM_LAST_MODIFIED_DATE_WITH_TZ: fieldBuilder.buildEdmTypeField('mdfSystemLastModifiedDateWithTZ', 'Edm.DateTimeOffset', true),
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
                 * Static representation of the {@link objId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OBJ_ID: fieldBuilder.buildEdmTypeField('objId', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link ownerType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OWNER_TYPE: fieldBuilder.buildEdmTypeField('ownerType', 'Edm.Int64', true),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', TeamGoalOwner_1.TeamGoalOwner)
            };
        }
        return this._schema;
    }
}
exports.TeamGoalOwnerApi = TeamGoalOwnerApi;
//# sourceMappingURL=TeamGoalOwnerApi.js.map