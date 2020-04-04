import { CourseLevelService } from '../services/services';
import { CourseLevelDto } from '../../graphql/dto/courses/courseLevel.dto';
export declare class CourseCategoryResolver {
    private readonly courseLevelService;
    constructor(courseLevelService: CourseLevelService);
    courseLevels(): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel[]>;
    courseLevel(id: string): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    createCourseLevel(courseLevelInput: CourseLevelDto): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    updateCourseLevel(id: string, courseLevelInput: CourseLevelDto): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    deleteCourse(id: string): Promise<any>;
}
