import { ConfigService } from '../../config/config.service';
export declare class CloudinaryService {
    private configService;
    constructor(configService: ConfigService);
    fileUpload(filepath: any, cb: any): void;
}
