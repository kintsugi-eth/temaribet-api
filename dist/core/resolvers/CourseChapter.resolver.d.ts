/// <reference types="mongoose" />
import { CourseChapterContentService, CourseChapterService } from '../services/services';
import { ICourseChapter } from '../../models/interfaces/ICourseChapter';
import { CourseChapterDto } from '../../graphql/dto/courses/courseChapter.dto';
export declare class CourseChapterResolver {
    private readonly courseChapterService;
    private readonly courseChapterContentService;
    constructor(courseChapterService: CourseChapterService, courseChapterContentService: CourseChapterContentService);
    courseChapters(): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel[]>;
    courseChapter(id: string): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    createCourseChapter(courseChapterInput: CourseChapterDto): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    updateCourseChapter(id: string, courseChapterInput: CourseChapterDto): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    deleteCourseChapter(id: string): Promise<any>;
    courseChapterContents(courseChapter: ICourseChapter): import("mongoose").DocumentQuery<import("../../models/interfaces/ICourseChapterContent").ICourseChapterContent[], import("../../models/interfaces/ICourseChapterContent").ICourseChapterContent, {}>;
}
