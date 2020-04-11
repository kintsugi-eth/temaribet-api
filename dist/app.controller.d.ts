import { AppService } from './app.service';
import { CloudinaryService } from './modules/file-upload/cloudinary.service';
import { FileService } from './modules/database';
export declare class AppController {
    private readonly appService;
    private cs;
    private fileService;
    constructor(appService: AppService, cs: CloudinaryService, fileService: FileService);
    getHello(): string;
    uploadAvatar(file: any): Promise<unknown>;
}
