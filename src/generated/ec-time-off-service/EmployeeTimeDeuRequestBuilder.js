"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimeDeuRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const EmployeeTimeDeu_1 = require("./EmployeeTimeDeu");
/**
 * Request builder class for operations supported on the {@link EmployeeTimeDeu} entity.
 */
class EmployeeTimeDeuRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `EmployeeTimeDeu` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeDeu.employeeTimeExternalCode}.
     * @param externalCode Key property. See {@link EmployeeTimeDeu.externalCode}.
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeDeu` entity based on its keys.
     */
    getByKey(employeeTimeExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            EmployeeTime_externalCode: employeeTimeExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `EmployeeTimeDeu` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeDeu` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `EmployeeTimeDeu` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeTimeDeu`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `EmployeeTimeDeu`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeTimeDeu`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(employeeTimeExternalCodeOrEntity, externalCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, employeeTimeExternalCodeOrEntity instanceof EmployeeTimeDeu_1.EmployeeTimeDeu
            ? employeeTimeExternalCodeOrEntity
            : {
                EmployeeTime_externalCode: employeeTimeExternalCodeOrEntity,
                externalCode: externalCode
            });
    }
}
exports.EmployeeTimeDeuRequestBuilder = EmployeeTimeDeuRequestBuilder;
//# sourceMappingURL=EmployeeTimeDeuRequestBuilder.js.map