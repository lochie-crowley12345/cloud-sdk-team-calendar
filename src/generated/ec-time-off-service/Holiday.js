"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Holiday = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Holiday" of service "ECTimeOff".
 */
class Holiday extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.Holiday = Holiday;
/**
 * Technical entity name for Holiday.
 */
Holiday._entityName = 'Holiday';
/**
 * Default url path for the according service.
 */
Holiday._defaultServicePath = '/odata/v2';
/**
 * All key fields of the Holiday entity
 */
Holiday._keys = ['holidayCode'];
//# sourceMappingURL=Holiday.js.map