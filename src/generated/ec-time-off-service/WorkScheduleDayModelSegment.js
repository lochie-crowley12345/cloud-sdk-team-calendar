"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkScheduleDayModelSegment = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "WorkScheduleDayModelSegment" of service "ECTimeOff".
 */
class WorkScheduleDayModelSegment extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.WorkScheduleDayModelSegment = WorkScheduleDayModelSegment;
/**
 * Technical entity name for WorkScheduleDayModelSegment.
 */
WorkScheduleDayModelSegment._entityName = 'WorkScheduleDayModelSegment';
/**
 * Default url path for the according service.
 */
WorkScheduleDayModelSegment._defaultServicePath = '/odata/v2';
/**
 * All key fields of the WorkScheduleDayModelSegment entity
 */
WorkScheduleDayModelSegment._keys = ['WorkScheduleDayModel_externalCode', 'externalCode'];
//# sourceMappingURL=WorkScheduleDayModelSegment.js.map