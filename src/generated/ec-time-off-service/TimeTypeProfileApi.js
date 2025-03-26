"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTypeProfileApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TimeTypeProfile_1 = require("./TimeTypeProfile");
const TimeTypeProfileRequestBuilder_1 = require("./TimeTypeProfileRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class TimeTypeProfileApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = TimeTypeProfile_1.TimeTypeProfile;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            AVAILABLE_TIME_TYPES: new odata_v2_1.Link('availableTimeTypes', this, linkedApis[0]),
            DEFAULT_IMPORT_ATTENDANCE_TIME_TYPE_NAV: new odata_v2_1.OneToOneLink('defaultImportAttendanceTimeTypeNav', this, linkedApis[1]),
            MAIN_ATTENDANCE_TIME_TYPE_NAV: new odata_v2_1.OneToOneLink('mainAttendanceTimeTypeNav', this, linkedApis[2]),
            MAIN_BREAK_TIME_TYPE_NAV: new odata_v2_1.OneToOneLink('mainBreakTimeTypeNav', this, linkedApis[3]),
            MAIN_ESS_TIME_TYPE_NAV: new odata_v2_1.OneToOneLink('mainESSTimeTypeNav', this, linkedApis[4]),
            TIME_ACCOUNT_TYPE_FOR_TIME_OFF_IN_LIEU_NAV: new odata_v2_1.OneToOneLink('timeAccountTypeForTimeOffInLieuNav', this, linkedApis[5]),
            TIME_ACCOUNT_TYPE_FOR_WORKING_TIME_ACCOUNT_NAV: new odata_v2_1.OneToOneLink('timeAccountTypeForWorkingTimeAccountNav', this, linkedApis[6])
        };
        return this;
    }
    requestBuilder() {
        return new TimeTypeProfileRequestBuilder_1.TimeTypeProfileRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(TimeTypeProfile_1.TimeTypeProfile, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link bookTimeOffInLieuOnTimeSheetApproval} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BOOK_TIME_OFF_IN_LIEU_ON_TIME_SHEET_APPROVAL: fieldBuilder.buildEdmTypeField('bookTimeOffInLieuOnTimeSheetApproval', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link bookWorkingTimeOnTimeSheetApproval} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BOOK_WORKING_TIME_ON_TIME_SHEET_APPROVAL: fieldBuilder.buildEdmTypeField('bookWorkingTimeOnTimeSheetApproval', 'Edm.Boolean', true),
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
                 * Static representation of the {@link defaultImportAttendanceTimeType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DEFAULT_IMPORT_ATTENDANCE_TIME_TYPE: fieldBuilder.buildEdmTypeField('defaultImportAttendanceTimeType', 'Edm.String', true),
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
                 * Static representation of the {@link mainAttendanceTimeType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAIN_ATTENDANCE_TIME_TYPE: fieldBuilder.buildEdmTypeField('mainAttendanceTimeType', 'Edm.String', true),
                /**
                 * Static representation of the {@link mainBreakTimeType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAIN_BREAK_TIME_TYPE: fieldBuilder.buildEdmTypeField('mainBreakTimeType', 'Edm.String', true),
                /**
                 * Static representation of the {@link mainEssTimeType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAIN_ESS_TIME_TYPE: fieldBuilder.buildEdmTypeField('mainESSTimeType', 'Edm.String', true),
                /**
                 * Static representation of the {@link mdfSystemEffectiveEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MDF_SYSTEM_EFFECTIVE_END_DATE: fieldBuilder.buildEdmTypeField('mdfSystemEffectiveEndDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link mdfSystemEffectiveStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MDF_SYSTEM_EFFECTIVE_START_DATE: fieldBuilder.buildEdmTypeField('mdfSystemEffectiveStartDate', 'Edm.DateTime', false),
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
                 * Static representation of the {@link timeAccountTypeForTimeOffInLieu} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_ACCOUNT_TYPE_FOR_TIME_OFF_IN_LIEU: fieldBuilder.buildEdmTypeField('timeAccountTypeForTimeOffInLieu', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeAccountTypeForWorkingTimeAccount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_ACCOUNT_TYPE_FOR_WORKING_TIME_ACCOUNT: fieldBuilder.buildEdmTypeField('timeAccountTypeForWorkingTimeAccount', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextArSa} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_AR_SA: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_ar_SA', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextCyGb} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_CY_GB: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_cy_GB', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextDeDe} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_DE_DE: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_de_DE', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextDefaultValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_DEFAULT_VALUE: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_defaultValue', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextEnDebug} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_EN_DEBUG: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_en_DEBUG', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextEnDebugApos} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_EN_DEBUG_APOS: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_en_DEBUG_APOS', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextEnDebugAposRtl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_EN_DEBUG_APOS_RTL: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_en_DEBUG_APOS_RTL', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextEnGb} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_EN_GB: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_en_GB', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextEnRtl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_EN_RTL: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_en_RTL', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextEnUs} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_EN_US: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_en_US', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextEsEs} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_ES_ES: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_es_ES', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextEsMx} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_ES_MX: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_es_MX', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextFrCa} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_FR_CA: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_fr_CA', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextFrFr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_FR_FR: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_fr_FR', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextHiIn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_HI_IN: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_hi_IN', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextIwIl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_IW_IL: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_iw_IL', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextJaJp} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_JA_JP: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_ja_JP', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextKoKr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_KO_KR: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_ko_KR', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextLocalized} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_LOCALIZED: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_localized', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextNlNl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_NL_NL: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_nl_NL', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextPtBr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_PT_BR: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_pt_BR', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextThTh} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_TH_TH: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_th_TH', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeOffEssInstructionalTextZhCn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_OFF_ESS_INSTRUCTIONAL_TEXT_ZH_CN: fieldBuilder.buildEdmTypeField('timeOffEssInstructionalText_zh_CN', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeRecordingVariant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_RECORDING_VARIANT: fieldBuilder.buildEdmTypeField('timeRecordingVariant', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', TimeTypeProfile_1.TimeTypeProfile)
            };
        }
        return this._schema;
    }
}
exports.TimeTypeProfileApi = TimeTypeProfileApi;
//# sourceMappingURL=TimeTypeProfileApi.js.map