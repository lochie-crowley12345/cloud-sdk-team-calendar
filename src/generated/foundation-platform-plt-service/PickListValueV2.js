"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickListValueV2 = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "PickListValueV2" of service "FoundationPlatformPLT".
 */
class PickListValueV2 extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.PickListValueV2 = PickListValueV2;
/**
 * Technical entity name for PickListValueV2.
 */
PickListValueV2._entityName = 'PickListValueV2';
/**
 * Default url path for the according service.
 */
PickListValueV2._defaultServicePath = '/odata/v2';
/**
 * All key fields of the PickListValueV2 entity
 */
PickListValueV2._keys = [
    'PickListV2_effectiveStartDate',
    'PickListV2_id',
    'externalCode'
];
//# sourceMappingURL=PickListValueV2.js.map