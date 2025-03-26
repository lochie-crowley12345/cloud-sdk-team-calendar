"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeAccountType_1RequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link TimeAccountType_1} entity.
 */
class TimeAccountType_1RequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TimeAccountType_1` entity based on its keys.
     * @param externalCode Key property. See {@link TimeAccountType_1.externalCode}.
     * @returns A request builder for creating requests to retrieve one `TimeAccountType_1` entity based on its keys.
     */
    getByKey(externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `TimeAccountType_1` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountType_1` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.TimeAccountType_1RequestBuilder = TimeAccountType_1RequestBuilder;
//# sourceMappingURL=TimeAccountType_1RequestBuilder.js.map