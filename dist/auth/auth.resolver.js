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
const bcryptjs = require("bcryptjs");
const graphql_1 = require("@nestjs/graphql");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("./service/user.service");
const decorators_1 = require("../shared/decorators/decorators");
const loginUser_dto_1 = require("../shared/dto/loginUser.dto");
const auth_service_1 = require("./service/auth.service");
const _createUser_dto_1 = require("../shared/dto/create/ createUser.dto");
const common_1 = require("@nestjs/common");
const graphql_auth_guard_1 = require("../shared/guards/graphql-auth.guard");
const graphql_2 = require("../graphql");
let AuthResolver = class AuthResolver {
    constructor(jwt, userService, authService) {
        this.jwt = jwt;
        this.userService = userService;
        this.authService = authService;
    }
    async users() {
        return this.userService.findAll();
    }
    async login(loginInput, res) {
        const user = await this.userService.findByUsername(loginInput.username);
        if (!user) {
            throw Error('username or password incorrect');
        }
        const valid = await bcryptjs.compare(loginInput.password, user['password']);
        if (!valid) {
            throw Error('username or password incorrect');
        }
        const jwt = this.authService.createToken(user);
        res.cookie('token', jwt, { httpOnly: true });
        return user;
    }
    async signup(createUserDto, res) {
        const usernameExists = await this.userService.findByUsername(createUserDto.username);
        if (usernameExists) {
            throw Error('Phone Number is already in use');
        }
        const password = await bcryptjs.hash(createUserDto.password, 10);
        const user = await this.userService.create(Object.assign(Object.assign({}, createUserDto), { password }));
        const jwt = this.authService.createToken(user);
        res.cookie('token', jwt, { httpOnly: true });
        return user;
    }
    async me(user) {
        return user;
    }
};
__decorate([
    graphql_1.Query(returns => [graphql_2.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "users", null);
__decorate([
    graphql_1.Mutation(returns => graphql_2.User),
    __param(0, graphql_1.Args('loginInput')),
    __param(1, decorators_1.ResGql()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginUser_dto_1.LoginUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "login", null);
__decorate([
    graphql_1.Mutation(returns => graphql_2.User),
    __param(0, graphql_1.Args('signUpInput')),
    __param(1, decorators_1.ResGql()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_createUser_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "signup", null);
__decorate([
    common_1.UseGuards(graphql_auth_guard_1.GqlAuthGuard),
    graphql_1.Query(returns => graphql_2.User),
    __param(0, decorators_1.GqlUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_2.User]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "me", null);
AuthResolver = __decorate([
    graphql_1.Resolver('Auth'),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_service_1.UserService,
        auth_service_1.AuthService])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map