import { CategoryService } from '../../../database';
import { CategoryDto } from '../DTO/dtos';
export declare class CategoryResolver {
    private readonly courseCategoryService;
    constructor(courseCategoryService: CategoryService);
    courseCategories(): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel[]>;
    courseCategory(id: string): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    createCourseCategory(categoryInput: CategoryDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    updateCourseCategory(id: string, categoryInput: CategoryDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    deleteCourse(id: string): Promise<any>;
}
