"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimeGroupItem = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "EmployeeTimeGroupItem" of service "ECTimeOff".
 */
class EmployeeTimeGroupItem extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.EmployeeTimeGroupItem = EmployeeTimeGroupItem;
/**
 * Technical entity name for EmployeeTimeGroupItem.
 */
EmployeeTimeGroupItem._entityName = 'EmployeeTimeGroupItem';
/**
 * Default url path for the according service.
 */
EmployeeTimeGroupItem._defaultServicePath = '/odata/v2';
/**
 * All key fields of the EmployeeTimeGroupItem entity
 */
EmployeeTimeGroupItem._keys = ['EmployeeTimeGroup_externalCode', 'externalCode'];
//# sourceMappingURL=EmployeeTimeGroupItem.js.map