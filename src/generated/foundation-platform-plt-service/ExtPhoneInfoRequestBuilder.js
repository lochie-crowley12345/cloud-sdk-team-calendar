"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtPhoneInfoRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link ExtPhoneInfo} entity.
 */
class ExtPhoneInfoRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `ExtPhoneInfo` entity based on its keys.
     * @param phoneInfoId Key property. See {@link ExtPhoneInfo.phoneInfoId}.
     * @returns A request builder for creating requests to retrieve one `ExtPhoneInfo` entity based on its keys.
     */
    getByKey(phoneInfoId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            phoneInfoId: phoneInfoId
        });
    }
    /**
     * Returns a request builder for querying all `ExtPhoneInfo` entities.
     * @returns A request builder for creating requests to retrieve all `ExtPhoneInfo` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ExtPhoneInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExtPhoneInfo`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
}
exports.ExtPhoneInfoRequestBuilder = ExtPhoneInfoRequestBuilder;
//# sourceMappingURL=ExtPhoneInfoRequestBuilder.js.map