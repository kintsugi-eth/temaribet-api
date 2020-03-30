import { IbaseModel } from '../../shared/interfaces/ibaseModel';
export interface IInstructor extends IbaseModel {
    user: string;
    qualification: string;
    introductionBrief: string;
    image: string;
    numOfPublishedCourses: number;
    numOfEnrolledStudents: number;
    averageReviewRating: number;
    numOfReview: number;
}
