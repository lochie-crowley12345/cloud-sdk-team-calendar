"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalLearnerRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link ExternalLearner} entity.
 */
class ExternalLearnerRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `ExternalLearner` entity based on its keys.
     * @param userId Key property. See {@link ExternalLearner.userId}.
     * @returns A request builder for creating requests to retrieve one `ExternalLearner` entity based on its keys.
     */
    getByKey(userId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            userId: userId
        });
    }
    /**
     * Returns a request builder for querying all `ExternalLearner` entities.
     * @returns A request builder for creating requests to retrieve all `ExternalLearner` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ExternalLearner` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExternalLearner`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
}
exports.ExternalLearnerRequestBuilder = ExternalLearnerRequestBuilder;
//# sourceMappingURL=ExternalLearnerRequestBuilder.js.map