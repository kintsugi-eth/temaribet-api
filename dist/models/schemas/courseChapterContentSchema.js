"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.courseChapterContentSchema = new mongoose_1.Schema({
    order: { type: Number, required: true },
    courseChapter: { type: mongoose_1.Schema.Types.ObjectId, ref: 'CourseChapter', required: true },
    isMandatory: { type: Boolean, required: true },
    timeRequiredInSec: { type: Number, required: true },
    isOpenForFree: { type: Boolean, required: true },
});
//# sourceMappingURL=courseChapterContentSchema.js.map