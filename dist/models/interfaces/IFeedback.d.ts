import { IbaseModel } from '../../shared/interfaces/ibaseModel';
export interface IFeedback extends IbaseModel {
    enrollment: string;
    ratingScore: number;
    feedbackText: string;
}
