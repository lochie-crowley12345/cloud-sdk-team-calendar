"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeAccountDetail = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "TimeAccountDetail" of service "ECTimeOff".
 */
class TimeAccountDetail extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.TimeAccountDetail = TimeAccountDetail;
/**
 * Technical entity name for TimeAccountDetail.
 */
TimeAccountDetail._entityName = 'TimeAccountDetail';
/**
 * Default url path for the according service.
 */
TimeAccountDetail._defaultServicePath = '/odata/v2';
/**
 * All key fields of the TimeAccountDetail entity
 */
TimeAccountDetail._keys = ['TimeAccount_externalCode', 'externalCode'];
//# sourceMappingURL=TimeAccountDetail.js.map