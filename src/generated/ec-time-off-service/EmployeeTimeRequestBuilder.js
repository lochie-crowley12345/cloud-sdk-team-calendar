"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimeRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const EmployeeTime_1 = require("./EmployeeTime");
/**
 * Request builder class for operations supported on the {@link EmployeeTime} entity.
 */
class EmployeeTimeRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `EmployeeTime` entity based on its keys.
     * @param externalCode Key property. See {@link EmployeeTime.externalCode}.
     * @returns A request builder for creating requests to retrieve one `EmployeeTime` entity based on its keys.
     */
    getByKey(externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `EmployeeTime` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTime` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `EmployeeTime` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeTime`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `EmployeeTime`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeTime`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(externalCodeOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, externalCodeOrEntity instanceof EmployeeTime_1.EmployeeTime
            ? externalCodeOrEntity
            : { externalCode: externalCodeOrEntity });
    }
}
exports.EmployeeTimeRequestBuilder = EmployeeTimeRequestBuilder;
//# sourceMappingURL=EmployeeTimeRequestBuilder.js.map