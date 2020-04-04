import { CourseCategoryDto } from '../../graphql/dto/courses/courseCategory.dto';
import { CourseCategoryService } from '../services/services';
export declare class CourseCategoryResolver {
    private readonly courseCategoryService;
    constructor(courseCategoryService: CourseCategoryService);
    courses(): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel[]>;
    course(id: string): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    createCourse(courseCategoryInput: CourseCategoryDto): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    updateCourse(id: string, courseCategoryInput: CourseCategoryDto): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    deleteCourse(id: string): Promise<any>;
}
