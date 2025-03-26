"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeAccountPurchaseProfileRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link TimeAccountPurchaseProfile} entity.
 */
class TimeAccountPurchaseProfileRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TimeAccountPurchaseProfile` entity based on its keys.
     * @param externalCode Key property. See {@link TimeAccountPurchaseProfile.externalCode}.
     * @returns A request builder for creating requests to retrieve one `TimeAccountPurchaseProfile` entity based on its keys.
     */
    getByKey(externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { externalCode: externalCode });
    }
    /**
     * Returns a request builder for querying all `TimeAccountPurchaseProfile` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountPurchaseProfile` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.TimeAccountPurchaseProfileRequestBuilder = TimeAccountPurchaseProfileRequestBuilder;
//# sourceMappingURL=TimeAccountPurchaseProfileRequestBuilder.js.map