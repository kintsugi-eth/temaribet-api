/// <reference types="mongoose" />
import { CourseChapterContentService, CourseChapterService, ICourseChapter } from '../../../database';
import { CourseChapterDto } from '../DTO/dtos';
export declare class CourseChapterResolver {
    private readonly courseChapterService;
    private readonly courseChapterContentService;
    constructor(courseChapterService: CourseChapterService, courseChapterContentService: CourseChapterContentService);
    courseChapters(): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel[]>;
    courseChapter(id: string): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    createCourseChapter(courseChapterInput: CourseChapterDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    updateCourseChapter(id: string, courseChapterInput: CourseChapterDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    deleteCourseChapter(id: string): Promise<any>;
    courseChapterContents(courseChapter: ICourseChapter): import("mongoose").DocumentQuery<import("../../../database").ICourseChapterContent[], import("../../../database").ICourseChapterContent, {}>;
}
