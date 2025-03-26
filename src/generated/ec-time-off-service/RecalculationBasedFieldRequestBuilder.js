"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecalculationBasedFieldRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link RecalculationBasedField} entity.
 */
class RecalculationBasedFieldRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `RecalculationBasedField` entity based on its keys.
     * @param timeAccountTypeExternalCode Key property. See {@link RecalculationBasedField.timeAccountTypeExternalCode}.
     * @param recalcField Key property. See {@link RecalculationBasedField.recalcField}.
     * @returns A request builder for creating requests to retrieve one `RecalculationBasedField` entity based on its keys.
     */
    getByKey(timeAccountTypeExternalCode, recalcField) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            TimeAccountType_externalCode: timeAccountTypeExternalCode,
            recalcField: recalcField
        });
    }
    /**
     * Returns a request builder for querying all `RecalculationBasedField` entities.
     * @returns A request builder for creating requests to retrieve all `RecalculationBasedField` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.RecalculationBasedFieldRequestBuilder = RecalculationBasedFieldRequestBuilder;
//# sourceMappingURL=RecalculationBasedFieldRequestBuilder.js.map