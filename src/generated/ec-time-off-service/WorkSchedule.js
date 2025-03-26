"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkSchedule = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "WorkSchedule" of service "ECTimeOff".
 */
class WorkSchedule extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.WorkSchedule = WorkSchedule;
/**
 * Technical entity name for WorkSchedule.
 */
WorkSchedule._entityName = 'WorkSchedule';
/**
 * Default url path for the according service.
 */
WorkSchedule._defaultServicePath = '/odata/v2';
/**
 * All key fields of the WorkSchedule entity
 */
WorkSchedule._keys = ['externalCode'];
//# sourceMappingURL=WorkSchedule.js.map