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
const database_1 = require("../../../database");
const dtos_1 = require("../DTO/dtos");
const types_1 = require("../types");
let CourseLevelResolver = class CourseLevelResolver {
    constructor(courseLevelService) {
        this.courseLevelService = courseLevelService;
    }
    courseLevels() {
        return this.courseLevelService.findAll();
    }
    courseLevel(id) {
        return this.courseLevelService.findOne(id);
    }
    createCourseLevel(courseLevelInput) {
        return this.courseLevelService.createOne(courseLevelInput);
    }
    updateCourseLevel(id, courseLevelInput) {
        return this.courseLevelService.updateOne(id, courseLevelInput);
    }
    deleteCourse(id) {
        return this.courseLevelService.deleteOne(id);
    }
};
__decorate([
    graphql_1.Query(returns => [types_1.CourseLevel]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CourseLevelResolver.prototype, "courseLevels", null);
__decorate([
    graphql_1.Query(returns => types_1.CourseLevel),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseLevelResolver.prototype, "courseLevel", null);
__decorate([
    graphql_1.Mutation(returns => types_1.CourseLevel),
    __param(0, graphql_1.Args('courseLevelInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CourseLevelDto]),
    __metadata("design:returntype", void 0)
], CourseLevelResolver.prototype, "createCourseLevel", null);
__decorate([
    graphql_1.Mutation(returns => types_1.CourseLevel),
    __param(0, graphql_1.Args('id')), __param(1, graphql_1.Args('courseLevelInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_1.CourseLevelDto]),
    __metadata("design:returntype", void 0)
], CourseLevelResolver.prototype, "updateCourseLevel", null);
__decorate([
    graphql_1.Mutation(returns => types_1.Deleted),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseLevelResolver.prototype, "deleteCourse", null);
CourseLevelResolver = __decorate([
    graphql_1.Resolver(of => types_1.CourseLevel),
    __metadata("design:paramtypes", [database_1.CourseLevelService])
], CourseLevelResolver);
exports.CourseLevelResolver = CourseLevelResolver;
//# sourceMappingURL=courseLevel.resolver.js.map