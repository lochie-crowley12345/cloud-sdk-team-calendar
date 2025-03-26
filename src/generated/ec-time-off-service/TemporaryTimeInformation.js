"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemporaryTimeInformation = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "TemporaryTimeInformation" of service "ECTimeOff".
 */
class TemporaryTimeInformation extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.TemporaryTimeInformation = TemporaryTimeInformation;
/**
 * Technical entity name for TemporaryTimeInformation.
 */
TemporaryTimeInformation._entityName = 'TemporaryTimeInformation';
/**
 * Default url path for the according service.
 */
TemporaryTimeInformation._defaultServicePath = '/odata/v2';
/**
 * All key fields of the TemporaryTimeInformation entity
 */
TemporaryTimeInformation._keys = ['externalCode'];
//# sourceMappingURL=TemporaryTimeInformation.js.map