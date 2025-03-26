"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimeColRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const EmployeeTimeCol_1 = require("./EmployeeTimeCol");
/**
 * Request builder class for operations supported on the {@link EmployeeTimeCol} entity.
 */
class EmployeeTimeColRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `EmployeeTimeCol` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeCol.employeeTimeExternalCode}.
     * @param externalCode Key property. See {@link EmployeeTimeCol.externalCode}.
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeCol` entity based on its keys.
     */
    getByKey(employeeTimeExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            EmployeeTime_externalCode: employeeTimeExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `EmployeeTimeCol` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeCol` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `EmployeeTimeCol` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeTimeCol`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `EmployeeTimeCol`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeTimeCol`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(employeeTimeExternalCodeOrEntity, externalCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, employeeTimeExternalCodeOrEntity instanceof EmployeeTimeCol_1.EmployeeTimeCol
            ? employeeTimeExternalCodeOrEntity
            : {
                EmployeeTime_externalCode: employeeTimeExternalCodeOrEntity,
                externalCode: externalCode
            });
    }
}
exports.EmployeeTimeColRequestBuilder = EmployeeTimeColRequestBuilder;
//# sourceMappingURL=EmployeeTimeColRequestBuilder.js.map