"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtAddressInfoApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ExtAddressInfo_1 = require("./ExtAddressInfo");
const ExtAddressInfoRequestBuilder_1 = require("./ExtAddressInfoRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ExtAddressInfoApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ExtAddressInfo_1.ExtAddressInfo;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            ADDRESS_TYPE_NAV: new odata_v2_1.OneToOneLink('addressTypeNav', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new ExtAddressInfoRequestBuilder_1.ExtAddressInfoRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ExtAddressInfo_1.ExtAddressInfo, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link address1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_1: fieldBuilder.buildEdmTypeField('address1', 'Edm.String', true),
                /**
                 * Static representation of the {@link address2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_2: fieldBuilder.buildEdmTypeField('address2', 'Edm.String', true),
                /**
                 * Static representation of the {@link addressId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('addressId', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link addressType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_TYPE: fieldBuilder.buildEdmTypeField('addressType', 'Edm.String', true),
                /**
                 * Static representation of the {@link city} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CITY: fieldBuilder.buildEdmTypeField('city', 'Edm.String', true),
                /**
                 * Static representation of the {@link country} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY: fieldBuilder.buildEdmTypeField('country', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastModifiedDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField('lastModifiedDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link province} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROVINCE: fieldBuilder.buildEdmTypeField('province', 'Edm.String', true),
                /**
                 * Static representation of the {@link state} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATE: fieldBuilder.buildEdmTypeField('state', 'Edm.String', true),
                /**
                 * Static representation of the {@link zipCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ZIP_CODE: fieldBuilder.buildEdmTypeField('zipCode', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ExtAddressInfo_1.ExtAddressInfo)
            };
        }
        return this._schema;
    }
}
exports.ExtAddressInfoApi = ExtAddressInfoApi;
//# sourceMappingURL=ExtAddressInfoApi.js.map