"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.courseChapterSchema = new mongoose_1.Schema({
    course: { type: mongoose_1.Schema.Types.ObjectId, ref: 'CourseDto', required: true },
    title: { type: String, required: true },
    numOfReading: { type: Number, required: true },
    numOfVideo: { type: Number, required: true },
    numOfAssignment: { type: Number, required: true },
});
//# sourceMappingURL=courseChapterSchema.js.map