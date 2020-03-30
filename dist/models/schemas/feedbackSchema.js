"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.feedbackSchema = new mongoose_1.Schema({
    enrollment: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Enrollment', required: true },
    ratingScore: { type: Number, default: 0 },
    feedbackText: { type: String },
});
//# sourceMappingURL=feedbackSchema.js.map