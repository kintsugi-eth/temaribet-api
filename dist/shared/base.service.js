"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseService {
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
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map