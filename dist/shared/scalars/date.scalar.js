"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("graphql");
const class_validator_1 = require("class-validator");
let DateScalar = class DateScalar {
    constructor() {
        this.description = 'Date custom scalar type';
        this.validator = new class_validator_1.Validator();
    }
    parseValue(value) {
        return new Date(value);
    }
    serialize(value) {
        return value.getTime();
    }
    parseLiteral(ast) {
        if ((ast.kind === graphql_2.Kind.INT || ast.kind === graphql_2.Kind.STRING) && this.validator.isISO8601(ast.value)) {
            return new Date(ast.value);
        }
        throw new Error('Date cannot represent an invalid ISO-8601 Date string');
    }
};
DateScalar = __decorate([
    graphql_1.Scalar('Date', type => Date)
], DateScalar);
exports.DateScalar = DateScalar;
//# sourceMappingURL=date.scalar.js.map