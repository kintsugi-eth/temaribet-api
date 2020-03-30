import { IbaseModel } from '../../shared/interfaces/ibaseModel';
export interface ICourse extends IbaseModel {
    title: string;
    description: string;
    instructor: string;
    numOfChapters: number;
    courseFee: number;
}
