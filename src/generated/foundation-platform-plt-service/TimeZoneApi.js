"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeZoneApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TimeZone_1 = require("./TimeZone");
const TimeZoneRequestBuilder_1 = require("./TimeZoneRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class TimeZoneApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = TimeZone_1.TimeZone;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            COUNTRY_NAV: new odata_v2_1.OneToOneLink('countryNav', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new TimeZoneRequestBuilder_1.TimeZoneRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(TimeZone_1.TimeZone, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link comment} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMMENT: fieldBuilder.buildEdmTypeField('comment', 'Edm.String', true),
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
                 * Static representation of the {@link createdDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField('createdDateTime', 'Edm.DateTimeOffset', true),
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
                 * Static representation of the {@link nameEnGb} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_EN_GB: fieldBuilder.buildEdmTypeField('name_en_GB', 'Edm.String', true),
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
                 * Static representation of the {@link nameFrFr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_FR_FR: fieldBuilder.buildEdmTypeField('name_fr_FR', 'Edm.String', true),
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
                 * Static representation of the {@link namePtPt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_PT_PT: fieldBuilder.buildEdmTypeField('name_pt_PT', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameRuRu} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_RU_RU: fieldBuilder.buildEdmTypeField('name_ru_RU', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameZhCn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_ZH_CN: fieldBuilder.buildEdmTypeField('name_zh_CN', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameZhTw} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_ZH_TW: fieldBuilder.buildEdmTypeField('name_zh_TW', 'Edm.String', true),
                /**
                 * Static representation of the {@link supported} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPORTED: fieldBuilder.buildEdmTypeField('supported', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link utcDstOffset} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UTC_DST_OFFSET: fieldBuilder.buildEdmTypeField('utcDstOffset', 'Edm.String', true),
                /**
                 * Static representation of the {@link utcOffset} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UTC_OFFSET: fieldBuilder.buildEdmTypeField('utcOffset', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', TimeZone_1.TimeZone)
            };
        }
        return this._schema;
    }
}
exports.TimeZoneApi = TimeZoneApi;
//# sourceMappingURL=TimeZoneApi.js.map