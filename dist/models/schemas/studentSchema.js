"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.studentSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'UserDto', required: true },
    numOfCoursesEnrolled: { type: Number, required: true, default: 0 },
    numOfCourseCompleted: { type: Number, required: true, default: 0 },
});
//# sourceMappingURL=studentSchema.js.map