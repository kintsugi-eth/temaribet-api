import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';
import { ConfigService } from './config/config.service';
export declare class MongooseConfigService implements MongooseOptionsFactory {
    private configService;
    constructor(configService: ConfigService);
    createMongooseOptions(): MongooseModuleOptions;
}
