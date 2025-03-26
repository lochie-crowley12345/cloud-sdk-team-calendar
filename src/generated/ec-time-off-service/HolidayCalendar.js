"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HolidayCalendar = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "HolidayCalendar" of service "ECTimeOff".
 */
class HolidayCalendar extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.HolidayCalendar = HolidayCalendar;
/**
 * Technical entity name for HolidayCalendar.
 */
HolidayCalendar._entityName = 'HolidayCalendar';
/**
 * Default url path for the according service.
 */
HolidayCalendar._defaultServicePath = '/odata/v2';
/**
 * All key fields of the HolidayCalendar entity
 */
HolidayCalendar._keys = ['externalCode'];
//# sourceMappingURL=HolidayCalendar.js.map