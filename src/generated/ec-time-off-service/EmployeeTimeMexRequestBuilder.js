"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimeMexRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const EmployeeTimeMex_1 = require("./EmployeeTimeMex");
/**
 * Request builder class for operations supported on the {@link EmployeeTimeMex} entity.
 */
class EmployeeTimeMexRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `EmployeeTimeMex` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeMex.employeeTimeExternalCode}.
     * @param externalCode Key property. See {@link EmployeeTimeMex.externalCode}.
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeMex` entity based on its keys.
     */
    getByKey(employeeTimeExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            EmployeeTime_externalCode: employeeTimeExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `EmployeeTimeMex` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeMex` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `EmployeeTimeMex` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeTimeMex`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `EmployeeTimeMex`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeTimeMex`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(employeeTimeExternalCodeOrEntity, externalCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, employeeTimeExternalCodeOrEntity instanceof EmployeeTimeMex_1.EmployeeTimeMex
            ? employeeTimeExternalCodeOrEntity
            : {
                EmployeeTime_externalCode: employeeTimeExternalCodeOrEntity,
                externalCode: externalCode
            });
    }
}
exports.EmployeeTimeMexRequestBuilder = EmployeeTimeMexRequestBuilder;
//# sourceMappingURL=EmployeeTimeMexRequestBuilder.js.map