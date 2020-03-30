import { CustomScalar } from '@nestjs/graphql';
export declare class DateScalar implements CustomScalar<number | string, Date> {
    description: string;
    private validator;
    parseValue(value: number | string): Date;
    serialize(value: Date): number;
    parseLiteral(ast: any): Date | null;
}
