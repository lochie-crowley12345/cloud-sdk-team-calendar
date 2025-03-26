"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamGoalOwnerRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const TeamGoalOwner_1 = require("./TeamGoalOwner");
/**
 * Request builder class for operations supported on the {@link TeamGoalOwner} entity.
 */
class TeamGoalOwnerRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TeamGoalOwner` entity based on its keys.
     * @param externalCode Key property. See {@link TeamGoalOwner.externalCode}.
     * @returns A request builder for creating requests to retrieve one `TeamGoalOwner` entity based on its keys.
     */
    getByKey(externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `TeamGoalOwner` entities.
     * @returns A request builder for creating requests to retrieve all `TeamGoalOwner` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `TeamGoalOwner` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TeamGoalOwner`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `TeamGoalOwner`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TeamGoalOwner`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(externalCodeOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, externalCodeOrEntity instanceof TeamGoalOwner_1.TeamGoalOwner
            ? externalCodeOrEntity
            : { externalCode: externalCodeOrEntity });
    }
}
exports.TeamGoalOwnerRequestBuilder = TeamGoalOwnerRequestBuilder;
//# sourceMappingURL=TeamGoalOwnerRequestBuilder.js.map