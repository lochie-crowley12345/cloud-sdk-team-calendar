"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Photo_1 = require("./Photo");
/**
 * Request builder class for operations supported on the {@link Photo} entity.
 */
class PhotoRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `Photo` entity based on its keys.
     * @param photoType Key property. See {@link Photo.photoType}.
     * @param userId Key property. See {@link Photo.userId}.
     * @returns A request builder for creating requests to retrieve one `Photo` entity based on its keys.
     */
    getByKey(photoType, userId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            photoType: photoType,
            userId: userId
        });
    }
    /**
     * Returns a request builder for querying all `Photo` entities.
     * @returns A request builder for creating requests to retrieve all `Photo` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Photo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Photo`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `Photo`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Photo`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(photoTypeOrEntity, userId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, photoTypeOrEntity instanceof Photo_1.Photo
            ? photoTypeOrEntity
            : {
                photoType: photoTypeOrEntity,
                userId: userId
            });
    }
}
exports.PhotoRequestBuilder = PhotoRequestBuilder;
//# sourceMappingURL=PhotoRequestBuilder.js.map