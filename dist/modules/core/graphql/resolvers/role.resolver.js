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
const types_1 = require("../types");
const graphql_1 = require("@nestjs/graphql");
const database_1 = require("../../../database");
const dtos_1 = require("../DTO/dtos");
let RoleResolver = class RoleResolver {
    constructor(roleService) {
        this.roleService = roleService;
    }
    roles() {
        return this.roleService.findAll();
    }
    role(id) {
        return this.roleService.findOne(id);
    }
    createRole(roleInput) {
        return this.roleService.createOne(roleInput);
    }
    updateRole(id, roleInput) {
        return this.roleService.updateOne(id, roleInput);
    }
    deleteRole(id) {
        return this.roleService.deleteOne(id);
    }
};
__decorate([
    graphql_1.Query(returns => [types_1.Language]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoleResolver.prototype, "roles", null);
__decorate([
    graphql_1.Query(returns => types_1.Language),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoleResolver.prototype, "role", null);
__decorate([
    graphql_1.Mutation(returns => types_1.Language),
    __param(0, graphql_1.Args('roleInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.RoleDto]),
    __metadata("design:returntype", void 0)
], RoleResolver.prototype, "createRole", null);
__decorate([
    graphql_1.Mutation(returns => types_1.Language),
    __param(0, graphql_1.Args('id')), __param(1, graphql_1.Args('roleInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_1.RoleDto]),
    __metadata("design:returntype", void 0)
], RoleResolver.prototype, "updateRole", null);
__decorate([
    graphql_1.Mutation(returns => types_1.Deleted),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RoleResolver.prototype, "deleteRole", null);
RoleResolver = __decorate([
    graphql_1.Resolver(of => types_1.Role),
    __metadata("design:paramtypes", [database_1.RoleService])
], RoleResolver);
exports.RoleResolver = RoleResolver;
//# sourceMappingURL=role.resolver.js.map