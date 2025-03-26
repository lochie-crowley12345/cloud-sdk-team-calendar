"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTypeProfile = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "TimeTypeProfile" of service "ECTimeOff".
 */
class TimeTypeProfile extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.TimeTypeProfile = TimeTypeProfile;
/**
 * Technical entity name for TimeTypeProfile.
 */
TimeTypeProfile._entityName = 'TimeTypeProfile';
/**
 * Default url path for the according service.
 */
TimeTypeProfile._defaultServicePath = '/odata/v2';
/**
 * All key fields of the TimeTypeProfile entity
 */
TimeTypeProfile._keys = ['externalCode', 'mdfSystemEffectiveStartDate'];
//# sourceMappingURL=TimeTypeProfile.js.map