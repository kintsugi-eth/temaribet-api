import { IbaseModel } from '../../shared/interfaces/ibaseModel';
export interface ICourseChapterContent extends IbaseModel {
    order: number;
    courseChapter: string;
    isMandatory: boolean;
    timeRequiredInSec: number;
    isOpenForFree: boolean;
}
