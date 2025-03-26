"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalLearnerAddressInfoRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link ExternalLearnerAddressInfo} entity.
 */
class ExternalLearnerAddressInfoRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `ExternalLearnerAddressInfo` entity based on its keys.
     * @param itemId Key property. See {@link ExternalLearnerAddressInfo.itemId}.
     * @returns A request builder for creating requests to retrieve one `ExternalLearnerAddressInfo` entity based on its keys.
     */
    getByKey(itemId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { itemId: itemId });
    }
    /**
     * Returns a request builder for querying all `ExternalLearnerAddressInfo` entities.
     * @returns A request builder for creating requests to retrieve all `ExternalLearnerAddressInfo` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ExternalLearnerAddressInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExternalLearnerAddressInfo`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
}
exports.ExternalLearnerAddressInfoRequestBuilder = ExternalLearnerAddressInfoRequestBuilder;
//# sourceMappingURL=ExternalLearnerAddressInfoRequestBuilder.js.map