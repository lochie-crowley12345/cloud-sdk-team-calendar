"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTypeCan = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "TimeTypeCAN" of service "ECTimeOff".
 */
class TimeTypeCan extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.TimeTypeCan = TimeTypeCan;
/**
 * Technical entity name for TimeTypeCan.
 */
TimeTypeCan._entityName = 'TimeTypeCAN';
/**
 * Default url path for the according service.
 */
TimeTypeCan._defaultServicePath = '/odata/v2';
/**
 * All key fields of the TimeTypeCan entity
 */
TimeTypeCan._keys = ['TimeType_externalCode', 'externalCode'];
//# sourceMappingURL=TimeTypeCan.js.map