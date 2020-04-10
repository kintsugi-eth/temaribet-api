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
let Category = class Category {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Category.prototype, "slug", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Category.prototype, "icon", void 0);
__decorate([
    type_graphql_1.Field(returns => Boolean),
    __metadata("design:type", Boolean)
], Category.prototype, "isActive", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Category.prototype, "parent", void 0);
Category = __decorate([
    type_graphql_1.ObjectType()
], Category);
exports.Category = Category;
let CourseLevel = class CourseLevel {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseLevel.prototype, "name", void 0);
CourseLevel = __decorate([
    type_graphql_1.ObjectType()
], CourseLevel);
exports.CourseLevel = CourseLevel;
let Language = class Language {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Language.prototype, "name", void 0);
Language = __decorate([
    type_graphql_1.ObjectType()
], Language);
exports.Language = Language;
let ContentType = class ContentType {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ContentType.prototype, "name", void 0);
ContentType = __decorate([
    type_graphql_1.ObjectType()
], ContentType);
exports.ContentType = ContentType;
let Instructor = class Instructor {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Instructor.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Instructor.prototype, "instructorSlug", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Instructor.prototype, "contactEmail", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Instructor.prototype, "mobile", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Instructor.prototype, "linkFacebook", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Instructor.prototype, "linkLinkedin", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Instructor.prototype, "linkTwitter", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Instructor.prototype, "qualification", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Instructor.prototype, "introductionBrief", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Instructor.prototype, "profileImage", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], Instructor.prototype, "numOfPublishedCourses", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], Instructor.prototype, "numOfEnrolledStudents", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], Instructor.prototype, "averageReviewRating", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], Instructor.prototype, "numOfReview", void 0);
Instructor = __decorate([
    type_graphql_1.ObjectType()
], Instructor);
exports.Instructor = Instructor;
let Student = class Student {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Student.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Student.prototype, "profileImage", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Student.prototype, "contactEmail", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Student.prototype, "dob", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], Student.prototype, "numOfCoursesEnrolled", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], Student.prototype, "numOfCourseCompleted", void 0);
Student = __decorate([
    type_graphql_1.ObjectType()
], Student);
exports.Student = Student;
let Course = class Course {
};
__decorate([
    type_graphql_1.Field(returns => Instructor),
    __metadata("design:type", Instructor)
], Course.prototype, "instructor", void 0);
__decorate([
    type_graphql_1.Field(returns => Category),
    __metadata("design:type", Category)
], Course.prototype, "category", void 0);
__decorate([
    type_graphql_1.Field(returns => CourseLevel),
    __metadata("design:type", CourseLevel)
], Course.prototype, "courseLevel", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Course.prototype, "courseTitle", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Course.prototype, "courseSlug", void 0);
__decorate([
    type_graphql_1.Field(returns => [String]),
    __metadata("design:type", Array)
], Course.prototype, "keywords", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Course.prototype, "overview", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Course.prototype, "courseImage", void 0);
__decorate([
    type_graphql_1.Field(returns => Language),
    __metadata("design:type", Language)
], Course.prototype, "language", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Course.prototype, "duration", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], Course.prototype, "price", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], Course.prototype, "rate", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], Course.prototype, "rateCount", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], Course.prototype, "strikeOutPrice", void 0);
__decorate([
    type_graphql_1.Field(returns => Boolean),
    __metadata("design:type", Boolean)
], Course.prototype, "isActive", void 0);
Course = __decorate([
    type_graphql_1.ObjectType()
], Course);
exports.Course = Course;
let CourseChapter = class CourseChapter {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseChapter.prototype, "course", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseChapter.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], CourseChapter.prototype, "order", void 0);
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
let CourseChapterContent = class CourseChapterContent {
};
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], CourseChapterContent.prototype, "order", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseChapterContent.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseChapterContent.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseChapterContent.prototype, "courseChapter", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CourseChapterContent.prototype, "contentType", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], CourseChapterContent.prototype, "isMandatory", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], CourseChapterContent.prototype, "timeRequiredInSec", void 0);
__decorate([
    type_graphql_1.Field(returns => Boolean),
    __metadata("design:type", Boolean)
], CourseChapterContent.prototype, "isOpenForFree", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], CourseChapterContent.prototype, "duration", void 0);
CourseChapterContent = __decorate([
    type_graphql_1.ObjectType()
], CourseChapterContent);
exports.CourseChapterContent = CourseChapterContent;
let File = class File {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], File.prototype, "path", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], File.prototype, "filename", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], File.prototype, "mimetype", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], File.prototype, "uploader", void 0);
File = __decorate([
    type_graphql_1.ObjectType()
], File);
exports.File = File;
let Feedback = class Feedback {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Feedback.prototype, "student", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Feedback.prototype, "course", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Feedback.prototype, "isPaidSubscription", void 0);
Feedback = __decorate([
    type_graphql_1.ObjectType()
], Feedback);
exports.Feedback = Feedback;
let Enrollment = class Enrollment {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Enrollment.prototype, "enrollment", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Enrollment.prototype, "courseChapterContent", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Enrollment.prototype, "beginTimestamp", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Enrollment.prototype, "completionTimestamp", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], Enrollment.prototype, "status", void 0);
Enrollment = __decorate([
    type_graphql_1.ObjectType()
], Enrollment);
exports.Enrollment = Enrollment;
let LearningProgress = class LearningProgress {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], LearningProgress.prototype, "enrollment", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], LearningProgress.prototype, "courseChapterContent", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], LearningProgress.prototype, "beginTimestamp", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], LearningProgress.prototype, "completionTimestamp", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], LearningProgress.prototype, "status", void 0);
LearningProgress = __decorate([
    type_graphql_1.ObjectType()
], LearningProgress);
exports.LearningProgress = LearningProgress;
let Role = class Role {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Role.prototype, "description", void 0);
Role = __decorate([
    type_graphql_1.ObjectType()
], Role);
exports.Role = Role;
let User = class User {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "isActive", void 0);
User = __decorate([
    type_graphql_1.ObjectType()
], User);
exports.User = User;
let WishList = class WishList {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], WishList.prototype, "course", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], WishList.prototype, "user", void 0);
WishList = __decorate([
    type_graphql_1.ObjectType()
], WishList);
exports.WishList = WishList;
let Deleted = class Deleted {
};
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], Deleted.prototype, "n", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], Deleted.prototype, "ok", void 0);
__decorate([
    type_graphql_1.Field(returns => Number),
    __metadata("design:type", Number)
], Deleted.prototype, "deletedCount", void 0);
Deleted = __decorate([
    type_graphql_1.ObjectType()
], Deleted);
exports.Deleted = Deleted;
//# sourceMappingURL=types.js.map