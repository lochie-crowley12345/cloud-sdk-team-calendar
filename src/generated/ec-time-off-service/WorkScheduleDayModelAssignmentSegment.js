"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkScheduleDayModelAssignmentSegment = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "WorkScheduleDayModelAssignmentSegment" of service "ECTimeOff".
 */
class WorkScheduleDayModelAssignmentSegment extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.WorkScheduleDayModelAssignmentSegment = WorkScheduleDayModelAssignmentSegment;
/**
 * Technical entity name for WorkScheduleDayModelAssignmentSegment.
 */
WorkScheduleDayModelAssignmentSegment._entityName = 'WorkScheduleDayModelAssignmentSegment';
/**
 * Default url path for the according service.
 */
WorkScheduleDayModelAssignmentSegment._defaultServicePath = '/odata/v2';
/**
 * All key fields of the WorkScheduleDayModelAssignmentSegment entity
 */
WorkScheduleDayModelAssignmentSegment._keys = [
    'WorkScheduleDayModelAssignment_day',
    'WorkSchedule_externalCode',
    'externalCode'
];
//# sourceMappingURL=WorkScheduleDayModelAssignmentSegment.js.map