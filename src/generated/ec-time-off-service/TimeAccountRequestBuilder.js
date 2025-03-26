"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeAccountRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const TimeAccount_1 = require("./TimeAccount");
/**
 * Request builder class for operations supported on the {@link TimeAccount} entity.
 */
class TimeAccountRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TimeAccount` entity based on its keys.
     * @param externalCode Key property. See {@link TimeAccount.externalCode}.
     * @returns A request builder for creating requests to retrieve one `TimeAccount` entity based on its keys.
     */
    getByKey(externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `TimeAccount` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccount` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `TimeAccount` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TimeAccount`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `TimeAccount`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TimeAccount`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(externalCodeOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, externalCodeOrEntity instanceof TimeAccount_1.TimeAccount
            ? externalCodeOrEntity
            : { externalCode: externalCodeOrEntity });
    }
}
exports.TimeAccountRequestBuilder = TimeAccountRequestBuilder;
//# sourceMappingURL=TimeAccountRequestBuilder.js.map