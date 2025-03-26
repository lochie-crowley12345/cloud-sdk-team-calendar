"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyConversionRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const CurrencyConversion_1 = require("./CurrencyConversion");
/**
 * Request builder class for operations supported on the {@link CurrencyConversion} entity.
 */
class CurrencyConversionRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `CurrencyConversion` entity based on its keys.
     * @param code Key property. See {@link CurrencyConversion.code}.
     * @param effectiveStartDate Key property. See {@link CurrencyConversion.effectiveStartDate}.
     * @returns A request builder for creating requests to retrieve one `CurrencyConversion` entity based on its keys.
     */
    getByKey(code, effectiveStartDate) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            code: code,
            effectiveStartDate: effectiveStartDate
        });
    }
    /**
     * Returns a request builder for querying all `CurrencyConversion` entities.
     * @returns A request builder for creating requests to retrieve all `CurrencyConversion` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `CurrencyConversion` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CurrencyConversion`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `CurrencyConversion`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CurrencyConversion`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(codeOrEntity, effectiveStartDate) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, codeOrEntity instanceof CurrencyConversion_1.CurrencyConversion
            ? codeOrEntity
            : {
                code: codeOrEntity,
                effectiveStartDate: effectiveStartDate
            });
    }
}
exports.CurrencyConversionRequestBuilder = CurrencyConversionRequestBuilder;
//# sourceMappingURL=CurrencyConversionRequestBuilder.js.map