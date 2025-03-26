"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HolidayCalendarApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const HolidayCalendar_1 = require("./HolidayCalendar");
const HolidayCalendarRequestBuilder_1 = require("./HolidayCalendarRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class HolidayCalendarApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = HolidayCalendar_1.HolidayCalendar;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            HOLIDAY_ASSIGNMENTS: new odata_v2_1.Link('holidayAssignments', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new HolidayCalendarRequestBuilder_1.HolidayCalendarRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(HolidayCalendar_1.HolidayCalendar, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
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
                 * Static representation of the {@link nameArSa} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_AR_SA: fieldBuilder.buildEdmTypeField('name_ar_SA', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameCyGb} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_CY_GB: fieldBuilder.buildEdmTypeField('name_cy_GB', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameDeDe} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_DE_DE: fieldBuilder.buildEdmTypeField('name_de_DE', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameDefaultValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_DEFAULT_VALUE: fieldBuilder.buildEdmTypeField('name_defaultValue', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameEnDebug} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_EN_DEBUG: fieldBuilder.buildEdmTypeField('name_en_DEBUG', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameEnDebugApos} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_EN_DEBUG_APOS: fieldBuilder.buildEdmTypeField('name_en_DEBUG_APOS', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameEnDebugAposRtl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_EN_DEBUG_APOS_RTL: fieldBuilder.buildEdmTypeField('name_en_DEBUG_APOS_RTL', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameEnGb} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_EN_GB: fieldBuilder.buildEdmTypeField('name_en_GB', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameEnRtl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_EN_RTL: fieldBuilder.buildEdmTypeField('name_en_RTL', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameEnUs} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_EN_US: fieldBuilder.buildEdmTypeField('name_en_US', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameEsEs} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_ES_ES: fieldBuilder.buildEdmTypeField('name_es_ES', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameEsMx} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_ES_MX: fieldBuilder.buildEdmTypeField('name_es_MX', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameFrCa} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_FR_CA: fieldBuilder.buildEdmTypeField('name_fr_CA', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameFrFr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_FR_FR: fieldBuilder.buildEdmTypeField('name_fr_FR', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameHiIn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_HI_IN: fieldBuilder.buildEdmTypeField('name_hi_IN', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameIwIl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_IW_IL: fieldBuilder.buildEdmTypeField('name_iw_IL', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameJaJp} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_JA_JP: fieldBuilder.buildEdmTypeField('name_ja_JP', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameKoKr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_KO_KR: fieldBuilder.buildEdmTypeField('name_ko_KR', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameLocalized} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_LOCALIZED: fieldBuilder.buildEdmTypeField('name_localized', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameNlNl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_NL_NL: fieldBuilder.buildEdmTypeField('name_nl_NL', 'Edm.String', true),
                /**
                 * Static representation of the {@link namePtBr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_PT_BR: fieldBuilder.buildEdmTypeField('name_pt_BR', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameThTh} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_TH_TH: fieldBuilder.buildEdmTypeField('name_th_TH', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameZhCn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_ZH_CN: fieldBuilder.buildEdmTypeField('name_zh_CN', 'Edm.String', true),
                /**
                 * Static representation of the {@link oldName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OLD_NAME: fieldBuilder.buildEdmTypeField('oldName', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', HolidayCalendar_1.HolidayCalendar)
            };
        }
        return this._schema;
    }
}
exports.HolidayCalendarApi = HolidayCalendarApi;
//# sourceMappingURL=HolidayCalendarApi.js.map