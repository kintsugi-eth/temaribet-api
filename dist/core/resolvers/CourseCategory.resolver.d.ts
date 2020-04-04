import { CourseCategoryDto } from '../../graphql/dto/courses/courseCategory.dto';
import { CourseCategoryService } from '../services/services';
export declare class CourseCategoryResolver {
    private readonly courseCategoryService;
    constructor(courseCategoryService: CourseCategoryService);
    courseCategories(): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel[]>;
    courseCategory(id: string): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    createCourseCategory(courseCategoryInput: CourseCategoryDto): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    updateCourseCategory(id: string, courseCategoryInput: CourseCategoryDto): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    deleteCourse(id: string): Promise<any>;
}
