"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Attachment_1 = require("./Attachment");
/**
 * Request builder class for operations supported on the {@link Attachment} entity.
 */
class AttachmentRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `Attachment` entity based on its keys.
     * @param attachmentId Key property. See {@link Attachment.attachmentId}.
     * @returns A request builder for creating requests to retrieve one `Attachment` entity based on its keys.
     */
    getByKey(attachmentId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            attachmentId: attachmentId
        });
    }
    /**
     * Returns a request builder for querying all `Attachment` entities.
     * @returns A request builder for creating requests to retrieve all `Attachment` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Attachment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Attachment`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    delete(attachmentIdOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, attachmentIdOrEntity instanceof Attachment_1.Attachment
            ? attachmentIdOrEntity
            : { attachmentId: attachmentIdOrEntity });
    }
}
exports.AttachmentRequestBuilder = AttachmentRequestBuilder;
//# sourceMappingURL=AttachmentRequestBuilder.js.map