"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: {
        type: String,
        require: true,
    },
    password: { type: String, required: true },
    role: { type: String },
    refresh: { type: String },
}, { timestamps: true });
//# sourceMappingURL=userSchema.js.map