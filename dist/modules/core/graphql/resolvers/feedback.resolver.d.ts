import { FeedbackService } from '../../../database';
import { FeedbackDto } from '../DTO/dtos';
export declare class FeedbackResolver {
    private readonly feedbackService;
    constructor(feedbackService: FeedbackService);
    feedbacks(): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel[]>;
    feedback(id: string): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    createFeedback(feedbackInput: FeedbackDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    updateFeedback(id: string, feedbackInput: FeedbackDto): Promise<import("../../../../shared/interfaces/ibaseModel").IbaseModel>;
    deleteFeedback(id: string): Promise<any>;
}
