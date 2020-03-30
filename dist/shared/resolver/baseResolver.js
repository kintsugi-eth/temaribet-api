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
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("../../graphql");
let BaseResolver = class BaseResolver {
    __resolveType(obj) {
        if (obj instanceof graphql_2.Course) {
            return 'CourseDto';
        }
        else if (obj instanceof graphql_2.ContentType) {
            return 'ContentTypeDto';
        }
    }
    getAll() {
        return;
    }
};
__decorate([
    graphql_1.ResolveProperty(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BaseResolver.prototype, "__resolveType", null);
__decorate([
    graphql_1.Query(returns => ['T']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BaseResolver.prototype, "getAll", null);
BaseResolver = __decorate([
    graphql_1.Resolver('T')
], BaseResolver);
exports.BaseResolver = BaseResolver;
//# sourceMappingURL=baseResolver.js.map