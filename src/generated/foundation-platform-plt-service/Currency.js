"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Currency" of service "FoundationPlatformPLT".
 */
class Currency extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.Currency = Currency;
/**
 * Technical entity name for Currency.
 */
Currency._entityName = 'Currency';
/**
 * Default url path for the according service.
 */
Currency._defaultServicePath = '/odata/v2';
/**
 * All key fields of the Currency entity
 */
Currency._keys = ['code', 'effectiveStartDate'];
//# sourceMappingURL=Currency.js.map