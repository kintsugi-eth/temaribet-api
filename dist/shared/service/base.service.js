"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let BaseService = class BaseService {
    constructor(model) {
        this.model = model;
    }
    createOne(body) {
        return this.model.create(body);
    }
    deleteOne(id) {
        return this.model.deleteOne({ _id: id }).exec();
    }
    async findAll(args) {
        if (args) {
            return this.model.find({}).skip(args.skip).limit(args.take);
        }
        return this.model.find({}).exec();
    }
    findOne(id) {
        return this.model.findOne({ _id: id }).exec();
    }
    updateOne(id, newData) {
        return this.model.findOneAndUpdate({ _id: id }, newData, { upsert: true }).exec();
    }
};
BaseService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [mongoose_1.Model])
], BaseService);
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map