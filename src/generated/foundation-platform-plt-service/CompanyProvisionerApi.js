"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyProvisionerApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const CompanyProvisioner_1 = require("./CompanyProvisioner");
const CompanyProvisionerRequestBuilder_1 = require("./CompanyProvisionerRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CompanyProvisionerApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CompanyProvisioner_1.CompanyProvisioner;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new CompanyProvisionerRequestBuilder_1.CompanyProvisionerRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CompanyProvisioner_1.CompanyProvisioner, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link createdAdminAccountNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_ADMIN_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField('createdAdminAccountNumber', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link email} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EMAIL: fieldBuilder.buildEdmTypeField('email', 'Edm.String', true),
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('id', 'Edm.String', false),
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', false),
                /**
                 * Static representation of the {@link status} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATUS: fieldBuilder.buildEdmTypeField('status', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', CompanyProvisioner_1.CompanyProvisioner)
            };
        }
        return this._schema;
    }
}
exports.CompanyProvisionerApi = CompanyProvisionerApi;
//# sourceMappingURL=CompanyProvisionerApi.js.map