"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimeNldRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const EmployeeTimeNld_1 = require("./EmployeeTimeNld");
/**
 * Request builder class for operations supported on the {@link EmployeeTimeNld} entity.
 */
class EmployeeTimeNldRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `EmployeeTimeNld` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeNld.employeeTimeExternalCode}.
     * @param externalCode Key property. See {@link EmployeeTimeNld.externalCode}.
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeNld` entity based on its keys.
     */
    getByKey(employeeTimeExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            EmployeeTime_externalCode: employeeTimeExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `EmployeeTimeNld` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeNld` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `EmployeeTimeNld` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeTimeNld`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `EmployeeTimeNld`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeTimeNld`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(employeeTimeExternalCodeOrEntity, externalCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, employeeTimeExternalCodeOrEntity instanceof EmployeeTimeNld_1.EmployeeTimeNld
            ? employeeTimeExternalCodeOrEntity
            : {
                EmployeeTime_externalCode: employeeTimeExternalCodeOrEntity,
                externalCode: externalCode
            });
    }
}
exports.EmployeeTimeNldRequestBuilder = EmployeeTimeNldRequestBuilder;
//# sourceMappingURL=EmployeeTimeNldRequestBuilder.js.map