"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Country" of service "FoundationPlatformPLT".
 */
class Country extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.Country = Country;
/**
 * Technical entity name for Country.
 */
Country._entityName = 'Country';
/**
 * Default url path for the according service.
 */
Country._defaultServicePath = '/odata/v2';
/**
 * All key fields of the Country entity
 */
Country._keys = ['code', 'effectiveStartDate'];
//# sourceMappingURL=Country.js.map