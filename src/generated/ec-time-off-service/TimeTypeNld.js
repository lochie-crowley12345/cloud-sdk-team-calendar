"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTypeNld = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "TimeTypeNLD" of service "ECTimeOff".
 */
class TimeTypeNld extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.TimeTypeNld = TimeTypeNld;
/**
 * Technical entity name for TimeTypeNld.
 */
TimeTypeNld._entityName = 'TimeTypeNLD';
/**
 * Default url path for the according service.
 */
TimeTypeNld._defaultServicePath = '/odata/v2';
/**
 * All key fields of the TimeTypeNld entity
 */
TimeTypeNld._keys = ['TimeType_externalCode', 'externalCode'];
//# sourceMappingURL=TimeTypeNld.js.map