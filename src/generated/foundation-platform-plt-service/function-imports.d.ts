/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DeSerializers,
  DefaultDeSerializers,
  FunctionImportRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
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
export declare function getExtEventMetaDataDefinition<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: GetExtEventMetaDataDefinitionParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): FunctionImportRequestBuilder<
  DeSerializersT,
  GetExtEventMetaDataDefinitionParameters<DeSerializersT>,
  SefExtEventMetaDataList
>;
/**
 * @deprecated Since v2.13.0. Use `operations` instead.
 */
export declare const functionImports: {
  getExtEventMetaDataDefinition: typeof getExtEventMetaDataDefinition;
};
//# sourceMappingURL=function-imports.d.ts.map
