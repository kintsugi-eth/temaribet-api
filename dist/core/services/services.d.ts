import { BaseService } from '../../shared/base.service';
import { IContentType } from '../../models/interfaces/IContentType';
import { Model } from 'mongoose';
import { ICourse } from '../../models/interfaces/ICourse';
import { ICourseChapter } from '../../models/interfaces/ICourseChapter';
import { IEnrollment } from '../../models/interfaces/IEnrollment';
import { IInstructor } from '../../models/interfaces/IInstructor';
import { ILanguage } from '../../models/interfaces/ILanguage';
import { ILearningProgress } from '../../models/interfaces/ILearningProgress';
import { IStudent } from '../../models/interfaces/IStudent';
import { ICourseChapterContent } from '../../models/interfaces/ICourseChapterContent';
import { IFeedback } from '../../models/interfaces/IFeedback';
import { ICourseCategory } from '../../models/interfaces/ICourseCategory';
import { ICourseLevel } from '../../models/interfaces/ICourseLevel';
export declare class ContentTypeService extends BaseService {
    private readonly ContentTypeModel;
    constructor(ContentTypeModel: Model<IContentType>);
}
export declare class CourseService extends BaseService {
    private readonly courseModel;
    constructor(courseModel: Model<ICourse>);
}
export declare class CourseCategoryService extends BaseService {
    private readonly courseCategoryModel;
    constructor(courseCategoryModel: Model<ICourseCategory>);
}
export declare class CourseLevelService extends BaseService {
    private readonly courseLevelModel;
    constructor(courseLevelModel: Model<ICourseLevel>);
}
export declare class CourseChapterService extends BaseService {
    private readonly CourseChapterModel;
    constructor(CourseChapterModel: Model<ICourseChapter>);
    findByCourseId(course: any): import("mongoose").DocumentQuery<ICourseChapter[], ICourseChapter, {}>;
}
export declare class CourseChapterContentService extends BaseService {
    private readonly CourseChapterContentModel;
    constructor(CourseChapterContentModel: Model<ICourseChapterContent>);
    findByCourseChapter(courseChapter: any): import("mongoose").DocumentQuery<ICourseChapterContent[], ICourseChapterContent, {}>;
}
export declare class EnrollmentService extends BaseService {
    private readonly EnrollmentModel;
    constructor(EnrollmentModel: Model<IEnrollment>);
}
export declare class FeedbackService extends BaseService {
    private readonly FeedbackModel;
    constructor(FeedbackModel: Model<IFeedback>);
}
export declare class InstructorService extends BaseService {
    private readonly InstructorModel;
    constructor(InstructorModel: Model<IInstructor>);
}
export declare class LanguageService extends BaseService {
    private readonly LanguageModel;
    constructor(LanguageModel: Model<ILanguage>);
}
export declare class LearningProgressService extends BaseService {
    private readonly LearningProgressModel;
    constructor(LearningProgressModel: Model<ILearningProgress>);
}
export declare class StudentService extends BaseService {
    private readonly StudentModel;
    constructor(StudentModel: Model<IStudent>);
}
