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
const base_1 = require("../../../shared/models/base");
const type_graphql_1 = require("type-graphql");
const language_1 = require("./language");
const __1 = require("../..");
const CourseLevel_1 = require("./CourseLevel");
const courseCategory_1 = require("./courseCategory");
let Course = class Course extends base_1.Base {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Course.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Course.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(returns => __1.Instructor),
    __metadata("design:type", __1.Instructor)
], Course.prototype, "instructor", void 0);
__decorate([
    type_graphql_1.Field(returns => CourseLevel_1.CourseLevel),
    __metadata("design:type", CourseLevel_1.CourseLevel)
], Course.prototype, "courseLevel", void 0);
__decorate([
    type_graphql_1.Field(returns => courseCategory_1.CourseCategory),
    __metadata("design:type", courseCategory_1.CourseCategory)
], Course.prototype, "courseCategory", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], Course.prototype, "rate", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], Course.prototype, "numOfChapters", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], Course.prototype, "courseFee", void 0);
__decorate([
    type_graphql_1.Field(returns => language_1.Language),
    __metadata("design:type", language_1.Language)
], Course.prototype, "language", void 0);
Course = __decorate([
    type_graphql_1.ObjectType()
], Course);
exports.Course = Course;
//# sourceMappingURL=course.js.map