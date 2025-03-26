"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompetencyRatingApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const CompetencyRating_1 = require("./CompetencyRating");
const CompetencyRatingRequestBuilder_1 = require("./CompetencyRatingRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CompetencyRatingApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CompetencyRating_1.CompetencyRating;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new CompetencyRatingRequestBuilder_1.CompetencyRatingRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CompetencyRating_1.CompetencyRating, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link formContentId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FORM_CONTENT_ID: fieldBuilder.buildEdmTypeField('formContentId', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link formDataId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FORM_DATA_ID: fieldBuilder.buildEdmTypeField('formDataId', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link guid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GUID: fieldBuilder.buildEdmTypeField('guid', 'Edm.String', false),
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('id', 'Edm.Int64', false),
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
                 * Static representation of the {@link module} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MODULE: fieldBuilder.buildEdmTypeField('module', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link rater} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RATER: fieldBuilder.buildEdmTypeField('rater', 'Edm.String', true),
                /**
                 * Static representation of the {@link raterCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RATER_CATEGORY: fieldBuilder.buildEdmTypeField('raterCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link rating} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RATING: fieldBuilder.buildEdmTypeField('rating', 'Edm.Double', true),
                /**
                 * Static representation of the {@link scaleMax} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCALE_MAX: fieldBuilder.buildEdmTypeField('scaleMax', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link scaleMin} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCALE_MIN: fieldBuilder.buildEdmTypeField('scaleMin', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link source} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SOURCE: fieldBuilder.buildEdmTypeField('source', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link status} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATUS: fieldBuilder.buildEdmTypeField('status', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link type} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TYPE: fieldBuilder.buildEdmTypeField('type', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link userId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                USER_ID: fieldBuilder.buildEdmTypeField('userId', 'Edm.String', false),
                /**
                 * Static representation of the {@link validFrom} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALID_FROM: fieldBuilder.buildEdmTypeField('validFrom', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link validTo} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALID_TO: fieldBuilder.buildEdmTypeField('validTo', 'Edm.DateTime', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', CompetencyRating_1.CompetencyRating)
            };
        }
        return this._schema;
    }
}
exports.CompetencyRatingApi = CompetencyRatingApi;
//# sourceMappingURL=CompetencyRatingApi.js.map