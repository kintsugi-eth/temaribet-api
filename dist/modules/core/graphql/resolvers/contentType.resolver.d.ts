import { ContentTypeDto } from '../DTO/dtos';
import { ContentTypeService } from '../../../database';
export declare class ContentTypeResolver {
    private contentTypeService;
    constructor(contentTypeService: ContentTypeService);
    contentTypes(): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel[]>;
    contentType(id: string): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    createContentType(contentTypeInput: ContentTypeDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    updateContentType(id: string, contentTypeInput: ContentTypeDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    deleteContentType(id: string): Promise<any>;
}
