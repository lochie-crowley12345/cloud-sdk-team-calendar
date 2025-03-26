"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkScheduleDayModelSegmentRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const WorkScheduleDayModelSegment_1 = require("./WorkScheduleDayModelSegment");
/**
 * Request builder class for operations supported on the {@link WorkScheduleDayModelSegment} entity.
 */
class WorkScheduleDayModelSegmentRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `WorkScheduleDayModelSegment` entity based on its keys.
     * @param workScheduleDayModelExternalCode Key property. See {@link WorkScheduleDayModelSegment.workScheduleDayModelExternalCode}.
     * @param externalCode Key property. See {@link WorkScheduleDayModelSegment.externalCode}.
     * @returns A request builder for creating requests to retrieve one `WorkScheduleDayModelSegment` entity based on its keys.
     */
    getByKey(workScheduleDayModelExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            WorkScheduleDayModel_externalCode: workScheduleDayModelExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `WorkScheduleDayModelSegment` entities.
     * @returns A request builder for creating requests to retrieve all `WorkScheduleDayModelSegment` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `WorkScheduleDayModelSegment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WorkScheduleDayModelSegment`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `WorkScheduleDayModelSegment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WorkScheduleDayModelSegment`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(workScheduleDayModelExternalCodeOrEntity, externalCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, workScheduleDayModelExternalCodeOrEntity instanceof
            WorkScheduleDayModelSegment_1.WorkScheduleDayModelSegment
            ? workScheduleDayModelExternalCodeOrEntity
            : {
                WorkScheduleDayModel_externalCode: workScheduleDayModelExternalCodeOrEntity,
                externalCode: externalCode
            });
    }
}
exports.WorkScheduleDayModelSegmentRequestBuilder = WorkScheduleDayModelSegmentRequestBuilder;
//# sourceMappingURL=WorkScheduleDayModelSegmentRequestBuilder.js.map