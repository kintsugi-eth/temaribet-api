import { IbaseModel } from '../../shared/interfaces/ibaseModel';
export interface IStudent extends IbaseModel {
    user: string;
    numOfCoursesEnrolled: number;
    numOfCourseCompleted: number;
}
