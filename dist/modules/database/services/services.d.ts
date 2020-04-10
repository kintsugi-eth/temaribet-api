import { BaseService } from '../../../shared/base.service';
import { Model } from 'mongoose';
import { ICourse, IContentType, ICourseLevel, ICategory, ICourseChapter, ICourseChapterContent, IEnrollment, IFeedback, IInstructor, ILanguage, ILearningProgress, IStudent, IFile, IRole, IUser } from '..';
export declare class ContentTypeService extends BaseService {
    private readonly ContentTypeModel;
    constructor(ContentTypeModel: Model<IContentType>);
}
export declare class CourseService extends BaseService {
    private readonly courseModel;
    constructor(courseModel: Model<ICourse>);
}
export declare class CategoryService extends BaseService {
    private readonly categoryModel;
    constructor(categoryModel: Model<ICategory>);
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
export declare class FileService extends BaseService {
    private readonly FileModel;
    constructor(FileModel: Model<IFile>);
}
export declare class RoleService extends BaseService {
    private readonly RoleModel;
    constructor(RoleModel: Model<IRole>);
}
export declare class UserService extends BaseService {
    private readonly userModel;
    constructor(userModel: Model<IUser>);
    findByUsername(username: string): Promise<IUser>;
    create(user: any): Promise<IUser>;
}
