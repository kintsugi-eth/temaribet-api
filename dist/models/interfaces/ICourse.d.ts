import { IbaseModel } from '../../shared/interfaces/ibaseModel';
export interface ICourse extends IbaseModel {
    title: string;
    description: string;
    instructor: string;
    courseLevel: string;
    courseCategory: string;
    rate: number;
    numOfChapters: number;
    courseFee: number;
}
