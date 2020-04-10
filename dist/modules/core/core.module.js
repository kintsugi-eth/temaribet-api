"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const course_resolver_1 = require("./graphql/resolvers/course.resolver");
const database_module_1 = require("../database/database.module");
const category_resolver_1 = require("./graphql/resolvers/category.resolver");
const contentType_resolver_1 = require("./graphql/resolvers/contentType.resolver");
const courseChapter_resolver_1 = require("./graphql/resolvers/courseChapter.resolver");
const courseChapterContent_resolver_1 = require("./graphql/resolvers/courseChapterContent.resolver");
const courseLevel_resolver_1 = require("./graphql/resolvers/courseLevel.resolver");
const enrollment_resolver_1 = require("./graphql/resolvers/enrollment.resolver");
const feedback_resolver_1 = require("./graphql/resolvers/feedback.resolver");
const instructor_resolver_1 = require("./graphql/resolvers/instructor.resolver");
const language_resolver_1 = require("./graphql/resolvers/language.resolver");
const LearningProgress_resolver_1 = require("./graphql/resolvers/LearningProgress.resolver");
const role_resolver_1 = require("./graphql/resolvers/role.resolver");
const student_resolver_1 = require("./graphql/resolvers/student.resolver");
const user_resolver_1 = require("./graphql/resolvers/user.resolver");
const resolvers = [
    category_resolver_1.CategoryResolver,
    contentType_resolver_1.ContentTypeResolver,
    course_resolver_1.CourseResolver,
    courseChapter_resolver_1.CourseChapterResolver,
    courseChapterContent_resolver_1.CourseChapterContentResolver,
    courseLevel_resolver_1.CourseLevelResolver,
    enrollment_resolver_1.EnrollmentResolver,
    feedback_resolver_1.FeedbackResolver,
    instructor_resolver_1.InstructorResolver,
    language_resolver_1.LanguageResolver,
    LearningProgress_resolver_1.LearningProgressResolver,
    role_resolver_1.RoleResolver,
    student_resolver_1.StudentResolver,
    user_resolver_1.UserResolver,
];
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    common_1.Module({
        imports: [
            database_module_1.DatabaseModule,
        ],
        providers: resolvers,
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map