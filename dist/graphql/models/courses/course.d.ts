import { Base } from '../../../shared/models/base';
import { Language } from './language';
import { Instructor } from '../..';
export declare class Course extends Base {
    title: string;
    description: string;
    instructor: Instructor;
    numOfChapters: number;
    courseFee: number;
    language: Language;
}
