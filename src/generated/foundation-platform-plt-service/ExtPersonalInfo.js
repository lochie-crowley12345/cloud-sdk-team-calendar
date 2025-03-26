"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtPersonalInfo = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "ExtPersonalInfo" of service "FoundationPlatformPLT".
 */
class ExtPersonalInfo extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.ExtPersonalInfo = ExtPersonalInfo;
/**
 * Technical entity name for ExtPersonalInfo.
 */
ExtPersonalInfo._entityName = 'ExtPersonalInfo';
/**
 * Default url path for the according service.
 */
ExtPersonalInfo._defaultServicePath = '/odata/v2';
/**
 * All key fields of the ExtPersonalInfo entity
 */
ExtPersonalInfo._keys = ['personalInfoId'];
//# sourceMappingURL=ExtPersonalInfo.js.map