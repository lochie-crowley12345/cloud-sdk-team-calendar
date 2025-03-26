"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtAddressInfoRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link ExtAddressInfo} entity.
 */
class ExtAddressInfoRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `ExtAddressInfo` entity based on its keys.
     * @param addressId Key property. See {@link ExtAddressInfo.addressId}.
     * @returns A request builder for creating requests to retrieve one `ExtAddressInfo` entity based on its keys.
     */
    getByKey(addressId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            addressId: addressId
        });
    }
    /**
     * Returns a request builder for querying all `ExtAddressInfo` entities.
     * @returns A request builder for creating requests to retrieve all `ExtAddressInfo` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ExtAddressInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExtAddressInfo`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
}
exports.ExtAddressInfoRequestBuilder = ExtAddressInfoRequestBuilder;
//# sourceMappingURL=ExtAddressInfoRequestBuilder.js.map