import { IbaseModel } from '../../shared/interfaces/ibaseModel';
export interface IEnrollment extends IbaseModel {
    student: string;
    course: string;
    isPaidSubscription: boolean;
}
