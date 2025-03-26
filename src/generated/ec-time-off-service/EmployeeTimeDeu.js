"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimeDeu = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "EmployeeTimeDEU" of service "ECTimeOff".
 */
class EmployeeTimeDeu extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.EmployeeTimeDeu = EmployeeTimeDeu;
/**
 * Technical entity name for EmployeeTimeDeu.
 */
EmployeeTimeDeu._entityName = 'EmployeeTimeDEU';
/**
 * Default url path for the according service.
 */
EmployeeTimeDeu._defaultServicePath = '/odata/v2';
/**
 * All key fields of the EmployeeTimeDeu entity
 */
EmployeeTimeDeu._keys = ['EmployeeTime_externalCode', 'externalCode'];
//# sourceMappingURL=EmployeeTimeDeu.js.map