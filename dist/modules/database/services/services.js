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
const base_service_1 = require("../../../shared/base.service");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const common_1 = require("@nestjs/common");
let ContentTypeService = class ContentTypeService extends base_service_1.BaseService {
    constructor(ContentTypeModel) {
        super(ContentTypeModel);
        this.ContentTypeModel = ContentTypeModel;
    }
};
ContentTypeService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('ContentType')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ContentTypeService);
exports.ContentTypeService = ContentTypeService;
let CourseService = class CourseService extends base_service_1.BaseService {
    constructor(courseModel) {
        super(courseModel);
        this.courseModel = courseModel;
    }
};
CourseService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Course')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CourseService);
exports.CourseService = CourseService;
let CategoryService = class CategoryService extends base_service_1.BaseService {
    constructor(categoryModel) {
        super(categoryModel);
        this.categoryModel = categoryModel;
    }
};
CategoryService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Category')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CategoryService);
exports.CategoryService = CategoryService;
let CourseLevelService = class CourseLevelService extends base_service_1.BaseService {
    constructor(courseLevelModel) {
        super(courseLevelModel);
        this.courseLevelModel = courseLevelModel;
    }
};
CourseLevelService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('CourseLevel')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CourseLevelService);
exports.CourseLevelService = CourseLevelService;
let CourseChapterService = class CourseChapterService extends base_service_1.BaseService {
    constructor(CourseChapterModel) {
        super(CourseChapterModel);
        this.CourseChapterModel = CourseChapterModel;
    }
    findByCourseId(course) {
        return this.CourseChapterModel.find({ course });
    }
};
CourseChapterService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('CourseChapter')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CourseChapterService);
exports.CourseChapterService = CourseChapterService;
let CourseChapterContentService = class CourseChapterContentService extends base_service_1.BaseService {
    constructor(CourseChapterContentModel) {
        super(CourseChapterContentModel);
        this.CourseChapterContentModel = CourseChapterContentModel;
    }
    findByCourseChapter(courseChapter) {
        return this.CourseChapterContentModel.find({ courseChapter });
    }
};
CourseChapterContentService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('CourseChapterContent')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CourseChapterContentService);
exports.CourseChapterContentService = CourseChapterContentService;
let EnrollmentService = class EnrollmentService extends base_service_1.BaseService {
    constructor(EnrollmentModel) {
        super(EnrollmentModel);
        this.EnrollmentModel = EnrollmentModel;
    }
};
EnrollmentService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Enrollment')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EnrollmentService);
exports.EnrollmentService = EnrollmentService;
let FeedbackService = class FeedbackService extends base_service_1.BaseService {
    constructor(FeedbackModel) {
        super(FeedbackModel);
        this.FeedbackModel = FeedbackModel;
    }
};
FeedbackService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Feedback')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FeedbackService);
exports.FeedbackService = FeedbackService;
let InstructorService = class InstructorService extends base_service_1.BaseService {
    constructor(InstructorModel) {
        super(InstructorModel);
        this.InstructorModel = InstructorModel;
    }
};
InstructorService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Instructor')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], InstructorService);
exports.InstructorService = InstructorService;
let LanguageService = class LanguageService extends base_service_1.BaseService {
    constructor(LanguageModel) {
        super(LanguageModel);
        this.LanguageModel = LanguageModel;
    }
};
LanguageService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Language')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LanguageService);
exports.LanguageService = LanguageService;
let LearningProgressService = class LearningProgressService extends base_service_1.BaseService {
    constructor(LearningProgressModel) {
        super(LearningProgressModel);
        this.LearningProgressModel = LearningProgressModel;
    }
};
LearningProgressService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('LearningProgress')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LearningProgressService);
exports.LearningProgressService = LearningProgressService;
let StudentService = class StudentService extends base_service_1.BaseService {
    constructor(StudentModel) {
        super(StudentModel);
        this.StudentModel = StudentModel;
    }
};
StudentService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Student')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StudentService);
exports.StudentService = StudentService;
let FileService = class FileService extends base_service_1.BaseService {
    constructor(FileModel) {
        super(FileModel);
        this.FileModel = FileModel;
    }
};
FileService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('File')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FileService);
exports.FileService = FileService;
let RoleService = class RoleService extends base_service_1.BaseService {
    constructor(RoleModel) {
        super(RoleModel);
        this.RoleModel = RoleModel;
    }
};
RoleService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Role')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RoleService);
exports.RoleService = RoleService;
let UserService = class UserService extends base_service_1.BaseService {
    constructor(userModel) {
        super(userModel);
        this.userModel = userModel;
    }
    findByUsername(username) {
        return this.userModel.findOne({ username }).exec();
    }
    create(user) {
        return this.userModel.create(user);
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=services.js.map