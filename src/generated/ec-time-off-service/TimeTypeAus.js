"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTypeAus = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "TimeTypeAUS" of service "ECTimeOff".
 */
class TimeTypeAus extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.TimeTypeAus = TimeTypeAus;
/**
 * Technical entity name for TimeTypeAus.
 */
TimeTypeAus._entityName = 'TimeTypeAUS';
/**
 * Default url path for the according service.
 */
TimeTypeAus._defaultServicePath = '/odata/v2';
/**
 * All key fields of the TimeTypeAus entity
 */
TimeTypeAus._keys = ['TimeType_externalCode', 'externalCode'];
//# sourceMappingURL=TimeTypeAus.js.map