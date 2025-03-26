"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeAccountPostingRule = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "TimeAccountPostingRule" of service "ECTimeOff".
 */
class TimeAccountPostingRule extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.TimeAccountPostingRule = TimeAccountPostingRule;
/**
 * Technical entity name for TimeAccountPostingRule.
 */
TimeAccountPostingRule._entityName = 'TimeAccountPostingRule';
/**
 * Default url path for the according service.
 */
TimeAccountPostingRule._defaultServicePath = '/odata/v2';
/**
 * All key fields of the TimeAccountPostingRule entity
 */
TimeAccountPostingRule._keys = ['TimeType_externalCode', 'externalCode'];
//# sourceMappingURL=TimeAccountPostingRule.js.map