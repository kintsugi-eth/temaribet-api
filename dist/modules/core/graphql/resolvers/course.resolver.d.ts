/// <reference types="mongoose" />
import { CategoryService, CourseChapterService, CourseLevelService, CourseService, FileService, InstructorService, LanguageService } from '../../../database';
import { CourseArg } from '../args/args';
export declare class CourseResolver {
    private courseService;
    private instructorService;
    private categoryService;
    private courseLevelService;
    private languageService;
    private fileService;
    private courseChapterService;
    constructor(courseService: CourseService, instructorService: InstructorService, categoryService: CategoryService, courseLevelService: CourseLevelService, languageService: LanguageService, fileService: FileService, courseChapterService: CourseChapterService);
    allCourses(args: CourseArg): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel[]>;
    findCourse(id: string): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    instructor(course: any): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    category(course: any): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    courseLevel(course: any): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    language(course: any): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    courseImage(course: any): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    courseChapter(course: any): import("mongoose").DocumentQuery<import("../../../database").ICourseChapter[], import("../../../database").ICourseChapter, {}>;
}
