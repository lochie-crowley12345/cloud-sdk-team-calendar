"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ecTimeOffService = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TimeAccountPostingRuleApi_1 = require("./TimeAccountPostingRuleApi");
const WorkScheduleDayModelVariantAssignmentApi_1 = require("./WorkScheduleDayModelVariantAssignmentApi");
const HolidayAssignmentApi_1 = require("./HolidayAssignmentApi");
const TimeAccountPurchaseProfileApi_1 = require("./TimeAccountPurchaseProfileApi");
const TimeTypeCanApi_1 = require("./TimeTypeCanApi");
const WorkScheduleDayModelVariantIdentifierApi_1 = require("./WorkScheduleDayModelVariantIdentifierApi");
const TimeManagementTerminationEndHandlingExcludedEventReasonApi_1 = require("./TimeManagementTerminationEndHandlingExcludedEventReasonApi");
const TimeAccountPurchaseProfilePayComponentAssignmentApi_1 = require("./TimeAccountPurchaseProfilePayComponentAssignmentApi");
const EmployeeTimeGroupItemApi_1 = require("./EmployeeTimeGroupItemApi");
const WorkScheduleDayModelAssignmentApi_1 = require("./WorkScheduleDayModelAssignmentApi");
const TimeAccountDetailApi_1 = require("./TimeAccountDetailApi");
const TimeTypeNldApi_1 = require("./TimeTypeNldApi");
const AbsenceCountingMethodApi_1 = require("./AbsenceCountingMethodApi");
const ShiftClassificationApi_1 = require("./ShiftClassificationApi");
const WorkScheduleDayApi_1 = require("./WorkScheduleDayApi");
const HolidayCalendarApi_1 = require("./HolidayCalendarApi");
const TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi_1 = require("./TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi");
const EmployeeTimeDeuApi_1 = require("./EmployeeTimeDeuApi");
const TimeAccountApi_1 = require("./TimeAccountApi");
const WorkScheduleDayModelAssignmentSegmentApi_1 = require("./WorkScheduleDayModelAssignmentSegmentApi");
const EmployeeTimeColApi_1 = require("./EmployeeTimeColApi");
const EmployeeTimeEspApi_1 = require("./EmployeeTimeEspApi");
const TimeManagementTerminationEndHandlingConfigurationApi_1 = require("./TimeManagementTerminationEndHandlingConfigurationApi");
const HolidayCategoryApi_1 = require("./HolidayCategoryApi");
const ElectronicSicknessCertificateExclusionReasonDeuApi_1 = require("./ElectronicSicknessCertificateExclusionReasonDeuApi");
const EmployeeTimeGroupApi_1 = require("./EmployeeTimeGroupApi");
const TimeAccountType_1Api_1 = require("./TimeAccountType_1Api");
const AccrualCalculationBaseApi_1 = require("./AccrualCalculationBaseApi");
const EmployeeTimeUsaApi_1 = require("./EmployeeTimeUsaApi");
const TimeTypeUsaApi_1 = require("./TimeTypeUsaApi");
const TemporaryTimeInformationApi_1 = require("./TemporaryTimeInformationApi");
const TimeTypeProfileApi_1 = require("./TimeTypeProfileApi");
const TimeManagementAlertApi_1 = require("./TimeManagementAlertApi");
const TimeTypeDeuApi_1 = require("./TimeTypeDeuApi");
const TimeTypeApi_1 = require("./TimeTypeApi");
const TimeManagementTerminationEndHandlingExclusionApi_1 = require("./TimeManagementTerminationEndHandlingExclusionApi");
const EmployeeTimeMexApi_1 = require("./EmployeeTimeMexApi");
const WorkScheduleDayModelApi_1 = require("./WorkScheduleDayModelApi");
const TimeAccountSnapshotApi_1 = require("./TimeAccountSnapshotApi");
const EmpTimeAccountBalanceApi_1 = require("./EmpTimeAccountBalanceApi");
const TimeManagementAlertMessageApi_1 = require("./TimeManagementAlertMessageApi");
const EmployeeTimeNldApi_1 = require("./EmployeeTimeNldApi");
const EmployeeTimeCanApi_1 = require("./EmployeeTimeCanApi");
const TimeManagementTerminationEndHandlingLegalEntityConfigurationApi_1 = require("./TimeManagementTerminationEndHandlingLegalEntityConfigurationApi");
const EmployeeTimePolApi_1 = require("./EmployeeTimePolApi");
const TimeAccountPayoutProfileApi_1 = require("./TimeAccountPayoutProfileApi");
const TimeAccountTypeAusApi_1 = require("./TimeAccountTypeAusApi");
const PeriodicTimeAccountUpdateProfileApi_1 = require("./PeriodicTimeAccountUpdateProfileApi");
const AvailableTimeTypeApi_1 = require("./AvailableTimeTypeApi");
const WorkScheduleApi_1 = require("./WorkScheduleApi");
const EmployeeTimeAusApi_1 = require("./EmployeeTimeAusApi");
const WorkScheduleDayModelSegmentApi_1 = require("./WorkScheduleDayModelSegmentApi");
const RecalculationBasedFieldApi_1 = require("./RecalculationBasedFieldApi");
const HolidayApi_1 = require("./HolidayApi");
const EmployeeTimeCalendarApi_1 = require("./EmployeeTimeCalendarApi");
const TimeTypeAusApi_1 = require("./TimeTypeAusApi");
const EmployeeTimeApi_1 = require("./EmployeeTimeApi");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function ecTimeOffService(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new EcTimeOffService((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
exports.ecTimeOffService = ecTimeOffService;
class EcTimeOffService {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, ctor) {
        if (!this.apis[key]) {
            this.apis[key] = new ctor(this.deSerializers);
        }
        return this.apis[key];
    }
    get timeAccountPostingRuleApi() {
        const api = this.initApi('timeAccountPostingRuleApi', TimeAccountPostingRuleApi_1.TimeAccountPostingRuleApi);
        const linkedApis = [
            this.initApi('timeAccountType_1Api', TimeAccountType_1Api_1.TimeAccountType_1Api)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get workScheduleDayModelVariantAssignmentApi() {
        const api = this.initApi('workScheduleDayModelVariantAssignmentApi', WorkScheduleDayModelVariantAssignmentApi_1.WorkScheduleDayModelVariantAssignmentApi);
        const linkedApis = [
            this.initApi('workScheduleDayModelApi', WorkScheduleDayModelApi_1.WorkScheduleDayModelApi),
            this.initApi('workScheduleDayModelVariantIdentifierApi', WorkScheduleDayModelVariantIdentifierApi_1.WorkScheduleDayModelVariantIdentifierApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get holidayAssignmentApi() {
        const api = this.initApi('holidayAssignmentApi', HolidayAssignmentApi_1.HolidayAssignmentApi);
        const linkedApis = [
            this.initApi('holidayCategoryApi', HolidayCategoryApi_1.HolidayCategoryApi),
            this.initApi('holidayApi', HolidayApi_1.HolidayApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get timeAccountPurchaseProfileApi() {
        const api = this.initApi('timeAccountPurchaseProfileApi', TimeAccountPurchaseProfileApi_1.TimeAccountPurchaseProfileApi);
        const linkedApis = [
            this.initApi('timeAccountPurchaseProfilePayComponentAssignmentApi', TimeAccountPurchaseProfilePayComponentAssignmentApi_1.TimeAccountPurchaseProfilePayComponentAssignmentApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get timeTypeCanApi() {
        return this.initApi('timeTypeCanApi', TimeTypeCanApi_1.TimeTypeCanApi);
    }
    get workScheduleDayModelVariantIdentifierApi() {
        return this.initApi('workScheduleDayModelVariantIdentifierApi', WorkScheduleDayModelVariantIdentifierApi_1.WorkScheduleDayModelVariantIdentifierApi);
    }
    get timeManagementTerminationEndHandlingExcludedEventReasonApi() {
        return this.initApi('timeManagementTerminationEndHandlingExcludedEventReasonApi', TimeManagementTerminationEndHandlingExcludedEventReasonApi_1.TimeManagementTerminationEndHandlingExcludedEventReasonApi);
    }
    get timeAccountPurchaseProfilePayComponentAssignmentApi() {
        return this.initApi('timeAccountPurchaseProfilePayComponentAssignmentApi', TimeAccountPurchaseProfilePayComponentAssignmentApi_1.TimeAccountPurchaseProfilePayComponentAssignmentApi);
    }
    get employeeTimeGroupItemApi() {
        const api = this.initApi('employeeTimeGroupItemApi', EmployeeTimeGroupItemApi_1.EmployeeTimeGroupItemApi);
        const linkedApis = [this.initApi('employeeTimeApi', EmployeeTimeApi_1.EmployeeTimeApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get workScheduleDayModelAssignmentApi() {
        const api = this.initApi('workScheduleDayModelAssignmentApi', WorkScheduleDayModelAssignmentApi_1.WorkScheduleDayModelAssignmentApi);
        const linkedApis = [
            this.initApi('workScheduleDayModelApi', WorkScheduleDayModelApi_1.WorkScheduleDayModelApi),
            this.initApi('workScheduleDayModelAssignmentSegmentApi', WorkScheduleDayModelAssignmentSegmentApi_1.WorkScheduleDayModelAssignmentSegmentApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get timeAccountDetailApi() {
        const api = this.initApi('timeAccountDetailApi', TimeAccountDetailApi_1.TimeAccountDetailApi);
        const linkedApis = [
            this.initApi('employeeTimeCalendarApi', EmployeeTimeCalendarApi_1.EmployeeTimeCalendarApi),
            this.initApi('employeeTimeApi', EmployeeTimeApi_1.EmployeeTimeApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get timeTypeNldApi() {
        return this.initApi('timeTypeNldApi', TimeTypeNldApi_1.TimeTypeNldApi);
    }
    get absenceCountingMethodApi() {
        return this.initApi('absenceCountingMethodApi', AbsenceCountingMethodApi_1.AbsenceCountingMethodApi);
    }
    get shiftClassificationApi() {
        return this.initApi('shiftClassificationApi', ShiftClassificationApi_1.ShiftClassificationApi);
    }
    get workScheduleDayApi() {
        return this.initApi('workScheduleDayApi', WorkScheduleDayApi_1.WorkScheduleDayApi);
    }
    get holidayCalendarApi() {
        const api = this.initApi('holidayCalendarApi', HolidayCalendarApi_1.HolidayCalendarApi);
        const linkedApis = [
            this.initApi('holidayAssignmentApi', HolidayAssignmentApi_1.HolidayAssignmentApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get timeManagementTerminationEndHandlingExcludedTimeAccountTypeApi() {
        const api = this.initApi('timeManagementTerminationEndHandlingExcludedTimeAccountTypeApi', TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi_1.TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi);
        const linkedApis = [
            this.initApi('timeAccountType_1Api', TimeAccountType_1Api_1.TimeAccountType_1Api)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get employeeTimeDeuApi() {
        const api = this.initApi('employeeTimeDeuApi', EmployeeTimeDeuApi_1.EmployeeTimeDeuApi);
        const linkedApis = [
            this.initApi('electronicSicknessCertificateExclusionReasonDeuApi', ElectronicSicknessCertificateExclusionReasonDeuApi_1.ElectronicSicknessCertificateExclusionReasonDeuApi),
            this.initApi('employeeTimeGroupApi', EmployeeTimeGroupApi_1.EmployeeTimeGroupApi),
            this.initApi('employeeTimeGroupApi', EmployeeTimeGroupApi_1.EmployeeTimeGroupApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get timeAccountApi() {
        const api = this.initApi('timeAccountApi', TimeAccountApi_1.TimeAccountApi);
        const linkedApis = [
            this.initApi('timeAccountType_1Api', TimeAccountType_1Api_1.TimeAccountType_1Api),
            this.initApi('timeAccountDetailApi', TimeAccountDetailApi_1.TimeAccountDetailApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get workScheduleDayModelAssignmentSegmentApi() {
        return this.initApi('workScheduleDayModelAssignmentSegmentApi', WorkScheduleDayModelAssignmentSegmentApi_1.WorkScheduleDayModelAssignmentSegmentApi);
    }
    get employeeTimeColApi() {
        const api = this.initApi('employeeTimeColApi', EmployeeTimeColApi_1.EmployeeTimeColApi);
        const linkedApis = [
            this.initApi('employeeTimeGroupApi', EmployeeTimeGroupApi_1.EmployeeTimeGroupApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get employeeTimeEspApi() {
        const api = this.initApi('employeeTimeEspApi', EmployeeTimeEspApi_1.EmployeeTimeEspApi);
        const linkedApis = [
            this.initApi('employeeTimeGroupApi', EmployeeTimeGroupApi_1.EmployeeTimeGroupApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get timeManagementTerminationEndHandlingConfigurationApi() {
        const api = this.initApi('timeManagementTerminationEndHandlingConfigurationApi', TimeManagementTerminationEndHandlingConfigurationApi_1.TimeManagementTerminationEndHandlingConfigurationApi);
        const linkedApis = [
            this.initApi('timeManagementTerminationEndHandlingLegalEntityConfigurationApi', TimeManagementTerminationEndHandlingLegalEntityConfigurationApi_1.TimeManagementTerminationEndHandlingLegalEntityConfigurationApi),
            this.initApi('timeManagementTerminationEndHandlingExclusionApi', TimeManagementTerminationEndHandlingExclusionApi_1.TimeManagementTerminationEndHandlingExclusionApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get holidayCategoryApi() {
        return this.initApi('holidayCategoryApi', HolidayCategoryApi_1.HolidayCategoryApi);
    }
    get electronicSicknessCertificateExclusionReasonDeuApi() {
        return this.initApi('electronicSicknessCertificateExclusionReasonDeuApi', ElectronicSicknessCertificateExclusionReasonDeuApi_1.ElectronicSicknessCertificateExclusionReasonDeuApi);
    }
    get employeeTimeGroupApi() {
        const api = this.initApi('employeeTimeGroupApi', EmployeeTimeGroupApi_1.EmployeeTimeGroupApi);
        const linkedApis = [
            this.initApi('employeeTimeGroupItemApi', EmployeeTimeGroupItemApi_1.EmployeeTimeGroupItemApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get timeAccountType_1Api() {
        const api = this.initApi('timeAccountType_1Api', TimeAccountType_1Api_1.TimeAccountType_1Api);
        const linkedApis = [
            this.initApi('timeAccountTypeAusApi', TimeAccountTypeAusApi_1.TimeAccountTypeAusApi),
            this.initApi('periodicTimeAccountUpdateProfileApi', PeriodicTimeAccountUpdateProfileApi_1.PeriodicTimeAccountUpdateProfileApi),
            this.initApi('recalculationBasedFieldApi', RecalculationBasedFieldApi_1.RecalculationBasedFieldApi),
            this.initApi('timeAccountPayoutProfileApi', TimeAccountPayoutProfileApi_1.TimeAccountPayoutProfileApi),
            this.initApi('timeAccountPurchaseProfileApi', TimeAccountPurchaseProfileApi_1.TimeAccountPurchaseProfileApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get accrualCalculationBaseApi() {
        return this.initApi('accrualCalculationBaseApi', AccrualCalculationBaseApi_1.AccrualCalculationBaseApi);
    }
    get employeeTimeUsaApi() {
        return this.initApi('employeeTimeUsaApi', EmployeeTimeUsaApi_1.EmployeeTimeUsaApi);
    }
    get timeTypeUsaApi() {
        return this.initApi('timeTypeUsaApi', TimeTypeUsaApi_1.TimeTypeUsaApi);
    }
    get temporaryTimeInformationApi() {
        const api = this.initApi('temporaryTimeInformationApi', TemporaryTimeInformationApi_1.TemporaryTimeInformationApi);
        const linkedApis = [
            this.initApi('workScheduleDayModelApi', WorkScheduleDayModelApi_1.WorkScheduleDayModelApi),
            this.initApi('workScheduleApi', WorkScheduleApi_1.WorkScheduleApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get timeTypeProfileApi() {
        const api = this.initApi('timeTypeProfileApi', TimeTypeProfileApi_1.TimeTypeProfileApi);
        const linkedApis = [
            this.initApi('availableTimeTypeApi', AvailableTimeTypeApi_1.AvailableTimeTypeApi),
            this.initApi('timeTypeApi', TimeTypeApi_1.TimeTypeApi),
            this.initApi('timeTypeApi', TimeTypeApi_1.TimeTypeApi),
            this.initApi('timeTypeApi', TimeTypeApi_1.TimeTypeApi),
            this.initApi('timeTypeApi', TimeTypeApi_1.TimeTypeApi),
            this.initApi('timeAccountType_1Api', TimeAccountType_1Api_1.TimeAccountType_1Api),
            this.initApi('timeAccountType_1Api', TimeAccountType_1Api_1.TimeAccountType_1Api)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get timeManagementAlertApi() {
        const api = this.initApi('timeManagementAlertApi', TimeManagementAlertApi_1.TimeManagementAlertApi);
        const linkedApis = [
            this.initApi('timeManagementAlertMessageApi', TimeManagementAlertMessageApi_1.TimeManagementAlertMessageApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get timeTypeDeuApi() {
        return this.initApi('timeTypeDeuApi', TimeTypeDeuApi_1.TimeTypeDeuApi);
    }
    get timeTypeApi() {
        const api = this.initApi('timeTypeApi', TimeTypeApi_1.TimeTypeApi);
        const linkedApis = [
            this.initApi('absenceCountingMethodApi', AbsenceCountingMethodApi_1.AbsenceCountingMethodApi),
            this.initApi('timeTypeAusApi', TimeTypeAusApi_1.TimeTypeAusApi),
            this.initApi('timeTypeCanApi', TimeTypeCanApi_1.TimeTypeCanApi),
            this.initApi('timeTypeDeuApi', TimeTypeDeuApi_1.TimeTypeDeuApi),
            this.initApi('timeTypeNldApi', TimeTypeNldApi_1.TimeTypeNldApi),
            this.initApi('timeTypeUsaApi', TimeTypeUsaApi_1.TimeTypeUsaApi),
            this.initApi('timeAccountPostingRuleApi', TimeAccountPostingRuleApi_1.TimeAccountPostingRuleApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get timeManagementTerminationEndHandlingExclusionApi() {
        const api = this.initApi('timeManagementTerminationEndHandlingExclusionApi', TimeManagementTerminationEndHandlingExclusionApi_1.TimeManagementTerminationEndHandlingExclusionApi);
        const linkedApis = [
            this.initApi('timeManagementTerminationEndHandlingExcludedEventReasonApi', TimeManagementTerminationEndHandlingExcludedEventReasonApi_1.TimeManagementTerminationEndHandlingExcludedEventReasonApi),
            this.initApi('timeManagementTerminationEndHandlingExcludedTimeAccountTypeApi', TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi_1.TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get employeeTimeMexApi() {
        const api = this.initApi('employeeTimeMexApi', EmployeeTimeMexApi_1.EmployeeTimeMexApi);
        const linkedApis = [
            this.initApi('employeeTimeGroupApi', EmployeeTimeGroupApi_1.EmployeeTimeGroupApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get workScheduleDayModelApi() {
        const api = this.initApi('workScheduleDayModelApi', WorkScheduleDayModelApi_1.WorkScheduleDayModelApi);
        const linkedApis = [
            this.initApi('workScheduleDayModelSegmentApi', WorkScheduleDayModelSegmentApi_1.WorkScheduleDayModelSegmentApi),
            this.initApi('shiftClassificationApi', ShiftClassificationApi_1.ShiftClassificationApi),
            this.initApi('workScheduleDayModelVariantAssignmentApi', WorkScheduleDayModelVariantAssignmentApi_1.WorkScheduleDayModelVariantAssignmentApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get timeAccountSnapshotApi() {
        const api = this.initApi('timeAccountSnapshotApi', TimeAccountSnapshotApi_1.TimeAccountSnapshotApi);
        const linkedApis = [
            this.initApi('timeAccountType_1Api', TimeAccountType_1Api_1.TimeAccountType_1Api)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get empTimeAccountBalanceApi() {
        return this.initApi('empTimeAccountBalanceApi', EmpTimeAccountBalanceApi_1.EmpTimeAccountBalanceApi);
    }
    get timeManagementAlertMessageApi() {
        const api = this.initApi('timeManagementAlertMessageApi', TimeManagementAlertMessageApi_1.TimeManagementAlertMessageApi);
        const linkedApis = [
            this.initApi('employeeTimeApi', EmployeeTimeApi_1.EmployeeTimeApi),
            this.initApi('timeAccountApi', TimeAccountApi_1.TimeAccountApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get employeeTimeNldApi() {
        return this.initApi('employeeTimeNldApi', EmployeeTimeNldApi_1.EmployeeTimeNldApi);
    }
    get employeeTimeCanApi() {
        return this.initApi('employeeTimeCanApi', EmployeeTimeCanApi_1.EmployeeTimeCanApi);
    }
    get timeManagementTerminationEndHandlingLegalEntityConfigurationApi() {
        const api = this.initApi('timeManagementTerminationEndHandlingLegalEntityConfigurationApi', TimeManagementTerminationEndHandlingLegalEntityConfigurationApi_1.TimeManagementTerminationEndHandlingLegalEntityConfigurationApi);
        const linkedApis = [
            this.initApi('timeManagementTerminationEndHandlingExclusionApi', TimeManagementTerminationEndHandlingExclusionApi_1.TimeManagementTerminationEndHandlingExclusionApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get employeeTimePolApi() {
        return this.initApi('employeeTimePolApi', EmployeeTimePolApi_1.EmployeeTimePolApi);
    }
    get timeAccountPayoutProfileApi() {
        return this.initApi('timeAccountPayoutProfileApi', TimeAccountPayoutProfileApi_1.TimeAccountPayoutProfileApi);
    }
    get timeAccountTypeAusApi() {
        return this.initApi('timeAccountTypeAusApi', TimeAccountTypeAusApi_1.TimeAccountTypeAusApi);
    }
    get periodicTimeAccountUpdateProfileApi() {
        return this.initApi('periodicTimeAccountUpdateProfileApi', PeriodicTimeAccountUpdateProfileApi_1.PeriodicTimeAccountUpdateProfileApi);
    }
    get availableTimeTypeApi() {
        const api = this.initApi('availableTimeTypeApi', AvailableTimeTypeApi_1.AvailableTimeTypeApi);
        const linkedApis = [this.initApi('timeTypeApi', TimeTypeApi_1.TimeTypeApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get workScheduleApi() {
        const api = this.initApi('workScheduleApi', WorkScheduleApi_1.WorkScheduleApi);
        const linkedApis = [
            this.initApi('workScheduleApi', WorkScheduleApi_1.WorkScheduleApi),
            this.initApi('shiftClassificationApi', ShiftClassificationApi_1.ShiftClassificationApi),
            this.initApi('workScheduleDayModelAssignmentApi', WorkScheduleDayModelAssignmentApi_1.WorkScheduleDayModelAssignmentApi),
            this.initApi('workScheduleDayApi', WorkScheduleDayApi_1.WorkScheduleDayApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get employeeTimeAusApi() {
        return this.initApi('employeeTimeAusApi', EmployeeTimeAusApi_1.EmployeeTimeAusApi);
    }
    get workScheduleDayModelSegmentApi() {
        return this.initApi('workScheduleDayModelSegmentApi', WorkScheduleDayModelSegmentApi_1.WorkScheduleDayModelSegmentApi);
    }
    get recalculationBasedFieldApi() {
        return this.initApi('recalculationBasedFieldApi', RecalculationBasedFieldApi_1.RecalculationBasedFieldApi);
    }
    get holidayApi() {
        return this.initApi('holidayApi', HolidayApi_1.HolidayApi);
    }
    get employeeTimeCalendarApi() {
        const api = this.initApi('employeeTimeCalendarApi', EmployeeTimeCalendarApi_1.EmployeeTimeCalendarApi);
        const linkedApis = [
            this.initApi('timeAccountDetailApi', TimeAccountDetailApi_1.TimeAccountDetailApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get timeTypeAusApi() {
        return this.initApi('timeTypeAusApi', TimeTypeAusApi_1.TimeTypeAusApi);
    }
    get employeeTimeApi() {
        const api = this.initApi('employeeTimeApi', EmployeeTimeApi_1.EmployeeTimeApi);
        const linkedApis = [
            this.initApi('employeeTimeAusApi', EmployeeTimeAusApi_1.EmployeeTimeAusApi),
            this.initApi('employeeTimeCanApi', EmployeeTimeCanApi_1.EmployeeTimeCanApi),
            this.initApi('employeeTimeColApi', EmployeeTimeColApi_1.EmployeeTimeColApi),
            this.initApi('employeeTimeDeuApi', EmployeeTimeDeuApi_1.EmployeeTimeDeuApi),
            this.initApi('employeeTimeEspApi', EmployeeTimeEspApi_1.EmployeeTimeEspApi),
            this.initApi('employeeTimeMexApi', EmployeeTimeMexApi_1.EmployeeTimeMexApi),
            this.initApi('employeeTimeNldApi', EmployeeTimeNldApi_1.EmployeeTimeNldApi),
            this.initApi('employeeTimePolApi', EmployeeTimePolApi_1.EmployeeTimePolApi),
            this.initApi('employeeTimeUsaApi', EmployeeTimeUsaApi_1.EmployeeTimeUsaApi),
            this.initApi('employeeTimeGroupApi', EmployeeTimeGroupApi_1.EmployeeTimeGroupApi),
            this.initApi('employeeTimeCalendarApi', EmployeeTimeCalendarApi_1.EmployeeTimeCalendarApi),
            this.initApi('timeTypeApi', TimeTypeApi_1.TimeTypeApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map