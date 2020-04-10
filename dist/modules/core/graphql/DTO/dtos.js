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
let CategoryDto = class CategoryDto {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CategoryDto.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CategoryDto.prototype, "slug", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CategoryDto.prototype, "icon", void 0);
__decorate([
    type_graphql_1.Field(returns => Boolean),
    __metadata("design:type", Boolean)
], CategoryDto.prototype, "isActive", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CategoryDto.prototype, "parent", void 0);
CategoryDto = __decorate([
    type_graphql_1.InputType()
], CategoryDto);
exports.CategoryDto = CategoryDto;
let ContentTypeDto = class ContentTypeDto {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ContentTypeDto.prototype, "name", void 0);
ContentTypeDto = __decorate([
    type_graphql_1.InputType()
], ContentTypeDto);
exports.ContentTypeDto = ContentTypeDto;
let CourseDto = class CourseDto {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseDto.prototype, "instructor", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseDto.prototype, "category", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseDto.prototype, "courseLevel", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseDto.prototype, "courseTitle", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseDto.prototype, "courseSlug", void 0);
__decorate([
    type_graphql_1.Field(returns => [String]),
    __metadata("design:type", Array)
], CourseDto.prototype, "keywords", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseDto.prototype, "overview", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseDto.prototype, "courseImage", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseDto.prototype, "language", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseDto.prototype, "duration", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], CourseDto.prototype, "price", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], CourseDto.prototype, "rate", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], CourseDto.prototype, "rateCount", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], CourseDto.prototype, "strikeOutPrice", void 0);
__decorate([
    type_graphql_1.Field(returns => Boolean),
    __metadata("design:type", Boolean)
], CourseDto.prototype, "isActive", void 0);
CourseDto = __decorate([
    type_graphql_1.InputType()
], CourseDto);
exports.CourseDto = CourseDto;
let CourseChapterDto = class CourseChapterDto {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseChapterDto.prototype, "course", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseChapterDto.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], CourseChapterDto.prototype, "order", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], CourseChapterDto.prototype, "numOfReading", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], CourseChapterDto.prototype, "numOfVideo", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], CourseChapterDto.prototype, "numOfAssignment", void 0);
CourseChapterDto = __decorate([
    type_graphql_1.InputType()
], CourseChapterDto);
exports.CourseChapterDto = CourseChapterDto;
let CourseChapterContentDto = class CourseChapterContentDto {
};
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], CourseChapterContentDto.prototype, "order", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseChapterContentDto.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseChapterContentDto.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseChapterContentDto.prototype, "courseChapter", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseChapterContentDto.prototype, "contentType", void 0);
__decorate([
    type_graphql_1.Field(),
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
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], CourseChapterContentDto.prototype, "duration", void 0);
CourseChapterContentDto = __decorate([
    type_graphql_1.InputType()
], CourseChapterContentDto);
exports.CourseChapterContentDto = CourseChapterContentDto;
let CourseLevelDto = class CourseLevelDto {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseLevelDto.prototype, "name", void 0);
CourseLevelDto = __decorate([
    type_graphql_1.InputType()
], CourseLevelDto);
exports.CourseLevelDto = CourseLevelDto;
let EnrollmentDto = class EnrollmentDto {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], EnrollmentDto.prototype, "enrollment", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], EnrollmentDto.prototype, "courseChapterContent", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], EnrollmentDto.prototype, "beginTimestamp", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], EnrollmentDto.prototype, "completionTimestamp", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], EnrollmentDto.prototype, "status", void 0);
EnrollmentDto = __decorate([
    type_graphql_1.InputType()
], EnrollmentDto);
exports.EnrollmentDto = EnrollmentDto;
let FeedbackDto = class FeedbackDto {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FeedbackDto.prototype, "student", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FeedbackDto.prototype, "course", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FeedbackDto.prototype, "isPaidSubscription", void 0);
FeedbackDto = __decorate([
    type_graphql_1.InputType()
], FeedbackDto);
exports.FeedbackDto = FeedbackDto;
let FileDto = class FileDto {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FileDto.prototype, "path", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FileDto.prototype, "filename", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FileDto.prototype, "mimetype", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], FileDto.prototype, "uploader", void 0);
FileDto = __decorate([
    type_graphql_1.InputType()
], FileDto);
exports.FileDto = FileDto;
let InstructorDto = class InstructorDto {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], InstructorDto.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], InstructorDto.prototype, "instructorSlug", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], InstructorDto.prototype, "contactEmail", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], InstructorDto.prototype, "mobile", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], InstructorDto.prototype, "linkFacebook", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], InstructorDto.prototype, "linkLinkedin", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], InstructorDto.prototype, "linkTwitter", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], InstructorDto.prototype, "qualification", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], InstructorDto.prototype, "introductionBrief", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], InstructorDto.prototype, "profileImage", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], InstructorDto.prototype, "numOfPublishedCourses", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], InstructorDto.prototype, "numOfEnrolledStudents", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], InstructorDto.prototype, "averageReviewRating", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], InstructorDto.prototype, "numOfReview", void 0);
InstructorDto = __decorate([
    type_graphql_1.InputType()
], InstructorDto);
exports.InstructorDto = InstructorDto;
let LanguageDto = class LanguageDto {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], LanguageDto.prototype, "name", void 0);
LanguageDto = __decorate([
    type_graphql_1.InputType()
], LanguageDto);
exports.LanguageDto = LanguageDto;
let LearningProgressDto = class LearningProgressDto {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], LearningProgressDto.prototype, "enrollment", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], LearningProgressDto.prototype, "courseChapterContent", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], LearningProgressDto.prototype, "beginTimestamp", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], LearningProgressDto.prototype, "completionTimestamp", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], LearningProgressDto.prototype, "status", void 0);
LearningProgressDto = __decorate([
    type_graphql_1.InputType()
], LearningProgressDto);
exports.LearningProgressDto = LearningProgressDto;
let RoleDto = class RoleDto {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RoleDto.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], RoleDto.prototype, "description", void 0);
RoleDto = __decorate([
    type_graphql_1.InputType()
], RoleDto);
exports.RoleDto = RoleDto;
let StudentDto = class StudentDto {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], StudentDto.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], StudentDto.prototype, "profileImage", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], StudentDto.prototype, "contactEmail", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], StudentDto.prototype, "dob", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], StudentDto.prototype, "numOfCoursesEnrolled", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], StudentDto.prototype, "numOfCourseCompleted", void 0);
StudentDto = __decorate([
    type_graphql_1.InputType()
], StudentDto);
exports.StudentDto = StudentDto;
let UserDto = class UserDto {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserDto.prototype, "firstName", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserDto.prototype, "lastName", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserDto.prototype, "role", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserDto.prototype, "isActive", void 0);
UserDto = __decorate([
    type_graphql_1.InputType()
], UserDto);
exports.UserDto = UserDto;
//# sourceMappingURL=dtos.js.map