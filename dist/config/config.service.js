"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const Joi = require("@hapi/joi");
const fs = require("fs");
class ConfigService {
    constructor(filePath) {
        const config = dotenv.parse(fs.readFileSync(filePath));
        this.envConfig = this.validateInput(config);
        ConfigService.envConfig = this.validateInput(config);
    }
    validateInput(envConfig) {
        const envVarsSchema = Joi.object({
            NODE_ENV: Joi.string()
                .valid('app', 'production', 'test', 'provision')
                .default('app'),
            PORT: Joi.number().default(3000),
            DATABASE_URL: Joi.string().required(),
            LOCAL_DB: Joi.string().required(),
            JWT_SECRET_KEY: Joi.string().required(),
            AUTH0_DOMAIN: Joi.string().required(),
            AUTH0_AUDIENCE: Joi.string().required(),
            CLOUDINARY_CLOUD_NAME: Joi.string().required(),
            CLOUDINARY_API_KEY: Joi.string().required(),
            CLOUDINARY_API_SECRET: Joi.string().required(),
        });
        const { error, value: validatedEnvConfig } = envVarsSchema.validate(envConfig);
        if (error) {
            throw new Error(`Config validation error: ${error.message}`);
        }
        return validatedEnvConfig;
    }
    get databaseUrl() {
        return String(this.envConfig.DATABASE_URL);
    }
    get localDbUrl() {
        return String(this.envConfig.LOCAL_DB);
    }
    get AUTH0_DOMAIN() {
        return String(this.envConfig.AUTH0_DOMAIN);
    }
    get AUTH0_AUDIENCE() {
        return String(this.envConfig.AUTH0_AUDIENCE);
    }
    get CLOUDINARY_CLOUD_NAME() {
        return String(this.envConfig.CLOUDINARY_CLOUD_NAME);
    }
    get CLOUDINARY_API_KEY() {
        return String(this.envConfig.CLOUDINARY_API_KEY);
    }
    get CLOUDINARY_API_SECRET() {
        return String(this.envConfig.CLOUDINARY_API_SECRET);
    }
    get jwtSecret() {
        return String(this.envConfig.JWT_SECRET_KEY);
    }
    static get jwtSercretKey() {
        return String(this.envConfig.JWT_SECRET_KEY);
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map