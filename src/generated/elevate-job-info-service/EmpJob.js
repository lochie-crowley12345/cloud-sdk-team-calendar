"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpJob = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "EmpJob" of service "EmpJob".
 */
class EmpJob extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.EmpJob = EmpJob;
/**
 * Technical entity name for EmpJob.
 */
EmpJob._entityName = 'EmpJob';
/**
 * Default url path for the according service.
 */
EmpJob._defaultServicePath = '/odata/v2';
/**
 * All key fields of the EmpJob entity
 */
EmpJob._keys = ['seqNumber', 'startDate', 'userId'];
//# sourceMappingURL=EmpJob.js.map