"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpTimeAccountBalanceApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const EmpTimeAccountBalance_1 = require("./EmpTimeAccountBalance");
const EmpTimeAccountBalanceRequestBuilder_1 = require("./EmpTimeAccountBalanceRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class EmpTimeAccountBalanceApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = EmpTimeAccountBalance_1.EmpTimeAccountBalance;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new EmpTimeAccountBalanceRequestBuilder_1.EmpTimeAccountBalanceRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(EmpTimeAccountBalance_1.EmpTimeAccountBalance, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link accountClosed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNT_CLOSED: fieldBuilder.buildEdmTypeField('accountClosed', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link balance} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BALANCE: fieldBuilder.buildEdmTypeField('balance', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link timeAccount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_ACCOUNT: fieldBuilder.buildEdmTypeField('timeAccount', 'Edm.String', false),
                /**
                 * Static representation of the {@link timeAccountType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_ACCOUNT_TYPE: fieldBuilder.buildEdmTypeField('timeAccountType', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_UNIT: fieldBuilder.buildEdmTypeField('timeUnit', 'Edm.String', true),
                /**
                 * Static representation of the {@link userId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                USER_ID: fieldBuilder.buildEdmTypeField('userId', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', EmpTimeAccountBalance_1.EmpTimeAccountBalance)
            };
        }
        return this._schema;
    }
}
exports.EmpTimeAccountBalanceApi = EmpTimeAccountBalanceApi;
//# sourceMappingURL=EmpTimeAccountBalanceApi.js.map