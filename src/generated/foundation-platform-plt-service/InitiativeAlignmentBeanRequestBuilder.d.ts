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
import { InitiativeAlignmentBean } from './InitiativeAlignmentBean';
/**
 * Request builder class for operations supported on the {@link InitiativeAlignmentBean} entity.
 */
export declare class InitiativeAlignmentBeanRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InitiativeAlignmentBean<T>, T> {
  /**
   * Returns a request builder for retrieving one `InitiativeAlignmentBean` entity based on its keys.
   * @param externalCode Key property. See {@link InitiativeAlignmentBean.externalCode}.
   * @returns A request builder for creating requests to retrieve one `InitiativeAlignmentBean` entity based on its keys.
   */
  getByKey(
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InitiativeAlignmentBean<T>, T>;
  /**
   * Returns a request builder for querying all `InitiativeAlignmentBean` entities.
   * @returns A request builder for creating requests to retrieve all `InitiativeAlignmentBean` entities.
   */
  getAll(): GetAllRequestBuilder<InitiativeAlignmentBean<T>, T>;
  /**
   * Returns a request builder for creating a `InitiativeAlignmentBean` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InitiativeAlignmentBean`.
   */
  create(
    entity: InitiativeAlignmentBean<T>
  ): CreateRequestBuilder<InitiativeAlignmentBean<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `InitiativeAlignmentBean`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InitiativeAlignmentBean`.
   */
  update(
    entity: InitiativeAlignmentBean<T>
  ): UpdateRequestBuilder<InitiativeAlignmentBean<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InitiativeAlignmentBean`.
   * @param externalCode Key property. See {@link InitiativeAlignmentBean.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `InitiativeAlignmentBean`.
   */
  delete(
    externalCode: string
  ): DeleteRequestBuilder<InitiativeAlignmentBean<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InitiativeAlignmentBean`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InitiativeAlignmentBean` by taking the entity as a parameter.
   */
  delete(
    entity: InitiativeAlignmentBean<T>
  ): DeleteRequestBuilder<InitiativeAlignmentBean<T>, T>;
}
//# sourceMappingURL=InitiativeAlignmentBeanRequestBuilder.d.ts.map
