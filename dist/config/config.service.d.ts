export interface EnvConfig {
    [key: string]: string;
}
export declare class ConfigService {
    private static envConfig;
    private envConfig;
    constructor(filePath: string);
    private validateInput;
    readonly databaseUrl: string;
    readonly jwtSecret: string;
    static readonly jwtSercretKey: string;
}
