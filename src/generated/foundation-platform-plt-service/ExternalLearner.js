"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalLearner = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "ExternalLearner" of service "FoundationPlatformPLT".
 */
class ExternalLearner extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.ExternalLearner = ExternalLearner;
/**
 * Technical entity name for ExternalLearner.
 */
ExternalLearner._entityName = 'ExternalLearner';
/**
 * Default url path for the according service.
 */
ExternalLearner._defaultServicePath = '/odata/v2';
/**
 * All key fields of the ExternalLearner entity
 */
ExternalLearner._keys = ['userId'];
//# sourceMappingURL=ExternalLearner.js.map