"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftClassification = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "ShiftClassification" of service "ECTimeOff".
 */
class ShiftClassification extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.ShiftClassification = ShiftClassification;
/**
 * Technical entity name for ShiftClassification.
 */
ShiftClassification._entityName = 'ShiftClassification';
/**
 * Default url path for the according service.
 */
ShiftClassification._defaultServicePath = '/odata/v2';
/**
 * All key fields of the ShiftClassification entity
 */
ShiftClassification._keys = ['externalCode'];
//# sourceMappingURL=ShiftClassification.js.map