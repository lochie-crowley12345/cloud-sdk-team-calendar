"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PicklistLabel = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "PicklistLabel" of service "FoundationPlatformPLT".
 */
class PicklistLabel extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.PicklistLabel = PicklistLabel;
/**
 * Technical entity name for PicklistLabel.
 */
PicklistLabel._entityName = 'PicklistLabel';
/**
 * Default url path for the according service.
 */
PicklistLabel._defaultServicePath = '/odata/v2';
/**
 * All key fields of the PicklistLabel entity
 */
PicklistLabel._keys = ['locale', 'optionId'];
//# sourceMappingURL=PicklistLabel.js.map