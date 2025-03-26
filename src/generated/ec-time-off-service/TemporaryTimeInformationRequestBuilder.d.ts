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
import { TemporaryTimeInformation } from './TemporaryTimeInformation';
/**
 * Request builder class for operations supported on the {@link TemporaryTimeInformation} entity.
 */
export declare class TemporaryTimeInformationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TemporaryTimeInformation<T>, T> {
  /**
   * Returns a request builder for retrieving one `TemporaryTimeInformation` entity based on its keys.
   * @param externalCode Key property. See {@link TemporaryTimeInformation.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TemporaryTimeInformation` entity based on its keys.
   */
  getByKey(
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TemporaryTimeInformation<T>, T>;
  /**
   * Returns a request builder for querying all `TemporaryTimeInformation` entities.
   * @returns A request builder for creating requests to retrieve all `TemporaryTimeInformation` entities.
   */
  getAll(): GetAllRequestBuilder<TemporaryTimeInformation<T>, T>;
  /**
   * Returns a request builder for creating a `TemporaryTimeInformation` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TemporaryTimeInformation`.
   */
  create(
    entity: TemporaryTimeInformation<T>
  ): CreateRequestBuilder<TemporaryTimeInformation<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `TemporaryTimeInformation`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TemporaryTimeInformation`.
   */
  update(
    entity: TemporaryTimeInformation<T>
  ): UpdateRequestBuilder<TemporaryTimeInformation<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TemporaryTimeInformation`.
   * @param externalCode Key property. See {@link TemporaryTimeInformation.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `TemporaryTimeInformation`.
   */
  delete(
    externalCode: string
  ): DeleteRequestBuilder<TemporaryTimeInformation<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TemporaryTimeInformation`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TemporaryTimeInformation` by taking the entity as a parameter.
   */
  delete(
    entity: TemporaryTimeInformation<T>
  ): DeleteRequestBuilder<TemporaryTimeInformation<T>, T>;
}
//# sourceMappingURL=TemporaryTimeInformationRequestBuilder.d.ts.map
