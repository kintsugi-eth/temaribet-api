import { Base } from '../../../shared/models/base';
import { Enrollement } from '../..';
export declare class Feedback extends Base {
    enrollment: Enrollement;
    ratingScore: number;
    feedbackText: string;
}
