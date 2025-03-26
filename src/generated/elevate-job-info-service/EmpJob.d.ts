/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { EmpJobApi } from './EmpJobApi';
/**
 * This class represents the entity "EmpJob" of service "EmpJob".
 */
export declare class EmpJob<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmpJobType<T>
{
  readonly _entityApi: EmpJobApi<T>;
  /**
   * Technical entity name for EmpJob.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the EmpJob entity
   */
  static _keys: string[];
  /**
   * Number of Initial Pôle Emploi (Employment Centre) Statement (Entertainment Worker).
   * @nullable
   */
  assedicCertInitialStateNum?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Pôle Emploi (Employment Centre) Certificate Object Number (Entertainment Worker).
   * @nullable
   */
  assedicCertObjectNum?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Assessment Status.
   * Maximum length: 256.
   * @nullable
   */
  assessmentStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Unit.
   * Maximum length: 32.
   * @nullable
   */
  businessUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculation Base.
   * Maximum length: 256.
   * @nullable
   */
  calculationBase?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Code for ELDP.
   * Maximum length: 256.
   * @nullable
   */
  codeOfJobForEldp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * Maximum length: 32.
   * @nullable
   */
  company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Labour Contract Signing Date.
   * @nullable
   */
  contractDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Contract End Date.
   * @nullable
   */
  contractEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Contract ID.
   * Maximum length: 256.
   * @nullable
   */
  contractId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Number.
   * @nullable
   */
  contractNumber?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Contract Reference.
   * Maximum length: 256.
   * @nullable
   */
  contractReferenceForAed?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Type.
   * Maximum length: 256.
   * @nullable
   */
  contractType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Centre.
   * Maximum length: 32.
   * @nullable
   */
  costCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country.
   * Maximum length: 256.
   * @nullable
   */
  countryOfCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created Date Time.
   * @nullable
   */
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Created On.
   * @nullable
   */
  createdOn?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Credit for Previous Service.
   * Maximum length: 256.
   * @nullable
   */
  creditForPreviousService?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Current Wage Level (%).
   * @nullable
   */
  currentWageLevel?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Union Affiliation.
   * Maximum length: 256.
   * @nullable
   */
  customString13?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Application ID.
   * Maximum length: 256.
   * @nullable
   */
  customString2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System for Onboarding.
   * Maximum length: 256.
   * @nullable
   */
  customString3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * FLSA Work Week.
   * Maximum length: 2.
   * @nullable
   */
  customString7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Time ID.
   * Maximum length: 2.
   * @nullable
   */
  customString8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Overtime Compensation Variant.
   * @nullable
   */
  defaultOvertimeCompensationVariant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Degree of Productivity (%).
   * @nullable
   */
  degreeOfProductivity?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Department.
   * Maximum length: 32.
   * @nullable
   */
  department?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dismissals Notice Period for Employer.
   * Maximum length: 256.
   * @nullable
   */
  dismissalsNoticePeriodForEmployer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Division.
   * Maximum length: 32.
   * @nullable
   */
  division?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dynamic Break Configuration.
   * Maximum length: 128.
   * @nullable
   */
  dynamicBreakConfigCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * EEO Category 1.
   * Maximum length: 256.
   * @nullable
   */
  eeo1JobCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * EEO Category 4.
   * Maximum length: 256.
   * @nullable
   */
  eeo4JobCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * EEO Category 5.
   * Maximum length: 256.
   * @nullable
   */
  eeo5JobCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * EEO Category 6.
   * Maximum length: 256.
   * @nullable
   */
  eeo6JobCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * EEO Job Group.
   * Maximum length: 256.
   * @nullable
   */
  eeoClass?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * effectiveLatestChange.
   * @nullable
   */
  effectiveLatestChange?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Electoral College for Workers' Representatives.
   * Maximum length: 256.
   * @nullable
   */
  electoralCollegeForWorkersRepresentatives?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Electoral College for Works Council.
   * Maximum length: 256.
   * @nullable
   */
  electoralCollegeForWorksCouncil?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employment Relationship.
   * Maximum length: 256.
   * @nullable
   */
  empRelationship?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Status.
   * Maximum length: 32.
   * @nullable
   */
  emplStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Class.
   * Maximum length: 256.
   * @nullable
   */
  employeeClass?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Workgroup Membership.
   * Maximum length: 60.
   * @nullable
   */
  employeeWorkgroupMembership?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employment Type.
   * Maximum length: 32.
   * @nullable
   */
  employmentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date.
   * @nullable
   */
  endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Event.
   * Maximum length: 32.
   * @nullable
   */
  event?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Event Reason.
   * @nullable
   */
  eventReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate.
   * @nullable
   */
  exchangeRate?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Excluded from Executive Sector.
   * @nullable
   */
  exclExecutiveSector?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Family Relationship with Employer.
   * Maximum length: 256.
   * @nullable
   */
  familyRelationshipWithEmployer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * FGTS Date.
   * @nullable
   */
  fgtsDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * FGTS Percentage.
   * @nullable
   */
  fgtsPercent?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * FLSA Status.
   * Maximum length: 256.
   * @nullable
   */
  flsaStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Currency.
   * Maximum length: 256.
   * @nullable
   */
  fromCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * FTE.
   * @nullable
   */
  fte?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Guaranteed Payment.
   * @nullable
   */
  guaranteedPayment?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Harmful Agent Exposure Code.
   * Maximum length: 256.
   * @nullable
   */
  harmfulAgentExposure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Health Risk.
   * @nullable
   */
  healthRisk?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Holiday Calendar.
   * Maximum length: 128.
   * @nullable
   */
  holidayCalendarCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Holiday Work Pattern.
   * Maximum length: 128.
   * @nullable
   */
  holidayWorkPatternCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ineligible for Statutory Minimum Wage.
   * @nullable
   */
  ineligibleStatutoryMinWage?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Competition Clause.
   * @nullable
   */
  isCompetitionClauseActive?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Full Time Employee.
   * @nullable
   */
  isFulltimeEmployee?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Secondary Employment Allowed.
   * @nullable
   */
  isSideLineJobAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Job Classification.
   * Maximum length: 32.
   * @nullable
   */
  jobCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Group.
   * Maximum length: 256.
   * @nullable
   */
  jobGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Title.
   * Maximum length: 256.
   * @nullable
   */
  jobTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Labour Protection.
   * @nullable
   */
  laborProtection?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Modified Date Time.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedOn?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Local Job Title.
   * Maximum length: 256.
   * @nullable
   */
  localJobTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location.
   * Maximum length: 128.
   * @nullable
   */
  location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supervisor.
   * Maximum length: 256.
   * @nullable
   */
  managerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Municipal INSEE Code.
   * @nullable
   */
  municipalInseeCode?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Notes.
   * Maximum length: 4000.
   * @nullable
   */
  notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Occupation.
   * Maximum length: 256.
   * @nullable
   */
  occupationGtm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Occupation.
   * Maximum length: 256.
   * @nullable
   */
  occupationPer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Occupational Levels.
   * Maximum length: 256.
   * @nullable
   */
  occupationalLevels?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * operation.
   * @nullable
   */
  operation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Grade.
   * Maximum length: 256.
   * @nullable
   */
  payGrade?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Scale Area.
   * Maximum length: 128.
   * @nullable
   */
  payScaleArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Scale Group.
   * Maximum length: 128.
   * @nullable
   */
  payScaleGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Scale Level.
   * Maximum length: 128.
   * @nullable
   */
  payScaleLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Scale Type.
   * Maximum length: 128.
   * @nullable
   */
  payScaleType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Used in Payment in Lieu of Notice.
   * @nullable
   */
  paymentInLieuOfNotice?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Period Indicator.
   * Maximum length: 256.
   * @nullable
   */
  periodIndicator?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position.
   * Maximum length: 128.
   * @nullable
   */
  position?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position Entry Date.
   * @nullable
   */
  positionEntryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Probationary Period End Date.
   * @nullable
   */
  probationPeriodEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Probationary Period.
   * @nullable
   */
  probationaryPeriod?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Probationary Period Measure.
   * Maximum length: 256.
   * @nullable
   */
  probationaryPeriodMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Regular/Temporary.
   * Maximum length: 32.
   * @nullable
   */
  regularTemp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resident Vote.
   * @nullable
   */
  residentVote?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Sequence Number.
   */
  seqNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sick Pay Supplement.
   * Maximum length: 256.
   * @nullable
   */
  sickPaySupplement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sick Pay Supplement Measure.
   * Maximum length: 256.
   * @nullable
   */
  sickPaySupplementMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sick Pay Supplement Period.
   * @nullable
   */
  sickPaySupplementPeriod?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Special Rule for Non-Manual Worker.
   * @nullable
   */
  spclRuleNonManualWorker?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Standard Weekly Hours.
   * @nullable
   */
  standardHours?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Start Date.
   */
  startDate: DeserializedType<T, 'Edm.DateTime'>;
  /**
   * Clock In Clock Out Group.
   * Maximum length: 128.
   * @nullable
   */
  timeEventTypeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Recording Admissibility.
   * Maximum length: 128.
   * @nullable
   */
  timeRecordingAdmissibilityCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Recording Profile.
   * Maximum length: 128.
   * @nullable
   */
  timeRecordingProfileCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Recording Variant.
   * @nullable
   */
  timeRecordingVariant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Profile.
   * Maximum length: 128.
   * @nullable
   */
  timeTypeProfileCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Zone.
   * Maximum length: 128.
   * @nullable
   */
  timezone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Currency.
   * Maximum length: 256.
   * @nullable
   */
  toCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Travel Distance.
   * @nullable
   */
  travelDistance?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * User ID.
   * Maximum length: 100.
   */
  userId: DeserializedType<T, 'Edm.String'>;
  /**
   * Exchange Rate Effective Date.
   * @nullable
   */
  validFrom?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Work Location.
   * Maximum length: 256.
   * @nullable
   */
  workLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Permit Expiry.
   * @nullable
   */
  workPermitExpiry?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Worker Category.
   * Maximum length: 256.
   * @nullable
   */
  workerCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Working Days per Week.
   * @nullable
   */
  workingDaysPerWeek?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Work Schedule.
   * Maximum length: 128.
   * @nullable
   */
  workscheduleCode?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: EmpJobApi<T>);
}
export interface EmpJobType<T extends DeSerializers = DefaultDeSerializers> {
  assedicCertInitialStateNum?: DeserializedType<T, 'Edm.Int64'> | null;
  assedicCertObjectNum?: DeserializedType<T, 'Edm.Int64'> | null;
  assessmentStatus?: DeserializedType<T, 'Edm.String'> | null;
  businessUnit?: DeserializedType<T, 'Edm.String'> | null;
  calculationBase?: DeserializedType<T, 'Edm.String'> | null;
  codeOfJobForEldp?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  contractDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  contractEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  contractId?: DeserializedType<T, 'Edm.String'> | null;
  contractNumber?: DeserializedType<T, 'Edm.Int64'> | null;
  contractReferenceForAed?: DeserializedType<T, 'Edm.String'> | null;
  contractType?: DeserializedType<T, 'Edm.String'> | null;
  costCenter?: DeserializedType<T, 'Edm.String'> | null;
  countryOfCompany?: DeserializedType<T, 'Edm.String'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdOn?: DeserializedType<T, 'Edm.DateTime'> | null;
  creditForPreviousService?: DeserializedType<T, 'Edm.String'> | null;
  currentWageLevel?: DeserializedType<T, 'Edm.Double'> | null;
  customString13?: DeserializedType<T, 'Edm.String'> | null;
  customString2?: DeserializedType<T, 'Edm.String'> | null;
  customString3?: DeserializedType<T, 'Edm.String'> | null;
  customString7?: DeserializedType<T, 'Edm.String'> | null;
  customString8?: DeserializedType<T, 'Edm.String'> | null;
  defaultOvertimeCompensationVariant?: DeserializedType<T, 'Edm.String'> | null;
  degreeOfProductivity?: DeserializedType<T, 'Edm.Double'> | null;
  department?: DeserializedType<T, 'Edm.String'> | null;
  dismissalsNoticePeriodForEmployer?: DeserializedType<T, 'Edm.String'> | null;
  division?: DeserializedType<T, 'Edm.String'> | null;
  dynamicBreakConfigCode?: DeserializedType<T, 'Edm.String'> | null;
  eeo1JobCategory?: DeserializedType<T, 'Edm.String'> | null;
  eeo4JobCategory?: DeserializedType<T, 'Edm.String'> | null;
  eeo5JobCategory?: DeserializedType<T, 'Edm.String'> | null;
  eeo6JobCategory?: DeserializedType<T, 'Edm.String'> | null;
  eeoClass?: DeserializedType<T, 'Edm.String'> | null;
  effectiveLatestChange?: DeserializedType<T, 'Edm.Boolean'> | null;
  electoralCollegeForWorkersRepresentatives?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  electoralCollegeForWorksCouncil?: DeserializedType<T, 'Edm.String'> | null;
  empRelationship?: DeserializedType<T, 'Edm.String'> | null;
  emplStatus?: DeserializedType<T, 'Edm.String'> | null;
  employeeClass?: DeserializedType<T, 'Edm.String'> | null;
  employeeWorkgroupMembership?: DeserializedType<T, 'Edm.String'> | null;
  employmentType?: DeserializedType<T, 'Edm.String'> | null;
  endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  event?: DeserializedType<T, 'Edm.String'> | null;
  eventReason?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRate?: DeserializedType<T, 'Edm.Double'> | null;
  exclExecutiveSector?: DeserializedType<T, 'Edm.Boolean'> | null;
  familyRelationshipWithEmployer?: DeserializedType<T, 'Edm.String'> | null;
  fgtsDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  fgtsPercent?: DeserializedType<T, 'Edm.Double'> | null;
  flsaStatus?: DeserializedType<T, 'Edm.String'> | null;
  fromCurrency?: DeserializedType<T, 'Edm.String'> | null;
  fte?: DeserializedType<T, 'Edm.Double'> | null;
  guaranteedPayment?: DeserializedType<T, 'Edm.Int64'> | null;
  harmfulAgentExposure?: DeserializedType<T, 'Edm.String'> | null;
  healthRisk?: DeserializedType<T, 'Edm.Boolean'> | null;
  holidayCalendarCode?: DeserializedType<T, 'Edm.String'> | null;
  holidayWorkPatternCode?: DeserializedType<T, 'Edm.String'> | null;
  ineligibleStatutoryMinWage?: DeserializedType<T, 'Edm.Boolean'> | null;
  isCompetitionClauseActive?: DeserializedType<T, 'Edm.Boolean'> | null;
  isFulltimeEmployee?: DeserializedType<T, 'Edm.Boolean'> | null;
  isSideLineJobAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  jobCode?: DeserializedType<T, 'Edm.String'> | null;
  jobGroup?: DeserializedType<T, 'Edm.String'> | null;
  jobTitle?: DeserializedType<T, 'Edm.String'> | null;
  laborProtection?: DeserializedType<T, 'Edm.Boolean'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastModifiedOn?: DeserializedType<T, 'Edm.DateTime'> | null;
  localJobTitle?: DeserializedType<T, 'Edm.String'> | null;
  location?: DeserializedType<T, 'Edm.String'> | null;
  managerId?: DeserializedType<T, 'Edm.String'> | null;
  municipalInseeCode?: DeserializedType<T, 'Edm.Int64'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  occupationGtm?: DeserializedType<T, 'Edm.String'> | null;
  occupationPer?: DeserializedType<T, 'Edm.String'> | null;
  occupationalLevels?: DeserializedType<T, 'Edm.String'> | null;
  operation?: DeserializedType<T, 'Edm.String'> | null;
  payGrade?: DeserializedType<T, 'Edm.String'> | null;
  payScaleArea?: DeserializedType<T, 'Edm.String'> | null;
  payScaleGroup?: DeserializedType<T, 'Edm.String'> | null;
  payScaleLevel?: DeserializedType<T, 'Edm.String'> | null;
  payScaleType?: DeserializedType<T, 'Edm.String'> | null;
  paymentInLieuOfNotice?: DeserializedType<T, 'Edm.Boolean'> | null;
  periodIndicator?: DeserializedType<T, 'Edm.String'> | null;
  position?: DeserializedType<T, 'Edm.String'> | null;
  positionEntryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  probationPeriodEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  probationaryPeriod?: DeserializedType<T, 'Edm.Int64'> | null;
  probationaryPeriodMeasure?: DeserializedType<T, 'Edm.String'> | null;
  regularTemp?: DeserializedType<T, 'Edm.String'> | null;
  residentVote?: DeserializedType<T, 'Edm.Boolean'> | null;
  seqNumber: DeserializedType<T, 'Edm.Int64'>;
  sickPaySupplement?: DeserializedType<T, 'Edm.String'> | null;
  sickPaySupplementMeasure?: DeserializedType<T, 'Edm.String'> | null;
  sickPaySupplementPeriod?: DeserializedType<T, 'Edm.Int64'> | null;
  spclRuleNonManualWorker?: DeserializedType<T, 'Edm.Boolean'> | null;
  standardHours?: DeserializedType<T, 'Edm.Double'> | null;
  startDate: DeserializedType<T, 'Edm.DateTime'>;
  timeEventTypeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  timeRecordingAdmissibilityCode?: DeserializedType<T, 'Edm.String'> | null;
  timeRecordingProfileCode?: DeserializedType<T, 'Edm.String'> | null;
  timeRecordingVariant?: DeserializedType<T, 'Edm.String'> | null;
  timeTypeProfileCode?: DeserializedType<T, 'Edm.String'> | null;
  timezone?: DeserializedType<T, 'Edm.String'> | null;
  toCurrency?: DeserializedType<T, 'Edm.String'> | null;
  travelDistance?: DeserializedType<T, 'Edm.Double'> | null;
  userId: DeserializedType<T, 'Edm.String'>;
  validFrom?: DeserializedType<T, 'Edm.DateTime'> | null;
  workLocation?: DeserializedType<T, 'Edm.String'> | null;
  workPermitExpiry?: DeserializedType<T, 'Edm.DateTime'> | null;
  workerCategory?: DeserializedType<T, 'Edm.String'> | null;
  workingDaysPerWeek?: DeserializedType<T, 'Edm.Double'> | null;
  workscheduleCode?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=EmpJob.d.ts.map
