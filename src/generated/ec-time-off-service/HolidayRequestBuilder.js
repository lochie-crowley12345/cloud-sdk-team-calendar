"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HolidayRequestBuilder = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * Request builder class for operations supported on the {@link Holiday} entity.
 */
class HolidayRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `Holiday` entity based on its keys.
     * @param holidayCode Key property. See {@link Holiday.holidayCode}.
     * @returns A request builder for creating requests to retrieve one `Holiday` entity based on its keys.
     */
    getByKey(holidayCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            holidayCode: holidayCode
        });
    }
    /**
     * Returns a request builder for querying all `Holiday` entities.
     * @returns A request builder for creating requests to retrieve all `Holiday` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.HolidayRequestBuilder = HolidayRequestBuilder;
//# sourceMappingURL=HolidayRequestBuilder.js.map