"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeManagementAlertMessage = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "TimeManagementAlertMessage" of service "ECTimeOff".
 */
class TimeManagementAlertMessage extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.TimeManagementAlertMessage = TimeManagementAlertMessage;
/**
 * Technical entity name for TimeManagementAlertMessage.
 */
TimeManagementAlertMessage._entityName = 'TimeManagementAlertMessage';
/**
 * Default url path for the according service.
 */
TimeManagementAlertMessage._defaultServicePath = '/odata/v2';
/**
 * All key fields of the TimeManagementAlertMessage entity
 */
TimeManagementAlertMessage._keys = ['TimeManagementAlert_externalCode', 'externalCode'];
//# sourceMappingURL=TimeManagementAlertMessage.js.map