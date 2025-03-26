"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeZoneRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const TimeZone_1 = require("./TimeZone");
/**
 * Request builder class for operations supported on the {@link TimeZone} entity.
 */
class TimeZoneRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TimeZone` entity based on its keys.
     * @param effectiveStartDate Key property. See {@link TimeZone.effectiveStartDate}.
     * @param externalCode Key property. See {@link TimeZone.externalCode}.
     * @returns A request builder for creating requests to retrieve one `TimeZone` entity based on its keys.
     */
    getByKey(effectiveStartDate, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            effectiveStartDate: effectiveStartDate,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `TimeZone` entities.
     * @returns A request builder for creating requests to retrieve all `TimeZone` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `TimeZone` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TimeZone`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `TimeZone`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TimeZone`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(effectiveStartDateOrEntity, externalCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, effectiveStartDateOrEntity instanceof TimeZone_1.TimeZone
            ? effectiveStartDateOrEntity
            : {
                effectiveStartDate: effectiveStartDateOrEntity,
                externalCode: externalCode
            });
    }
}
exports.TimeZoneRequestBuilder = TimeZoneRequestBuilder;
//# sourceMappingURL=TimeZoneRequestBuilder.js.map