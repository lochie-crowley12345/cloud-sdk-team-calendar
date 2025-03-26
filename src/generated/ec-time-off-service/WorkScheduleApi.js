"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkScheduleApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const WorkSchedule_1 = require("./WorkSchedule");
const WorkScheduleRequestBuilder_1 = require("./WorkScheduleRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class WorkScheduleApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = WorkSchedule_1.WorkSchedule;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PERIOD_MODEL_NAV: new odata_v2_1.OneToOneLink('periodModelNav', this, linkedApis[0]),
            SHIFT_CLASSIFICATION_NAV: new odata_v2_1.OneToOneLink('shiftClassificationNav', this, linkedApis[1]),
            WORK_SCHEDULE_DAY_MODELS: new odata_v2_1.Link('workScheduleDayModels', this, linkedApis[2]),
            WORK_SCHEDULE_DAYS: new odata_v2_1.Link('workScheduleDays', this, linkedApis[3])
        };
        return this;
    }
    requestBuilder() {
        return new WorkScheduleRequestBuilder_1.WorkScheduleRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(WorkSchedule_1.WorkSchedule, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link averageHoursPerDay} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AVERAGE_HOURS_PER_DAY: fieldBuilder.buildEdmTypeField('averageHoursPerDay', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link averageHoursPerMonth} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AVERAGE_HOURS_PER_MONTH: fieldBuilder.buildEdmTypeField('averageHoursPerMonth', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link averageHoursPerWeek} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AVERAGE_HOURS_PER_WEEK: fieldBuilder.buildEdmTypeField('averageHoursPerWeek', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link averageHoursPerYear} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AVERAGE_HOURS_PER_YEAR: fieldBuilder.buildEdmTypeField('averageHoursPerYear', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link averageWorkingDaysPerWeek} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AVERAGE_WORKING_DAYS_PER_WEEK: fieldBuilder.buildEdmTypeField('averageWorkingDaysPerWeek', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link country} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY: fieldBuilder.buildEdmTypeField('country', 'Edm.String', true),
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
                 * Static representation of the {@link crossMidnightAllowed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CROSS_MIDNIGHT_ALLOWED: fieldBuilder.buildEdmTypeField('crossMidnightAllowed', 'Edm.Boolean', true),
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
                 * Static representation of the {@link externalNameArSa} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_AR_SA: fieldBuilder.buildEdmTypeField('externalName_ar_SA', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNameCyGb} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_CY_GB: fieldBuilder.buildEdmTypeField('externalName_cy_GB', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNameDeDe} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_DE_DE: fieldBuilder.buildEdmTypeField('externalName_de_DE', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNameDefaultValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_DEFAULT_VALUE: fieldBuilder.buildEdmTypeField('externalName_defaultValue', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNameEnDebug} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_EN_DEBUG: fieldBuilder.buildEdmTypeField('externalName_en_DEBUG', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNameEnDebugApos} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_EN_DEBUG_APOS: fieldBuilder.buildEdmTypeField('externalName_en_DEBUG_APOS', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNameEnDebugAposRtl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_EN_DEBUG_APOS_RTL: fieldBuilder.buildEdmTypeField('externalName_en_DEBUG_APOS_RTL', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNameEnGb} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_EN_GB: fieldBuilder.buildEdmTypeField('externalName_en_GB', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNameEnRtl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_EN_RTL: fieldBuilder.buildEdmTypeField('externalName_en_RTL', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNameEnUs} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_EN_US: fieldBuilder.buildEdmTypeField('externalName_en_US', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNameEsEs} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_ES_ES: fieldBuilder.buildEdmTypeField('externalName_es_ES', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNameEsMx} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_ES_MX: fieldBuilder.buildEdmTypeField('externalName_es_MX', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNameFrCa} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_FR_CA: fieldBuilder.buildEdmTypeField('externalName_fr_CA', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNameFrFr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_FR_FR: fieldBuilder.buildEdmTypeField('externalName_fr_FR', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNameHiIn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_HI_IN: fieldBuilder.buildEdmTypeField('externalName_hi_IN', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNameIwIl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_IW_IL: fieldBuilder.buildEdmTypeField('externalName_iw_IL', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNameJaJp} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_JA_JP: fieldBuilder.buildEdmTypeField('externalName_ja_JP', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNameKoKr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_KO_KR: fieldBuilder.buildEdmTypeField('externalName_ko_KR', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNameLocalized} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_LOCALIZED: fieldBuilder.buildEdmTypeField('externalName_localized', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNameNlNl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_NL_NL: fieldBuilder.buildEdmTypeField('externalName_nl_NL', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNamePtBr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_PT_BR: fieldBuilder.buildEdmTypeField('externalName_pt_BR', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNameThTh} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_TH_TH: fieldBuilder.buildEdmTypeField('externalName_th_TH', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalNameZhCn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_NAME_ZH_CN: fieldBuilder.buildEdmTypeField('externalName_zh_CN', 'Edm.String', true),
                /**
                 * Static representation of the {@link flexibleRequestingAllowed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FLEXIBLE_REQUESTING_ALLOWED: fieldBuilder.buildEdmTypeField('flexibleRequestingAllowed', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link individualWorkSchedule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INDIVIDUAL_WORK_SCHEDULE: fieldBuilder.buildEdmTypeField('individualWorkSchedule', 'Edm.Boolean', true),
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
                 * Static representation of the {@link modelCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MODEL_CATEGORY: fieldBuilder.buildEdmTypeField('modelCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link periodModel} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERIOD_MODEL: fieldBuilder.buildEdmTypeField('periodModel', 'Edm.String', true),
                /**
                 * Static representation of the {@link recordId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RECORD_ID: fieldBuilder.buildEdmTypeField('recordId', 'Edm.String', true),
                /**
                 * Static representation of the {@link searchString} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SEARCH_STRING: fieldBuilder.buildEdmTypeField('searchString', 'Edm.String', true),
                /**
                 * Static representation of the {@link shiftClassification} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHIFT_CLASSIFICATION: fieldBuilder.buildEdmTypeField('shiftClassification', 'Edm.String', true),
                /**
                 * Static representation of the {@link simulatedWorkSchedule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SIMULATED_WORK_SCHEDULE: fieldBuilder.buildEdmTypeField('simulatedWorkSchedule', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link startingDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STARTING_DATE: fieldBuilder.buildEdmTypeField('startingDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link timeRecordingVariant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_RECORDING_VARIANT: fieldBuilder.buildEdmTypeField('timeRecordingVariant', 'Edm.String', true),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', WorkSchedule_1.WorkSchedule)
            };
        }
        return this._schema;
    }
}
exports.WorkScheduleApi = WorkScheduleApi;
//# sourceMappingURL=WorkScheduleApi.js.map