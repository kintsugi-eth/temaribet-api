import { Base } from '../../../shared/models/base';
import { Course } from './course';
export declare class CourseChapter extends Base {
    course: Course;
    title: string;
    numOfReading: number;
    numOfVideo: number;
    numOfAssignment: number;
}
