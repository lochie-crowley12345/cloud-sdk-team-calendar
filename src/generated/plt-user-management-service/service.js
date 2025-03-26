"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pltUserManagementService = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const UserApi_1 = require("./UserApi");
const UserPermissionsApi_1 = require("./UserPermissionsApi");
const function_imports_1 = require("./function-imports");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function pltUserManagementService(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new PltUserManagementService((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
exports.pltUserManagementService = pltUserManagementService;
class PltUserManagementService {
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
    get userApi() {
        const api = this.initApi('userApi', UserApi_1.UserApi);
        const linkedApis = [
            this.initApi('userApi', UserApi_1.UserApi),
            this.initApi('userApi', UserApi_1.UserApi),
            this.initApi('userApi', UserApi_1.UserApi),
            this.initApi('userApi', UserApi_1.UserApi),
            this.initApi('userApi', UserApi_1.UserApi),
            this.initApi('userApi', UserApi_1.UserApi),
            this.initApi('userApi', UserApi_1.UserApi),
            this.initApi('userApi', UserApi_1.UserApi),
            this.initApi('userApi', UserApi_1.UserApi),
            this.initApi('userApi', UserApi_1.UserApi),
            this.initApi('userApi', UserApi_1.UserApi),
            this.initApi('userPermissionsApi', UserPermissionsApi_1.UserPermissionsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get userPermissionsApi() {
        return this.initApi('userPermissionsApi', UserPermissionsApi_1.UserPermissionsApi);
    }
    /**
     * @deprecated Since v2.13.0. Use {@link operations} instead.
     */
    get functionImports() {
        return {
            getUserNameFormat: (parameter) => (0, function_imports_1.getUserNameFormat)(parameter, this.deSerializers),
            getPasswordPolicy: (parameter) => (0, function_imports_1.getPasswordPolicy)(parameter, this.deSerializers)
        };
    }
    /**
     * Get unbound functions and actions.
     */
    get operations() {
        return { ...this.functionImports };
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map