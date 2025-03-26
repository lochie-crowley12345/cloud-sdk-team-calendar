"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picklist = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Picklist" of service "FoundationPlatformPLT".
 */
class Picklist extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.Picklist = Picklist;
/**
 * Technical entity name for Picklist.
 */
Picklist._entityName = 'Picklist';
/**
 * Default url path for the according service.
 */
Picklist._defaultServicePath = '/odata/v2';
/**
 * All key fields of the Picklist entity
 */
Picklist._keys = ['picklistId'];
//# sourceMappingURL=Picklist.js.map