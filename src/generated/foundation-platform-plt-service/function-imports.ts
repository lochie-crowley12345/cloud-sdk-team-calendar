/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  entityDeserializer,
  transformReturnValueForComplexType,
  DeSerializers,
  DefaultDeSerializers,
  defaultDeSerializers,
  FunctionImportParameter,
  FunctionImportRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { foundationPlatformPltService } from './service';
import { SefExtEventMetaDataList } from './SefExtEventMetaDataList';

/**
 * Type of the parameters to be passed to {@link getExtEventMetaDataDefinition}.
 */
export interface GetExtEventMetaDataDefinitionParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Event.
   */
  event?: string | null;
  /**
   * Topic.
   */
  topic?: string | null;
}

/**
 * Get Ext Event Meta Data Definition.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function getExtEventMetaDataDefinition<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: GetExtEventMetaDataDefinitionParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): FunctionImportRequestBuilder<
  DeSerializersT,
  GetExtEventMetaDataDefinitionParameters<DeSerializersT>,
  SefExtEventMetaDataList
> {
  const params = {
    event: new FunctionImportParameter('event', 'Edm.String', parameters.event),
    topic: new FunctionImportParameter('topic', 'Edm.String', parameters.topic)
  };

  return new FunctionImportRequestBuilder(
    'get',
    '/odata/v2',
    'getExtEventMetaDataDefinition',
    data =>
      transformReturnValueForComplexType(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, SefExtEventMetaDataList)
      ),
    params,
    deSerializers
  );
}

/**
 * @deprecated Since v2.13.0. Use `operations` instead.
 */
export const functionImports = {
  getExtEventMetaDataDefinition
};
