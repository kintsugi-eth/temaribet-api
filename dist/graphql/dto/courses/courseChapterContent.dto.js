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
const type_graphql_1 = require("type-graphql");
let CourseChapterContentDto = class CourseChapterContentDto {
};
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], CourseChapterContentDto.prototype, "order", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseChapterContentDto.prototype, "courseChapter", void 0);
__decorate([
    type_graphql_1.Field(returns => Boolean),
    __metadata("design:type", Boolean)
], CourseChapterContentDto.prototype, "isMandatory", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], CourseChapterContentDto.prototype, "timeRequiredInSec", void 0);
__decorate([
    type_graphql_1.Field(returns => Boolean),
    __metadata("design:type", Boolean)
], CourseChapterContentDto.prototype, "isOpenForFree", void 0);
CourseChapterContentDto = __decorate([
    type_graphql_1.InputType()
], CourseChapterContentDto);
exports.CourseChapterContentDto = CourseChapterContentDto;
//# sourceMappingURL=courseChapterContent.dto.js.map