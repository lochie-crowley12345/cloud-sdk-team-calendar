"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Photo_1 = require("./Photo");
const PhotoRequestBuilder_1 = require("./PhotoRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class PhotoApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Photo_1.Photo;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new PhotoRequestBuilder_1.PhotoRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Photo_1.Photo, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link height} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HEIGHT: fieldBuilder.buildEdmTypeField('height', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link lastModified} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_MODIFIED: fieldBuilder.buildEdmTypeField('lastModified', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link lastModifiedDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField('lastModifiedDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link lastModifiedWithTz} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_MODIFIED_WITH_TZ: fieldBuilder.buildEdmTypeField('lastModifiedWithTZ', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link mimeType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MIME_TYPE: fieldBuilder.buildEdmTypeField('mimeType', 'Edm.String', true),
                /**
                 * Static representation of the {@link photo} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHOTO: fieldBuilder.buildEdmTypeField('photo', 'Edm.Binary', true),
                /**
                 * Static representation of the {@link photoId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHOTO_ID: fieldBuilder.buildEdmTypeField('photoId', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link photoName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHOTO_NAME: fieldBuilder.buildEdmTypeField('photoName', 'Edm.String', true),
                /**
                 * Static representation of the {@link photoType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHOTO_TYPE: fieldBuilder.buildEdmTypeField('photoType', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link userId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                USER_ID: fieldBuilder.buildEdmTypeField('userId', 'Edm.String', false),
                /**
                 * Static representation of the {@link width} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WIDTH: fieldBuilder.buildEdmTypeField('width', 'Edm.Int32', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Photo_1.Photo)
            };
        }
        return this._schema;
    }
}
exports.PhotoApi = PhotoApi;
//# sourceMappingURL=PhotoApi.js.map