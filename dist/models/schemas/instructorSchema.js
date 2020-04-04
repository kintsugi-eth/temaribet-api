"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.instructorSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    qualification: { type: String, required: true },
    introductionBrief: { type: String },
    image: { type: String },
    numOfPublishedCourses: { type: Number, required: true, default: 0 },
    numOfEnrolledStudents: { type: Number, required: true, default: 0 },
    averageReviewRating: { type: Number, required: true, default: 0 },
    numOfReview: { type: Number, required: true, default: 0 },
});
//# sourceMappingURL=instructorSchema.js.map