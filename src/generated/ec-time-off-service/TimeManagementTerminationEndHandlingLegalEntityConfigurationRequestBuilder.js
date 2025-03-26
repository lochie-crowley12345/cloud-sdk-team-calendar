"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeManagementTerminationEndHandlingLegalEntityConfigurationRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link TimeManagementTerminationEndHandlingLegalEntityConfiguration} entity.
 */
class TimeManagementTerminationEndHandlingLegalEntityConfigurationRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TimeManagementTerminationEndHandlingLegalEntityConfiguration` entity based on its keys.
     * @param timeManagementTerminationEndHandlingConfigurationExternalCode Key property. See {@link TimeManagementTerminationEndHandlingLegalEntityConfiguration.timeManagementTerminationEndHandlingConfigurationExternalCode}.
     * @param externalCode Key property. See {@link TimeManagementTerminationEndHandlingLegalEntityConfiguration.externalCode}.
     * @returns A request builder for creating requests to retrieve one `TimeManagementTerminationEndHandlingLegalEntityConfiguration` entity based on its keys.
     */
    getByKey(timeManagementTerminationEndHandlingConfigurationExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            TimeManagementTerminationEndHandlingConfiguration_externalCode: timeManagementTerminationEndHandlingConfigurationExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `TimeManagementTerminationEndHandlingLegalEntityConfiguration` entities.
     * @returns A request builder for creating requests to retrieve all `TimeManagementTerminationEndHandlingLegalEntityConfiguration` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.TimeManagementTerminationEndHandlingLegalEntityConfigurationRequestBuilder = TimeManagementTerminationEndHandlingLegalEntityConfigurationRequestBuilder;
//# sourceMappingURL=TimeManagementTerminationEndHandlingLegalEntityConfigurationRequestBuilder.js.map