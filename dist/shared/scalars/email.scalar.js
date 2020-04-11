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
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("graphql");
let EmailScalar = class EmailScalar {
    constructor() {
        this.description = 'Email Custom Scalar type';
        this.emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        this.emailReg = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    }
    parseLiteral(ast) {
        if (ast.kind !== graphql_2.Kind.STRING) {
            throw new graphql_2.GraphQLError(`Can only validate strings as email addresses but got a: ${ast.kind}`);
        }
        if (!this.emailReg.exec(ast.value)) {
            throw new TypeError('Value is not valid email address');
        }
        return undefined;
    }
    parseValue(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Value is not string');
        }
        if (!this.emailReg.exec(value)) {
            throw new TypeError('Value is not valid email address');
        }
        return value;
    }
    serialize(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Value is not string');
        }
        if (!this.emailReg.exec(value)) {
            throw new TypeError('Value is not valid email address');
        }
        return value;
    }
};
EmailScalar = __decorate([
    graphql_1.Scalar('Email'),
    __metadata("design:paramtypes", [])
], EmailScalar);
exports.EmailScalar = EmailScalar;
//# sourceMappingURL=email.scalar.js.map