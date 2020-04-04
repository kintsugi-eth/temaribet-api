import { CourseLevelService } from '../services/services';
import { CourseLevelDto } from '../../graphql/dto/courses/courseLevel.dto';
export declare class CourseCategoryResolver {
    private readonly courseLevelService;
    constructor(courseLevelService: CourseLevelService);
    courses(): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel[]>;
    course(id: string): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    createCourse(courseLevelInput: CourseLevelDto): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    updateCourse(id: string, courseLevelInput: CourseLevelDto): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    deleteCourse(id: string): Promise<any>;
}
