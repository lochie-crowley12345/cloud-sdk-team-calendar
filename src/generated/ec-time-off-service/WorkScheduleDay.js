"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkScheduleDay = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "WorkScheduleDay" of service "ECTimeOff".
 */
class WorkScheduleDay extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.WorkScheduleDay = WorkScheduleDay;
/**
 * Technical entity name for WorkScheduleDay.
 */
WorkScheduleDay._entityName = 'WorkScheduleDay';
/**
 * Default url path for the according service.
 */
WorkScheduleDay._defaultServicePath = '/odata/v2';
/**
 * All key fields of the WorkScheduleDay entity
 */
WorkScheduleDay._keys = ['WorkSchedule_externalCode', 'day'];
//# sourceMappingURL=WorkScheduleDay.js.map