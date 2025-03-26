"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalUser = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "ExternalUser" of service "FoundationPlatformPLT".
 */
class ExternalUser extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.ExternalUser = ExternalUser;
/**
 * Technical entity name for ExternalUser.
 */
ExternalUser._entityName = 'ExternalUser';
/**
 * Default url path for the according service.
 */
ExternalUser._defaultServicePath = '/odata/v2';
/**
 * All key fields of the ExternalUser entity
 */
ExternalUser._keys = ['userId'];
//# sourceMappingURL=ExternalUser.js.map