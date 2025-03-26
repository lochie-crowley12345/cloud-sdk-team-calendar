"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkScheduleDayRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const WorkScheduleDay_1 = require("./WorkScheduleDay");
/**
 * Request builder class for operations supported on the {@link WorkScheduleDay} entity.
 */
class WorkScheduleDayRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `WorkScheduleDay` entity based on its keys.
     * @param workScheduleExternalCode Key property. See {@link WorkScheduleDay.workScheduleExternalCode}.
     * @param day Key property. See {@link WorkScheduleDay.day}.
     * @returns A request builder for creating requests to retrieve one `WorkScheduleDay` entity based on its keys.
     */
    getByKey(workScheduleExternalCode, day) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            WorkSchedule_externalCode: workScheduleExternalCode,
            day: day
        });
    }
    /**
     * Returns a request builder for querying all `WorkScheduleDay` entities.
     * @returns A request builder for creating requests to retrieve all `WorkScheduleDay` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `WorkScheduleDay` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WorkScheduleDay`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `WorkScheduleDay`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WorkScheduleDay`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(workScheduleExternalCodeOrEntity, day) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, workScheduleExternalCodeOrEntity instanceof WorkScheduleDay_1.WorkScheduleDay
            ? workScheduleExternalCodeOrEntity
            : {
                WorkSchedule_externalCode: workScheduleExternalCodeOrEntity,
                day: day
            });
    }
}
exports.WorkScheduleDayRequestBuilder = WorkScheduleDayRequestBuilder;
//# sourceMappingURL=WorkScheduleDayRequestBuilder.js.map