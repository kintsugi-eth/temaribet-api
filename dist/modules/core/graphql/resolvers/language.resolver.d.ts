import { LanguageDto } from '../DTO/dtos';
import { LanguageService } from '../../../database';
export declare class LanguageResolver {
    private readonly languageService;
    constructor(languageService: LanguageService);
    languages(): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel[]>;
    language(id: string): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    createLanguage(languageInput: LanguageDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    updateLanguage(id: string, languageInput: LanguageDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    deleteLanguage(id: string): Promise<any>;
}
