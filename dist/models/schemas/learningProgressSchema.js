"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
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
});
//# sourceMappingURL=learningProgressSchema.js.map