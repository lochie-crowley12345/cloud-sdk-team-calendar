"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtAddressInfo = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "ExtAddressInfo" of service "FoundationPlatformPLT".
 */
class ExtAddressInfo extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.ExtAddressInfo = ExtAddressInfo;
/**
 * Technical entity name for ExtAddressInfo.
 */
ExtAddressInfo._entityName = 'ExtAddressInfo';
/**
 * Default url path for the according service.
 */
ExtAddressInfo._defaultServicePath = '/odata/v2';
/**
 * All key fields of the ExtAddressInfo entity
 */
ExtAddressInfo._keys = ['addressId'];
//# sourceMappingURL=ExtAddressInfo.js.map