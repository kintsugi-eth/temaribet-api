"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let GraphqlOptions = class GraphqlOptions {
    createGqlOptions() {
        return {
            autoSchemaFile: 'schema.gql',
            context: ({ req, res }) => ({ req, res }),
            installSubscriptionHandlers: true,
            resolverValidationOptions: {
                requireResolversForResolveType: false,
            },
            debug: true,
            introspection: true,
            playground: true,
            cors: {
                credentials: true,
                origin: true,
            },
            buildSchemaOptions: {
                dateScalarMode: 'timestamp',
            },
        };
    }
};
GraphqlOptions = __decorate([
    common_1.Injectable()
], GraphqlOptions);
exports.GraphqlOptions = GraphqlOptions;
//# sourceMappingURL=graphql.options.js.map