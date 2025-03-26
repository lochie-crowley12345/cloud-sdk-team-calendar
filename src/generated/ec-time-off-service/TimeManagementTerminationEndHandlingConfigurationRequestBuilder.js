"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeManagementTerminationEndHandlingConfigurationRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link TimeManagementTerminationEndHandlingConfiguration} entity.
 */
class TimeManagementTerminationEndHandlingConfigurationRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TimeManagementTerminationEndHandlingConfiguration` entity based on its keys.
     * @param externalCode Key property. See {@link TimeManagementTerminationEndHandlingConfiguration.externalCode}.
     * @returns A request builder for creating requests to retrieve one `TimeManagementTerminationEndHandlingConfiguration` entity based on its keys.
     */
    getByKey(externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { externalCode: externalCode });
    }
    /**
     * Returns a request builder for querying all `TimeManagementTerminationEndHandlingConfiguration` entities.
     * @returns A request builder for creating requests to retrieve all `TimeManagementTerminationEndHandlingConfiguration` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.TimeManagementTerminationEndHandlingConfigurationRequestBuilder = TimeManagementTerminationEndHandlingConfigurationRequestBuilder;
//# sourceMappingURL=TimeManagementTerminationEndHandlingConfigurationRequestBuilder.js.map