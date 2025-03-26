"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimeCalendarRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link EmployeeTimeCalendar} entity.
 */
class EmployeeTimeCalendarRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `EmployeeTimeCalendar` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeCalendar.employeeTimeExternalCode}.
     * @param externalCode Key property. See {@link EmployeeTimeCalendar.externalCode}.
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeCalendar` entity based on its keys.
     */
    getByKey(employeeTimeExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            EmployeeTime_externalCode: employeeTimeExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `EmployeeTimeCalendar` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeCalendar` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.EmployeeTimeCalendarRequestBuilder = EmployeeTimeCalendarRequestBuilder;
//# sourceMappingURL=EmployeeTimeCalendarRequestBuilder.js.map