/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAccountPostingRuleApi } from './TimeAccountPostingRuleApi';
import { WorkScheduleDayModelVariantAssignmentApi } from './WorkScheduleDayModelVariantAssignmentApi';
import { HolidayAssignmentApi } from './HolidayAssignmentApi';
import { TimeAccountPurchaseProfileApi } from './TimeAccountPurchaseProfileApi';
import { TimeTypeCanApi } from './TimeTypeCanApi';
import { WorkScheduleDayModelVariantIdentifierApi } from './WorkScheduleDayModelVariantIdentifierApi';
import { TimeManagementTerminationEndHandlingExcludedEventReasonApi } from './TimeManagementTerminationEndHandlingExcludedEventReasonApi';
import { TimeAccountPurchaseProfilePayComponentAssignmentApi } from './TimeAccountPurchaseProfilePayComponentAssignmentApi';
import { EmployeeTimeGroupItemApi } from './EmployeeTimeGroupItemApi';
import { WorkScheduleDayModelAssignmentApi } from './WorkScheduleDayModelAssignmentApi';
import { TimeAccountDetailApi } from './TimeAccountDetailApi';
import { TimeTypeNldApi } from './TimeTypeNldApi';
import { AbsenceCountingMethodApi } from './AbsenceCountingMethodApi';
import { ShiftClassificationApi } from './ShiftClassificationApi';
import { WorkScheduleDayApi } from './WorkScheduleDayApi';
import { HolidayCalendarApi } from './HolidayCalendarApi';
import { TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi } from './TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi';
import { EmployeeTimeDeuApi } from './EmployeeTimeDeuApi';
import { TimeAccountApi } from './TimeAccountApi';
import { WorkScheduleDayModelAssignmentSegmentApi } from './WorkScheduleDayModelAssignmentSegmentApi';
import { EmployeeTimeColApi } from './EmployeeTimeColApi';
import { EmployeeTimeEspApi } from './EmployeeTimeEspApi';
import { TimeManagementTerminationEndHandlingConfigurationApi } from './TimeManagementTerminationEndHandlingConfigurationApi';
import { HolidayCategoryApi } from './HolidayCategoryApi';
import { ElectronicSicknessCertificateExclusionReasonDeuApi } from './ElectronicSicknessCertificateExclusionReasonDeuApi';
import { EmployeeTimeGroupApi } from './EmployeeTimeGroupApi';
import { TimeAccountType_1Api } from './TimeAccountType_1Api';
import { AccrualCalculationBaseApi } from './AccrualCalculationBaseApi';
import { EmployeeTimeUsaApi } from './EmployeeTimeUsaApi';
import { TimeTypeUsaApi } from './TimeTypeUsaApi';
import { TemporaryTimeInformationApi } from './TemporaryTimeInformationApi';
import { TimeTypeProfileApi } from './TimeTypeProfileApi';
import { TimeManagementAlertApi } from './TimeManagementAlertApi';
import { TimeTypeDeuApi } from './TimeTypeDeuApi';
import { TimeTypeApi } from './TimeTypeApi';
import { TimeManagementTerminationEndHandlingExclusionApi } from './TimeManagementTerminationEndHandlingExclusionApi';
import { EmployeeTimeMexApi } from './EmployeeTimeMexApi';
import { WorkScheduleDayModelApi } from './WorkScheduleDayModelApi';
import { TimeAccountSnapshotApi } from './TimeAccountSnapshotApi';
import { EmpTimeAccountBalanceApi } from './EmpTimeAccountBalanceApi';
import { TimeManagementAlertMessageApi } from './TimeManagementAlertMessageApi';
import { EmployeeTimeNldApi } from './EmployeeTimeNldApi';
import { EmployeeTimeCanApi } from './EmployeeTimeCanApi';
import { TimeManagementTerminationEndHandlingLegalEntityConfigurationApi } from './TimeManagementTerminationEndHandlingLegalEntityConfigurationApi';
import { EmployeeTimePolApi } from './EmployeeTimePolApi';
import { TimeAccountPayoutProfileApi } from './TimeAccountPayoutProfileApi';
import { TimeAccountTypeAusApi } from './TimeAccountTypeAusApi';
import { PeriodicTimeAccountUpdateProfileApi } from './PeriodicTimeAccountUpdateProfileApi';
import { AvailableTimeTypeApi } from './AvailableTimeTypeApi';
import { WorkScheduleApi } from './WorkScheduleApi';
import { EmployeeTimeAusApi } from './EmployeeTimeAusApi';
import { WorkScheduleDayModelSegmentApi } from './WorkScheduleDayModelSegmentApi';
import { RecalculationBasedFieldApi } from './RecalculationBasedFieldApi';
import { HolidayApi } from './HolidayApi';
import { EmployeeTimeCalendarApi } from './EmployeeTimeCalendarApi';
import { TimeTypeAusApi } from './TimeTypeAusApi';
import { EmployeeTimeApi } from './EmployeeTimeApi';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  DeSerializers,
  DefaultDeSerializers,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';
export declare function ecTimeOffService<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers?: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  >
): EcTimeOffService<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
>;
declare class EcTimeOffService<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis;
  private deSerializers;
  constructor(deSerializers: DeSerializersT);
  private initApi;
  get timeAccountPostingRuleApi(): TimeAccountPostingRuleApi<DeSerializersT>;
  get workScheduleDayModelVariantAssignmentApi(): WorkScheduleDayModelVariantAssignmentApi<DeSerializersT>;
  get holidayAssignmentApi(): HolidayAssignmentApi<DeSerializersT>;
  get timeAccountPurchaseProfileApi(): TimeAccountPurchaseProfileApi<DeSerializersT>;
  get timeTypeCanApi(): TimeTypeCanApi<DeSerializersT>;
  get workScheduleDayModelVariantIdentifierApi(): WorkScheduleDayModelVariantIdentifierApi<DeSerializersT>;
  get timeManagementTerminationEndHandlingExcludedEventReasonApi(): TimeManagementTerminationEndHandlingExcludedEventReasonApi<DeSerializersT>;
  get timeAccountPurchaseProfilePayComponentAssignmentApi(): TimeAccountPurchaseProfilePayComponentAssignmentApi<DeSerializersT>;
  get employeeTimeGroupItemApi(): EmployeeTimeGroupItemApi<DeSerializersT>;
  get workScheduleDayModelAssignmentApi(): WorkScheduleDayModelAssignmentApi<DeSerializersT>;
  get timeAccountDetailApi(): TimeAccountDetailApi<DeSerializersT>;
  get timeTypeNldApi(): TimeTypeNldApi<DeSerializersT>;
  get absenceCountingMethodApi(): AbsenceCountingMethodApi<DeSerializersT>;
  get shiftClassificationApi(): ShiftClassificationApi<DeSerializersT>;
  get workScheduleDayApi(): WorkScheduleDayApi<DeSerializersT>;
  get holidayCalendarApi(): HolidayCalendarApi<DeSerializersT>;
  get timeManagementTerminationEndHandlingExcludedTimeAccountTypeApi(): TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi<DeSerializersT>;
  get employeeTimeDeuApi(): EmployeeTimeDeuApi<DeSerializersT>;
  get timeAccountApi(): TimeAccountApi<DeSerializersT>;
  get workScheduleDayModelAssignmentSegmentApi(): WorkScheduleDayModelAssignmentSegmentApi<DeSerializersT>;
  get employeeTimeColApi(): EmployeeTimeColApi<DeSerializersT>;
  get employeeTimeEspApi(): EmployeeTimeEspApi<DeSerializersT>;
  get timeManagementTerminationEndHandlingConfigurationApi(): TimeManagementTerminationEndHandlingConfigurationApi<DeSerializersT>;
  get holidayCategoryApi(): HolidayCategoryApi<DeSerializersT>;
  get electronicSicknessCertificateExclusionReasonDeuApi(): ElectronicSicknessCertificateExclusionReasonDeuApi<DeSerializersT>;
  get employeeTimeGroupApi(): EmployeeTimeGroupApi<DeSerializersT>;
  get timeAccountType_1Api(): TimeAccountType_1Api<DeSerializersT>;
  get accrualCalculationBaseApi(): AccrualCalculationBaseApi<DeSerializersT>;
  get employeeTimeUsaApi(): EmployeeTimeUsaApi<DeSerializersT>;
  get timeTypeUsaApi(): TimeTypeUsaApi<DeSerializersT>;
  get temporaryTimeInformationApi(): TemporaryTimeInformationApi<DeSerializersT>;
  get timeTypeProfileApi(): TimeTypeProfileApi<DeSerializersT>;
  get timeManagementAlertApi(): TimeManagementAlertApi<DeSerializersT>;
  get timeTypeDeuApi(): TimeTypeDeuApi<DeSerializersT>;
  get timeTypeApi(): TimeTypeApi<DeSerializersT>;
  get timeManagementTerminationEndHandlingExclusionApi(): TimeManagementTerminationEndHandlingExclusionApi<DeSerializersT>;
  get employeeTimeMexApi(): EmployeeTimeMexApi<DeSerializersT>;
  get workScheduleDayModelApi(): WorkScheduleDayModelApi<DeSerializersT>;
  get timeAccountSnapshotApi(): TimeAccountSnapshotApi<DeSerializersT>;
  get empTimeAccountBalanceApi(): EmpTimeAccountBalanceApi<DeSerializersT>;
  get timeManagementAlertMessageApi(): TimeManagementAlertMessageApi<DeSerializersT>;
  get employeeTimeNldApi(): EmployeeTimeNldApi<DeSerializersT>;
  get employeeTimeCanApi(): EmployeeTimeCanApi<DeSerializersT>;
  get timeManagementTerminationEndHandlingLegalEntityConfigurationApi(): TimeManagementTerminationEndHandlingLegalEntityConfigurationApi<DeSerializersT>;
  get employeeTimePolApi(): EmployeeTimePolApi<DeSerializersT>;
  get timeAccountPayoutProfileApi(): TimeAccountPayoutProfileApi<DeSerializersT>;
  get timeAccountTypeAusApi(): TimeAccountTypeAusApi<DeSerializersT>;
  get periodicTimeAccountUpdateProfileApi(): PeriodicTimeAccountUpdateProfileApi<DeSerializersT>;
  get availableTimeTypeApi(): AvailableTimeTypeApi<DeSerializersT>;
  get workScheduleApi(): WorkScheduleApi<DeSerializersT>;
  get employeeTimeAusApi(): EmployeeTimeAusApi<DeSerializersT>;
  get workScheduleDayModelSegmentApi(): WorkScheduleDayModelSegmentApi<DeSerializersT>;
  get recalculationBasedFieldApi(): RecalculationBasedFieldApi<DeSerializersT>;
  get holidayApi(): HolidayApi<DeSerializersT>;
  get employeeTimeCalendarApi(): EmployeeTimeCalendarApi<DeSerializersT>;
  get timeTypeAusApi(): TimeTypeAusApi<DeSerializersT>;
  get employeeTimeApi(): EmployeeTimeApi<DeSerializersT>;
  get batch(): typeof batch;
  get changeset(): typeof changeset;
}
export {};
//# sourceMappingURL=service.d.ts.map
