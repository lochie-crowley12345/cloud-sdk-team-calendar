"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeManagementAlertMessageRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link TimeManagementAlertMessage} entity.
 */
class TimeManagementAlertMessageRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TimeManagementAlertMessage` entity based on its keys.
     * @param timeManagementAlertExternalCode Key property. See {@link TimeManagementAlertMessage.timeManagementAlertExternalCode}.
     * @param externalCode Key property. See {@link TimeManagementAlertMessage.externalCode}.
     * @returns A request builder for creating requests to retrieve one `TimeManagementAlertMessage` entity based on its keys.
     */
    getByKey(timeManagementAlertExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            TimeManagementAlert_externalCode: timeManagementAlertExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `TimeManagementAlertMessage` entities.
     * @returns A request builder for creating requests to retrieve all `TimeManagementAlertMessage` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.TimeManagementAlertMessageRequestBuilder = TimeManagementAlertMessageRequestBuilder;
//# sourceMappingURL=TimeManagementAlertMessageRequestBuilder.js.map