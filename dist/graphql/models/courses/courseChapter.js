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
const course_1 = require("./course");
const type_graphql_1 = require("type-graphql");
let CourseChapter = class CourseChapter extends base_1.Base {
};
__decorate([
    type_graphql_1.Field(returns => course_1.Course),
    __metadata("design:type", course_1.Course)
], CourseChapter.prototype, "course", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseChapter.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], CourseChapter.prototype, "numOfReading", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], CourseChapter.prototype, "numOfVideo", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], CourseChapter.prototype, "numOfAssignment", void 0);
CourseChapter = __decorate([
    type_graphql_1.ObjectType()
], CourseChapter);
exports.CourseChapter = CourseChapter;
//# sourceMappingURL=courseChapter.js.map