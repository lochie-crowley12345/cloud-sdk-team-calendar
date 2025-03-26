"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionImports = exports.getPasswordPolicy = exports.getUserNameFormat = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Get User Name Format.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function getUserNameFormat(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        locale: new odata_v2_1.FunctionImportParameter('locale', 'Edm.String', parameters.locale)
    };
    return new odata_v2_1.FunctionImportRequestBuilder('get', '/odata/v2', 'getUserNameFormat', data => (0, odata_v2_1.transformReturnValueForEdmType)(data, val => (0, odata_v2_1.edmToTs)(val.getUserNameFormat, 'Edm.String', deSerializers)), params, deSerializers);
}
exports.getUserNameFormat = getUserNameFormat;
/**
 * Get Password Policy.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function getPasswordPolicy(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        locale: new odata_v2_1.FunctionImportParameter('locale', 'Edm.String', parameters.locale)
    };
    return new odata_v2_1.FunctionImportRequestBuilder('get', '/odata/v2', 'getPasswordPolicy', data => (0, odata_v2_1.transformReturnValueForEdmType)(data, val => (0, odata_v2_1.edmToTs)(val.getPasswordPolicy, 'Edm.String', deSerializers)), params, deSerializers);
}
exports.getPasswordPolicy = getPasswordPolicy;
/**
 * @deprecated Since v2.13.0. Use `operations` instead.
 */
exports.functionImports = {
    getUserNameFormat,
    getPasswordPolicy
};
//# sourceMappingURL=function-imports.js.map