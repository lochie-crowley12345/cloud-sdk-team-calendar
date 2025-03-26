"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickListValueV2Api = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const PickListValueV2_1 = require("./PickListValueV2");
const PickListValueV2RequestBuilder_1 = require("./PickListValueV2RequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class PickListValueV2Api {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = PickListValueV2_1.PickListValueV2;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PARENT_PICK_LIST_VALUE_NAV: new odata_v2_1.Link('parentPickListValueNav', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new PickListValueV2RequestBuilder_1.PickListValueV2RequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(PickListValueV2_1.PickListValueV2, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link pickListV2EffectiveStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PICK_LIST_V_2_EFFECTIVE_START_DATE: fieldBuilder.buildEdmTypeField('PickListV2_effectiveStartDate', 'Edm.DateTime', false),
                /**
                 * Static representation of the {@link pickListV2Id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PICK_LIST_V_2_ID: fieldBuilder.buildEdmTypeField('PickListV2_id', 'Edm.String', false),
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
                 * Static representation of the {@link externalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('externalCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link lValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                L_VALUE: fieldBuilder.buildEdmTypeField('lValue', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link labelDeDe} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LABEL_DE_DE: fieldBuilder.buildEdmTypeField('label_de_DE', 'Edm.String', true),
                /**
                 * Static representation of the {@link labelDefaultValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LABEL_DEFAULT_VALUE: fieldBuilder.buildEdmTypeField('label_defaultValue', 'Edm.String', true),
                /**
                 * Static representation of the {@link labelEnGb} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LABEL_EN_GB: fieldBuilder.buildEdmTypeField('label_en_GB', 'Edm.String', true),
                /**
                 * Static representation of the {@link labelEnUs} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LABEL_EN_US: fieldBuilder.buildEdmTypeField('label_en_US', 'Edm.String', true),
                /**
                 * Static representation of the {@link labelEsEs} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LABEL_ES_ES: fieldBuilder.buildEdmTypeField('label_es_ES', 'Edm.String', true),
                /**
                 * Static representation of the {@link labelFrFr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LABEL_FR_FR: fieldBuilder.buildEdmTypeField('label_fr_FR', 'Edm.String', true),
                /**
                 * Static representation of the {@link labelJaJp} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LABEL_JA_JP: fieldBuilder.buildEdmTypeField('label_ja_JP', 'Edm.String', true),
                /**
                 * Static representation of the {@link labelKoKr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LABEL_KO_KR: fieldBuilder.buildEdmTypeField('label_ko_KR', 'Edm.String', true),
                /**
                 * Static representation of the {@link labelLocalized} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LABEL_LOCALIZED: fieldBuilder.buildEdmTypeField('label_localized', 'Edm.String', true),
                /**
                 * Static representation of the {@link labelNlNl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LABEL_NL_NL: fieldBuilder.buildEdmTypeField('label_nl_NL', 'Edm.String', true),
                /**
                 * Static representation of the {@link labelPtBr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LABEL_PT_BR: fieldBuilder.buildEdmTypeField('label_pt_BR', 'Edm.String', true),
                /**
                 * Static representation of the {@link labelPtPt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LABEL_PT_PT: fieldBuilder.buildEdmTypeField('label_pt_PT', 'Edm.String', true),
                /**
                 * Static representation of the {@link labelRuRu} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LABEL_RU_RU: fieldBuilder.buildEdmTypeField('label_ru_RU', 'Edm.String', true),
                /**
                 * Static representation of the {@link labelZhCn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LABEL_ZH_CN: fieldBuilder.buildEdmTypeField('label_zh_CN', 'Edm.String', true),
                /**
                 * Static representation of the {@link labelZhTw} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LABEL_ZH_TW: fieldBuilder.buildEdmTypeField('label_zh_TW', 'Edm.String', true),
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
                 * Static representation of the {@link legacyStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LEGACY_STATUS: fieldBuilder.buildEdmTypeField('legacyStatus', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link maxVal} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAX_VAL: fieldBuilder.buildEdmTypeField('maxVal', 'Edm.Decimal', true),
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
                 * Static representation of the {@link minVal} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MIN_VAL: fieldBuilder.buildEdmTypeField('minVal', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link nonUniqueExternalCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NON_UNIQUE_EXTERNAL_CODE: fieldBuilder.buildEdmTypeField('nonUniqueExternalCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link optValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OPT_VALUE: fieldBuilder.buildEdmTypeField('optValue', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link optionId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OPTION_ID: fieldBuilder.buildEdmTypeField('optionId', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link parentPickListValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARENT_PICK_LIST_VALUE: fieldBuilder.buildEdmTypeField('parentPickListValue', 'Edm.String', true),
                /**
                 * Static representation of the {@link rValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                R_VALUE: fieldBuilder.buildEdmTypeField('rValue', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link status} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATUS: fieldBuilder.buildEdmTypeField('status', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', PickListValueV2_1.PickListValueV2)
            };
        }
        return this._schema;
    }
}
exports.PickListValueV2Api = PickListValueV2Api;
//# sourceMappingURL=PickListValueV2Api.js.map