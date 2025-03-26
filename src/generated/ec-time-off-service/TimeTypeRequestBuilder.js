"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTypeRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link TimeType} entity.
 */
class TimeTypeRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TimeType` entity based on its keys.
     * @param externalCode Key property. See {@link TimeType.externalCode}.
     * @returns A request builder for creating requests to retrieve one `TimeType` entity based on its keys.
     */
    getByKey(externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `TimeType` entities.
     * @returns A request builder for creating requests to retrieve all `TimeType` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.TimeTypeRequestBuilder = TimeTypeRequestBuilder;
//# sourceMappingURL=TimeTypeRequestBuilder.js.map