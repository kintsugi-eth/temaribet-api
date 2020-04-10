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
const dtos_1 = require("../DTO/dtos");
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
    graphql_1.Query(returns => [types_1.CourseChapter]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CourseChapterResolver.prototype, "courseChapters", null);
__decorate([
    graphql_1.Query(returns => types_1.CourseChapter),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseChapterResolver.prototype, "courseChapter", null);
__decorate([
    graphql_1.Mutation(returns => types_1.CourseChapter),
    __param(0, graphql_1.Args('courseChapterInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CourseChapterDto]),
    __metadata("design:returntype", void 0)
], CourseChapterResolver.prototype, "createCourseChapter", null);
__decorate([
    graphql_1.Mutation(returns => types_1.CourseChapter),
    __param(0, graphql_1.Args('id')), __param(1, graphql_1.Args('courseChapterInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_1.CourseChapterDto]),
    __metadata("design:returntype", void 0)
], CourseChapterResolver.prototype, "updateCourseChapter", null);
__decorate([
    graphql_1.Mutation(returns => types_1.Deleted),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseChapterResolver.prototype, "deleteCourseChapter", null);
__decorate([
    graphql_1.ResolveProperty(returns => [types_1.CourseChapterContent]),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CourseChapterResolver.prototype, "courseChapterContents", null);
CourseChapterResolver = __decorate([
    graphql_1.Resolver(of => types_1.CourseChapter),
    __metadata("design:paramtypes", [database_1.CourseChapterService,
        database_1.CourseChapterContentService])
], CourseChapterResolver);
exports.CourseChapterResolver = CourseChapterResolver;
//# sourceMappingURL=courseChapter.resolver.js.map