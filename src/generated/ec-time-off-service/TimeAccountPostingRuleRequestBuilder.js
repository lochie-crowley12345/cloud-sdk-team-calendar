"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeAccountPostingRuleRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link TimeAccountPostingRule} entity.
 */
class TimeAccountPostingRuleRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TimeAccountPostingRule` entity based on its keys.
     * @param timeTypeExternalCode Key property. See {@link TimeAccountPostingRule.timeTypeExternalCode}.
     * @param externalCode Key property. See {@link TimeAccountPostingRule.externalCode}.
     * @returns A request builder for creating requests to retrieve one `TimeAccountPostingRule` entity based on its keys.
     */
    getByKey(timeTypeExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            TimeType_externalCode: timeTypeExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `TimeAccountPostingRule` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountPostingRule` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.TimeAccountPostingRuleRequestBuilder = TimeAccountPostingRuleRequestBuilder;
//# sourceMappingURL=TimeAccountPostingRuleRequestBuilder.js.map