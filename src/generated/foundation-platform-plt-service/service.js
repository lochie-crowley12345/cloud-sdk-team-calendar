"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foundationPlatformPltService = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ExternalUserApi_1 = require("./ExternalUserApi");
const PicklistOptionApi_1 = require("./PicklistOptionApi");
const AttachmentApi_1 = require("./AttachmentApi");
const PickListValueV2Api_1 = require("./PickListValueV2Api");
const ExternalLearnerPersonalInfoApi_1 = require("./ExternalLearnerPersonalInfoApi");
const PickListV2Api_1 = require("./PickListV2Api");
const CompanyProvisionerApi_1 = require("./CompanyProvisionerApi");
const ExtAddressInfoApi_1 = require("./ExtAddressInfoApi");
const CurrencyConversionApi_1 = require("./CurrencyConversionApi");
const InitiativeAlignmentBeanApi_1 = require("./InitiativeAlignmentBeanApi");
const PicklistLabelApi_1 = require("./PicklistLabelApi");
const CountryApi_1 = require("./CountryApi");
const PhotoApi_1 = require("./PhotoApi");
const WorkOrderApi_1 = require("./WorkOrderApi");
const CompetencyRatingApi_1 = require("./CompetencyRatingApi");
const ExtEmailInfoApi_1 = require("./ExtEmailInfoApi");
const VendorInfoApi_1 = require("./VendorInfoApi");
const PicklistApi_1 = require("./PicklistApi");
const ExtPersonalInfoApi_1 = require("./ExtPersonalInfoApi");
const ExternalLearnerEmailInfoApi_1 = require("./ExternalLearnerEmailInfoApi");
const ExternalLearnerAddressInfoApi_1 = require("./ExternalLearnerAddressInfoApi");
const ExternalLearnerPhoneInfoApi_1 = require("./ExternalLearnerPhoneInfoApi");
const TimeZoneApi_1 = require("./TimeZoneApi");
const ExternalLearnerApi_1 = require("./ExternalLearnerApi");
const CurrencyApi_1 = require("./CurrencyApi");
const TeamGoalOwnerApi_1 = require("./TeamGoalOwnerApi");
const ExtPhoneInfoApi_1 = require("./ExtPhoneInfoApi");
const function_imports_1 = require("./function-imports");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function foundationPlatformPltService(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new FoundationPlatformPltService((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
exports.foundationPlatformPltService = foundationPlatformPltService;
class FoundationPlatformPltService {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, ctor) {
        if (!this.apis[key]) {
            this.apis[key] = new ctor(this.deSerializers);
        }
        return this.apis[key];
    }
    get externalUserApi() {
        const api = this.initApi('externalUserApi', ExternalUserApi_1.ExternalUserApi);
        const linkedApis = [
            this.initApi('extAddressInfoApi', ExtAddressInfoApi_1.ExtAddressInfoApi),
            this.initApi('extEmailInfoApi', ExtEmailInfoApi_1.ExtEmailInfoApi),
            this.initApi('extPersonalInfoApi', ExtPersonalInfoApi_1.ExtPersonalInfoApi),
            this.initApi('extPhoneInfoApi', ExtPhoneInfoApi_1.ExtPhoneInfoApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get picklistOptionApi() {
        const api = this.initApi('picklistOptionApi', PicklistOptionApi_1.PicklistOptionApi);
        const linkedApis = [
            this.initApi('picklistOptionApi', PicklistOptionApi_1.PicklistOptionApi),
            this.initApi('picklistOptionApi', PicklistOptionApi_1.PicklistOptionApi),
            this.initApi('picklistApi', PicklistApi_1.PicklistApi),
            this.initApi('picklistLabelApi', PicklistLabelApi_1.PicklistLabelApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get attachmentApi() {
        return this.initApi('attachmentApi', AttachmentApi_1.AttachmentApi);
    }
    get pickListValueV2Api() {
        const api = this.initApi('pickListValueV2Api', PickListValueV2Api_1.PickListValueV2Api);
        const linkedApis = [this.initApi('pickListValueV2Api', PickListValueV2Api_1.PickListValueV2Api)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get externalLearnerPersonalInfoApi() {
        return this.initApi('externalLearnerPersonalInfoApi', ExternalLearnerPersonalInfoApi_1.ExternalLearnerPersonalInfoApi);
    }
    get pickListV2Api() {
        const api = this.initApi('pickListV2Api', PickListV2Api_1.PickListV2Api);
        const linkedApis = [
            this.initApi('pickListV2Api', PickListV2Api_1.PickListV2Api),
            this.initApi('pickListValueV2Api', PickListValueV2Api_1.PickListValueV2Api)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get companyProvisionerApi() {
        return this.initApi('companyProvisionerApi', CompanyProvisionerApi_1.CompanyProvisionerApi);
    }
    get extAddressInfoApi() {
        const api = this.initApi('extAddressInfoApi', ExtAddressInfoApi_1.ExtAddressInfoApi);
        const linkedApis = [this.initApi('picklistOptionApi', PicklistOptionApi_1.PicklistOptionApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get currencyConversionApi() {
        const api = this.initApi('currencyConversionApi', CurrencyConversionApi_1.CurrencyConversionApi);
        const linkedApis = [
            this.initApi('currencyApi', CurrencyApi_1.CurrencyApi),
            this.initApi('pickListValueV2Api', PickListValueV2Api_1.PickListValueV2Api),
            this.initApi('currencyApi', CurrencyApi_1.CurrencyApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get initiativeAlignmentBeanApi() {
        return this.initApi('initiativeAlignmentBeanApi', InitiativeAlignmentBeanApi_1.InitiativeAlignmentBeanApi);
    }
    get picklistLabelApi() {
        const api = this.initApi('picklistLabelApi', PicklistLabelApi_1.PicklistLabelApi);
        const linkedApis = [this.initApi('picklistOptionApi', PicklistOptionApi_1.PicklistOptionApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get countryApi() {
        const api = this.initApi('countryApi', CountryApi_1.CountryApi);
        const linkedApis = [this.initApi('currencyApi', CurrencyApi_1.CurrencyApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get photoApi() {
        return this.initApi('photoApi', PhotoApi_1.PhotoApi);
    }
    get workOrderApi() {
        const api = this.initApi('workOrderApi', WorkOrderApi_1.WorkOrderApi);
        const linkedApis = [
            this.initApi('currencyApi', CurrencyApi_1.CurrencyApi),
            this.initApi('vendorInfoApi', VendorInfoApi_1.VendorInfoApi),
            this.initApi('pickListValueV2Api', PickListValueV2Api_1.PickListValueV2Api)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get competencyRatingApi() {
        return this.initApi('competencyRatingApi', CompetencyRatingApi_1.CompetencyRatingApi);
    }
    get extEmailInfoApi() {
        const api = this.initApi('extEmailInfoApi', ExtEmailInfoApi_1.ExtEmailInfoApi);
        const linkedApis = [this.initApi('picklistOptionApi', PicklistOptionApi_1.PicklistOptionApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get vendorInfoApi() {
        return this.initApi('vendorInfoApi', VendorInfoApi_1.VendorInfoApi);
    }
    get picklistApi() {
        const api = this.initApi('picklistApi', PicklistApi_1.PicklistApi);
        const linkedApis = [this.initApi('picklistOptionApi', PicklistOptionApi_1.PicklistOptionApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get extPersonalInfoApi() {
        return this.initApi('extPersonalInfoApi', ExtPersonalInfoApi_1.ExtPersonalInfoApi);
    }
    get externalLearnerEmailInfoApi() {
        const api = this.initApi('externalLearnerEmailInfoApi', ExternalLearnerEmailInfoApi_1.ExternalLearnerEmailInfoApi);
        const linkedApis = [this.initApi('picklistOptionApi', PicklistOptionApi_1.PicklistOptionApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get externalLearnerAddressInfoApi() {
        const api = this.initApi('externalLearnerAddressInfoApi', ExternalLearnerAddressInfoApi_1.ExternalLearnerAddressInfoApi);
        const linkedApis = [this.initApi('picklistOptionApi', PicklistOptionApi_1.PicklistOptionApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get externalLearnerPhoneInfoApi() {
        const api = this.initApi('externalLearnerPhoneInfoApi', ExternalLearnerPhoneInfoApi_1.ExternalLearnerPhoneInfoApi);
        const linkedApis = [this.initApi('picklistOptionApi', PicklistOptionApi_1.PicklistOptionApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get timeZoneApi() {
        const api = this.initApi('timeZoneApi', TimeZoneApi_1.TimeZoneApi);
        const linkedApis = [this.initApi('countryApi', CountryApi_1.CountryApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get externalLearnerApi() {
        const api = this.initApi('externalLearnerApi', ExternalLearnerApi_1.ExternalLearnerApi);
        const linkedApis = [
            this.initApi('externalLearnerEmailInfoApi', ExternalLearnerEmailInfoApi_1.ExternalLearnerEmailInfoApi),
            this.initApi('externalLearnerAddressInfoApi', ExternalLearnerAddressInfoApi_1.ExternalLearnerAddressInfoApi),
            this.initApi('externalLearnerPersonalInfoApi', ExternalLearnerPersonalInfoApi_1.ExternalLearnerPersonalInfoApi),
            this.initApi('externalLearnerPhoneInfoApi', ExternalLearnerPhoneInfoApi_1.ExternalLearnerPhoneInfoApi),
            this.initApi('picklistOptionApi', PicklistOptionApi_1.PicklistOptionApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get currencyApi() {
        return this.initApi('currencyApi', CurrencyApi_1.CurrencyApi);
    }
    get teamGoalOwnerApi() {
        return this.initApi('teamGoalOwnerApi', TeamGoalOwnerApi_1.TeamGoalOwnerApi);
    }
    get extPhoneInfoApi() {
        const api = this.initApi('extPhoneInfoApi', ExtPhoneInfoApi_1.ExtPhoneInfoApi);
        const linkedApis = [this.initApi('picklistOptionApi', PicklistOptionApi_1.PicklistOptionApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    /**
     * @deprecated Since v2.13.0. Use {@link operations} instead.
     */
    get functionImports() {
        return {
            getExtEventMetaDataDefinition: (parameter) => (0, function_imports_1.getExtEventMetaDataDefinition)(parameter, this.deSerializers)
        };
    }
    /**
     * Get unbound functions and actions.
     */
    get operations() {
        return { ...this.functionImports };
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map