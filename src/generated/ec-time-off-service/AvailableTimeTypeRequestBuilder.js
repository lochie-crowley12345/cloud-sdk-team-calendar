"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailableTimeTypeRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link AvailableTimeType} entity.
 */
class AvailableTimeTypeRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `AvailableTimeType` entity based on its keys.
     * @param timeTypeProfileExternalCode Key property. See {@link AvailableTimeType.timeTypeProfileExternalCode}.
     * @param timeTypeProfileMdfSystemEffectiveStartDate Key property. See {@link AvailableTimeType.timeTypeProfileMdfSystemEffectiveStartDate}.
     * @param externalCode Key property. See {@link AvailableTimeType.externalCode}.
     * @returns A request builder for creating requests to retrieve one `AvailableTimeType` entity based on its keys.
     */
    getByKey(timeTypeProfileExternalCode, timeTypeProfileMdfSystemEffectiveStartDate, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            TimeTypeProfile_externalCode: timeTypeProfileExternalCode,
            TimeTypeProfile_mdfSystemEffectiveStartDate: timeTypeProfileMdfSystemEffectiveStartDate,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `AvailableTimeType` entities.
     * @returns A request builder for creating requests to retrieve all `AvailableTimeType` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.AvailableTimeTypeRequestBuilder = AvailableTimeTypeRequestBuilder;
//# sourceMappingURL=AvailableTimeTypeRequestBuilder.js.map