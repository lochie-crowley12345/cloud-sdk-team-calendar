"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeAccountSnapshot = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "TimeAccountSnapshot" of service "ECTimeOff".
 */
class TimeAccountSnapshot extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.TimeAccountSnapshot = TimeAccountSnapshot;
/**
 * Technical entity name for TimeAccountSnapshot.
 */
TimeAccountSnapshot._entityName = 'TimeAccountSnapshot';
/**
 * Default url path for the according service.
 */
TimeAccountSnapshot._defaultServicePath = '/odata/v2';
/**
 * All key fields of the TimeAccountSnapshot entity
 */
TimeAccountSnapshot._keys = ['externalCode'];
//# sourceMappingURL=TimeAccountSnapshot.js.map