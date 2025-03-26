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
import { TimeTypeCan } from './TimeTypeCan';
/**
 * Request builder class for operations supported on the {@link TimeTypeCan} entity.
 */
export declare class TimeTypeCanRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TimeTypeCan<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeTypeCan` entity based on its keys.
   * @param timeTypeExternalCode Key property. See {@link TimeTypeCan.timeTypeExternalCode}.
   * @param externalCode Key property. See {@link TimeTypeCan.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeTypeCan` entity based on its keys.
   */
  getByKey(
    timeTypeExternalCode: DeserializedType<T, 'Edm.String'>,
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TimeTypeCan<T>, T>;
  /**
   * Returns a request builder for querying all `TimeTypeCan` entities.
   * @returns A request builder for creating requests to retrieve all `TimeTypeCan` entities.
   */
  getAll(): GetAllRequestBuilder<TimeTypeCan<T>, T>;
}
//# sourceMappingURL=TimeTypeCanRequestBuilder.d.ts.map
