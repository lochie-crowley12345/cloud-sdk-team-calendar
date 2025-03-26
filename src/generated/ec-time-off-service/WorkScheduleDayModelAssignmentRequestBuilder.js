"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkScheduleDayModelAssignmentRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const WorkScheduleDayModelAssignment_1 = require("./WorkScheduleDayModelAssignment");
/**
 * Request builder class for operations supported on the {@link WorkScheduleDayModelAssignment} entity.
 */
class WorkScheduleDayModelAssignmentRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `WorkScheduleDayModelAssignment` entity based on its keys.
     * @param workScheduleExternalCode Key property. See {@link WorkScheduleDayModelAssignment.workScheduleExternalCode}.
     * @param day Key property. See {@link WorkScheduleDayModelAssignment.day}.
     * @returns A request builder for creating requests to retrieve one `WorkScheduleDayModelAssignment` entity based on its keys.
     */
    getByKey(workScheduleExternalCode, day) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            WorkSchedule_externalCode: workScheduleExternalCode,
            day: day
        });
    }
    /**
     * Returns a request builder for querying all `WorkScheduleDayModelAssignment` entities.
     * @returns A request builder for creating requests to retrieve all `WorkScheduleDayModelAssignment` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `WorkScheduleDayModelAssignment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WorkScheduleDayModelAssignment`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `WorkScheduleDayModelAssignment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WorkScheduleDayModelAssignment`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(workScheduleExternalCodeOrEntity, day) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, workScheduleExternalCodeOrEntity instanceof WorkScheduleDayModelAssignment_1.WorkScheduleDayModelAssignment
            ? workScheduleExternalCodeOrEntity
            : {
                WorkSchedule_externalCode: workScheduleExternalCodeOrEntity,
                day: day
            });
    }
}
exports.WorkScheduleDayModelAssignmentRequestBuilder = WorkScheduleDayModelAssignmentRequestBuilder;
//# sourceMappingURL=WorkScheduleDayModelAssignmentRequestBuilder.js.map