"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HolidayAssignmentRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link HolidayAssignment} entity.
 */
class HolidayAssignmentRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `HolidayAssignment` entity based on its keys.
     * @param holidayCalendarExternalCode Key property. See {@link HolidayAssignment.holidayCalendarExternalCode}.
     * @param date Key property. See {@link HolidayAssignment.date}.
     * @returns A request builder for creating requests to retrieve one `HolidayAssignment` entity based on its keys.
     */
    getByKey(holidayCalendarExternalCode, date) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            HolidayCalendar_externalCode: holidayCalendarExternalCode,
            date: date
        });
    }
    /**
     * Returns a request builder for querying all `HolidayAssignment` entities.
     * @returns A request builder for creating requests to retrieve all `HolidayAssignment` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.HolidayAssignmentRequestBuilder = HolidayAssignmentRequestBuilder;
//# sourceMappingURL=HolidayAssignmentRequestBuilder.js.map