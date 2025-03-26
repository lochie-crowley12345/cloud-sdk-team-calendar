/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalLearner } from './ExternalLearner';
import { ExternalLearnerRequestBuilder } from './ExternalLearnerRequestBuilder';
import { ExternalLearnerEmailInfoApi } from './ExternalLearnerEmailInfoApi';
import { ExternalLearnerAddressInfoApi } from './ExternalLearnerAddressInfoApi';
import { ExternalLearnerPersonalInfoApi } from './ExternalLearnerPersonalInfoApi';
import { ExternalLearnerPhoneInfoApi } from './ExternalLearnerPhoneInfoApi';
import { PicklistOptionApi } from './PicklistOptionApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class ExternalLearnerApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExternalLearner<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      ExternalLearnerEmailInfoApi<DeSerializersT>,
      ExternalLearnerAddressInfoApi<DeSerializersT>,
      ExternalLearnerPersonalInfoApi<DeSerializersT>,
      ExternalLearnerPhoneInfoApi<DeSerializersT>,
      PicklistOptionApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof ExternalLearner;
  requestBuilder(): ExternalLearnerRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ExternalLearner<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<ExternalLearner<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ExternalLearner, DeSerializersT>;
  private _schema?;
  get schema(): {
    DEFAULT_LOCALE: OrderableEdmTypeField<
      ExternalLearner<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELETED: OrderableEdmTypeField<
      ExternalLearner<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      ExternalLearner<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LOGIN_METHOD: OrderableEdmTypeField<
      ExternalLearner<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PASSWORD: OrderableEdmTypeField<
      ExternalLearner<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_GUID: OrderableEdmTypeField<
      ExternalLearner<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_ID: OrderableEdmTypeField<
      ExternalLearner<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PERSON_ID_EXTERNAL: OrderableEdmTypeField<
      ExternalLearner<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      ExternalLearner<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_CHANNEL: OrderableEdmTypeField<
      ExternalLearner<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      ExternalLearner<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_ZONE: OrderableEdmTypeField<
      ExternalLearner<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      ExternalLearner<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USER_NAME: OrderableEdmTypeField<
      ExternalLearner<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link emailInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMAIL_INFO: Link<
      ExternalLearner<DeSerializersT>,
      DeSerializersT,
      ExternalLearnerEmailInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link homeAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HOME_ADDRESS: Link<
      ExternalLearner<DeSerializersT>,
      DeSerializersT,
      ExternalLearnerAddressInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personalInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSONAL_INFO: OneToOneLink<
      ExternalLearner<DeSerializersT>,
      DeSerializersT,
      ExternalLearnerPersonalInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link phoneInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PHONE_INFO: Link<
      ExternalLearner<DeSerializersT>,
      DeSerializersT,
      ExternalLearnerPhoneInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sourceChannelNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCE_CHANNEL_NAV: OneToOneLink<
      ExternalLearner<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      ExternalLearner<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >
    >;
  };
}
//# sourceMappingURL=ExternalLearnerApi.d.ts.map
