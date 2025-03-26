"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTypeCanRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link TimeTypeCan} entity.
 */
class TimeTypeCanRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TimeTypeCan` entity based on its keys.
     * @param timeTypeExternalCode Key property. See {@link TimeTypeCan.timeTypeExternalCode}.
     * @param externalCode Key property. See {@link TimeTypeCan.externalCode}.
     * @returns A request builder for creating requests to retrieve one `TimeTypeCan` entity based on its keys.
     */
    getByKey(timeTypeExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            TimeType_externalCode: timeTypeExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `TimeTypeCan` entities.
     * @returns A request builder for creating requests to retrieve all `TimeTypeCan` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.TimeTypeCanRequestBuilder = TimeTypeCanRequestBuilder;
//# sourceMappingURL=TimeTypeCanRequestBuilder.js.map