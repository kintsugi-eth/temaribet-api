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
const courseChapterContent_dto_1 = require("../../graphql/dto/courses/courseChapterContent.dto");
let CourseChapterContentResolver = class CourseChapterContentResolver {
    constructor(courseChapterContentService) {
        this.courseChapterContentService = courseChapterContentService;
    }
    courseChapterContents() {
        return this.courseChapterContentService.findAll();
    }
    courseChapterContent(id) {
        return this.courseChapterContentService.findOne(id);
    }
    createCourseChapterContent(createCourseChapterContentInput) {
        return this.courseChapterContentService.createOne(createCourseChapterContentInput);
    }
    updateCourseChapterContent(id, updateCourseChapterContentInput) {
        return this.courseChapterContentService.updateOne(id, updateCourseChapterContentInput);
    }
    deleteCourseChapterContent(id) {
        return this.courseChapterContentService.deleteOne(id);
    }
};
__decorate([
    graphql_1.Query(returns => [graphql_2.CourseChapterContent]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CourseChapterContentResolver.prototype, "courseChapterContents", null);
__decorate([
    graphql_1.Query(returns => graphql_2.CourseChapterContent),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseChapterContentResolver.prototype, "courseChapterContent", null);
__decorate([
    graphql_1.Mutation(returns => graphql_2.CourseChapterContent),
    __param(0, graphql_1.Args('createCourseChapterContentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [courseChapterContent_dto_1.CourseChapterContentDto]),
    __metadata("design:returntype", void 0)
], CourseChapterContentResolver.prototype, "createCourseChapterContent", null);
__decorate([
    graphql_1.Mutation(returns => graphql_2.CourseChapterContent),
    __param(0, graphql_1.Args('id')),
    __param(1, graphql_1.Args('updateCourseChapterContentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, courseChapterContent_dto_1.CourseChapterContentDto]),
    __metadata("design:returntype", void 0)
], CourseChapterContentResolver.prototype, "updateCourseChapterContent", null);
__decorate([
    graphql_1.Mutation(returns => deleted_1.Deleted),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CourseChapterContentResolver.prototype, "deleteCourseChapterContent", null);
CourseChapterContentResolver = __decorate([
    graphql_1.Resolver(of => graphql_2.CourseChapterContent),
    __metadata("design:paramtypes", [services_1.CourseChapterContentService])
], CourseChapterContentResolver);
exports.CourseChapterContentResolver = CourseChapterContentResolver;
//# sourceMappingURL=CourseChapterContent.resolver.js.map