export interface EnvConfig {
    [key: string]: string;
}
export declare class ConfigService {
    private static envConfig;
    private envConfig;
    constructor(filePath: string);
    private validateInput;
    readonly databaseUrl: string;
    readonly localDbUrl: string;
    readonly AUTH0_DOMAIN: string;
    readonly AUTH0_AUDIENCE: string;
    readonly CLOUDINARY_CLOUD_NAME: string;
    readonly CLOUDINARY_API_KEY: string;
    readonly CLOUDINARY_API_SECRET: string;
    readonly jwtSecret: string;
    static readonly jwtSercretKey: string;
}
