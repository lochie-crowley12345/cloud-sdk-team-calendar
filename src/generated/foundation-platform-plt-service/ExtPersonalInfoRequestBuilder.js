"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtPersonalInfoRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link ExtPersonalInfo} entity.
 */
class ExtPersonalInfoRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `ExtPersonalInfo` entity based on its keys.
     * @param personalInfoId Key property. See {@link ExtPersonalInfo.personalInfoId}.
     * @returns A request builder for creating requests to retrieve one `ExtPersonalInfo` entity based on its keys.
     */
    getByKey(personalInfoId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            personalInfoId: personalInfoId
        });
    }
    /**
     * Returns a request builder for querying all `ExtPersonalInfo` entities.
     * @returns A request builder for creating requests to retrieve all `ExtPersonalInfo` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ExtPersonalInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExtPersonalInfo`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
}
exports.ExtPersonalInfoRequestBuilder = ExtPersonalInfoRequestBuilder;
//# sourceMappingURL=ExtPersonalInfoRequestBuilder.js.map