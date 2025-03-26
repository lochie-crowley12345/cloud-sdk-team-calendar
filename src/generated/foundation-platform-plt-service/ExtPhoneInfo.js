"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtPhoneInfo = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "ExtPhoneInfo" of service "FoundationPlatformPLT".
 */
class ExtPhoneInfo extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.ExtPhoneInfo = ExtPhoneInfo;
/**
 * Technical entity name for ExtPhoneInfo.
 */
ExtPhoneInfo._entityName = 'ExtPhoneInfo';
/**
 * Default url path for the according service.
 */
ExtPhoneInfo._defaultServicePath = '/odata/v2';
/**
 * All key fields of the ExtPhoneInfo entity
 */
ExtPhoneInfo._keys = ['phoneInfoId'];
//# sourceMappingURL=ExtPhoneInfo.js.map