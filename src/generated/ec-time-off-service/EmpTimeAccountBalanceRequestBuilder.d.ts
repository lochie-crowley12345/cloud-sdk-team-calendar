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
import { EmpTimeAccountBalance } from './EmpTimeAccountBalance';
/**
 * Request builder class for operations supported on the {@link EmpTimeAccountBalance} entity.
 */
export declare class EmpTimeAccountBalanceRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmpTimeAccountBalance<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmpTimeAccountBalance` entity based on its keys.
   * @param timeAccount Key property. See {@link EmpTimeAccountBalance.timeAccount}.
   * @returns A request builder for creating requests to retrieve one `EmpTimeAccountBalance` entity based on its keys.
   */
  getByKey(
    timeAccount: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmpTimeAccountBalance<T>, T>;
  /**
   * Returns a request builder for querying all `EmpTimeAccountBalance` entities.
   * @returns A request builder for creating requests to retrieve all `EmpTimeAccountBalance` entities.
   */
  getAll(): GetAllRequestBuilder<EmpTimeAccountBalance<T>, T>;
}
//# sourceMappingURL=EmpTimeAccountBalanceRequestBuilder.d.ts.map
