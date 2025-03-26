"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeType = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "TimeType" of service "ECTimeOff".
 */
class TimeType extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.TimeType = TimeType;
/**
 * Technical entity name for TimeType.
 */
TimeType._entityName = 'TimeType';
/**
 * Default url path for the according service.
 */
TimeType._defaultServicePath = '/odata/v2';
/**
 * All key fields of the TimeType entity
 */
TimeType._keys = ['externalCode'];
//# sourceMappingURL=TimeType.js.map