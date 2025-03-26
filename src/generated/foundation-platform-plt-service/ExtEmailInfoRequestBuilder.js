"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtEmailInfoRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link ExtEmailInfo} entity.
 */
class ExtEmailInfoRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `ExtEmailInfo` entity based on its keys.
     * @param emailInfoId Key property. See {@link ExtEmailInfo.emailInfoId}.
     * @returns A request builder for creating requests to retrieve one `ExtEmailInfo` entity based on its keys.
     */
    getByKey(emailInfoId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            emailInfoId: emailInfoId
        });
    }
    /**
     * Returns a request builder for querying all `ExtEmailInfo` entities.
     * @returns A request builder for creating requests to retrieve all `ExtEmailInfo` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ExtEmailInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExtEmailInfo`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
}
exports.ExtEmailInfoRequestBuilder = ExtEmailInfoRequestBuilder;
//# sourceMappingURL=ExtEmailInfoRequestBuilder.js.map