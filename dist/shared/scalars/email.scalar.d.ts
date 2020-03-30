import { CustomScalar } from '@nestjs/graphql';
import { ValueNode } from 'graphql';
export declare class EmailScalar implements CustomScalar<string, string> {
    description: string;
    private emailReg;
    constructor();
    parseLiteral(ast: ValueNode): string;
    parseValue(value: string): string;
    serialize(value: string): string;
}
