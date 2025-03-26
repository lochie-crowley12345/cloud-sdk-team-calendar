"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimePol = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "EmployeeTimePOL" of service "ECTimeOff".
 */
class EmployeeTimePol extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.EmployeeTimePol = EmployeeTimePol;
/**
 * Technical entity name for EmployeeTimePol.
 */
EmployeeTimePol._entityName = 'EmployeeTimePOL';
/**
 * Default url path for the according service.
 */
EmployeeTimePol._defaultServicePath = '/odata/v2';
/**
 * All key fields of the EmployeeTimePol entity
 */
EmployeeTimePol._keys = ['EmployeeTime_externalCode', 'externalCode'];
//# sourceMappingURL=EmployeeTimePol.js.map