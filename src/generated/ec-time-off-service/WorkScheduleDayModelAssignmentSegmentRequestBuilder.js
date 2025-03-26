"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkScheduleDayModelAssignmentSegmentRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const WorkScheduleDayModelAssignmentSegment_1 = require("./WorkScheduleDayModelAssignmentSegment");
/**
 * Request builder class for operations supported on the {@link WorkScheduleDayModelAssignmentSegment} entity.
 */
class WorkScheduleDayModelAssignmentSegmentRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `WorkScheduleDayModelAssignmentSegment` entity based on its keys.
     * @param workScheduleDayModelAssignmentDay Key property. See {@link WorkScheduleDayModelAssignmentSegment.workScheduleDayModelAssignmentDay}.
     * @param workScheduleExternalCode Key property. See {@link WorkScheduleDayModelAssignmentSegment.workScheduleExternalCode}.
     * @param externalCode Key property. See {@link WorkScheduleDayModelAssignmentSegment.externalCode}.
     * @returns A request builder for creating requests to retrieve one `WorkScheduleDayModelAssignmentSegment` entity based on its keys.
     */
    getByKey(workScheduleDayModelAssignmentDay, workScheduleExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            WorkScheduleDayModelAssignment_day: workScheduleDayModelAssignmentDay,
            WorkSchedule_externalCode: workScheduleExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `WorkScheduleDayModelAssignmentSegment` entities.
     * @returns A request builder for creating requests to retrieve all `WorkScheduleDayModelAssignmentSegment` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `WorkScheduleDayModelAssignmentSegment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WorkScheduleDayModelAssignmentSegment`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `WorkScheduleDayModelAssignmentSegment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WorkScheduleDayModelAssignmentSegment`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(workScheduleDayModelAssignmentDayOrEntity, workScheduleExternalCode, externalCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, workScheduleDayModelAssignmentDayOrEntity instanceof
            WorkScheduleDayModelAssignmentSegment_1.WorkScheduleDayModelAssignmentSegment
            ? workScheduleDayModelAssignmentDayOrEntity
            : {
                WorkScheduleDayModelAssignment_day: workScheduleDayModelAssignmentDayOrEntity,
                WorkSchedule_externalCode: workScheduleExternalCode,
                externalCode: externalCode
            });
    }
}
exports.WorkScheduleDayModelAssignmentSegmentRequestBuilder = WorkScheduleDayModelAssignmentSegmentRequestBuilder;
//# sourceMappingURL=WorkScheduleDayModelAssignmentSegmentRequestBuilder.js.map