"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elevateJobInfoService = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const EmpJobApi_1 = require("./EmpJobApi");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function elevateJobInfoService(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new ElevateJobInfoService((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
exports.elevateJobInfoService = elevateJobInfoService;
class ElevateJobInfoService {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, ctor) {
        if (!this.apis[key]) {
            this.apis[key] = new ctor(this.deSerializers);
        }
        return this.apis[key];
    }
    get empJobApi() {
        return this.initApi('empJobApi', EmpJobApi_1.EmpJobApi);
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map