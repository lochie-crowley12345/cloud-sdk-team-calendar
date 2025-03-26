"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailableTimeType = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "AvailableTimeType" of service "ECTimeOff".
 */
class AvailableTimeType extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.AvailableTimeType = AvailableTimeType;
/**
 * Technical entity name for AvailableTimeType.
 */
AvailableTimeType._entityName = 'AvailableTimeType';
/**
 * Default url path for the according service.
 */
AvailableTimeType._defaultServicePath = '/odata/v2';
/**
 * All key fields of the AvailableTimeType entity
 */
AvailableTimeType._keys = [
    'TimeTypeProfile_externalCode',
    'TimeTypeProfile_mdfSystemEffectiveStartDate',
    'externalCode'
];
//# sourceMappingURL=AvailableTimeType.js.map