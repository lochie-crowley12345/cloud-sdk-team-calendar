"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "User" of service "PLTUserManagement".
 */
class User extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.User = User;
/**
 * Technical entity name for User.
 */
User._entityName = 'User';
/**
 * Default url path for the according service.
 */
User._defaultServicePath = '/odata/v2';
/**
 * All key fields of the User entity
 */
User._keys = ['userId'];
//# sourceMappingURL=User.js.map