"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickListValueV2RequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const PickListValueV2_1 = require("./PickListValueV2");
/**
 * Request builder class for operations supported on the {@link PickListValueV2} entity.
 */
class PickListValueV2RequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `PickListValueV2` entity based on its keys.
     * @param pickListV2EffectiveStartDate Key property. See {@link PickListValueV2.pickListV2EffectiveStartDate}.
     * @param pickListV2Id Key property. See {@link PickListValueV2.pickListV2Id}.
     * @param externalCode Key property. See {@link PickListValueV2.externalCode}.
     * @returns A request builder for creating requests to retrieve one `PickListValueV2` entity based on its keys.
     */
    getByKey(pickListV2EffectiveStartDate, pickListV2Id, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            PickListV2_effectiveStartDate: pickListV2EffectiveStartDate,
            PickListV2_id: pickListV2Id,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `PickListValueV2` entities.
     * @returns A request builder for creating requests to retrieve all `PickListValueV2` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `PickListValueV2` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PickListValueV2`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `PickListValueV2`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PickListValueV2`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(pickListV2EffectiveStartDateOrEntity, pickListV2Id, externalCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, pickListV2EffectiveStartDateOrEntity instanceof PickListValueV2_1.PickListValueV2
            ? pickListV2EffectiveStartDateOrEntity
            : {
                PickListV2_effectiveStartDate: pickListV2EffectiveStartDateOrEntity,
                PickListV2_id: pickListV2Id,
                externalCode: externalCode
            });
    }
}
exports.PickListValueV2RequestBuilder = PickListValueV2RequestBuilder;
//# sourceMappingURL=PickListValueV2RequestBuilder.js.map