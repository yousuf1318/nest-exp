"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressModule = void 0;
const common_1 = require("@nestjs/common");
const address_service_1 = require("./address.service");
const address_controller_1 = require("./address.controller");
const mongoose_1 = require("@nestjs/mongoose");
const address_schema_1 = require("../schemas/address.schema");
let addressModule = class addressModule {
};
addressModule = __decorate([
    (0, common_1.Module)({
        providers: [address_service_1.addressService],
        controllers: [address_controller_1.addressController],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: address_schema_1.address.name, schema: address_schema_1.addressSchema }]),
        ],
    })
], addressModule);
exports.addressModule = addressModule;
//# sourceMappingURL=address.module.js.map