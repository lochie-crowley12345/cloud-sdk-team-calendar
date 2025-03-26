"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkOrderRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const WorkOrder_1 = require("./WorkOrder");
/**
 * Request builder class for operations supported on the {@link WorkOrder} entity.
 */
class WorkOrderRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `WorkOrder` entity based on its keys.
     * @param effectiveStartDate Key property. See {@link WorkOrder.effectiveStartDate}.
     * @param userSysId Key property. See {@link WorkOrder.userSysId}.
     * @returns A request builder for creating requests to retrieve one `WorkOrder` entity based on its keys.
     */
    getByKey(effectiveStartDate, userSysId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            effectiveStartDate: effectiveStartDate,
            userSysId: userSysId
        });
    }
    /**
     * Returns a request builder for querying all `WorkOrder` entities.
     * @returns A request builder for creating requests to retrieve all `WorkOrder` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `WorkOrder` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WorkOrder`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `WorkOrder`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WorkOrder`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(effectiveStartDateOrEntity, userSysId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, effectiveStartDateOrEntity instanceof WorkOrder_1.WorkOrder
            ? effectiveStartDateOrEntity
            : {
                effectiveStartDate: effectiveStartDateOrEntity,
                userSysId: userSysId
            });
    }
}
exports.WorkOrderRequestBuilder = WorkOrderRequestBuilder;
//# sourceMappingURL=WorkOrderRequestBuilder.js.map