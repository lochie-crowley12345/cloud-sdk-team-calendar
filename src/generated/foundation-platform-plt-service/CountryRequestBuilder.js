"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Country_1 = require("./Country");
/**
 * Request builder class for operations supported on the {@link Country} entity.
 */
class CountryRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `Country` entity based on its keys.
     * @param code Key property. See {@link Country.code}.
     * @param effectiveStartDate Key property. See {@link Country.effectiveStartDate}.
     * @returns A request builder for creating requests to retrieve one `Country` entity based on its keys.
     */
    getByKey(code, effectiveStartDate) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            code: code,
            effectiveStartDate: effectiveStartDate
        });
    }
    /**
     * Returns a request builder for querying all `Country` entities.
     * @returns A request builder for creating requests to retrieve all `Country` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Country` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Country`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `Country`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Country`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(codeOrEntity, effectiveStartDate) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, codeOrEntity instanceof Country_1.Country
            ? codeOrEntity
            : {
                code: codeOrEntity,
                effectiveStartDate: effectiveStartDate
            });
    }
}
exports.CountryRequestBuilder = CountryRequestBuilder;
//# sourceMappingURL=CountryRequestBuilder.js.map