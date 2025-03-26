"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeAccountDetailRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const TimeAccountDetail_1 = require("./TimeAccountDetail");
/**
 * Request builder class for operations supported on the {@link TimeAccountDetail} entity.
 */
class TimeAccountDetailRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TimeAccountDetail` entity based on its keys.
     * @param timeAccountExternalCode Key property. See {@link TimeAccountDetail.timeAccountExternalCode}.
     * @param externalCode Key property. See {@link TimeAccountDetail.externalCode}.
     * @returns A request builder for creating requests to retrieve one `TimeAccountDetail` entity based on its keys.
     */
    getByKey(timeAccountExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            TimeAccount_externalCode: timeAccountExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `TimeAccountDetail` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountDetail` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `TimeAccountDetail` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TimeAccountDetail`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `TimeAccountDetail`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TimeAccountDetail`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(timeAccountExternalCodeOrEntity, externalCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, timeAccountExternalCodeOrEntity instanceof TimeAccountDetail_1.TimeAccountDetail
            ? timeAccountExternalCodeOrEntity
            : {
                TimeAccount_externalCode: timeAccountExternalCodeOrEntity,
                externalCode: externalCode
            });
    }
}
exports.TimeAccountDetailRequestBuilder = TimeAccountDetailRequestBuilder;
//# sourceMappingURL=TimeAccountDetailRequestBuilder.js.map