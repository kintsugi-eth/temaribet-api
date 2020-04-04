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
const course_dto_1 = require("../../graphql/dto/courses/course.dto");
const CourseLevel_1 = require("../../graphql/models/courses/CourseLevel");
const courseCategory_1 = require("../../graphql/models/courses/courseCategory");
let CourseResolver = class CourseResolver {
    constructor(courseService, courseChapterService, courseLevelService, courseCategoryService) {
        this.courseService = courseService;
        this.courseChapterService = courseChapterService;
        this.courseLevelService = courseLevelService;
        this.courseCategoryService = courseCategoryService;
    }
    courses() {
        return this.courseService.findAll();
    }
    course(id) {
        return this.courseService.findOne(id);
    }
    createCourse(courseInput) {
        return this.courseService.createOne(courseInput);
    }
    updateCourse(id, courseInput) {
        return this.courseService.updateOne(id, courseInput);
    }
    deleteCourse(id) {
        return this.courseService.deleteOne(id);
    }
    courseChapters(course) {
        return this.courseChapterService.findByCourseId(course._id);
    }
    courseLevel(course) {
        return this.courseChapterService.findByCourseId(course.courseLevel);
    }
    courseCategory(course) {
        return this.courseChapterService.findByCourseId(course.courseCategory);
    }
};
__decorate([
    graphql_1.Query(returns => [graphql_2.Course]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CourseResolver.prototype, "courses", null);
__decorate([
    graphql_1.Query(returns => graphql_2.Course),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseResolver.prototype, "course", null);
__decorate([
    graphql_1.Mutation(returns => graphql_2.Course),
    __param(0, graphql_1.Args('courseInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_dto_1.CourseDto]),
    __metadata("design:returntype", void 0)
], CourseResolver.prototype, "createCourse", null);
__decorate([
    graphql_1.Mutation(returns => graphql_2.Course),
    __param(0, graphql_1.Args('id')), __param(1, graphql_1.Args('courseInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, course_dto_1.CourseDto]),
    __metadata("design:returntype", void 0)
], CourseResolver.prototype, "updateCourse", null);
__decorate([
    graphql_1.Mutation(returns => deleted_1.Deleted),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseResolver.prototype, "deleteCourse", null);
__decorate([
    graphql_1.ResolveProperty(returns => [graphql_2.CourseChapter]),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseResolver.prototype, "courseChapters", null);
__decorate([
    graphql_1.ResolveProperty(returns => CourseLevel_1.CourseLevel),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseResolver.prototype, "courseLevel", null);
__decorate([
    graphql_1.ResolveProperty(returns => courseCategory_1.CourseCategory),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseResolver.prototype, "courseCategory", null);
CourseResolver = __decorate([
    graphql_1.Resolver(of => graphql_2.Course),
    __metadata("design:paramtypes", [services_1.CourseService,
        services_1.CourseChapterService,
        services_1.CourseLevelService,
        services_1.CourseCategoryService])
], CourseResolver);
exports.CourseResolver = CourseResolver;
//# sourceMappingURL=Course.resolver.js.map