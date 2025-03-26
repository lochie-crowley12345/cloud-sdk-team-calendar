"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PicklistOptionRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link PicklistOption} entity.
 */
class PicklistOptionRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `PicklistOption` entity based on its keys.
     * @param id Key property. See {@link PicklistOption.id}.
     * @returns A request builder for creating requests to retrieve one `PicklistOption` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            id: id
        });
    }
    /**
     * Returns a request builder for querying all `PicklistOption` entities.
     * @returns A request builder for creating requests to retrieve all `PicklistOption` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `PicklistOption` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PicklistOption`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `PicklistOption`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PicklistOption`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.PicklistOptionRequestBuilder = PicklistOptionRequestBuilder;
//# sourceMappingURL=PicklistOptionRequestBuilder.js.map