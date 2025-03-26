"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionImports = exports.getExtEventMetaDataDefinition = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SefExtEventMetaDataList_1 = require("./SefExtEventMetaDataList");
/**
 * Get Ext Event Meta Data Definition.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function getExtEventMetaDataDefinition(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        event: new odata_v2_1.FunctionImportParameter('event', 'Edm.String', parameters.event),
        topic: new odata_v2_1.FunctionImportParameter('topic', 'Edm.String', parameters.topic)
    };
    return new odata_v2_1.FunctionImportRequestBuilder('get', '/odata/v2', 'getExtEventMetaDataDefinition', data => (0, odata_v2_1.transformReturnValueForComplexType)(data, data => (0, odata_v2_1.entityDeserializer)(deSerializers || odata_v2_1.defaultDeSerializers).deserializeComplexType(data, SefExtEventMetaDataList_1.SefExtEventMetaDataList)), params, deSerializers);
}
exports.getExtEventMetaDataDefinition = getExtEventMetaDataDefinition;
/**
 * @deprecated Since v2.13.0. Use `operations` instead.
 */
exports.functionImports = {
    getExtEventMetaDataDefinition
};
//# sourceMappingURL=function-imports.js.map