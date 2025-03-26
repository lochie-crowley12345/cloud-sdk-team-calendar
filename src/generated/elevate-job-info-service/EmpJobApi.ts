/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmpJob } from './EmpJob';
import { EmpJobRequestBuilder } from './EmpJobRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class EmpJobApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EmpJob<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EmpJob;

  requestBuilder(): EmpJobRequestBuilder<DeSerializersT> {
    return new EmpJobRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<EmpJob<DeSerializersT>, DeSerializersT> {
    return entityBuilder<EmpJob<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EmpJob<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof EmpJob, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(EmpJob, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ASSEDIC_CERT_INITIAL_STATE_NUM: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    ASSEDIC_CERT_OBJECT_NUM: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    ASSESSMENT_STATUS: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_UNIT: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATION_BASE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CODE_OF_JOB_FOR_ELDP: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_DATE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CONTRACT_END_DATE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CONTRACT_ID: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_NUMBER: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    CONTRACT_REFERENCE_FOR_AED: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_TYPE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_CENTER: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_OF_COMPANY: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREDIT_FOR_PREVIOUS_SERVICE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENT_WAGE_LEVEL: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    CUSTOM_STRING_13: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_STRING_2: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_STRING_3: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_STRING_7: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_STRING_8: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_OVERTIME_COMPENSATION_VARIANT: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEGREE_OF_PRODUCTIVITY: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    DEPARTMENT: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISMISSALS_NOTICE_PERIOD_FOR_EMPLOYER: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIVISION: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DYNAMIC_BREAK_CONFIG_CODE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EEO_1_JOB_CATEGORY: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EEO_4_JOB_CATEGORY: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EEO_5_JOB_CATEGORY: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EEO_6_JOB_CATEGORY: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EEO_CLASS: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE_LATEST_CHANGE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ELECTORAL_COLLEGE_FOR_WORKERS_REPRESENTATIVES: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTORAL_COLLEGE_FOR_WORKS_COUNCIL: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMP_RELATIONSHIP: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPL_STATUS: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_CLASS: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_WORKGROUP_MEMBERSHIP: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYMENT_TYPE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    EVENT: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EVENT_REASON: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    EXCL_EXECUTIVE_SECTOR: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    FAMILY_RELATIONSHIP_WITH_EMPLOYER: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FGTS_DATE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    FGTS_PERCENT: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    FLSA_STATUS: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_CURRENCY: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FTE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    GUARANTEED_PAYMENT: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    HARMFUL_AGENT_EXPOSURE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEALTH_RISK: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    HOLIDAY_CALENDAR_CODE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOLIDAY_WORK_PATTERN_CODE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INELIGIBLE_STATUTORY_MIN_WAGE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_COMPETITION_CLAUSE_ACTIVE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_FULLTIME_EMPLOYEE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_SIDE_LINE_JOB_ALLOWED: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    JOB_CODE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_GROUP: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_TITLE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABOR_PROTECTION: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_MODIFIED_ON: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LOCAL_JOB_TITLE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANAGER_ID: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MUNICIPAL_INSEE_CODE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OCCUPATION_GTM: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OCCUPATION_PER: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OCCUPATIONAL_LEVELS: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATION: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_GRADE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_SCALE_AREA: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_SCALE_GROUP: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_SCALE_LEVEL: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_SCALE_TYPE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_IN_LIEU_OF_NOTICE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PERIOD_INDICATOR: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITION: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITION_ENTRY_DATE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PROBATION_PERIOD_END_DATE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PROBATIONARY_PERIOD: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    PROBATIONARY_PERIOD_MEASURE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGULAR_TEMP: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESIDENT_VOTE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    SEQ_NUMBER: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SICK_PAY_SUPPLEMENT: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SICK_PAY_SUPPLEMENT_MEASURE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SICK_PAY_SUPPLEMENT_PERIOD: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    SPCL_RULE_NON_MANUAL_WORKER: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    STANDARD_HOURS: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      false,
      true
    >;
    TIME_EVENT_TYPE_GROUP_ID: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_RECORDING_ADMISSIBILITY_CODE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_RECORDING_PROFILE_CODE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_RECORDING_VARIANT: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_TYPE_PROFILE_CODE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIMEZONE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_CURRENCY: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRAVEL_DISTANCE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    WORK_LOCATION: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_PERMIT_EXPIRY: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    WORKER_CATEGORY: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKING_DAYS_PER_WEEK: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WORKSCHEDULE_CODE: OrderableEdmTypeField<
      EmpJob<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<EmpJob<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link assedicCertInitialStateNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSEDIC_CERT_INITIAL_STATE_NUM: fieldBuilder.buildEdmTypeField(
          'assedicCertInitialStateNum',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link assedicCertObjectNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSEDIC_CERT_OBJECT_NUM: fieldBuilder.buildEdmTypeField(
          'assedicCertObjectNum',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link assessmentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSESSMENT_STATUS: fieldBuilder.buildEdmTypeField(
          'assessmentStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_UNIT: fieldBuilder.buildEdmTypeField(
          'businessUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calculationBase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_BASE: fieldBuilder.buildEdmTypeField(
          'calculationBase',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link codeOfJobForEldp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE_OF_JOB_FOR_ELDP: fieldBuilder.buildEdmTypeField(
          'codeOfJobForEldp',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('company', 'Edm.String', true),
        /**
         * Static representation of the {@link contractDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_DATE: fieldBuilder.buildEdmTypeField(
          'contractDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link contractEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_END_DATE: fieldBuilder.buildEdmTypeField(
          'contractEndDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link contractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'contractId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contractNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_NUMBER: fieldBuilder.buildEdmTypeField(
          'contractNumber',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link contractReferenceForAed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_REFERENCE_FOR_AED: fieldBuilder.buildEdmTypeField(
          'contractReferenceForAed',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contractType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_TYPE: fieldBuilder.buildEdmTypeField(
          'contractType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costCenter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CENTER: fieldBuilder.buildEdmTypeField(
          'costCenter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryOfCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_OF_COMPANY: fieldBuilder.buildEdmTypeField(
          'countryOfCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY: fieldBuilder.buildEdmTypeField(
          'createdBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'createdDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'createdOn',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link creditForPreviousService} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_FOR_PREVIOUS_SERVICE: fieldBuilder.buildEdmTypeField(
          'creditForPreviousService',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currentWageLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_WAGE_LEVEL: fieldBuilder.buildEdmTypeField(
          'currentWageLevel',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link customString13} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_STRING_13: fieldBuilder.buildEdmTypeField(
          'customString13',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customString2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_STRING_2: fieldBuilder.buildEdmTypeField(
          'customString2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customString3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_STRING_3: fieldBuilder.buildEdmTypeField(
          'customString3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customString7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_STRING_7: fieldBuilder.buildEdmTypeField(
          'customString7',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customString8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_STRING_8: fieldBuilder.buildEdmTypeField(
          'customString8',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultOvertimeCompensationVariant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_OVERTIME_COMPENSATION_VARIANT: fieldBuilder.buildEdmTypeField(
          'defaultOvertimeCompensationVariant',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link degreeOfProductivity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEGREE_OF_PRODUCTIVITY: fieldBuilder.buildEdmTypeField(
          'degreeOfProductivity',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link department} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT: fieldBuilder.buildEdmTypeField(
          'department',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dismissalsNoticePeriodForEmployer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISMISSALS_NOTICE_PERIOD_FOR_EMPLOYER: fieldBuilder.buildEdmTypeField(
          'dismissalsNoticePeriodForEmployer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link division} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIVISION: fieldBuilder.buildEdmTypeField(
          'division',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dynamicBreakConfigCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DYNAMIC_BREAK_CONFIG_CODE: fieldBuilder.buildEdmTypeField(
          'dynamicBreakConfigCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eeo1JobCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EEO_1_JOB_CATEGORY: fieldBuilder.buildEdmTypeField(
          'eeo1JobCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eeo4JobCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EEO_4_JOB_CATEGORY: fieldBuilder.buildEdmTypeField(
          'eeo4JobCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eeo5JobCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EEO_5_JOB_CATEGORY: fieldBuilder.buildEdmTypeField(
          'eeo5JobCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eeo6JobCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EEO_6_JOB_CATEGORY: fieldBuilder.buildEdmTypeField(
          'eeo6JobCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eeoClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EEO_CLASS: fieldBuilder.buildEdmTypeField(
          'eeoClass',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link effectiveLatestChange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_LATEST_CHANGE: fieldBuilder.buildEdmTypeField(
          'effectiveLatestChange',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link electoralCollegeForWorkersRepresentatives} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTORAL_COLLEGE_FOR_WORKERS_REPRESENTATIVES:
          fieldBuilder.buildEdmTypeField(
            'electoralCollegeForWorkersRepresentatives',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link electoralCollegeForWorksCouncil} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTORAL_COLLEGE_FOR_WORKS_COUNCIL: fieldBuilder.buildEdmTypeField(
          'electoralCollegeForWorksCouncil',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link empRelationship} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMP_RELATIONSHIP: fieldBuilder.buildEdmTypeField(
          'empRelationship',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link emplStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPL_STATUS: fieldBuilder.buildEdmTypeField(
          'emplStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employeeClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_CLASS: fieldBuilder.buildEdmTypeField(
          'employeeClass',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employeeWorkgroupMembership} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_WORKGROUP_MEMBERSHIP: fieldBuilder.buildEdmTypeField(
          'employeeWorkgroupMembership',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'employmentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'endDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link event} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT: fieldBuilder.buildEdmTypeField('event', 'Edm.String', true),
        /**
         * Static representation of the {@link eventReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_REASON: fieldBuilder.buildEdmTypeField(
          'eventReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'exchangeRate',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link exclExecutiveSector} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCL_EXECUTIVE_SECTOR: fieldBuilder.buildEdmTypeField(
          'exclExecutiveSector',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link familyRelationshipWithEmployer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAMILY_RELATIONSHIP_WITH_EMPLOYER: fieldBuilder.buildEdmTypeField(
          'familyRelationshipWithEmployer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fgtsDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FGTS_DATE: fieldBuilder.buildEdmTypeField(
          'fgtsDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link fgtsPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FGTS_PERCENT: fieldBuilder.buildEdmTypeField(
          'fgtsPercent',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link flsaStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLSA_STATUS: fieldBuilder.buildEdmTypeField(
          'flsaStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fromCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_CURRENCY: fieldBuilder.buildEdmTypeField(
          'fromCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fte} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FTE: fieldBuilder.buildEdmTypeField('fte', 'Edm.Double', true),
        /**
         * Static representation of the {@link guaranteedPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUARANTEED_PAYMENT: fieldBuilder.buildEdmTypeField(
          'guaranteedPayment',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link harmfulAgentExposure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HARMFUL_AGENT_EXPOSURE: fieldBuilder.buildEdmTypeField(
          'harmfulAgentExposure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link healthRisk} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEALTH_RISK: fieldBuilder.buildEdmTypeField(
          'healthRisk',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link holidayCalendarCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOLIDAY_CALENDAR_CODE: fieldBuilder.buildEdmTypeField(
          'holidayCalendarCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link holidayWorkPatternCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOLIDAY_WORK_PATTERN_CODE: fieldBuilder.buildEdmTypeField(
          'holidayWorkPatternCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ineligibleStatutoryMinWage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INELIGIBLE_STATUTORY_MIN_WAGE: fieldBuilder.buildEdmTypeField(
          'ineligibleStatutoryMinWage',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isCompetitionClauseActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COMPETITION_CLAUSE_ACTIVE: fieldBuilder.buildEdmTypeField(
          'isCompetitionClauseActive',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isFulltimeEmployee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FULLTIME_EMPLOYEE: fieldBuilder.buildEdmTypeField(
          'isFulltimeEmployee',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isSideLineJobAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SIDE_LINE_JOB_ALLOWED: fieldBuilder.buildEdmTypeField(
          'isSideLineJobAllowed',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link jobCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_CODE: fieldBuilder.buildEdmTypeField('jobCode', 'Edm.String', true),
        /**
         * Static representation of the {@link jobGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_GROUP: fieldBuilder.buildEdmTypeField(
          'jobGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TITLE: fieldBuilder.buildEdmTypeField(
          'jobTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link laborProtection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABOR_PROTECTION: fieldBuilder.buildEdmTypeField(
          'laborProtection',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'lastModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'lastModifiedDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_ON: fieldBuilder.buildEdmTypeField(
          'lastModifiedOn',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link localJobTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCAL_JOB_TITLE: fieldBuilder.buildEdmTypeField(
          'localJobTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField(
          'location',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link managerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGER_ID: fieldBuilder.buildEdmTypeField(
          'managerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link municipalInseeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MUNICIPAL_INSEE_CODE: fieldBuilder.buildEdmTypeField(
          'municipalInseeCode',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('notes', 'Edm.String', true),
        /**
         * Static representation of the {@link occupationGtm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OCCUPATION_GTM: fieldBuilder.buildEdmTypeField(
          'occupationGtm',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link occupationPer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OCCUPATION_PER: fieldBuilder.buildEdmTypeField(
          'occupationPer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link occupationalLevels} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OCCUPATIONAL_LEVELS: fieldBuilder.buildEdmTypeField(
          'occupationalLevels',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link operation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION: fieldBuilder.buildEdmTypeField(
          'operation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payGrade} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_GRADE: fieldBuilder.buildEdmTypeField(
          'payGrade',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payScaleArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_SCALE_AREA: fieldBuilder.buildEdmTypeField(
          'payScaleArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payScaleGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_SCALE_GROUP: fieldBuilder.buildEdmTypeField(
          'payScaleGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payScaleLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_SCALE_LEVEL: fieldBuilder.buildEdmTypeField(
          'payScaleLevel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payScaleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_SCALE_TYPE: fieldBuilder.buildEdmTypeField(
          'payScaleType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentInLieuOfNotice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_IN_LIEU_OF_NOTICE: fieldBuilder.buildEdmTypeField(
          'paymentInLieuOfNotice',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link periodIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_INDICATOR: fieldBuilder.buildEdmTypeField(
          'periodIndicator',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link position} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION: fieldBuilder.buildEdmTypeField(
          'position',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link positionEntryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_ENTRY_DATE: fieldBuilder.buildEdmTypeField(
          'positionEntryDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link probationPeriodEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROBATION_PERIOD_END_DATE: fieldBuilder.buildEdmTypeField(
          'probationPeriodEndDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link probationaryPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROBATIONARY_PERIOD: fieldBuilder.buildEdmTypeField(
          'probationaryPeriod',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link probationaryPeriodMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROBATIONARY_PERIOD_MEASURE: fieldBuilder.buildEdmTypeField(
          'probationaryPeriodMeasure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link regularTemp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULAR_TEMP: fieldBuilder.buildEdmTypeField(
          'regularTemp',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link residentVote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESIDENT_VOTE: fieldBuilder.buildEdmTypeField(
          'residentVote',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link seqNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQ_NUMBER: fieldBuilder.buildEdmTypeField(
          'seqNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sickPaySupplement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SICK_PAY_SUPPLEMENT: fieldBuilder.buildEdmTypeField(
          'sickPaySupplement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sickPaySupplementMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SICK_PAY_SUPPLEMENT_MEASURE: fieldBuilder.buildEdmTypeField(
          'sickPaySupplementMeasure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sickPaySupplementPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SICK_PAY_SUPPLEMENT_PERIOD: fieldBuilder.buildEdmTypeField(
          'sickPaySupplementPeriod',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link spclRuleNonManualWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPCL_RULE_NON_MANUAL_WORKER: fieldBuilder.buildEdmTypeField(
          'spclRuleNonManualWorker',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link standardHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_HOURS: fieldBuilder.buildEdmTypeField(
          'standardHours',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'startDate',
          'Edm.DateTime',
          false
        ),
        /**
         * Static representation of the {@link timeEventTypeGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_EVENT_TYPE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'timeEventTypeGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeRecordingAdmissibilityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_RECORDING_ADMISSIBILITY_CODE: fieldBuilder.buildEdmTypeField(
          'timeRecordingAdmissibilityCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeRecordingProfileCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_RECORDING_PROFILE_CODE: fieldBuilder.buildEdmTypeField(
          'timeRecordingProfileCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeRecordingVariant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_RECORDING_VARIANT: fieldBuilder.buildEdmTypeField(
          'timeRecordingVariant',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeTypeProfileCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_TYPE_PROFILE_CODE: fieldBuilder.buildEdmTypeField(
          'timeTypeProfileCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timezone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIMEZONE: fieldBuilder.buildEdmTypeField(
          'timezone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_CURRENCY: fieldBuilder.buildEdmTypeField(
          'toCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link travelDistance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAVEL_DISTANCE: fieldBuilder.buildEdmTypeField(
          'travelDistance',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('userId', 'Edm.String', false),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'validFrom',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link workLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_LOCATION: fieldBuilder.buildEdmTypeField(
          'workLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workPermitExpiry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_PERMIT_EXPIRY: fieldBuilder.buildEdmTypeField(
          'workPermitExpiry',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link workerCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_CATEGORY: fieldBuilder.buildEdmTypeField(
          'workerCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workingDaysPerWeek} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKING_DAYS_PER_WEEK: fieldBuilder.buildEdmTypeField(
          'workingDaysPerWeek',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link workscheduleCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKSCHEDULE_CODE: fieldBuilder.buildEdmTypeField(
          'workscheduleCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EmpJob)
      };
    }

    return this._schema;
  }
}
