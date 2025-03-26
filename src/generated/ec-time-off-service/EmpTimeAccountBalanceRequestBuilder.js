"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpTimeAccountBalanceRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link EmpTimeAccountBalance} entity.
 */
class EmpTimeAccountBalanceRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `EmpTimeAccountBalance` entity based on its keys.
     * @param timeAccount Key property. See {@link EmpTimeAccountBalance.timeAccount}.
     * @returns A request builder for creating requests to retrieve one `EmpTimeAccountBalance` entity based on its keys.
     */
    getByKey(timeAccount) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { timeAccount: timeAccount });
    }
    /**
     * Returns a request builder for querying all `EmpTimeAccountBalance` entities.
     * @returns A request builder for creating requests to retrieve all `EmpTimeAccountBalance` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.EmpTimeAccountBalanceRequestBuilder = EmpTimeAccountBalanceRequestBuilder;
//# sourceMappingURL=EmpTimeAccountBalanceRequestBuilder.js.map