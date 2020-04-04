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
const deleted_1 = require("../../graphql/models/deleted");
const courseCategory_1 = require("../../graphql/models/courses/courseCategory");
const courseCategory_dto_1 = require("../../graphql/dto/courses/courseCategory.dto");
const services_1 = require("../services/services");
let CourseCategoryResolver = class CourseCategoryResolver {
    constructor(courseCategoryService) {
        this.courseCategoryService = courseCategoryService;
    }
    courses() {
        return this.courseCategoryService.findAll();
    }
    course(id) {
        return this.courseCategoryService.findOne(id);
    }
    createCourse(courseCategoryInput) {
        return this.courseCategoryService.createOne(courseCategoryInput);
    }
    updateCourse(id, courseCategoryInput) {
        return this.courseCategoryService.updateOne(id, courseCategoryInput);
    }
    deleteCourse(id) {
        return this.courseCategoryService.deleteOne(id);
    }
};
__decorate([
    graphql_1.Query(returns => [courseCategory_1.CourseCategory]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CourseCategoryResolver.prototype, "courses", null);
__decorate([
    graphql_1.Query(returns => courseCategory_1.CourseCategory),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseCategoryResolver.prototype, "course", null);
__decorate([
    graphql_1.Mutation(returns => courseCategory_1.CourseCategory),
    __param(0, graphql_1.Args('courseCategoryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [courseCategory_dto_1.CourseCategoryDto]),
    __metadata("design:returntype", void 0)
], CourseCategoryResolver.prototype, "createCourse", null);
__decorate([
    graphql_1.Mutation(returns => courseCategory_1.CourseCategory),
    __param(0, graphql_1.Args('id')), __param(1, graphql_1.Args('courseCategoryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, courseCategory_dto_1.CourseCategoryDto]),
    __metadata("design:returntype", void 0)
], CourseCategoryResolver.prototype, "updateCourse", null);
__decorate([
    graphql_1.Mutation(returns => deleted_1.Deleted),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseCategoryResolver.prototype, "deleteCourse", null);
CourseCategoryResolver = __decorate([
    graphql_1.Resolver(of => courseCategory_1.CourseCategory),
    __metadata("design:paramtypes", [services_1.CourseCategoryService])
], CourseCategoryResolver);
exports.CourseCategoryResolver = CourseCategoryResolver;
//# sourceMappingURL=CourseCategory.resolver.js.map