/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { WorkScheduleDayModelSegment } from './WorkScheduleDayModelSegment';
/**
 * Request builder class for operations supported on the {@link WorkScheduleDayModelSegment} entity.
 */
export declare class WorkScheduleDayModelSegmentRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkScheduleDayModelSegment<T>, T> {
  /**
   * Returns a request builder for retrieving one `WorkScheduleDayModelSegment` entity based on its keys.
   * @param workScheduleDayModelExternalCode Key property. See {@link WorkScheduleDayModelSegment.workScheduleDayModelExternalCode}.
   * @param externalCode Key property. See {@link WorkScheduleDayModelSegment.externalCode}.
   * @returns A request builder for creating requests to retrieve one `WorkScheduleDayModelSegment` entity based on its keys.
   */
  getByKey(
    workScheduleDayModelExternalCode: DeserializedType<T, 'Edm.String'>,
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkScheduleDayModelSegment<T>, T>;
  /**
   * Returns a request builder for querying all `WorkScheduleDayModelSegment` entities.
   * @returns A request builder for creating requests to retrieve all `WorkScheduleDayModelSegment` entities.
   */
  getAll(): GetAllRequestBuilder<WorkScheduleDayModelSegment<T>, T>;
  /**
   * Returns a request builder for creating a `WorkScheduleDayModelSegment` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkScheduleDayModelSegment`.
   */
  create(
    entity: WorkScheduleDayModelSegment<T>
  ): CreateRequestBuilder<WorkScheduleDayModelSegment<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `WorkScheduleDayModelSegment`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkScheduleDayModelSegment`.
   */
  update(
    entity: WorkScheduleDayModelSegment<T>
  ): UpdateRequestBuilder<WorkScheduleDayModelSegment<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkScheduleDayModelSegment`.
   * @param workScheduleDayModelExternalCode Key property. See {@link WorkScheduleDayModelSegment.workScheduleDayModelExternalCode}.
   * @param externalCode Key property. See {@link WorkScheduleDayModelSegment.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `WorkScheduleDayModelSegment`.
   */
  delete(
    workScheduleDayModelExternalCode: string,
    externalCode: string
  ): DeleteRequestBuilder<WorkScheduleDayModelSegment<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkScheduleDayModelSegment`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkScheduleDayModelSegment` by taking the entity as a parameter.
   */
  delete(
    entity: WorkScheduleDayModelSegment<T>
  ): DeleteRequestBuilder<WorkScheduleDayModelSegment<T>, T>;
}
//# sourceMappingURL=WorkScheduleDayModelSegmentRequestBuilder.d.ts.map
