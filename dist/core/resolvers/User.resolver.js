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
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("../../graphql");
const auth_1 = require("../../auth");
const deleted_1 = require("../../graphql/models/deleted");
const user_dto_1 = require("../../graphql/dto/actors/user.dto");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    users() {
        return this.userService.findAll();
    }
    user(id) {
        return this.userService.findAll();
    }
    createUser(userInput) {
        return this.userService.createOne(userInput);
    }
    updateUser(id, updateInput) {
        return this.userService.updateOne(id, updateInput);
    }
    deleteUser(id) {
        return this.userService.deleteOne(id);
    }
};
__decorate([
    graphql_1.Query(returns => [graphql_2.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "users", null);
__decorate([
    graphql_1.Query(returns => graphql_2.User),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "user", null);
__decorate([
    graphql_1.Mutation(returns => graphql_2.User),
    __param(0, graphql_1.Args('userInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "createUser", null);
__decorate([
    graphql_1.Mutation(returns => graphql_2.User),
    __param(0, graphql_1.Args('id')), __param(1, graphql_1.Args('updateInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "updateUser", null);
__decorate([
    graphql_1.Mutation(returns => deleted_1.Deleted),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "deleteUser", null);
UserResolver = __decorate([
    graphql_1.Resolver(of => graphql_2.User),
    __metadata("design:paramtypes", [auth_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=User.resolver.js.map