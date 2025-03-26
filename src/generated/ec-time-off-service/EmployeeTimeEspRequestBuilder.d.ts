/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { EmployeeTimeEsp } from './EmployeeTimeEsp';
/**
 * Request builder class for operations supported on the {@link EmployeeTimeEsp} entity.
 */
export declare class EmployeeTimeEspRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmployeeTimeEsp<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeEsp` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeEsp.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeEsp.externalCode}.
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeEsp` entity based on its keys.
   */
  getByKey(
    employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>,
    externalCode: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<EmployeeTimeEsp<T>, T>;
  /**
   * Returns a request builder for querying all `EmployeeTimeEsp` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeEsp` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeEsp<T>, T>;
  /**
   * Returns a request builder for creating a `EmployeeTimeEsp` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeeTimeEsp`.
   */
  create(
    entity: EmployeeTimeEsp<T>
  ): CreateRequestBuilder<EmployeeTimeEsp<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `EmployeeTimeEsp`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeeTimeEsp`.
   */
  update(
    entity: EmployeeTimeEsp<T>
  ): UpdateRequestBuilder<EmployeeTimeEsp<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeeTimeEsp`.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeEsp.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeEsp.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTimeEsp`.
   */
  delete(
    employeeTimeExternalCode: string,
    externalCode: BigNumber
  ): DeleteRequestBuilder<EmployeeTimeEsp<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeeTimeEsp`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTimeEsp` by taking the entity as a parameter.
   */
  delete(
    entity: EmployeeTimeEsp<T>
  ): DeleteRequestBuilder<EmployeeTimeEsp<T>, T>;
}
//# sourceMappingURL=EmployeeTimeEspRequestBuilder.d.ts.map
