"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimeNld = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "EmployeeTimeNLD" of service "ECTimeOff".
 */
class EmployeeTimeNld extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.EmployeeTimeNld = EmployeeTimeNld;
/**
 * Technical entity name for EmployeeTimeNld.
 */
EmployeeTimeNld._entityName = 'EmployeeTimeNLD';
/**
 * Default url path for the according service.
 */
EmployeeTimeNld._defaultServicePath = '/odata/v2';
/**
 * All key fields of the EmployeeTimeNld entity
 */
EmployeeTimeNld._keys = ['EmployeeTime_externalCode', 'externalCode'];
//# sourceMappingURL=EmployeeTimeNld.js.map