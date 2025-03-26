"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimeCanRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const EmployeeTimeCan_1 = require("./EmployeeTimeCan");
/**
 * Request builder class for operations supported on the {@link EmployeeTimeCan} entity.
 */
class EmployeeTimeCanRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `EmployeeTimeCan` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeCan.employeeTimeExternalCode}.
     * @param externalCode Key property. See {@link EmployeeTimeCan.externalCode}.
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeCan` entity based on its keys.
     */
    getByKey(employeeTimeExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            EmployeeTime_externalCode: employeeTimeExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `EmployeeTimeCan` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeCan` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `EmployeeTimeCan` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeTimeCan`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `EmployeeTimeCan`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeTimeCan`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(employeeTimeExternalCodeOrEntity, externalCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, employeeTimeExternalCodeOrEntity instanceof EmployeeTimeCan_1.EmployeeTimeCan
            ? employeeTimeExternalCodeOrEntity
            : {
                EmployeeTime_externalCode: employeeTimeExternalCodeOrEntity,
                externalCode: externalCode
            });
    }
}
exports.EmployeeTimeCanRequestBuilder = EmployeeTimeCanRequestBuilder;
//# sourceMappingURL=EmployeeTimeCanRequestBuilder.js.map