"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeManagementTerminationEndHandlingExcludedEventReasonRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link TimeManagementTerminationEndHandlingExcludedEventReason} entity.
 */
class TimeManagementTerminationEndHandlingExcludedEventReasonRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TimeManagementTerminationEndHandlingExcludedEventReason` entity based on its keys.
     * @param timeManagementTerminationEndHandlingExclusionExternalCode Key property. See {@link TimeManagementTerminationEndHandlingExcludedEventReason.timeManagementTerminationEndHandlingExclusionExternalCode}.
     * @param externalCode Key property. See {@link TimeManagementTerminationEndHandlingExcludedEventReason.externalCode}.
     * @returns A request builder for creating requests to retrieve one `TimeManagementTerminationEndHandlingExcludedEventReason` entity based on its keys.
     */
    getByKey(timeManagementTerminationEndHandlingExclusionExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            TimeManagementTerminationEndHandlingExclusion_externalCode: timeManagementTerminationEndHandlingExclusionExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `TimeManagementTerminationEndHandlingExcludedEventReason` entities.
     * @returns A request builder for creating requests to retrieve all `TimeManagementTerminationEndHandlingExcludedEventReason` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.TimeManagementTerminationEndHandlingExcludedEventReasonRequestBuilder = TimeManagementTerminationEndHandlingExcludedEventReasonRequestBuilder;
//# sourceMappingURL=TimeManagementTerminationEndHandlingExcludedEventReasonRequestBuilder.js.map