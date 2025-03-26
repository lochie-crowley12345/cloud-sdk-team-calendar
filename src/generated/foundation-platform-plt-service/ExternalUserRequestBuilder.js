"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalUserRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link ExternalUser} entity.
 */
class ExternalUserRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `ExternalUser` entity based on its keys.
     * @param userId Key property. See {@link ExternalUser.userId}.
     * @returns A request builder for creating requests to retrieve one `ExternalUser` entity based on its keys.
     */
    getByKey(userId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            userId: userId
        });
    }
    /**
     * Returns a request builder for querying all `ExternalUser` entities.
     * @returns A request builder for creating requests to retrieve all `ExternalUser` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ExternalUser` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExternalUser`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
}
exports.ExternalUserRequestBuilder = ExternalUserRequestBuilder;
//# sourceMappingURL=ExternalUserRequestBuilder.js.map