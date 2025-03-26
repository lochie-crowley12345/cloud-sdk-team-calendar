"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkScheduleRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const WorkSchedule_1 = require("./WorkSchedule");
/**
 * Request builder class for operations supported on the {@link WorkSchedule} entity.
 */
class WorkScheduleRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `WorkSchedule` entity based on its keys.
     * @param externalCode Key property. See {@link WorkSchedule.externalCode}.
     * @returns A request builder for creating requests to retrieve one `WorkSchedule` entity based on its keys.
     */
    getByKey(externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `WorkSchedule` entities.
     * @returns A request builder for creating requests to retrieve all `WorkSchedule` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `WorkSchedule` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WorkSchedule`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `WorkSchedule`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WorkSchedule`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(externalCodeOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, externalCodeOrEntity instanceof WorkSchedule_1.WorkSchedule
            ? externalCodeOrEntity
            : { externalCode: externalCodeOrEntity });
    }
}
exports.WorkScheduleRequestBuilder = WorkScheduleRequestBuilder;
//# sourceMappingURL=WorkScheduleRequestBuilder.js.map