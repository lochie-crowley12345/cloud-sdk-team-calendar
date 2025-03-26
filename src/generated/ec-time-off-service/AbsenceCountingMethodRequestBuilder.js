"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsenceCountingMethodRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link AbsenceCountingMethod} entity.
 */
class AbsenceCountingMethodRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `AbsenceCountingMethod` entity based on its keys.
     * @param externalCode Key property. See {@link AbsenceCountingMethod.externalCode}.
     * @returns A request builder for creating requests to retrieve one `AbsenceCountingMethod` entity based on its keys.
     */
    getByKey(externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { externalCode: externalCode });
    }
    /**
     * Returns a request builder for querying all `AbsenceCountingMethod` entities.
     * @returns A request builder for creating requests to retrieve all `AbsenceCountingMethod` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.AbsenceCountingMethodRequestBuilder = AbsenceCountingMethodRequestBuilder;
//# sourceMappingURL=AbsenceCountingMethodRequestBuilder.js.map