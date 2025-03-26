"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Attachment" of service "FoundationPlatformPLT".
 */
class Attachment extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.Attachment = Attachment;
/**
 * Technical entity name for Attachment.
 */
Attachment._entityName = 'Attachment';
/**
 * Default url path for the according service.
 */
Attachment._defaultServicePath = '/odata/v2';
/**
 * All key fields of the Attachment entity
 */
Attachment._keys = ['attachmentId'];
//# sourceMappingURL=Attachment.js.map