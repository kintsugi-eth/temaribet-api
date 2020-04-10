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
const types_1 = require("../types");
const dtos_1 = require("../DTO/dtos");
const database_1 = require("../../../database");
let LanguageResolver = class LanguageResolver {
    constructor(languageService) {
        this.languageService = languageService;
    }
    languages() {
        return this.languageService.findAll();
    }
    language(id) {
        return this.languageService.findOne(id);
    }
    createLanguage(languageInput) {
        return this.languageService.createOne(languageInput);
    }
    updateLanguage(id, languageInput) {
        return this.languageService.updateOne(id, languageInput);
    }
    deleteLanguage(id) {
        return this.languageService.deleteOne(id);
    }
};
__decorate([
    graphql_1.Query(returns => [types_1.Language]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LanguageResolver.prototype, "languages", null);
__decorate([
    graphql_1.Query(returns => types_1.Language),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LanguageResolver.prototype, "language", null);
__decorate([
    graphql_1.Mutation(returns => types_1.Language),
    __param(0, graphql_1.Args('languageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.LanguageDto]),
    __metadata("design:returntype", void 0)
], LanguageResolver.prototype, "createLanguage", null);
__decorate([
    graphql_1.Mutation(returns => types_1.Language),
    __param(0, graphql_1.Args('id')), __param(1, graphql_1.Args('languageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_1.LanguageDto]),
    __metadata("design:returntype", void 0)
], LanguageResolver.prototype, "updateLanguage", null);
__decorate([
    graphql_1.Mutation(returns => types_1.Deleted),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LanguageResolver.prototype, "deleteLanguage", null);
LanguageResolver = __decorate([
    graphql_1.Resolver(of => types_1.Language),
    __metadata("design:paramtypes", [database_1.LanguageService])
], LanguageResolver);
exports.LanguageResolver = LanguageResolver;
//# sourceMappingURL=language.resolver.js.map