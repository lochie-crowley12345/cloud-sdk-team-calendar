"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeManagementAlert = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "TimeManagementAlert" of service "ECTimeOff".
 */
class TimeManagementAlert extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.TimeManagementAlert = TimeManagementAlert;
/**
 * Technical entity name for TimeManagementAlert.
 */
TimeManagementAlert._entityName = 'TimeManagementAlert';
/**
 * Default url path for the according service.
 */
TimeManagementAlert._defaultServicePath = '/odata/v2';
/**
 * All key fields of the TimeManagementAlert entity
 */
TimeManagementAlert._keys = ['externalCode'];
//# sourceMappingURL=TimeManagementAlert.js.map