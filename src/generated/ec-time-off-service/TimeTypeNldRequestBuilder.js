"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTypeNldRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link TimeTypeNld} entity.
 */
class TimeTypeNldRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TimeTypeNld` entity based on its keys.
     * @param timeTypeExternalCode Key property. See {@link TimeTypeNld.timeTypeExternalCode}.
     * @param externalCode Key property. See {@link TimeTypeNld.externalCode}.
     * @returns A request builder for creating requests to retrieve one `TimeTypeNld` entity based on its keys.
     */
    getByKey(timeTypeExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            TimeType_externalCode: timeTypeExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `TimeTypeNld` entities.
     * @returns A request builder for creating requests to retrieve all `TimeTypeNld` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.TimeTypeNldRequestBuilder = TimeTypeNldRequestBuilder;
//# sourceMappingURL=TimeTypeNldRequestBuilder.js.map