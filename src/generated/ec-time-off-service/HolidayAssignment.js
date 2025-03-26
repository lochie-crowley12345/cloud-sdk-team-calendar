"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HolidayAssignment = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "HolidayAssignment" of service "ECTimeOff".
 */
class HolidayAssignment extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.HolidayAssignment = HolidayAssignment;
/**
 * Technical entity name for HolidayAssignment.
 */
HolidayAssignment._entityName = 'HolidayAssignment';
/**
 * Default url path for the according service.
 */
HolidayAssignment._defaultServicePath = '/odata/v2';
/**
 * All key fields of the HolidayAssignment entity
 */
HolidayAssignment._keys = ['HolidayCalendar_externalCode', 'date'];
//# sourceMappingURL=HolidayAssignment.js.map