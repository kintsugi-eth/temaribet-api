"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.enrollmentSchema = new mongoose_1.Schema({
    student: { type: mongoose_1.Schema.Types.ObjectId, ref: 'StudentDto', required: true },
    course: { type: mongoose_1.Schema.Types.ObjectId, ref: 'CourseDto', required: true },
    isPaidSubscription: { type: Boolean, default: false },
});
//# sourceMappingURL=enrollmentSchema.js.map