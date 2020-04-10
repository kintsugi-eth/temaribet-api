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
const common_1 = require("@nestjs/common");
const path = require("path");
const fs = require("fs");
const __1 = require("..");
let Seeder = class Seeder {
    constructor(roleSerice, categoryService, contentTypeService, courseLevelService, languageService, userService, instructorService, studentService, enrollemntService, feedbackService, fileService, courseService, courseChapterService, courseChapterContentService) {
        this.roleSerice = roleSerice;
        this.categoryService = categoryService;
        this.contentTypeService = contentTypeService;
        this.courseLevelService = courseLevelService;
        this.languageService = languageService;
        this.userService = userService;
        this.instructorService = instructorService;
        this.studentService = studentService;
        this.enrollemntService = enrollemntService;
        this.feedbackService = feedbackService;
        this.fileService = fileService;
        this.courseService = courseService;
        this.courseChapterService = courseChapterService;
        this.courseChapterContentService = courseChapterContentService;
        const d = this.getData();
        for (const e in d) {
            if (d.hasOwnProperty(e)) {
                switch (e) {
                    case 'roles':
                        this.seedRoles(d[e]);
                        break;
                    case 'categories':
                        this.seedCategory(d[e]);
                        break;
                    case 'contentTypes':
                        this.seedContentType(d[e]);
                        break;
                    case 'courseLevels':
                        this.seedCourseLevel(d[e]);
                        break;
                    case 'languages':
                        this.seedLanguage(d[e]);
                        break;
                    case 'users':
                        this.seedUser(d[e]);
                        break;
                    case 'instructors':
                        this.seedInstructor(d[e]);
                        break;
                    case 'students':
                        this.seedStudent(d[e]);
                        break;
                    case 'enrollments':
                        this.seedEnrollment(d[e]);
                        break;
                    case 'feedbacks':
                        this.seedFeedback(d[e]);
                        break;
                    case 'files':
                        this.seedFile(d[e]);
                        break;
                    case 'courses':
                        this.seedCourse(d[e]);
                        break;
                    case 'courseChapters':
                        this.seedCourseChapter(d[e]);
                        break;
                    case 'courseChapterContents':
                        this.seedCourseChapterContent(d[e]);
                        break;
                    default:
                        break;
                }
            }
        }
    }
    getData() {
        return JSON.parse(fs.readFileSync(path.join(__dirname + '/data', `data.json`), 'utf-8'));
    }
    seedRoles(roles) {
        roles.forEach(async (role) => await this.roleSerice.createOne(role));
    }
    seedCategory(categories) {
        categories.forEach(async (category) => await this.categoryService.createOne(category));
    }
    seedCourseLevel(courseLevels) {
        courseLevels.forEach(async (courseLevel) => await this.courseLevelService.createOne(courseLevel));
    }
    seedContentType(contentTypes) {
        contentTypes.forEach(async (contentType) => await this.contentTypeService.createOne(contentType));
    }
    seedLanguage(languages) {
        languages.forEach(async (language) => await this.languageService.createOne(language));
    }
    seedUser(users) {
        users.forEach(async (user) => await this.userService.create(user));
    }
    seedInstructor(instructors) {
        instructors.forEach(async (instructor) => this.instructorService.createOne(instructor));
    }
    seedStudent(students) {
        students.forEach(async (student) => this.studentService.createOne(student));
    }
    seedEnrollment(enrollments) {
        enrollments.forEach(async (enrollment) => this.enrollemntService.createOne(enrollment));
    }
    seedFeedback(feedbacks) {
        feedbacks.forEach(async (feedback) => this.feedbackService.createOne(feedback));
    }
    seedFile(files) {
        files.forEach(async (file) => this.fileService.createOne(file));
    }
    seedCourse(courses) {
        courses.forEach(async (course) => this.courseService.createOne(course));
    }
    seedCourseChapter(courseChapters) {
        courseChapters.forEach(async (courseChapter) => this.courseChapterService.createOne(courseChapter));
    }
    seedCourseChapterContent(courseChapterContents) {
        courseChapterContents.forEach(async (courseChapterContent) => this.courseChapterContentService.createOne(courseChapterContent));
    }
};
Seeder = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [__1.RoleService,
        __1.CategoryService,
        __1.ContentTypeService,
        __1.CourseLevelService,
        __1.LanguageService,
        __1.UserService,
        __1.InstructorService,
        __1.StudentService,
        __1.StudentService,
        __1.FeedbackService,
        __1.FileService,
        __1.CourseService,
        __1.CourseChapterService,
        __1.CourseChapterContentService])
], Seeder);
exports.Seeder = Seeder;
//# sourceMappingURL=seeder.js.map