import { Enrollement } from './enrollement';
import { CourseChapterContent } from '../..';
export declare class LearningProgress {
    enrollment: Enrollement;
    courseChapterContent: CourseChapterContent;
    beginTimestamp: string;
    completionTimestamp: string;
    status: boolean;
}
