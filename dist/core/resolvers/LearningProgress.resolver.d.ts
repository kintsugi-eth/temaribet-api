import { LearningProgressService } from '../services/services';
import { LearningProgressDto } from '../../graphql/dto/entrollment and progress/learningProgress.dto';
export declare class LearningProgressResolver {
    private readonly learningProgressService;
    constructor(learningProgressService: LearningProgressService);
    learningProgresses(): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel[]>;
    learningProgress(id: string): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    createLearningProgress(learningProgressInput: LearningProgressDto): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    updateLearningProgress(id: string, learningProgressInput: LearningProgressDto): Promise<import("../../shared/interfaces/ibaseModel").IbaseModel>;
    deleteLearningProgress(id: string): Promise<any>;
}
