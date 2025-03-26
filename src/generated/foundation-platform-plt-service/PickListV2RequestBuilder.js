"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickListV2RequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const PickListV2_1 = require("./PickListV2");
/**
 * Request builder class for operations supported on the {@link PickListV2} entity.
 */
class PickListV2RequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `PickListV2` entity based on its keys.
     * @param effectiveStartDate Key property. See {@link PickListV2.effectiveStartDate}.
     * @param id Key property. See {@link PickListV2.id}.
     * @returns A request builder for creating requests to retrieve one `PickListV2` entity based on its keys.
     */
    getByKey(effectiveStartDate, id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            effectiveStartDate: effectiveStartDate,
            id: id
        });
    }
    /**
     * Returns a request builder for querying all `PickListV2` entities.
     * @returns A request builder for creating requests to retrieve all `PickListV2` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `PickListV2` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PickListV2`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `PickListV2`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PickListV2`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(effectiveStartDateOrEntity, id) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, effectiveStartDateOrEntity instanceof PickListV2_1.PickListV2
            ? effectiveStartDateOrEntity
            : {
                effectiveStartDate: effectiveStartDateOrEntity,
                id: id
            });
    }
}
exports.PickListV2RequestBuilder = PickListV2RequestBuilder;
//# sourceMappingURL=PickListV2RequestBuilder.js.map