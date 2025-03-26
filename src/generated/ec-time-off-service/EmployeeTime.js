"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTime = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "EmployeeTime" of service "ECTimeOff".
 */
class EmployeeTime extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.EmployeeTime = EmployeeTime;
/**
 * Technical entity name for EmployeeTime.
 */
EmployeeTime._entityName = 'EmployeeTime';
/**
 * Default url path for the according service.
 */
EmployeeTime._defaultServicePath = '/odata/v2';
/**
 * All key fields of the EmployeeTime entity
 */
EmployeeTime._keys = ['externalCode'];
//# sourceMappingURL=EmployeeTime.js.map