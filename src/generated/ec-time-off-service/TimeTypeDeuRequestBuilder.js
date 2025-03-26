"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTypeDeuRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link TimeTypeDeu} entity.
 */
class TimeTypeDeuRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TimeTypeDeu` entity based on its keys.
     * @param timeTypeExternalCode Key property. See {@link TimeTypeDeu.timeTypeExternalCode}.
     * @param externalCode Key property. See {@link TimeTypeDeu.externalCode}.
     * @returns A request builder for creating requests to retrieve one `TimeTypeDeu` entity based on its keys.
     */
    getByKey(timeTypeExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            TimeType_externalCode: timeTypeExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `TimeTypeDeu` entities.
     * @returns A request builder for creating requests to retrieve all `TimeTypeDeu` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.TimeTypeDeuRequestBuilder = TimeTypeDeuRequestBuilder;
//# sourceMappingURL=TimeTypeDeuRequestBuilder.js.map