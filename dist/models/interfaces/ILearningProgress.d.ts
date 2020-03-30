import { IbaseModel } from '../../shared/interfaces/ibaseModel';
export interface ILearningProgress extends IbaseModel {
    enrollment: string;
    courseChapterContent: string;
    beginTimestamp: string;
    completionTimestamp: string;
    status: boolean;
}
