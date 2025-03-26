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
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { EmployeeTimeGroupItem } from './EmployeeTimeGroupItem';
/**
 * Request builder class for operations supported on the {@link EmployeeTimeGroupItem} entity.
 */
export declare class EmployeeTimeGroupItemRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmployeeTimeGroupItem<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeGroupItem` entity based on its keys.
   * @param employeeTimeGroupExternalCode Key property. See {@link EmployeeTimeGroupItem.employeeTimeGroupExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeGroupItem.externalCode}.
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeGroupItem` entity based on its keys.
   */
  getByKey(
    employeeTimeGroupExternalCode: DeserializedType<T, 'Edm.String'>,
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmployeeTimeGroupItem<T>, T>;
  /**
   * Returns a request builder for querying all `EmployeeTimeGroupItem` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeGroupItem` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeGroupItem<T>, T>;
}
//# sourceMappingURL=EmployeeTimeGroupItemRequestBuilder.d.ts.map
