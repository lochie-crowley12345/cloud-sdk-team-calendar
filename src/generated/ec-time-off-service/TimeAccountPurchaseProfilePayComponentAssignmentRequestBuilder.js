"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link TimeAccountPurchaseProfilePayComponentAssignment} entity.
 */
class TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TimeAccountPurchaseProfilePayComponentAssignment` entity based on its keys.
     * @param timeAccountPurchaseProfileExternalCode Key property. See {@link TimeAccountPurchaseProfilePayComponentAssignment.timeAccountPurchaseProfileExternalCode}.
     * @param payComponent Key property. See {@link TimeAccountPurchaseProfilePayComponentAssignment.payComponent}.
     * @returns A request builder for creating requests to retrieve one `TimeAccountPurchaseProfilePayComponentAssignment` entity based on its keys.
     */
    getByKey(timeAccountPurchaseProfileExternalCode, payComponent) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            TimeAccountPurchaseProfile_externalCode: timeAccountPurchaseProfileExternalCode,
            payComponent: payComponent
        });
    }
    /**
     * Returns a request builder for querying all `TimeAccountPurchaseProfilePayComponentAssignment` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountPurchaseProfilePayComponentAssignment` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder = TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder;
//# sourceMappingURL=TimeAccountPurchaseProfilePayComponentAssignmentRequestBuilder.js.map