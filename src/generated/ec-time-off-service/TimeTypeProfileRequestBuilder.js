"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTypeProfileRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link TimeTypeProfile} entity.
 */
class TimeTypeProfileRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TimeTypeProfile` entity based on its keys.
     * @param externalCode Key property. See {@link TimeTypeProfile.externalCode}.
     * @param mdfSystemEffectiveStartDate Key property. See {@link TimeTypeProfile.mdfSystemEffectiveStartDate}.
     * @returns A request builder for creating requests to retrieve one `TimeTypeProfile` entity based on its keys.
     */
    getByKey(externalCode, mdfSystemEffectiveStartDate) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            externalCode: externalCode,
            mdfSystemEffectiveStartDate: mdfSystemEffectiveStartDate
        });
    }
    /**
     * Returns a request builder for querying all `TimeTypeProfile` entities.
     * @returns A request builder for creating requests to retrieve all `TimeTypeProfile` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.TimeTypeProfileRequestBuilder = TimeTypeProfileRequestBuilder;
//# sourceMappingURL=TimeTypeProfileRequestBuilder.js.map