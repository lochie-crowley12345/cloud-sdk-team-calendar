"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPermissionsRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link UserPermissions} entity.
 */
class UserPermissionsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `UserPermissions` entity based on its keys.
     * @param userId Key property. See {@link UserPermissions.userId}.
     * @returns A request builder for creating requests to retrieve one `UserPermissions` entity based on its keys.
     */
    getByKey(userId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            userId: userId
        });
    }
    /**
     * Returns a request builder for querying all `UserPermissions` entities.
     * @returns A request builder for creating requests to retrieve all `UserPermissions` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.UserPermissionsRequestBuilder = UserPermissionsRequestBuilder;
//# sourceMappingURL=UserPermissionsRequestBuilder.js.map