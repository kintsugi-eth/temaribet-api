import { Base } from '../../../shared/models/base';
import { Language } from './language';
import { Instructor } from '../..';
import { CourseLevel } from './CourseLevel';
import { CourseCategory } from './courseCategory';
export declare class Course extends Base {
    title: string;
    description: string;
    instructor: Instructor;
    courseLevel: CourseLevel;
    courseCategory: CourseCategory;
    rate: number;
    numOfChapters: number;
    courseFee: number;
    language: Language;
}
