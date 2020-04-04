"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.courseSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructor: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Instructor', required: true },
    courseLevel: { type: mongoose_1.Schema.Types.ObjectId, ref: 'CourseLevel', required: true },
    courseCategory: { type: mongoose_1.Schema.Types.ObjectId, ref: 'CourseCategory', required: true },
    rate: { type: Number, required: true, default: 0 },
    numOfChapters: { type: Number, required: true },
    courseFee: { type: Number, required: true },
});
//# sourceMappingURL=courseSchema.js.map