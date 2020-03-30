import { Base } from '../../../shared/models/base';
import { Course, Student } from '../..';
export declare class Enrollement extends Base {
    student: Student;
    course: Course;
    isPaidSubscription: boolean;
}
