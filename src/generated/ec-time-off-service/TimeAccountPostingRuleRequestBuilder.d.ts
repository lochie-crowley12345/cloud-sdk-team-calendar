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
import { TimeAccountPostingRule } from './TimeAccountPostingRule';
/**
 * Request builder class for operations supported on the {@link TimeAccountPostingRule} entity.
 */
export declare class TimeAccountPostingRuleRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TimeAccountPostingRule<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeAccountPostingRule` entity based on its keys.
   * @param timeTypeExternalCode Key property. See {@link TimeAccountPostingRule.timeTypeExternalCode}.
   * @param externalCode Key property. See {@link TimeAccountPostingRule.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeAccountPostingRule` entity based on its keys.
   */
  getByKey(
    timeTypeExternalCode: DeserializedType<T, 'Edm.String'>,
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TimeAccountPostingRule<T>, T>;
  /**
   * Returns a request builder for querying all `TimeAccountPostingRule` entities.
   * @returns A request builder for creating requests to retrieve all `TimeAccountPostingRule` entities.
   */
  getAll(): GetAllRequestBuilder<TimeAccountPostingRule<T>, T>;
}
//# sourceMappingURL=TimeAccountPostingRuleRequestBuilder.d.ts.map
