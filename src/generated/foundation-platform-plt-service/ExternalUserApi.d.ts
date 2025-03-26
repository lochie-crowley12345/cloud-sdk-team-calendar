/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalUser } from './ExternalUser';
import { ExternalUserRequestBuilder } from './ExternalUserRequestBuilder';
import { ExtAddressInfoApi } from './ExtAddressInfoApi';
import { ExtEmailInfoApi } from './ExtEmailInfoApi';
import { ExtPersonalInfoApi } from './ExtPersonalInfoApi';
import { ExtPhoneInfoApi } from './ExtPhoneInfoApi';
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
export declare class ExternalUserApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExternalUser<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      ExtAddressInfoApi<DeSerializersT>,
      ExtEmailInfoApi<DeSerializersT>,
      ExtPersonalInfoApi<DeSerializersT>,
      ExtPhoneInfoApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof ExternalUser;
  requestBuilder(): ExternalUserRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ExternalUser<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<ExternalUser<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ExternalUser, DeSerializersT>;
  private _schema?;
  get schema(): {
    DEFAULT_LOCALE: OrderableEdmTypeField<
      ExternalUser<
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
      ExternalUser<
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
      ExternalUser<
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
      ExternalUser<
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
      ExternalUser<
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
      ExternalUser<
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
      ExternalUser<
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
      ExternalUser<
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
      ExternalUser<
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
      ExternalUser<
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
      ExternalUser<
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
      ExternalUser<
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
      ExternalUser<
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
     * Static representation of the one-to-many navigation property {@link extAddressInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXT_ADDRESS_INFO: Link<
      ExternalUser<DeSerializersT>,
      DeSerializersT,
      ExtAddressInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link extEmailInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXT_EMAIL_INFO: Link<
      ExternalUser<DeSerializersT>,
      DeSerializersT,
      ExtEmailInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link extPersonalInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXT_PERSONAL_INFO: OneToOneLink<
      ExternalUser<DeSerializersT>,
      DeSerializersT,
      ExtPersonalInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link extPhoneInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXT_PHONE_INFO: Link<
      ExternalUser<DeSerializersT>,
      DeSerializersT,
      ExtPhoneInfoApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      ExternalUser<
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
//# sourceMappingURL=ExternalUserApi.d.ts.map
