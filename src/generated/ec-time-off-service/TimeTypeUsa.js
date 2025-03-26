"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTypeUsa = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "TimeTypeUSA" of service "ECTimeOff".
 */
class TimeTypeUsa extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.TimeTypeUsa = TimeTypeUsa;
/**
 * Technical entity name for TimeTypeUsa.
 */
TimeTypeUsa._entityName = 'TimeTypeUSA';
/**
 * Default url path for the according service.
 */
TimeTypeUsa._defaultServicePath = '/odata/v2';
/**
 * All key fields of the TimeTypeUsa entity
 */
TimeTypeUsa._keys = ['TimeType_externalCode', 'externalCode'];
//# sourceMappingURL=TimeTypeUsa.js.map