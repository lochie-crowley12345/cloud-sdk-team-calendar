"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyConversion = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "CurrencyConversion" of service "FoundationPlatformPLT".
 */
class CurrencyConversion extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CurrencyConversion = CurrencyConversion;
/**
 * Technical entity name for CurrencyConversion.
 */
CurrencyConversion._entityName = 'CurrencyConversion';
/**
 * Default url path for the according service.
 */
CurrencyConversion._defaultServicePath = '/odata/v2';
/**
 * All key fields of the CurrencyConversion entity
 */
CurrencyConversion._keys = ['code', 'effectiveStartDate'];
//# sourceMappingURL=CurrencyConversion.js.map