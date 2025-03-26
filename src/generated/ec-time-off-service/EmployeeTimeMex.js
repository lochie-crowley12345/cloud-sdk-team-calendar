"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimeMex = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "EmployeeTimeMEX" of service "ECTimeOff".
 */
class EmployeeTimeMex extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.EmployeeTimeMex = EmployeeTimeMex;
/**
 * Technical entity name for EmployeeTimeMex.
 */
EmployeeTimeMex._entityName = 'EmployeeTimeMEX';
/**
 * Default url path for the according service.
 */
EmployeeTimeMex._defaultServicePath = '/odata/v2';
/**
 * All key fields of the EmployeeTimeMex entity
 */
EmployeeTimeMex._keys = ['EmployeeTime_externalCode', 'externalCode'];
//# sourceMappingURL=EmployeeTimeMex.js.map