"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTimeAusRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const EmployeeTimeAus_1 = require("./EmployeeTimeAus");
/**
 * Request builder class for operations supported on the {@link EmployeeTimeAus} entity.
 */
class EmployeeTimeAusRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `EmployeeTimeAus` entity based on its keys.
     * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeAus.employeeTimeExternalCode}.
     * @param externalCode Key property. See {@link EmployeeTimeAus.externalCode}.
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeAus` entity based on its keys.
     */
    getByKey(employeeTimeExternalCode, externalCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            EmployeeTime_externalCode: employeeTimeExternalCode,
            externalCode: externalCode
        });
    }
    /**
     * Returns a request builder for querying all `EmployeeTimeAus` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeAus` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `EmployeeTimeAus` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeTimeAus`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `EmployeeTimeAus`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeTimeAus`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(employeeTimeExternalCodeOrEntity, externalCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, employeeTimeExternalCodeOrEntity instanceof EmployeeTimeAus_1.EmployeeTimeAus
            ? employeeTimeExternalCodeOrEntity
            : {
                EmployeeTime_externalCode: employeeTimeExternalCodeOrEntity,
                externalCode: externalCode
            });
    }
}
exports.EmployeeTimeAusRequestBuilder = EmployeeTimeAusRequestBuilder;
//# sourceMappingURL=EmployeeTimeAusRequestBuilder.js.map