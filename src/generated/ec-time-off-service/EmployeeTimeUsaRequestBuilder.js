"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimeUsaRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const EmployeeTimeUsa_1 = require("./EmployeeTimeUsa");
/**
 * Request builder class for operations supported on the {@link EmployeeTimeUsa} entity.
 */
class EmployeeTimeUsaRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `EmployeeTimeUsa` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeUsa.employeeTimeExternalCode}.
     * @param externalCode Key property. See {@link EmployeeTimeUsa.externalCode}.
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeUsa` entity based on its keys.
     */
    getByKey(employeeTimeExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            EmployeeTime_externalCode: employeeTimeExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `EmployeeTimeUsa` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeUsa` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `EmployeeTimeUsa` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeTimeUsa`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `EmployeeTimeUsa`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeTimeUsa`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(employeeTimeExternalCodeOrEntity, externalCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, employeeTimeExternalCodeOrEntity instanceof EmployeeTimeUsa_1.EmployeeTimeUsa
            ? employeeTimeExternalCodeOrEntity
            : {
                EmployeeTime_externalCode: employeeTimeExternalCodeOrEntity,
                externalCode: externalCode
            });
    }
}
exports.EmployeeTimeUsaRequestBuilder = EmployeeTimeUsaRequestBuilder;
//# sourceMappingURL=EmployeeTimeUsaRequestBuilder.js.map