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
const services_1 = require("../services/services");
const deleted_1 = require("../../graphql/models/deleted");
const contentType_dto_1 = require("../../graphql/dto/courses/contentType.dto");
let ContentTypeResolver = class ContentTypeResolver {
    constructor(contentTypeService) {
        this.contentTypeService = contentTypeService;
    }
    contentTypes() {
        return this.contentTypeService.findAll();
    }
    contentType(id) {
        return this.contentTypeService.findOne(id);
    }
    createContentType(contentTypeInput) {
        return this.contentTypeService.createOne(contentTypeInput);
    }
    updateContentType(id, contentTypeInput) {
        return this.contentTypeService.updateOne(id, contentTypeInput);
    }
    deleteContentType(id) {
        return this.contentTypeService.deleteOne(id);
    }
};
__decorate([
    graphql_1.Query(returns => [graphql_2.ContentType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContentTypeResolver.prototype, "contentTypes", null);
__decorate([
    graphql_1.Query(returns => graphql_2.ContentType),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContentTypeResolver.prototype, "contentType", null);
__decorate([
    graphql_1.Mutation(returns => graphql_2.ContentType),
    __param(0, graphql_1.Args('contentTypeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contentType_dto_1.ContentTypeDto]),
    __metadata("design:returntype", void 0)
], ContentTypeResolver.prototype, "createContentType", null);
__decorate([
    graphql_1.Mutation(returns => graphql_2.ContentType),
    __param(0, graphql_1.Args('id')), __param(1, graphql_1.Args('contentTypeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, contentType_dto_1.ContentTypeDto]),
    __metadata("design:returntype", void 0)
], ContentTypeResolver.prototype, "updateContentType", null);
__decorate([
    graphql_1.Mutation(returns => deleted_1.Deleted),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContentTypeResolver.prototype, "deleteContentType", null);
ContentTypeResolver = __decorate([
    graphql_1.Resolver(of => graphql_2.ContentType),
    __metadata("design:paramtypes", [services_1.ContentTypeService])
], ContentTypeResolver);
exports.ContentTypeResolver = ContentTypeResolver;
//# sourceMappingURL=ContentType.resolver.js.map