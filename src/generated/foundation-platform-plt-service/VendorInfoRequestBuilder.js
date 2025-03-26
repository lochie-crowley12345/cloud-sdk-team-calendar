"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorInfoRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const VendorInfo_1 = require("./VendorInfo");
/**
 * Request builder class for operations supported on the {@link VendorInfo} entity.
 */
class VendorInfoRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `VendorInfo` entity based on its keys.
     * @param effectiveStartDate Key property. See {@link VendorInfo.effectiveStartDate}.
     * @param vendorCode Key property. See {@link VendorInfo.vendorCode}.
     * @returns A request builder for creating requests to retrieve one `VendorInfo` entity based on its keys.
     */
    getByKey(effectiveStartDate, vendorCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            effectiveStartDate: effectiveStartDate,
            vendorCode: vendorCode
        });
    }
    /**
     * Returns a request builder for querying all `VendorInfo` entities.
     * @returns A request builder for creating requests to retrieve all `VendorInfo` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `VendorInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `VendorInfo`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `VendorInfo`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `VendorInfo`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(effectiveStartDateOrEntity, vendorCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, effectiveStartDateOrEntity instanceof VendorInfo_1.VendorInfo
            ? effectiveStartDateOrEntity
            : {
                effectiveStartDate: effectiveStartDateOrEntity,
                vendorCode: vendorCode
            });
    }
}
exports.VendorInfoRequestBuilder = VendorInfoRequestBuilder;
//# sourceMappingURL=VendorInfoRequestBuilder.js.map