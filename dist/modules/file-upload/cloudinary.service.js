"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_service_1 = require("../../config/config.service");
let CloudinaryService = class CloudinaryService {
    constructor(configService) {
        this.configService = configService;
    }
    fileUpload(filepath, cb) {
        const cloudinary = require('cloudinary').v2;
        cloudinary.config({
            cloud_name: this.configService.CLOUDINARY_CLOUD_NAME,
            api_key: this.configService.CLOUDINARY_API_KEY,
            api_secret: this.configService.CLOUDINARY_API_SECRET,
        });
        cloudinary.uploader.upload(filepath, (error, result) => cb(error, result));
    }
};
CloudinaryService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_service_1.ConfigService])
], CloudinaryService);
exports.CloudinaryService = CloudinaryService;
//# sourceMappingURL=cloudinary.service.js.map