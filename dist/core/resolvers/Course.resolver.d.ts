/// <reference types="mongoose" />
import { CourseCategoryService, CourseChapterService, CourseLevelService, CourseService } from '../services/services';
import { CourseDto } from '../../graphql/dto/courses/course.dto';
import { ICourse } from '../../models/interfaces/ICourse';
export declare class CourseResolver {
    private readonly courseService;
    private readonly courseChapterService;
    private readonly courseLevelService;
    private readonly courseCategoryService;
    constructor(courseService: CourseService, courseChapterService: CourseChapterService, courseLevelService: CourseLevelService, courseCategoryService: CourseCategoryService);
    courses(): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel[]>;
    course(id: string): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    createCourse(courseInput: CourseDto): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    updateCourse(id: string, courseInput: CourseDto): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    deleteCourse(id: string): Promise<any>;
    courseChapters(course: ICourse): import("mongoose").DocumentQuery<import("../../models/interfaces/ICourseChapter").ICourseChapter[], import("../../models/interfaces/ICourseChapter").ICourseChapter, {}>;
    courseLevel(course: ICourse): import("mongoose").DocumentQuery<import("../../models/interfaces/ICourseChapter").ICourseChapter[], import("../../models/interfaces/ICourseChapter").ICourseChapter, {}>;
    courseCategory(course: ICourse): import("mongoose").DocumentQuery<import("../../models/interfaces/ICourseChapter").ICourseChapter[], import("../../models/interfaces/ICourseChapter").ICourseChapter, {}>;
}
