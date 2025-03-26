"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeManagementTerminationEndHandlingExclusionRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link TimeManagementTerminationEndHandlingExclusion} entity.
 */
class TimeManagementTerminationEndHandlingExclusionRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TimeManagementTerminationEndHandlingExclusion` entity based on its keys.
     * @param externalCode Key property. See {@link TimeManagementTerminationEndHandlingExclusion.externalCode}.
     * @returns A request builder for creating requests to retrieve one `TimeManagementTerminationEndHandlingExclusion` entity based on its keys.
     */
    getByKey(externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { externalCode: externalCode });
    }
    /**
     * Returns a request builder for querying all `TimeManagementTerminationEndHandlingExclusion` entities.
     * @returns A request builder for creating requests to retrieve all `TimeManagementTerminationEndHandlingExclusion` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.TimeManagementTerminationEndHandlingExclusionRequestBuilder = TimeManagementTerminationEndHandlingExclusionRequestBuilder;
//# sourceMappingURL=TimeManagementTerminationEndHandlingExclusionRequestBuilder.js.map