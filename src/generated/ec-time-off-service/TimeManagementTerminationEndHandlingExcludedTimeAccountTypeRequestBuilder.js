"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeManagementTerminationEndHandlingExcludedTimeAccountTypeRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link TimeManagementTerminationEndHandlingExcludedTimeAccountType} entity.
 */
class TimeManagementTerminationEndHandlingExcludedTimeAccountTypeRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TimeManagementTerminationEndHandlingExcludedTimeAccountType` entity based on its keys.
     * @param timeManagementTerminationEndHandlingExclusionExternalCode Key property. See {@link TimeManagementTerminationEndHandlingExcludedTimeAccountType.timeManagementTerminationEndHandlingExclusionExternalCode}.
     * @param externalCode Key property. See {@link TimeManagementTerminationEndHandlingExcludedTimeAccountType.externalCode}.
     * @returns A request builder for creating requests to retrieve one `TimeManagementTerminationEndHandlingExcludedTimeAccountType` entity based on its keys.
     */
    getByKey(timeManagementTerminationEndHandlingExclusionExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            TimeManagementTerminationEndHandlingExclusion_externalCode: timeManagementTerminationEndHandlingExclusionExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `TimeManagementTerminationEndHandlingExcludedTimeAccountType` entities.
     * @returns A request builder for creating requests to retrieve all `TimeManagementTerminationEndHandlingExcludedTimeAccountType` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.TimeManagementTerminationEndHandlingExcludedTimeAccountTypeRequestBuilder = TimeManagementTerminationEndHandlingExcludedTimeAccountTypeRequestBuilder;
//# sourceMappingURL=TimeManagementTerminationEndHandlingExcludedTimeAccountTypeRequestBuilder.js.map