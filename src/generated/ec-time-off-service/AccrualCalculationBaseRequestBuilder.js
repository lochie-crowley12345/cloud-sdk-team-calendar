"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccrualCalculationBaseRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const AccrualCalculationBase_1 = require("./AccrualCalculationBase");
/**
 * Request builder class for operations supported on the {@link AccrualCalculationBase} entity.
 */
class AccrualCalculationBaseRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `AccrualCalculationBase` entity based on its keys.
     * @param externalCode Key property. See {@link AccrualCalculationBase.externalCode}.
     * @returns A request builder for creating requests to retrieve one `AccrualCalculationBase` entity based on its keys.
     */
    getByKey(externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { externalCode: externalCode });
    }
    /**
     * Returns a request builder for querying all `AccrualCalculationBase` entities.
     * @returns A request builder for creating requests to retrieve all `AccrualCalculationBase` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `AccrualCalculationBase` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AccrualCalculationBase`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `AccrualCalculationBase`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AccrualCalculationBase`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(externalCodeOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, externalCodeOrEntity instanceof AccrualCalculationBase_1.AccrualCalculationBase
            ? externalCodeOrEntity
            : { externalCode: externalCodeOrEntity });
    }
}
exports.AccrualCalculationBaseRequestBuilder = AccrualCalculationBaseRequestBuilder;
//# sourceMappingURL=AccrualCalculationBaseRequestBuilder.js.map