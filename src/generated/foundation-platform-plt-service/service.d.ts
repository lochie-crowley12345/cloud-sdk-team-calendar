/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalUserApi } from './ExternalUserApi';
import { PicklistOptionApi } from './PicklistOptionApi';
import { AttachmentApi } from './AttachmentApi';
import { PickListValueV2Api } from './PickListValueV2Api';
import { ExternalLearnerPersonalInfoApi } from './ExternalLearnerPersonalInfoApi';
import { PickListV2Api } from './PickListV2Api';
import { CompanyProvisionerApi } from './CompanyProvisionerApi';
import { ExtAddressInfoApi } from './ExtAddressInfoApi';
import { CurrencyConversionApi } from './CurrencyConversionApi';
import { InitiativeAlignmentBeanApi } from './InitiativeAlignmentBeanApi';
import { PicklistLabelApi } from './PicklistLabelApi';
import { CountryApi } from './CountryApi';
import { PhotoApi } from './PhotoApi';
import { WorkOrderApi } from './WorkOrderApi';
import { CompetencyRatingApi } from './CompetencyRatingApi';
import { ExtEmailInfoApi } from './ExtEmailInfoApi';
import { VendorInfoApi } from './VendorInfoApi';
import { PicklistApi } from './PicklistApi';
import { ExtPersonalInfoApi } from './ExtPersonalInfoApi';
import { ExternalLearnerEmailInfoApi } from './ExternalLearnerEmailInfoApi';
import { ExternalLearnerAddressInfoApi } from './ExternalLearnerAddressInfoApi';
import { ExternalLearnerPhoneInfoApi } from './ExternalLearnerPhoneInfoApi';
import { TimeZoneApi } from './TimeZoneApi';
import { ExternalLearnerApi } from './ExternalLearnerApi';
import { CurrencyApi } from './CurrencyApi';
import { TeamGoalOwnerApi } from './TeamGoalOwnerApi';
import { ExtPhoneInfoApi } from './ExtPhoneInfoApi';
import { GetExtEventMetaDataDefinitionParameters } from './function-imports';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  DeSerializers,
  DefaultDeSerializers,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';
export declare function foundationPlatformPltService<
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
): FoundationPlatformPltService<
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
declare class FoundationPlatformPltService<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis;
  private deSerializers;
  constructor(deSerializers: DeSerializersT);
  private initApi;
  get externalUserApi(): ExternalUserApi<DeSerializersT>;
  get picklistOptionApi(): PicklistOptionApi<DeSerializersT>;
  get attachmentApi(): AttachmentApi<DeSerializersT>;
  get pickListValueV2Api(): PickListValueV2Api<DeSerializersT>;
  get externalLearnerPersonalInfoApi(): ExternalLearnerPersonalInfoApi<DeSerializersT>;
  get pickListV2Api(): PickListV2Api<DeSerializersT>;
  get companyProvisionerApi(): CompanyProvisionerApi<DeSerializersT>;
  get extAddressInfoApi(): ExtAddressInfoApi<DeSerializersT>;
  get currencyConversionApi(): CurrencyConversionApi<DeSerializersT>;
  get initiativeAlignmentBeanApi(): InitiativeAlignmentBeanApi<DeSerializersT>;
  get picklistLabelApi(): PicklistLabelApi<DeSerializersT>;
  get countryApi(): CountryApi<DeSerializersT>;
  get photoApi(): PhotoApi<DeSerializersT>;
  get workOrderApi(): WorkOrderApi<DeSerializersT>;
  get competencyRatingApi(): CompetencyRatingApi<DeSerializersT>;
  get extEmailInfoApi(): ExtEmailInfoApi<DeSerializersT>;
  get vendorInfoApi(): VendorInfoApi<DeSerializersT>;
  get picklistApi(): PicklistApi<DeSerializersT>;
  get extPersonalInfoApi(): ExtPersonalInfoApi<DeSerializersT>;
  get externalLearnerEmailInfoApi(): ExternalLearnerEmailInfoApi<DeSerializersT>;
  get externalLearnerAddressInfoApi(): ExternalLearnerAddressInfoApi<DeSerializersT>;
  get externalLearnerPhoneInfoApi(): ExternalLearnerPhoneInfoApi<DeSerializersT>;
  get timeZoneApi(): TimeZoneApi<DeSerializersT>;
  get externalLearnerApi(): ExternalLearnerApi<DeSerializersT>;
  get currencyApi(): CurrencyApi<DeSerializersT>;
  get teamGoalOwnerApi(): TeamGoalOwnerApi<DeSerializersT>;
  get extPhoneInfoApi(): ExtPhoneInfoApi<DeSerializersT>;
  /**
   * @deprecated Since v2.13.0. Use {@link operations} instead.
   */
  get functionImports(): {
    getExtEventMetaDataDefinition: (
      parameter: GetExtEventMetaDataDefinitionParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
      DeSerializersT,
      GetExtEventMetaDataDefinitionParameters<DeSerializersT>,
      import('./SefExtEventMetaDataList').SefExtEventMetaDataList<DefaultDeSerializers>
    >;
  };
  /**
   * Get unbound functions and actions.
   */
  get operations(): {
    getExtEventMetaDataDefinition: (
      parameter: GetExtEventMetaDataDefinitionParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').FunctionImportRequestBuilder<
      DeSerializersT,
      GetExtEventMetaDataDefinitionParameters<DeSerializersT>,
      import('./SefExtEventMetaDataList').SefExtEventMetaDataList<DefaultDeSerializers>
    >;
  };
  get batch(): typeof batch;
  get changeset(): typeof changeset;
}
export {};
//# sourceMappingURL=service.d.ts.map
