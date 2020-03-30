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
const auth_1 = require("../../auth");
const instructor_dto_1 = require("../../graphql/dto/actors/instructor.dto");
let InstructorResolver = class InstructorResolver {
    constructor(instructorService, userService) {
        this.instructorService = instructorService;
        this.userService = userService;
    }
    instructors() {
        return this.instructorService.findAll();
    }
    instructor(id) {
        return this.instructorService.findOne(id);
    }
    createInstructor(instructor) {
        return this.instructorService.createOne(instructor);
    }
    updateInstructor(id, instructor) {
        return this.instructorService.updateOne(id, instructor);
    }
    deleteInstructor(id) {
        return this.instructorService.deleteOne(id);
    }
    user(instructor) {
        return this.userService.findOne(instructor.user);
    }
};
__decorate([
    graphql_1.Query(returns => [graphql_2.Instructor]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InstructorResolver.prototype, "instructors", null);
__decorate([
    graphql_1.Query(returns => graphql_2.Instructor),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InstructorResolver.prototype, "instructor", null);
__decorate([
    graphql_1.Mutation(returns => graphql_2.Instructor),
    __param(0, graphql_1.Args('instructor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [instructor_dto_1.InstructorDto]),
    __metadata("design:returntype", void 0)
], InstructorResolver.prototype, "createInstructor", null);
__decorate([
    graphql_1.Mutation(returns => graphql_2.Instructor),
    __param(0, graphql_1.Args('id')), __param(1, graphql_1.Args('instructor')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, instructor_dto_1.InstructorDto]),
    __metadata("design:returntype", void 0)
], InstructorResolver.prototype, "updateInstructor", null);
__decorate([
    graphql_1.Mutation(returns => deleted_1.Deleted),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InstructorResolver.prototype, "deleteInstructor", null);
__decorate([
    graphql_1.ResolveProperty(returns => graphql_2.User),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InstructorResolver.prototype, "user", null);
InstructorResolver = __decorate([
    graphql_1.Resolver(of => graphql_2.Instructor),
    __metadata("design:paramtypes", [services_1.InstructorService,
        auth_1.UserService])
], InstructorResolver);
exports.InstructorResolver = InstructorResolver;
//# sourceMappingURL=Instructor.resolver.js.map