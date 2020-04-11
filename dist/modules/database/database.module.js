"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const schemas_1 = require("./schema/schemas");
const mongoose_1 = require("@nestjs/mongoose");
const services_1 = require("./services/services");
const services = [
    services_1.CategoryService,
    services_1.ContentTypeService,
    services_1.CourseChapterContentService,
    services_1.CourseChapterService,
    services_1.CourseLevelService,
    services_1.CourseService,
    services_1.EnrollmentService,
    services_1.FeedbackService,
    services_1.FileService,
    services_1.InstructorService,
    services_1.LanguageService,
    services_1.LearningProgressService,
    services_1.RoleService,
    services_1.StudentService,
    services_1.UserService,
];
const models = [
    { name: 'ContentType', schema: schemas_1.contentTypeSchema },
    { name: 'Category', schema: schemas_1.categorySchema },
    { name: 'CourseLevel', schema: schemas_1.courseLevelSchema },
    { name: 'Language', schema: schemas_1.languageSchema },
    { name: 'Instructor', schema: schemas_1.instructorSchema },
    { name: 'Student', schema: schemas_1.studentSchema },
    { name: 'Course', schema: schemas_1.courseSchema },
    { name: 'CourseChapter', schema: schemas_1.courseChapterSchema },
    { name: 'CourseChapterContent', schema: schemas_1.courseChapterContentSchema },
    { name: 'File', schema: schemas_1.fileSchema },
    { name: 'Feedback', schema: schemas_1.feedbackSchema },
    { name: 'Enrollment', schema: schemas_1.enrollmentSchema },
    { name: 'LearningProgress', schema: schemas_1.learningProgressSchema },
    { name: 'Role', schema: schemas_1.roleSchema },
    { name: 'User', schema: schemas_1.userSchema },
];
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature(models),
        ],
        providers: services,
        exports: services,
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map