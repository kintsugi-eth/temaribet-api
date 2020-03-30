import { User } from './user';
export declare class Instructor {
    user: User;
    readonly qualification: string;
    readonly introductionBrief: string;
    readonly image: string;
    readonly numOfPublishedCourses: number;
    readonly numOfEnrolledStudents: number;
    readonly averageReviewRating: number;
    readonly numOfReview: number;
}
