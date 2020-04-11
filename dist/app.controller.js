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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const platform_express_1 = require("@nestjs/platform-express");
const path = require("path");
const multer_1 = require("multer");
const path_1 = require("path");
const cloudinary_service_1 = require("./modules/file-upload/cloudinary.service");
const database_1 = require("./modules/database");
const pngFileFilter = (req, file, callback) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.png') {
        req.fileValidationError = 'Invalid file type';
        return callback(new Error('Invalid file type'), false);
    }
    return callback(null, true);
};
let AppController = class AppController {
    constructor(appService, cs, fileService) {
        this.appService = appService;
        this.cs = cs;
        this.fileService = fileService;
    }
    getHello() {
        return this.appService.getHello();
    }
    uploadAvatar(file) {
        return new Promise((resolve, reject) => {
            this.cs.fileUpload(__dirname + '/../' + file.path, async (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(await this.fileService.createOne({
                    path: result.url,
                    filename: file.originalname,
                    mimetype: file.mimetype,
                }));
            });
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    common_1.Post('upload'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                return cb(null, `${randomName}${path_1.extname(file.originalname)}`);
            },
        }),
    })),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "uploadAvatar", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        cloudinary_service_1.CloudinaryService,
        database_1.FileService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map