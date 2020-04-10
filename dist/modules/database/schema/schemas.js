"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.categorySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    slug: { type: String },
    icon: { type: String },
    isActive: { type: Boolean },
    parent: { type: String },
}, { timestamps: true });
exports.courseLevelSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
}, { timestamps: true });
exports.languageSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
}, { timestamps: true });
exports.contentTypeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
});
exports.instructorSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    instructor_slug: { type: String },
    contactEmail: { type: String },
    mobile: { type: String },
    linkFacebook: { type: String },
    linkLinkedin: { type: String },
    linkTwitter: { type: String },
    qualification: { type: String, required: true },
    introductionBrief: { type: String },
    profileImage: { type: String },
    numOfPublishedCourses: { type: Number, required: true, default: 0 },
    numOfEnrolledStudents: { type: Number, required: true, default: 0 },
    averageReviewRating: { type: Number, required: true, default: 0 },
    numOfReview: { type: Number, required: true, default: 0 },
}, { timestamps: true });
exports.studentSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    profileImage: { type: String },
    contactEmail: { type: String },
    dob: { type: String },
    numOfCoursesEnrolled: { type: Number, required: true, default: 0 },
    numOfCourseCompleted: { type: Number, required: true, default: 0 },
}, { timestamps: true });
exports.courseSchema = new mongoose_1.Schema({
    instructor: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Instructor' },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Category' },
    courseLevel: { type: mongoose_1.Schema.Types.ObjectId, ref: 'CourseLevel' },
    courseTitle: { type: String },
    courseSlug: { type: String },
    keywords: { type: Array },
    overview: { type: String },
    courseImage: { type: String },
    language: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Language' },
    duration: { type: String },
    price: { type: Number },
    rate: { type: Number },
    rate_count: { type: Number },
    strike_out_price: { type: Number },
    isActive: { type: Boolean },
}, { timestamps: true });
exports.courseChapterSchema = new mongoose_1.Schema({
    course: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Course' },
    title: { type: String },
    order: { type: Number, required: true },
    numOfReading: { type: Number, required: true },
    numOfVideo: { type: Number, required: true },
    numOfAssignment: { type: Number },
}, { timestamps: true });
exports.courseChapterContentSchema = new mongoose_1.Schema({
    order: { type: Number, required: true },
    description: { type: String },
    title: { type: String },
    courseChapter: { type: mongoose_1.Schema.Types.ObjectId, ref: 'CourseChapter', required: true },
    contentType: { type: mongoose_1.Schema.Types.ObjectId, ref: 'ContentType' },
    isMandatory: { type: Boolean, required: true },
    timeRequiredInSec: { type: Number, required: true },
    isOpenForFree: { type: Boolean, required: true },
    duration: { type: Number },
}, { timestamps: true });
exports.fileSchema = new mongoose_1.Schema({
    path: { type: String },
    filename: { type: String },
    mimetype: { type: String },
    uploader: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });
exports.feedbackSchema = new mongoose_1.Schema({
    enrollment: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Enrollment', required: true },
    ratingScore: { type: Number, default: 0 },
    feedbackText: { type: String },
}, { timestamps: true });
exports.enrollmentSchema = new mongoose_1.Schema({
    student: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Student', required: true },
    course: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Course', required: true },
    isPaidSubscription: { type: Boolean, default: false },
}, { timestamps: true });
exports.learningProgressSchema = new mongoose_1.Schema({
    enrollment: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Enrollment',
        required: true,
    },
    courseChapterContent: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'CourseChapterContent',
        required: true,
    },
    beginTimestamp: {
        type: String,
        required: true,
    },
    completionTimestamp: {
        type: String,
    },
    status: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
exports.roleSchema = new mongoose_1.Schema({
    name: { type: String },
    description: { type: String },
}, { timestamps: true });
exports.userSchema = new mongoose_1.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: mongoose_1.Schema.Types.ObjectId },
    isActive: { type: Boolean },
    remember_token: { type: Boolean },
}, { timestamps: true });
exports.wishListSchema = new mongoose_1.Schema({
    course: { type: String },
    user: { type: String },
}, { timestamps: true });
//# sourceMappingURL=schemas.js.map