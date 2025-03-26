"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPermissions = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "UserPermissions" of service "PLTUserManagement".
 */
class UserPermissions extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.UserPermissions = UserPermissions;
/**
 * Technical entity name for UserPermissions.
 */
UserPermissions._entityName = 'UserPermissions';
/**
 * Default url path for the according service.
 */
UserPermissions._defaultServicePath = '/odata/v2';
/**
 * All key fields of the UserPermissions entity
 */
UserPermissions._keys = ['userId'];
//# sourceMappingURL=UserPermissions.js.map