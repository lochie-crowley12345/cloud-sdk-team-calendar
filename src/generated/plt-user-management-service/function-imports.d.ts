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
/**
 * Type of the parameters to be passed to {@link getUserNameFormat}.
 */
export interface GetUserNameFormatParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Locale.
   */
  locale?: string | null;
}
/**
 * Get User Name Format.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export declare function getUserNameFormat<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: GetUserNameFormatParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): FunctionImportRequestBuilder<
  DeSerializersT,
  GetUserNameFormatParameters<DeSerializersT>,
  string
>;
/**
 * Type of the parameters to be passed to {@link getPasswordPolicy}.
 */
export interface GetPasswordPolicyParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Locale.
   */
  locale?: string | null;
}
/**
 * Get Password Policy.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export declare function getPasswordPolicy<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: GetPasswordPolicyParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): FunctionImportRequestBuilder<
  DeSerializersT,
  GetPasswordPolicyParameters<DeSerializersT>,
  string
>;
/**
 * @deprecated Since v2.13.0. Use `operations` instead.
 */
export declare const functionImports: {
  getUserNameFormat: typeof getUserNameFormat;
  getPasswordPolicy: typeof getPasswordPolicy;
};
//# sourceMappingURL=function-imports.d.ts.map
