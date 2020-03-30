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
const courseChapter_dto_1 = require("../../graphql/dto/courses/courseChapter.dto");
let CourseChapterResolver = class CourseChapterResolver {
    constructor(courseChapterService, courseChapterContentService) {
        this.courseChapterService = courseChapterService;
        this.courseChapterContentService = courseChapterContentService;
    }
    courseChapters() {
        return this.courseChapterService.findAll();
    }
    courseChapter(id) {
        return this.courseChapterService.findOne(id);
    }
    createCourseChapter(courseChapterInput) {
        return this.courseChapterService.createOne(courseChapterInput);
    }
    updateCourseChapter(id, courseChapterInput) {
        return this.courseChapterService.updateOne(id, courseChapterInput);
    }
    deleteCourseChapter(id) {
        return this.courseChapterService.deleteOne(id);
    }
    courseChapterContents(courseChapter) {
        return this.courseChapterContentService.findByCourseChapter(courseChapter._id);
    }
};
__decorate([
    graphql_1.Query(returns => [graphql_2.CourseChapter]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CourseChapterResolver.prototype, "courseChapters", null);
__decorate([
    graphql_1.Query(returns => graphql_2.CourseChapter),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseChapterResolver.prototype, "courseChapter", null);
__decorate([
    graphql_1.Mutation(returns => graphql_2.CourseChapter),
    __param(0, graphql_1.Args('courseChapterInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [courseChapter_dto_1.CourseChapterDto]),
    __metadata("design:returntype", void 0)
], CourseChapterResolver.prototype, "createCourseChapter", null);
__decorate([
    graphql_1.Mutation(returns => graphql_2.CourseChapter),
    __param(0, graphql_1.Args('id')), __param(1, graphql_1.Args('courseChapterInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, courseChapter_dto_1.CourseChapterDto]),
    __metadata("design:returntype", void 0)
], CourseChapterResolver.prototype, "updateCourseChapter", null);
__decorate([
    graphql_1.Mutation(returns => deleted_1.Deleted),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseChapterResolver.prototype, "deleteCourseChapter", null);
__decorate([
    graphql_1.ResolveProperty(returns => [graphql_2.CourseChapterContent]),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseChapterResolver.prototype, "courseChapterContents", null);
CourseChapterResolver = __decorate([
    graphql_1.Resolver(of => graphql_2.CourseChapter),
    __metadata("design:paramtypes", [services_1.CourseChapterService,
        services_1.CourseChapterContentService])
], CourseChapterResolver);
exports.CourseChapterResolver = CourseChapterResolver;
//# sourceMappingURL=CourseChapter.resolver.js.map