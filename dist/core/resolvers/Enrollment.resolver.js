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
const graphql_2 = require("../../graphql");
const services_1 = require("../services/services");
const deleted_1 = require("../../graphql/models/deleted");
const enrollement_dto_1 = require("../../graphql/dto/entrollment and progress/enrollement.dto");
let EnrollmentResolver = class EnrollmentResolver {
    constructor(enrollmentService) {
        this.enrollmentService = enrollmentService;
    }
    enrollments() {
        return this.enrollmentService.findAll();
    }
    enrollment(id) {
        return this.enrollmentService.findOne(id);
    }
    createEnrollment(enrollmentInput) {
        return this.enrollmentService.createOne(enrollmentInput);
    }
    updateEnrollment(id, enrollmentInput) {
        return this.enrollmentService.updateOne(id, enrollmentInput);
    }
    deleteEnrollment(id) {
        return this.enrollmentService.deleteOne(id);
    }
};
__decorate([
    graphql_1.Query(returns => [graphql_2.Enrollement]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EnrollmentResolver.prototype, "enrollments", null);
__decorate([
    graphql_1.Query(returns => graphql_2.Enrollement),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EnrollmentResolver.prototype, "enrollment", null);
__decorate([
    graphql_1.Mutation(returns => graphql_2.Enrollement),
    __param(0, graphql_1.Args('enrollmentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [enrollement_dto_1.EnrollementDto]),
    __metadata("design:returntype", void 0)
], EnrollmentResolver.prototype, "createEnrollment", null);
__decorate([
    graphql_1.Mutation(returns => graphql_2.Enrollement),
    __param(0, graphql_1.Args('id')), __param(1, graphql_1.Args('enrollmentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, enrollement_dto_1.EnrollementDto]),
    __metadata("design:returntype", void 0)
], EnrollmentResolver.prototype, "updateEnrollment", null);
__decorate([
    graphql_1.Mutation(returns => deleted_1.Deleted),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EnrollmentResolver.prototype, "deleteEnrollment", null);
EnrollmentResolver = __decorate([
    graphql_1.Resolver(of => graphql_2.Enrollement),
    __metadata("design:paramtypes", [services_1.EnrollmentService])
], EnrollmentResolver);
exports.EnrollmentResolver = EnrollmentResolver;
//# sourceMappingURL=Enrollment.resolver.js.map