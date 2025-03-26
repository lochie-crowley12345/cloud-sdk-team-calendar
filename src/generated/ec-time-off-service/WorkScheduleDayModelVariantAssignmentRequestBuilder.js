"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkScheduleDayModelVariantAssignmentRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link WorkScheduleDayModelVariantAssignment} entity.
 */
class WorkScheduleDayModelVariantAssignmentRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `WorkScheduleDayModelVariantAssignment` entity based on its keys.
     * @param workScheduleDayModelExternalCode Key property. See {@link WorkScheduleDayModelVariantAssignment.workScheduleDayModelExternalCode}.
     * @param externalCode Key property. See {@link WorkScheduleDayModelVariantAssignment.externalCode}.
     * @returns A request builder for creating requests to retrieve one `WorkScheduleDayModelVariantAssignment` entity based on its keys.
     */
    getByKey(workScheduleDayModelExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            WorkScheduleDayModel_externalCode: workScheduleDayModelExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `WorkScheduleDayModelVariantAssignment` entities.
     * @returns A request builder for creating requests to retrieve all `WorkScheduleDayModelVariantAssignment` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.WorkScheduleDayModelVariantAssignmentRequestBuilder = WorkScheduleDayModelVariantAssignmentRequestBuilder;
//# sourceMappingURL=WorkScheduleDayModelVariantAssignmentRequestBuilder.js.map