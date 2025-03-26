"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PicklistLabelRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link PicklistLabel} entity.
 */
class PicklistLabelRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `PicklistLabel` entity based on its keys.
     * @param locale Key property. See {@link PicklistLabel.locale}.
     * @param optionId Key property. See {@link PicklistLabel.optionId}.
     * @returns A request builder for creating requests to retrieve one `PicklistLabel` entity based on its keys.
     */
    getByKey(locale, optionId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            locale: locale,
            optionId: optionId
        });
    }
    /**
     * Returns a request builder for querying all `PicklistLabel` entities.
     * @returns A request builder for creating requests to retrieve all `PicklistLabel` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `PicklistLabel` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PicklistLabel`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `PicklistLabel`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PicklistLabel`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.PicklistLabelRequestBuilder = PicklistLabelRequestBuilder;
//# sourceMappingURL=PicklistLabelRequestBuilder.js.map