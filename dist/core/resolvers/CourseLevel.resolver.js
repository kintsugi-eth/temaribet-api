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
const services_1 = require("../services/services");
const CourseLevel_1 = require("../../graphql/models/courses/CourseLevel");
const courseLevel_dto_1 = require("../../graphql/dto/courses/courseLevel.dto");
let CourseCategoryResolver = class CourseCategoryResolver {
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
    graphql_1.Query(returns => [CourseLevel_1.CourseLevel]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CourseCategoryResolver.prototype, "courseLevels", null);
__decorate([
    graphql_1.Query(returns => CourseLevel_1.CourseLevel),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseCategoryResolver.prototype, "courseLevel", null);
__decorate([
    graphql_1.Mutation(returns => CourseLevel_1.CourseLevel),
    __param(0, graphql_1.Args('courseLevelInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [courseLevel_dto_1.CourseLevelDto]),
    __metadata("design:returntype", void 0)
], CourseCategoryResolver.prototype, "createCourseLevel", null);
__decorate([
    graphql_1.Mutation(returns => CourseLevel_1.CourseLevel),
    __param(0, graphql_1.Args('id')), __param(1, graphql_1.Args('courseLevelInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, courseLevel_dto_1.CourseLevelDto]),
    __metadata("design:returntype", void 0)
], CourseCategoryResolver.prototype, "updateCourseLevel", null);
__decorate([
    graphql_1.Mutation(returns => deleted_1.Deleted),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseCategoryResolver.prototype, "deleteCourse", null);
CourseCategoryResolver = __decorate([
    graphql_1.Resolver(of => CourseLevel_1.CourseLevel),
    __metadata("design:paramtypes", [services_1.CourseLevelService])
], CourseCategoryResolver);
exports.CourseCategoryResolver = CourseCategoryResolver;
//# sourceMappingURL=CourseLevel.resolver.js.map