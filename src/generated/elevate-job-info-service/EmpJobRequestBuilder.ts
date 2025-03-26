/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { EmpJob } from './EmpJob';

/**
 * Request builder class for operations supported on the {@link EmpJob} entity.
 */
export class EmpJobRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmpJob<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmpJob` entity based on its keys.
   * @param seqNumber Key property. See {@link EmpJob.seqNumber}.
   * @param startDate Key property. See {@link EmpJob.startDate}.
   * @param userId Key property. See {@link EmpJob.userId}.
   * @returns A request builder for creating requests to retrieve one `EmpJob` entity based on its keys.
   */
  getByKey(
    seqNumber: DeserializedType<T, 'Edm.Int64'>,
    startDate: DeserializedType<T, 'Edm.DateTime'>,
    userId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmpJob<T>, T> {
    return new GetByKeyRequestBuilder<EmpJob<T>, T>(this.entityApi, {
      seqNumber: seqNumber,
      startDate: startDate,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `EmpJob` entities.
   * @returns A request builder for creating requests to retrieve all `EmpJob` entities.
   */
  getAll(): GetAllRequestBuilder<EmpJob<T>, T> {
    return new GetAllRequestBuilder<EmpJob<T>, T>(this.entityApi);
  }
}
