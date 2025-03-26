"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Currency_1 = require("./Currency");
/**
 * Request builder class for operations supported on the {@link Currency} entity.
 */
class CurrencyRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `Currency` entity based on its keys.
     * @param code Key property. See {@link Currency.code}.
     * @param effectiveStartDate Key property. See {@link Currency.effectiveStartDate}.
     * @returns A request builder for creating requests to retrieve one `Currency` entity based on its keys.
     */
    getByKey(code, effectiveStartDate) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            code: code,
            effectiveStartDate: effectiveStartDate
        });
    }
    /**
     * Returns a request builder for querying all `Currency` entities.
     * @returns A request builder for creating requests to retrieve all `Currency` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Currency` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Currency`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `Currency`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Currency`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(codeOrEntity, effectiveStartDate) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, codeOrEntity instanceof Currency_1.Currency
            ? codeOrEntity
            : {
                code: codeOrEntity,
                effectiveStartDate: effectiveStartDate
            });
    }
}
exports.CurrencyRequestBuilder = CurrencyRequestBuilder;
//# sourceMappingURL=CurrencyRequestBuilder.js.map