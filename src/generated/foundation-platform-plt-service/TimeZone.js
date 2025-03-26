"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeZone = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "TimeZone" of service "FoundationPlatformPLT".
 */
class TimeZone extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.TimeZone = TimeZone;
/**
 * Technical entity name for TimeZone.
 */
TimeZone._entityName = 'TimeZone';
/**
 * Default url path for the according service.
 */
TimeZone._defaultServicePath = '/odata/v2';
/**
 * All key fields of the TimeZone entity
 */
TimeZone._keys = ['effectiveStartDate', 'externalCode'];
//# sourceMappingURL=TimeZone.js.map