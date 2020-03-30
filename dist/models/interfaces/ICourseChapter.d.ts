import { IbaseModel } from '../../shared/interfaces/ibaseModel';
export interface ICourseChapter extends IbaseModel {
    course: string;
    title: string;
    numOfReading: number;
    numOfVideo: number;
    numOfAssignment: number;
}
