"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeAccountTypeAusRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link TimeAccountTypeAus} entity.
 */
class TimeAccountTypeAusRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TimeAccountTypeAus` entity based on its keys.
     * @param timeAccountTypeExternalCode Key property. See {@link TimeAccountTypeAus.timeAccountTypeExternalCode}.
     * @param externalCode Key property. See {@link TimeAccountTypeAus.externalCode}.
     * @returns A request builder for creating requests to retrieve one `TimeAccountTypeAus` entity based on its keys.
     */
    getByKey(timeAccountTypeExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            TimeAccountType_externalCode: timeAccountTypeExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `TimeAccountTypeAus` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountTypeAus` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.TimeAccountTypeAusRequestBuilder = TimeAccountTypeAusRequestBuilder;
//# sourceMappingURL=TimeAccountTypeAusRequestBuilder.js.map