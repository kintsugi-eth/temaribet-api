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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const types_1 = require("../types");
const database_1 = require("../../../database");
const dtos_1 = require("../DTO/dtos");
let FeedbackResolver = class FeedbackResolver {
    constructor(feedbackService) {
        this.feedbackService = feedbackService;
    }
    feedbacks() {
        return this.feedbackService.findAll();
    }
    feedback(id) {
        return this.feedbackService.findOne(id);
    }
    createFeedback(feedbackInput) {
        return this.feedbackService.createOne(feedbackInput);
    }
    updateFeedback(id, feedbackInput) {
        return this.feedbackService.updateOne(id, feedbackInput);
    }
    deleteFeedback(id) {
        return this.feedbackService.deleteOne(id);
    }
};
__decorate([
    graphql_1.Query(returns => [types_1.Feedback]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FeedbackResolver.prototype, "feedbacks", null);
__decorate([
    graphql_1.Query(returns => types_1.Feedback),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FeedbackResolver.prototype, "feedback", null);
__decorate([
    graphql_1.Mutation(returns => types_1.Feedback),
    __param(0, graphql_1.Args('feedbackInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.FeedbackDto]),
    __metadata("design:returntype", void 0)
], FeedbackResolver.prototype, "createFeedback", null);
__decorate([
    graphql_1.Mutation(returns => types_1.Feedback),
    __param(0, graphql_1.Args('id')), __param(1, graphql_1.Args('feedbackInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_1.FeedbackDto]),
    __metadata("design:returntype", void 0)
], FeedbackResolver.prototype, "updateFeedback", null);
__decorate([
    graphql_1.Mutation(returns => types_1.Deleted),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FeedbackResolver.prototype, "deleteFeedback", null);
FeedbackResolver = __decorate([
    graphql_1.Resolver(of => types_1.Feedback),
    __metadata("design:paramtypes", [database_1.FeedbackService])
], FeedbackResolver);
exports.FeedbackResolver = FeedbackResolver;
//# sourceMappingURL=feedback.resolver.js.map