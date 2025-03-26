"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimeCol = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "EmployeeTimeCOL" of service "ECTimeOff".
 */
class EmployeeTimeCol extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.EmployeeTimeCol = EmployeeTimeCol;
/**
 * Technical entity name for EmployeeTimeCol.
 */
EmployeeTimeCol._entityName = 'EmployeeTimeCOL';
/**
 * Default url path for the according service.
 */
EmployeeTimeCol._defaultServicePath = '/odata/v2';
/**
 * All key fields of the EmployeeTimeCol entity
 */
EmployeeTimeCol._keys = ['EmployeeTime_externalCode', 'externalCode'];
//# sourceMappingURL=EmployeeTimeCol.js.map