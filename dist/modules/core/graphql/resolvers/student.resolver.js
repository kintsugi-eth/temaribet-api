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
const dtos_1 = require("../DTO/dtos");
const database_1 = require("../../../database");
const types_1 = require("../types");
let StudentResolver = class StudentResolver {
    constructor(studentService, userService) {
        this.studentService = studentService;
        this.userService = userService;
    }
    students() {
        return this.studentService.findAll();
    }
    student(id) {
        return this.studentService.findOne(id);
    }
    createStudent(studentInput) {
        return this.studentService.createOne(studentInput);
    }
    updateStudent(id, studentInput) {
        return this.studentService.updateOne(id, studentInput);
    }
    deleteStudent(id) {
        return this.studentService.deleteOne(id);
    }
    user(student) {
        return this.userService.findOne(student.user);
    }
};
__decorate([
    graphql_1.Query(returns => [types_1.Student]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentResolver.prototype, "students", null);
__decorate([
    graphql_1.Query(returns => types_1.Student),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentResolver.prototype, "student", null);
__decorate([
    graphql_1.Mutation(returns => types_1.Student),
    __param(0, graphql_1.Args('studentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.StudentDto]),
    __metadata("design:returntype", void 0)
], StudentResolver.prototype, "createStudent", null);
__decorate([
    graphql_1.Mutation(returns => types_1.Student),
    __param(0, graphql_1.Args('id')), __param(1, graphql_1.Args('studentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_1.StudentDto]),
    __metadata("design:returntype", void 0)
], StudentResolver.prototype, "updateStudent", null);
__decorate([
    graphql_1.Mutation(returns => types_1.Deleted),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentResolver.prototype, "deleteStudent", null);
__decorate([
    graphql_1.ResolveProperty(returns => types_1.User),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentResolver.prototype, "user", null);
StudentResolver = __decorate([
    graphql_1.Resolver(of => types_1.Student),
    __metadata("design:paramtypes", [database_1.StudentService,
        database_1.UserService])
], StudentResolver);
exports.StudentResolver = StudentResolver;
//# sourceMappingURL=student.resolver.js.map