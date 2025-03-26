"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link User} entity.
 */
class UserRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `User` entity based on its keys.
     * @param userId Key property. See {@link User.userId}.
     * @returns A request builder for creating requests to retrieve one `User` entity based on its keys.
     */
    getByKey(userId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            userId: userId
        });
    }
    /**
     * Returns a request builder for querying all `User` entities.
     * @returns A request builder for creating requests to retrieve all `User` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `User` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `User`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `User`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `User`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.UserRequestBuilder = UserRequestBuilder;
//# sourceMappingURL=UserRequestBuilder.js.map