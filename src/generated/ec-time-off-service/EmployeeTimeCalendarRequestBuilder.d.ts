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
import { EmployeeTimeCalendar } from './EmployeeTimeCalendar';
/**
 * Request builder class for operations supported on the {@link EmployeeTimeCalendar} entity.
 */
export declare class EmployeeTimeCalendarRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmployeeTimeCalendar<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeCalendar` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeCalendar.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeCalendar.externalCode}.
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeCalendar` entity based on its keys.
   */
  getByKey(
    employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>,
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmployeeTimeCalendar<T>, T>;
  /**
   * Returns a request builder for querying all `EmployeeTimeCalendar` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeCalendar` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeCalendar<T>, T>;
}
//# sourceMappingURL=EmployeeTimeCalendarRequestBuilder.d.ts.map
