"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_module_1 = require("./config/config.module");
const graphql_options_1 = require("./graphql.options");
const mongoose_config_service_1 = require("./mongoose-config.service");
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const database_module_1 = require("./modules/database/database.module");
const auth_1 = require("./modules/auth");
const core_module_1 = require("./modules/core/core.module");
const email_scalar_1 = require("./shared/scalars/email.scalar");
const platform_express_1 = require("@nestjs/platform-express");
const cloudinary_service_1 = require("./modules/file-upload/cloudinary.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({ useClass: mongoose_config_service_1.MongooseConfigService, imports: [config_module_1.ConfigModule] }),
            graphql_1.GraphQLModule.forRootAsync({ useClass: graphql_options_1.GraphqlOptions }),
            config_module_1.ConfigModule,
            database_module_1.DatabaseModule,
            auth_1.AuthModule,
            core_module_1.CoreModule,
            platform_express_1.MulterModule.register({
                dest: __dirname + 'upload',
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, mongoose_config_service_1.MongooseConfigService, email_scalar_1.EmailScalar, cloudinary_service_1.CloudinaryService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map