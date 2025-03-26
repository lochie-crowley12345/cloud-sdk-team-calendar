"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompetencyRatingRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const CompetencyRating_1 = require("./CompetencyRating");
/**
 * Request builder class for operations supported on the {@link CompetencyRating} entity.
 */
class CompetencyRatingRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `CompetencyRating` entity based on its keys.
     * @param id Key property. See {@link CompetencyRating.id}.
     * @returns A request builder for creating requests to retrieve one `CompetencyRating` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            id: id
        });
    }
    /**
     * Returns a request builder for querying all `CompetencyRating` entities.
     * @returns A request builder for creating requests to retrieve all `CompetencyRating` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `CompetencyRating` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CompetencyRating`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `CompetencyRating`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CompetencyRating`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof CompetencyRating_1.CompetencyRating ? idOrEntity : { id: idOrEntity });
    }
}
exports.CompetencyRatingRequestBuilder = CompetencyRatingRequestBuilder;
//# sourceMappingURL=CompetencyRatingRequestBuilder.js.map