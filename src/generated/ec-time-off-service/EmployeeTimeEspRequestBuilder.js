"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimeEspRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const EmployeeTimeEsp_1 = require("./EmployeeTimeEsp");
/**
 * Request builder class for operations supported on the {@link EmployeeTimeEsp} entity.
 */
class EmployeeTimeEspRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `EmployeeTimeEsp` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeEsp.employeeTimeExternalCode}.
     * @param externalCode Key property. See {@link EmployeeTimeEsp.externalCode}.
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeEsp` entity based on its keys.
     */
    getByKey(employeeTimeExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            EmployeeTime_externalCode: employeeTimeExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `EmployeeTimeEsp` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeEsp` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `EmployeeTimeEsp` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeTimeEsp`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `EmployeeTimeEsp`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeTimeEsp`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(employeeTimeExternalCodeOrEntity, externalCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, employeeTimeExternalCodeOrEntity instanceof EmployeeTimeEsp_1.EmployeeTimeEsp
            ? employeeTimeExternalCodeOrEntity
            : {
                EmployeeTime_externalCode: employeeTimeExternalCodeOrEntity,
                externalCode: externalCode
            });
    }
}
exports.EmployeeTimeEspRequestBuilder = EmployeeTimeEspRequestBuilder;
//# sourceMappingURL=EmployeeTimeEspRequestBuilder.js.map