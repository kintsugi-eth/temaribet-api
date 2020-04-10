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
const database_1 = require("../../../database");
const args_1 = require("../args/args");
let CourseResolver = class CourseResolver {
    constructor(courseService, instructorService, categoryService, courseLevelService, languageService, fileService, courseChapterService) {
        this.courseService = courseService;
        this.instructorService = instructorService;
        this.categoryService = categoryService;
        this.courseLevelService = courseLevelService;
        this.languageService = languageService;
        this.fileService = fileService;
        this.courseChapterService = courseChapterService;
    }
    allCourses(args) {
        return this.courseService.findAll(args);
    }
    findCourse(id) {
        return this.courseService.findOne(id);
    }
    instructor(course) {
        return this.instructorService.findOne(course.instructor);
    }
    category(course) {
        return this.categoryService.findOne(course.category);
    }
    courseLevel(course) {
        return this.courseLevelService.findOne(course.courseLevel);
    }
    language(course) {
        return this.languageService.findOne(course.language);
    }
    courseImage(course) {
        return this.fileService.findOne(course.courseImage);
    }
    courseChapter(course) {
        return this.courseChapterService.findByCourseId(course._id);
    }
};
__decorate([
    graphql_1.Query(returns => [types_1.Course]),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [args_1.CourseArg]),
    __metadata("design:returntype", void 0)
], CourseResolver.prototype, "allCourses", null);
__decorate([
    graphql_1.Query(returns => types_1.Course),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseResolver.prototype, "findCourse", null);
__decorate([
    graphql_1.ResolveProperty(returns => types_1.Instructor),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseResolver.prototype, "instructor", null);
__decorate([
    graphql_1.ResolveProperty(returns => types_1.Category),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseResolver.prototype, "category", null);
__decorate([
    graphql_1.ResolveProperty(returns => types_1.CourseLevel),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseResolver.prototype, "courseLevel", null);
__decorate([
    graphql_1.ResolveProperty(returns => types_1.Language),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseResolver.prototype, "language", null);
__decorate([
    graphql_1.ResolveProperty(returns => types_1.File),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseResolver.prototype, "courseImage", null);
__decorate([
    graphql_1.ResolveProperty(returns => types_1.CourseChapter),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseResolver.prototype, "courseChapter", null);
CourseResolver = __decorate([
    graphql_1.Resolver(of => types_1.Course),
    __metadata("design:paramtypes", [database_1.CourseService,
        database_1.InstructorService,
        database_1.CategoryService,
        database_1.CourseLevelService,
        database_1.LanguageService,
        database_1.FileService,
        database_1.CourseChapterService])
], CourseResolver);
exports.CourseResolver = CourseResolver;
//# sourceMappingURL=course.resolver.js.map