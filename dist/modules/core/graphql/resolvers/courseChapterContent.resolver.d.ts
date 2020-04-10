import { CourseChapterContentService } from '../../../database';
import { CourseChapterContentDto } from '../DTO/dtos';
export declare class CourseChapterContentResolver {
    private readonly courseChapterContentService;
    constructor(courseChapterContentService: CourseChapterContentService);
    courseChapterContents(): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel[]>;
    courseChapterContent(id: string): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    createCourseChapterContent(createCourseChapterContentInput: CourseChapterContentDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    updateCourseChapterContent(id: string, updateCourseChapterContentInput: CourseChapterContentDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    deleteCourseChapterContent(id: string): Promise<any>;
}
