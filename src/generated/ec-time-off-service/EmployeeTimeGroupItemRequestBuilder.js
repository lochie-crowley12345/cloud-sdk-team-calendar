"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimeGroupItemRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link EmployeeTimeGroupItem} entity.
 */
class EmployeeTimeGroupItemRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `EmployeeTimeGroupItem` entity based on its keys.
     * @param employeeTimeGroupExternalCode Key property. See {@link EmployeeTimeGroupItem.employeeTimeGroupExternalCode}.
     * @param externalCode Key property. See {@link EmployeeTimeGroupItem.externalCode}.
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeGroupItem` entity based on its keys.
     */
    getByKey(employeeTimeGroupExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            EmployeeTimeGroup_externalCode: employeeTimeGroupExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `EmployeeTimeGroupItem` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeGroupItem` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.EmployeeTimeGroupItemRequestBuilder = EmployeeTimeGroupItemRequestBuilder;
//# sourceMappingURL=EmployeeTimeGroupItemRequestBuilder.js.map