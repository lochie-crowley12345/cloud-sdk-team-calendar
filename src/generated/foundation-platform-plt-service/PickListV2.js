"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickListV2 = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "PickListV2" of service "FoundationPlatformPLT".
 */
class PickListV2 extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.PickListV2 = PickListV2;
/**
 * Technical entity name for PickListV2.
 */
PickListV2._entityName = 'PickListV2';
/**
 * Default url path for the according service.
 */
PickListV2._defaultServicePath = '/odata/v2';
/**
 * All key fields of the PickListV2 entity
 */
PickListV2._keys = ['effectiveStartDate', 'id'];
//# sourceMappingURL=PickListV2.js.map