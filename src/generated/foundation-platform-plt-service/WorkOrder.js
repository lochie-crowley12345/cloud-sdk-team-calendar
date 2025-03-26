"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkOrder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "WorkOrder" of service "FoundationPlatformPLT".
 */
class WorkOrder extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.WorkOrder = WorkOrder;
/**
 * Technical entity name for WorkOrder.
 */
WorkOrder._entityName = 'WorkOrder';
/**
 * Default url path for the according service.
 */
WorkOrder._defaultServicePath = '/odata/v2';
/**
 * All key fields of the WorkOrder entity
 */
WorkOrder._keys = ['effectiveStartDate', 'userSysId'];
//# sourceMappingURL=WorkOrder.js.map