/// <reference types="mongoose" />
import { CourseChapterService, CourseService } from '../services/services';
import { CourseDto } from '../../graphql/dto/courses/course.dto';
import { ICourse } from '../../models/interfaces/ICourse';
export declare class CourseResolver {
    private readonly courseService;
    private readonly courseChapterService;
    constructor(courseService: CourseService, courseChapterService: CourseChapterService);
    courses(): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel[]>;
    course(id: string): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    createCourse(courseInput: CourseDto): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    updateCourse(id: string, courseInput: CourseDto): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    deleteCourse(id: string): Promise<any>;
    courseChapters(course: ICourse): import("mongoose").DocumentQuery<import("../../models/interfaces/ICourseChapter").ICourseChapter[], import("../../models/interfaces/ICourseChapter").ICourseChapter, {}>;
}
