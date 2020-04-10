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
const jwt = require("jsonwebtoken");
const common_1 = require("@nestjs/common");
const config_service_1 = require("../../../config/config.service");
const database_1 = require("../../database");
let AuthService = class AuthService {
    constructor(usersService, configService) {
        this.usersService = usersService;
        this.configService = configService;
    }
    async register(user) {
        const exists = await this.usersService.findOne(user);
        if (exists == null || exists['username'] !== user.username) {
            await this.usersService.create(user);
            return await this.usersService.findOne(user);
        }
        else {
            return exists;
        }
    }
    createToken(user) {
        const expiresIn = 3600;
        const accessToken = jwt.sign({
            id: user._id,
            username: user.username,
            role: user.role,
        }, this.configService.jwtSecret, { expiresIn });
        return {
            expiresIn,
            accessToken,
        };
    }
    async validateUser(payload) {
        return await this.usersService.findOne(payload.id);
    }
    async authenticate(user) {
        const exists = await this.usersService.findOne(user);
        if (exists['password'] === user.password) {
            return exists;
        }
        return null;
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [database_1.UserService,
        config_service_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map