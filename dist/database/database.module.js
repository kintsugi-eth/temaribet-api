"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const models_1 = require("../models");
const ContentType_resolver_1 = require("../core/resolvers/ContentType.resolver");
const Course_resolver_1 = require("../core/resolvers/Course.resolver");
const CourseChapter_resolver_1 = require("../core/resolvers/CourseChapter.resolver");
const CourseChapterContent_resolver_1 = require("../core/resolvers/CourseChapterContent.resolver");
const Enrollment_resolver_1 = require("../core/resolvers/Enrollment.resolver");
const Feedback_resolver_1 = require("../core/resolvers/Feedback.resolver");
const Instructor_resolver_1 = require("../core/resolvers/Instructor.resolver");
const language_resolver_1 = require("../core/resolvers/language.resolver");
const LearningProgress_resolver_1 = require("../core/resolvers/LearningProgress.resolver");
const Student_resolver_1 = require("../core/resolvers/Student.resolver");
const User_resolver_1 = require("../core/resolvers/User.resolver");
const services_1 = require("../core/services/services");
const auth_1 = require("../auth");
const courseLevelSchema_1 = require("../models/schemas/courseLevelSchema");
const courseCategorySchema_1 = require("../models/schemas/courseCategorySchema");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'ContentType', schema: models_1.contentTypeSchema },
                { name: 'CourseChapterContent', schema: models_1.courseChapterContentSchema },
                { name: 'CourseChapter', schema: models_1.courseChapterSchema },
                { name: 'Course', schema: models_1.courseSchema },
                { name: 'CourseLevel', schema: courseLevelSchema_1.courseLevelSchema },
                { name: 'CourseCategory', schema: courseCategorySchema_1.courseCategorySchema },
                { name: 'Enrollment', schema: models_1.enrollmentSchema },
                { name: 'Feedback', schema: models_1.feedbackSchema },
                { name: 'Instructor', schema: models_1.instructorSchema },
                { name: 'Language', schema: models_1.languageSchema },
                { name: 'LearningProgress', schema: models_1.learningProgressSchema },
                { name: 'Student', schema: models_1.studentSchema },
                { name: 'User', schema: models_1.userSchema },
            ]),
        ],
        providers: [
            ContentType_resolver_1.ContentTypeResolver,
            Course_resolver_1.CourseResolver,
            CourseChapter_resolver_1.CourseChapterResolver,
            CourseChapterContent_resolver_1.CourseChapterContentResolver,
            Enrollment_resolver_1.EnrollmentResolver,
            Feedback_resolver_1.FeedbackResolver,
            Instructor_resolver_1.InstructorResolver,
            language_resolver_1.LanguageResolver,
            LearningProgress_resolver_1.LearningProgressResolver,
            Student_resolver_1.StudentResolver,
            User_resolver_1.UserResolver,
            services_1.ContentTypeService,
            services_1.CourseService,
            services_1.CourseLevelService,
            services_1.CourseCategoryService,
            services_1.CourseChapterService,
            services_1.CourseChapterContentService,
            services_1.EnrollmentService,
            services_1.InstructorService,
            services_1.LanguageService,
            services_1.LearningProgressService,
            services_1.StudentService,
            services_1.FeedbackService,
            auth_1.UserService,
        ],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map