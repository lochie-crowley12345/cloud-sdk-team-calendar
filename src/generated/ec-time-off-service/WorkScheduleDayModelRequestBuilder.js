"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkScheduleDayModelRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const WorkScheduleDayModel_1 = require("./WorkScheduleDayModel");
/**
 * Request builder class for operations supported on the {@link WorkScheduleDayModel} entity.
 */
class WorkScheduleDayModelRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `WorkScheduleDayModel` entity based on its keys.
     * @param externalCode Key property. See {@link WorkScheduleDayModel.externalCode}.
     * @returns A request builder for creating requests to retrieve one `WorkScheduleDayModel` entity based on its keys.
     */
    getByKey(externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { externalCode: externalCode });
    }
    /**
     * Returns a request builder for querying all `WorkScheduleDayModel` entities.
     * @returns A request builder for creating requests to retrieve all `WorkScheduleDayModel` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `WorkScheduleDayModel` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WorkScheduleDayModel`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `WorkScheduleDayModel`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WorkScheduleDayModel`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(externalCodeOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, externalCodeOrEntity instanceof WorkScheduleDayModel_1.WorkScheduleDayModel
            ? externalCodeOrEntity
            : { externalCode: externalCodeOrEntity });
    }
}
exports.WorkScheduleDayModelRequestBuilder = WorkScheduleDayModelRequestBuilder;
//# sourceMappingURL=WorkScheduleDayModelRequestBuilder.js.map