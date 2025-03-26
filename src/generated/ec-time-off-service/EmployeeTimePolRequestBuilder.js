"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimePolRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const EmployeeTimePol_1 = require("./EmployeeTimePol");
/**
 * Request builder class for operations supported on the {@link EmployeeTimePol} entity.
 */
class EmployeeTimePolRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `EmployeeTimePol` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See {@link EmployeeTimePol.employeeTimeExternalCode}.
     * @param externalCode Key property. See {@link EmployeeTimePol.externalCode}.
     * @returns A request builder for creating requests to retrieve one `EmployeeTimePol` entity based on its keys.
     */
    getByKey(employeeTimeExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            EmployeeTime_externalCode: employeeTimeExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `EmployeeTimePol` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimePol` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `EmployeeTimePol` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeTimePol`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `EmployeeTimePol`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeTimePol`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(employeeTimeExternalCodeOrEntity, externalCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, employeeTimeExternalCodeOrEntity instanceof EmployeeTimePol_1.EmployeeTimePol
            ? employeeTimeExternalCodeOrEntity
            : {
                EmployeeTime_externalCode: employeeTimeExternalCodeOrEntity,
                externalCode: externalCode
            });
    }
}
exports.EmployeeTimePolRequestBuilder = EmployeeTimePolRequestBuilder;
//# sourceMappingURL=EmployeeTimePolRequestBuilder.js.map