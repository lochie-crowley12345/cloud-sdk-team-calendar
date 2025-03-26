"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimeCan = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "EmployeeTimeCAN" of service "ECTimeOff".
 */
class EmployeeTimeCan extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.EmployeeTimeCan = EmployeeTimeCan;
/**
 * Technical entity name for EmployeeTimeCan.
 */
EmployeeTimeCan._entityName = 'EmployeeTimeCAN';
/**
 * Default url path for the according service.
 */
EmployeeTimeCan._defaultServicePath = '/odata/v2';
/**
 * All key fields of the EmployeeTimeCan entity
 */
EmployeeTimeCan._keys = ['EmployeeTime_externalCode', 'externalCode'];
//# sourceMappingURL=EmployeeTimeCan.js.map