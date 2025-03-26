"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeAccountType_1Api = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TimeAccountType_1_1 = require("./TimeAccountType_1");
const TimeAccountType_1RequestBuilder_1 = require("./TimeAccountType_1RequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class TimeAccountType_1Api {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = TimeAccountType_1_1.TimeAccountType_1;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            COUNTRY_EXTENSION_AUS: new odata_v2_1.OneToOneLink('countryExtensionAUS', this, linkedApis[0]),
            PERIODIC_TIME_ACCOUNT_UPDATE_PROFILE_NAV: new odata_v2_1.OneToOneLink('periodicTimeAccountUpdateProfileNav', this, linkedApis[1]),
            RECALCULATION_BASED_FIELD_LIST: new odata_v2_1.Link('recalculationBasedFieldList', this, linkedApis[2]),
            TIME_ACCOUNT_PAYOUT_PROFILE_NAV: new odata_v2_1.OneToOneLink('timeAccountPayoutProfileNav', this, linkedApis[3]),
            TIME_ACCOUNT_PURCHASE_PROFILE_NAV: new odata_v2_1.OneToOneLink('timeAccountPurchaseProfileNav', this, linkedApis[4])
        };
        return this;
    }
    requestBuilder() {
        return new TimeAccountType_1RequestBuilder_1.TimeAccountType_1RequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(TimeAccountType_1_1.TimeAccountType_1, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link accountBookingOffsetInMonths} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNT_BOOKING_OFFSET_IN_MONTHS: fieldBuilder.buildEdmTypeField('accountBookingOffsetInMonths', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link accountCreationAutomationLevel} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNT_CREATION_AUTOMATION_LEVEL: fieldBuilder.buildEdmTypeField('accountCreationAutomationLevel', 'Edm.String', true),
                /**
                 * Static representation of the {@link accountCreationDay} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNT_CREATION_DAY: fieldBuilder.buildEdmTypeField('accountCreationDay', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link accountCreationMonth} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNT_CREATION_MONTH: fieldBuilder.buildEdmTypeField('accountCreationMonth', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link accountCreationOffsetInMonths} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNT_CREATION_OFFSET_IN_MONTHS: fieldBuilder.buildEdmTypeField('accountCreationOffsetInMonths', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link accountCreationReferenceDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNT_CREATION_REFERENCE_DATE: fieldBuilder.buildEdmTypeField('accountCreationReferenceDate', 'Edm.String', true),
                /**
                 * Static representation of the {@link accountDetailRetentionGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNT_DETAIL_RETENTION_GROUP: fieldBuilder.buildEdmTypeField('accountDetailRetentionGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link accountRetentionGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNT_RETENTION_GROUP: fieldBuilder.buildEdmTypeField('accountRetentionGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link accrualAutomationLevel} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCRUAL_AUTOMATION_LEVEL: fieldBuilder.buildEdmTypeField('accrualAutomationLevel', 'Edm.String', true),
                /**
                 * Static representation of the {@link accrualCalculationMethod} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCRUAL_CALCULATION_METHOD: fieldBuilder.buildEdmTypeField('accrualCalculationMethod', 'Edm.String', true),
                /**
                 * Static representation of the {@link accrualCreationOffset} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCRUAL_CREATION_OFFSET: fieldBuilder.buildEdmTypeField('accrualCreationOffset', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link accrualFrequency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCRUAL_FREQUENCY: fieldBuilder.buildEdmTypeField('accrualFrequency', 'Edm.String', true),
                /**
                 * Static representation of the {@link accrualFrequencyStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCRUAL_FREQUENCY_START_DATE: fieldBuilder.buildEdmTypeField('accrualFrequencyStartDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link accrualPeriodStartDay} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCRUAL_PERIOD_START_DAY: fieldBuilder.buildEdmTypeField('accrualPeriodStartDay', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link accrualPeriodStartMonth} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCRUAL_PERIOD_START_MONTH: fieldBuilder.buildEdmTypeField('accrualPeriodStartMonth', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link accrualRecalculationPostingMethod} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCRUAL_RECALCULATION_POSTING_METHOD: fieldBuilder.buildEdmTypeField('accrualRecalculationPostingMethod', 'Edm.String', true),
                /**
                 * Static representation of the {@link accrualRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCRUAL_RULE: fieldBuilder.buildEdmTypeField('accrualRule', 'Edm.String', true),
                /**
                 * Static representation of the {@link accrualTransferDateRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCRUAL_TRANSFER_DATE_RULE: fieldBuilder.buildEdmTypeField('accrualTransferDateRule', 'Edm.String', true),
                /**
                 * Static representation of the {@link accrualTransferRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCRUAL_TRANSFER_RULE: fieldBuilder.buildEdmTypeField('accrualTransferRule', 'Edm.String', true),
                /**
                 * Static representation of the {@link accrualWaitingPeriod} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCRUAL_WAITING_PERIOD: fieldBuilder.buildEdmTypeField('accrualWaitingPeriod', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link accrualWaitingPeriodUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCRUAL_WAITING_PERIOD_UNIT: fieldBuilder.buildEdmTypeField('accrualWaitingPeriodUnit', 'Edm.String', true),
                /**
                 * Static representation of the {@link advancesAllowed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADVANCES_ALLOWED: fieldBuilder.buildEdmTypeField('advancesAllowed', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link allowPayoutWithSimulation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ALLOW_PAYOUT_WITH_SIMULATION: fieldBuilder.buildEdmTypeField('allowPayoutWithSimulation', 'Edm.String', true),
                /**
                 * Static representation of the {@link calculateSnapshotApprovedAbsenceBalance} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CALCULATE_SNAPSHOT_APPROVED_ABSENCE_BALANCE: fieldBuilder.buildEdmTypeField('calculateSnapshotApprovedAbsenceBalance', 'Edm.Boolean', true),
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
                 * Static representation of the {@link creation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION: fieldBuilder.buildEdmTypeField('creation', 'Edm.String', true),
                /**
                 * Static representation of the {@link effectOnTransferDateRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EFFECT_ON_TRANSFER_DATE_RULE: fieldBuilder.buildEdmTypeField('effectOnTransferDateRule', 'Edm.String', true),
                /**
                 * Static representation of the {@link entitlementMethod} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENTITLEMENT_METHOD: fieldBuilder.buildEdmTypeField('entitlementMethod', 'Edm.String', true),
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
                 * Static representation of the {@link hireRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HIRE_RULE: fieldBuilder.buildEdmTypeField('hireRule', 'Edm.String', true),
                /**
                 * Static representation of the {@link initialAccrualTransferDateRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INITIAL_ACCRUAL_TRANSFER_DATE_RULE: fieldBuilder.buildEdmTypeField('initialAccrualTransferDateRule', 'Edm.String', true),
                /**
                 * Static representation of the {@link initialFlexibleAccountStartDateRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INITIAL_FLEXIBLE_ACCOUNT_START_DATE_RULE: fieldBuilder.buildEdmTypeField('initialFlexibleAccountStartDateRule', 'Edm.String', true),
                /**
                 * Static representation of the {@link interimRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INTERIM_RULE: fieldBuilder.buildEdmTypeField('interimRule', 'Edm.String', true),
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
                 * Static representation of the {@link levelOfSimulationPrecision} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LEVEL_OF_SIMULATION_PRECISION: fieldBuilder.buildEdmTypeField('levelOfSimulationPrecision', 'Edm.String', true),
                /**
                 * Static representation of the {@link maximumSimulationHorizonInMonths} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAXIMUM_SIMULATION_HORIZON_IN_MONTHS: fieldBuilder.buildEdmTypeField('maximumSimulationHorizonInMonths', 'Edm.Int64', true),
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
                 * Static representation of the {@link minimumBalanceAllowed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MINIMUM_BALANCE_ALLOWED: fieldBuilder.buildEdmTypeField('minimumBalanceAllowed', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link payComponent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAY_COMPONENT: fieldBuilder.buildEdmTypeField('payComponent', 'Edm.String', true),
                /**
                 * Static representation of the {@link payComponentAccrualSeparated} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAY_COMPONENT_ACCRUAL_SEPARATED: fieldBuilder.buildEdmTypeField('payComponentAccrualSeparated', 'Edm.String', true),
                /**
                 * Static representation of the {@link payComponentGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAY_COMPONENT_GROUP: fieldBuilder.buildEdmTypeField('payComponentGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link payComponentTermination} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAY_COMPONENT_TERMINATION: fieldBuilder.buildEdmTypeField('payComponentTermination', 'Edm.String', true),
                /**
                 * Static representation of the {@link payComponentTerminationAccrualSeparated} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED: fieldBuilder.buildEdmTypeField('payComponentTerminationAccrualSeparated', 'Edm.String', true),
                /**
                 * Static representation of the {@link payoutEligibility} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYOUT_ELIGIBILITY: fieldBuilder.buildEdmTypeField('payoutEligibility', 'Edm.String', true),
                /**
                 * Static representation of the {@link pepCalendarAutomationLevel} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PEP_CALENDAR_AUTOMATION_LEVEL: fieldBuilder.buildEdmTypeField('pepCalendarAutomationLevel', 'Edm.String', true),
                /**
                 * Static representation of the {@link periodEndProcessingRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERIOD_END_PROCESSING_RULE: fieldBuilder.buildEdmTypeField('periodEndProcessingRule', 'Edm.String', true),
                /**
                 * Static representation of the {@link periodicTimeAccountUpdateProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERIODIC_TIME_ACCOUNT_UPDATE_PROFILE: fieldBuilder.buildEdmTypeField('periodicTimeAccountUpdateProfile', 'Edm.String', true),
                /**
                 * Static representation of the {@link postingOrder} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                POSTING_ORDER: fieldBuilder.buildEdmTypeField('postingOrder', 'Edm.String', true),
                /**
                 * Static representation of the {@link purchaseEligibility} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASE_ELIGIBILITY: fieldBuilder.buildEdmTypeField('purchaseEligibility', 'Edm.String', true),
                /**
                 * Static representation of the {@link secondAccrualCreationOffset} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SECOND_ACCRUAL_CREATION_OFFSET: fieldBuilder.buildEdmTypeField('secondAccrualCreationOffset', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link simulateAccruals} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SIMULATE_ACCRUALS: fieldBuilder.buildEdmTypeField('simulateAccruals', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link simulationRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SIMULATION_RULE: fieldBuilder.buildEdmTypeField('simulationRule', 'Edm.String', true),
                /**
                 * Static representation of the {@link snapshotsAllowed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SNAPSHOTS_ALLOWED: fieldBuilder.buildEdmTypeField('snapshotsAllowed', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link terminationRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TERMINATION_RULE: fieldBuilder.buildEdmTypeField('terminationRule', 'Edm.String', true),
                /**
                 * Static representation of the {@link terminationRuleDataEffectiveDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TERMINATION_RULE_DATA_EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField('terminationRuleDataEffectiveDate', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeAccountConfigurationRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_ACCOUNT_CONFIGURATION_RULE: fieldBuilder.buildEdmTypeField('timeAccountConfigurationRule', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeAccountPayoutProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_ACCOUNT_PAYOUT_PROFILE: fieldBuilder.buildEdmTypeField('timeAccountPayoutProfile', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeAccountPurchaseProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_ACCOUNT_PURCHASE_PROFILE: fieldBuilder.buildEdmTypeField('timeAccountPurchaseProfile', 'Edm.String', true),
                /**
                 * Static representation of the {@link unit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNIT: fieldBuilder.buildEdmTypeField('unit', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', TimeAccountType_1_1.TimeAccountType_1)
            };
        }
        return this._schema;
    }
}
exports.TimeAccountType_1Api = TimeAccountType_1Api;
//# sourceMappingURL=TimeAccountType_1Api.js.map