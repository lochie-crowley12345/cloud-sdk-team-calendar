"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Photo = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Photo" of service "FoundationPlatformPLT".
 */
class Photo extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.Photo = Photo;
/**
 * Technical entity name for Photo.
 */
Photo._entityName = 'Photo';
/**
 * Default url path for the according service.
 */
Photo._defaultServicePath = '/odata/v2';
/**
 * All key fields of the Photo entity
 */
Photo._keys = ['photoType', 'userId'];
//# sourceMappingURL=Photo.js.map