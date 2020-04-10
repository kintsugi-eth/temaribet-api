import { CourseLevelService } from '../../../database';
import { CourseLevelDto } from '../DTO/dtos';
export declare class CourseLevelResolver {
    private readonly courseLevelService;
    constructor(courseLevelService: CourseLevelService);
    courseLevels(): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel[]>;
    courseLevel(id: string): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    createCourseLevel(courseLevelInput: CourseLevelDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    updateCourseLevel(id: string, courseLevelInput: CourseLevelDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    deleteCourse(id: string): Promise<any>;
}
