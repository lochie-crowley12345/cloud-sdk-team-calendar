"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecalculationBasedField = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "RecalculationBasedField" of service "ECTimeOff".
 */
class RecalculationBasedField extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.RecalculationBasedField = RecalculationBasedField;
/**
 * Technical entity name for RecalculationBasedField.
 */
RecalculationBasedField._entityName = 'RecalculationBasedField';
/**
 * Default url path for the according service.
 */
RecalculationBasedField._defaultServicePath = '/odata/v2';
/**
 * All key fields of the RecalculationBasedField entity
 */
RecalculationBasedField._keys = ['TimeAccountType_externalCode', 'recalcField'];
//# sourceMappingURL=RecalculationBasedField.js.map